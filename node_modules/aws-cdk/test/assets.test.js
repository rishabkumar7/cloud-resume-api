"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("./util");
const assets_1 = require("../lib/assets");
const asset_manifest_builder_1 = require("../lib/util/asset-manifest-builder");
const environment_resources_1 = require("../lib/api/environment-resources");
const mock_sdk_1 = require("./util/mock-sdk");
const mock_toolkitinfo_1 = require("./util/mock-toolkitinfo");
let assets;
let envRegistry;
let envResources;
let toolkitMock;
beforeEach(() => {
    assets = new asset_manifest_builder_1.AssetManifestBuilder();
    envRegistry = new environment_resources_1.EnvironmentResourcesRegistry();
    const sdk = new mock_sdk_1.MockSdk();
    envResources = envRegistry.for({ account: '11111111', region: 'us-nowhere', name: 'aws://11111111/us-nowhere' }, sdk);
    toolkitMock = mock_toolkitinfo_1.MockToolkitInfo.setup();
});
afterEach(() => {
    toolkitMock.dispose();
});
describe('file assets', () => {
    test('convert to manifest and parameters', async () => {
        // GIVEN
        const ext = __filename.match(/\.([tj]s)$/)?.[1];
        const stack = stackWithAssets([
            {
                sourceHash: 'source-hash',
                path: __filename,
                id: 'SomeStackSomeResource4567',
                packaging: 'file',
                s3BucketParameter: 'BucketParameter',
                s3KeyParameter: 'KeyParameter',
                artifactHashParameter: 'ArtifactHashParameter',
            },
        ]);
        // WHEN
        const params = await (0, assets_1.addMetadataAssetsToManifest)(stack, assets, envResources);
        // THEN
        expect(params).toEqual({
            BucketParameter: 'MockToolkitBucketName',
            KeyParameter: `assets/SomeStackSomeResource4567/||source-hash.${ext}`,
            ArtifactHashParameter: 'source-hash',
        });
        expect(assets.toManifest('.').entries).toEqual([
            expect.objectContaining({
                destination: {
                    bucketName: 'MockToolkitBucketName',
                    objectKey: `assets/SomeStackSomeResource4567/source-hash.${ext}`,
                },
                source: {
                    packaging: 'file',
                    path: __filename,
                },
            }),
        ]);
    });
    test('hash and ID the same => only one path component', async () => {
        // GIVEN
        const ext = __filename.match(/\.([tj]s)$/)?.[1];
        const stack = stackWithAssets([
            {
                sourceHash: 'source-hash',
                path: __filename,
                id: 'source-hash',
                packaging: 'file',
                s3BucketParameter: 'BucketParameter',
                s3KeyParameter: 'KeyParameter',
                artifactHashParameter: 'ArtifactHashParameter',
            },
        ]);
        // WHEN
        await (0, assets_1.addMetadataAssetsToManifest)(stack, assets, envResources);
        // THEN
        expect(assets.toManifest('.').entries).toEqual([
            expect.objectContaining({
                destination: {
                    bucketName: 'MockToolkitBucketName',
                    objectKey: `assets/source-hash.${ext}`,
                },
            }),
        ]);
    });
    test('reuse', async () => {
        // GIVEN
        const stack = stackWithAssets([
            {
                path: __filename,
                id: 'SomeStackSomeResource4567',
                packaging: 'file',
                s3BucketParameter: 'BucketParameter',
                s3KeyParameter: 'KeyParameter',
                artifactHashParameter: 'ArtifactHashParameter',
                sourceHash: 'boom',
            },
        ]);
        // WHEN
        const params = await (0, assets_1.addMetadataAssetsToManifest)(stack, assets, envResources, ['SomeStackSomeResource4567']);
        // THEN
        expect(params).toEqual({});
        expect(assets.toManifest('.').entries).toEqual([]);
    });
});
describe('docker assets', () => {
    test('parameter and no repository name (old)', async () => {
        await (0, util_1.withMocked)(envResources, 'prepareEcrRepository', async () => {
            // GIVEN
            const stack = stackWithAssets([
                {
                    id: 'Stack:Construct/ABC123',
                    imageNameParameter: 'MyParameter',
                    packaging: 'container-image',
                    path: '/foo',
                    sourceHash: '0123456789abcdef',
                },
            ]);
            mockFn(envResources.prepareEcrRepository).mockResolvedValue({ repositoryUri: 'docker.uri' });
            // WHEN
            const params = await (0, assets_1.addMetadataAssetsToManifest)(stack, assets, envResources);
            // THEN
            expect(envResources.prepareEcrRepository).toHaveBeenCalledWith('cdk/stack-construct-abc123');
            expect(params).toEqual({
                MyParameter: 'docker.uri:0123456789abcdef',
            });
            expect(assets.toManifest('.').entries).toEqual([
                expect.objectContaining({
                    type: 'docker-image',
                    destination: {
                        imageTag: '0123456789abcdef',
                        repositoryName: 'cdk/stack-construct-abc123',
                    },
                    source: {
                        directory: '/foo',
                    },
                }),
            ]);
        });
    });
    test('if parameter is left out then repo and tag are required', async () => {
        // GIVEN
        const stack = stackWithAssets([
            {
                id: 'Stack:Construct/ABC123',
                packaging: 'container-image',
                path: '/foo',
                sourceHash: '0123456789abcdef',
            },
        ]);
        await expect((0, assets_1.addMetadataAssetsToManifest)(stack, assets, envResources)).rejects.toThrow('Invalid Docker image asset');
    });
    test('no parameter and repo/tag name (new)', async () => {
        await (0, util_1.withMocked)(envResources, 'prepareEcrRepository', async () => {
            // GIVEN
            const stack = stackWithAssets([
                {
                    id: 'Stack:Construct/ABC123',
                    repositoryName: 'reponame',
                    imageTag: '12345',
                    packaging: 'container-image',
                    path: '/foo',
                    sourceHash: '0123456789abcdef',
                },
            ]);
            mockFn(envResources.prepareEcrRepository).mockResolvedValue({ repositoryUri: 'docker.uri' });
            // WHEN
            const params = await (0, assets_1.addMetadataAssetsToManifest)(stack, assets, envResources);
            // THEN
            expect(envResources.prepareEcrRepository).toHaveBeenCalledWith('reponame');
            expect(params).toEqual({}); // No parameters!
            expect(assets.toManifest('.').entries).toEqual([
                expect.objectContaining({
                    type: 'docker-image',
                    destination: {
                        imageTag: '12345',
                        repositoryName: 'reponame',
                    },
                    source: {
                        directory: '/foo',
                    },
                }),
            ]);
        });
    });
    test('reuse', async () => {
        // GIVEN
        const stack = stackWithAssets([
            {
                path: __dirname,
                id: 'SomeStackSomeResource4567',
                packaging: 'container-image',
                imageNameParameter: 'asdf',
                sourceHash: 'source-hash',
            },
        ]);
        // WHEN
        const params = await (0, assets_1.addMetadataAssetsToManifest)(stack, assets, envResources, ['SomeStackSomeResource4567']);
        // THEN
        expect(params).toEqual({});
        expect(assets.toManifest('.').entries).toEqual([]);
    });
});
function stackWithAssets(assetEntries) {
    return (0, util_1.testStack)({
        stackName: 'SomeStack',
        assets: assetEntries,
        template: {
            Resources: {
                SomeResource: {
                    Type: 'AWS::Something::Something',
                },
            },
        },
    });
}
function mockFn(fn) {
    if (!jest.isMockFunction(fn)) {
        throw new Error(`Not a mock function: ${fn}`);
    }
    return fn;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhc3NldHMudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLGlDQUErQztBQUMvQywwQ0FBNEQ7QUFDNUQsK0VBQTBFO0FBQzFFLDRFQUFzRztBQUN0Ryw4Q0FBMEM7QUFDMUMsOERBQTBEO0FBRTFELElBQUksTUFBNEIsQ0FBQztBQUNqQyxJQUFJLFdBQXlDLENBQUM7QUFDOUMsSUFBSSxZQUFrQyxDQUFDO0FBQ3ZDLElBQUksV0FBcUQsQ0FBQztBQUMxRCxVQUFVLENBQUMsR0FBRyxFQUFFO0lBQ2QsTUFBTSxHQUFHLElBQUksNkNBQW9CLEVBQUUsQ0FBQztJQUNwQyxXQUFXLEdBQUcsSUFBSSxvREFBNEIsRUFBRSxDQUFDO0lBRWpELE1BQU0sR0FBRyxHQUFHLElBQUksa0JBQU8sRUFBRSxDQUFDO0lBQzFCLFlBQVksR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSwyQkFBMkIsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3RILFdBQVcsR0FBRyxrQ0FBZSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ3hDLENBQUMsQ0FBQyxDQUFDO0FBRUgsU0FBUyxDQUFDLEdBQUcsRUFBRTtJQUNiLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUN4QixDQUFDLENBQUMsQ0FBQztBQUVILFFBQVEsQ0FBQyxhQUFhLEVBQUUsR0FBRyxFQUFFO0lBQzNCLElBQUksQ0FBQyxvQ0FBb0MsRUFBRSxLQUFLLElBQUksRUFBRTtRQUNwRCxRQUFRO1FBQ1IsTUFBTSxHQUFHLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hELE1BQU0sS0FBSyxHQUFHLGVBQWUsQ0FBQztZQUM1QjtnQkFDRSxVQUFVLEVBQUUsYUFBYTtn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LENBQUMsQ0FBQztRQUU3RyxPQUFPO1FBQ1AsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUN0QixDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDckQsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQztBQUVILFNBQVMsZUFBZSxDQUFDLFlBQWtDO0lBQ3pELE9BQU8sSUFBQSxnQkFBUyxFQUFDO1FBQ2YsU0FBUyxFQUFFLFdBQVc7UUFDdEIsTUFBTSxFQUFFLFlBQVk7UUFDcEIsUUFBUSxFQUFFO1lBQ1IsU0FBUyxFQUFFO2dCQUNULFlBQVksRUFBRTtvQkFDWixJQUFJLEVBQUUsMkJBQTJCO2lCQUNsQzthQUNGO1NBQ0Y7S0FDRixDQUFDLENBQUM7QUFDTCxDQUFDO0FBRUQsU0FBUyxNQUFNLENBQWtDLEVBQUs7SUFDcEQsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUM3QixNQUFNLElBQUksS0FBSyxDQUFDLHdCQUF3QixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFDRCxPQUFPLEVBQUUsQ0FBQztBQUNaLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvb3JkZXIgKi9cbmltcG9ydCB7IEFzc2V0TWV0YWRhdGFFbnRyeSB9IGZyb20gJ0Bhd3MtY2RrL2Nsb3VkLWFzc2VtYmx5LXNjaGVtYSc7XG5pbXBvcnQgeyB0ZXN0U3RhY2ssIHdpdGhNb2NrZWQgfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IHsgYWRkTWV0YWRhdGFBc3NldHNUb01hbmlmZXN0IH0gZnJvbSAnLi4vbGliL2Fzc2V0cyc7XG5pbXBvcnQgeyBBc3NldE1hbmlmZXN0QnVpbGRlciB9IGZyb20gJy4uL2xpYi91dGlsL2Fzc2V0LW1hbmlmZXN0LWJ1aWxkZXInO1xuaW1wb3J0IHsgRW52aXJvbm1lbnRSZXNvdXJjZXMsIEVudmlyb25tZW50UmVzb3VyY2VzUmVnaXN0cnkgfSBmcm9tICcuLi9saWIvYXBpL2Vudmlyb25tZW50LXJlc291cmNlcyc7XG5pbXBvcnQgeyBNb2NrU2RrIH0gZnJvbSAnLi91dGlsL21vY2stc2RrJztcbmltcG9ydCB7IE1vY2tUb29sa2l0SW5mbyB9IGZyb20gJy4vdXRpbC9tb2NrLXRvb2xraXRpbmZvJztcblxubGV0IGFzc2V0czogQXNzZXRNYW5pZmVzdEJ1aWxkZXI7XG5sZXQgZW52UmVnaXN0cnk6IEVudmlyb25tZW50UmVzb3VyY2VzUmVnaXN0cnk7XG5sZXQgZW52UmVzb3VyY2VzOiBFbnZpcm9ubWVudFJlc291cmNlcztcbmxldCB0b29sa2l0TW9jazogUmV0dXJuVHlwZTx0eXBlb2YgTW9ja1Rvb2xraXRJbmZvLnNldHVwPjtcbmJlZm9yZUVhY2goKCkgPT4ge1xuICBhc3NldHMgPSBuZXcgQXNzZXRNYW5pZmVzdEJ1aWxkZXIoKTtcbiAgZW52UmVnaXN0cnkgPSBuZXcgRW52aXJvbm1lbnRSZXNvdXJjZXNSZWdpc3RyeSgpO1xuXG4gIGNvbnN0IHNkayA9IG5ldyBNb2NrU2RrKCk7XG4gIGVudlJlc291cmNlcyA9IGVudlJlZ2lzdHJ5LmZvcih7IGFjY291bnQ6ICcxMTExMTExMScsIHJlZ2lvbjogJ3VzLW5vd2hlcmUnLCBuYW1lOiAnYXdzOi8vMTExMTExMTEvdXMtbm93aGVyZScgfSwgc2RrKTtcbiAgdG9vbGtpdE1vY2sgPSBNb2NrVG9vbGtpdEluZm8uc2V0dXAoKTtcbn0pO1xuXG5hZnRlckVhY2goKCkgPT4ge1xuICB0b29sa2l0TW9jay5kaXNwb3NlKCk7XG59KTtcblxuZGVzY3JpYmUoJ2ZpbGUgYXNzZXRzJywgKCkgPT4ge1xuICB0ZXN0KCdjb252ZXJ0IHRvIG1hbmlmZXN0IGFuZCBwYXJhbWV0ZXJzJywgYXN5bmMgKCkgPT4ge1xuICAgIC8vIEdJVkVOXG4gICAgY29uc3QgZXh0ID0gX19maWxlbmFtZS5tYXRjaCgvXFwuKFt0al1zKSQvKT8uWzFdO1xuICAgIGNvbnN0IHN0YWNrID0gc3RhY2tXaXRoQXNzZXRzKFtcbiAgICAgIHtcbiAgICAgICAgc291cmNlSGFzaDogJ3NvdXJjZS1oYXNoJyxcbiAgICAgICAgcGF0aDogX19maWxlbmFtZSxcbiAgICAgICAgaWQ6ICdTb21lU3RhY2tTb21lUmVzb3VyY2U0NTY3JyxcbiAgICAgICAgcGFja2FnaW5nOiAnZmlsZScsXG4gICAgICAgIHMzQnVja2V0UGFyYW1ldGVyOiAnQnVja2V0UGFyYW1ldGVyJyxcbiAgICAgICAgczNLZXlQYXJhbWV0ZXI6ICdLZXlQYXJhbWV0ZXInLFxuICAgICAgICBhcnRpZmFjdEhhc2hQYXJhbWV0ZXI6ICdBcnRpZmFjdEhhc2hQYXJhbWV0ZXInLFxuICAgICAgfSxcbiAgICBdKTtcblxuICAgIC8vIFdIRU5cbiAgICBjb25zdCBwYXJhbXMgPSBhd2FpdCBhZGRNZXRhZGF0YUFzc2V0c1RvTWFuaWZlc3Qoc3RhY2ssIGFzc2V0cywgZW52UmVzb3VyY2VzKTtcblxuICAgIC8vIFRIRU5cbiAgICBleHBlY3QocGFyYW1zKS50b0VxdWFsKHtcbiAgICAgIEJ1Y2tldFBhcmFtZXRlcjogJ01vY2tUb29sa2l0QnVja2V0TmFtZScsXG4gICAgICBLZXlQYXJhbWV0ZXI6IGBhc3NldHMvU29tZVN0YWNrU29tZVJlc291cmNlNDU2Ny98fHNvdXJjZS1oYXNoLiR7ZXh0fWAsXG4gICAgICBBcnRpZmFjdEhhc2hQYXJhbWV0ZXI6ICdzb3VyY2UtaGFzaCcsXG4gICAgfSk7XG5cbiAgICBleHBlY3QoYXNzZXRzLnRvTWFuaWZlc3QoJy4nKS5lbnRyaWVzKS50b0VxdWFsKFtcbiAgICAgIGV4cGVjdC5vYmplY3RDb250YWluaW5nKHtcbiAgICAgICAgZGVzdGluYXRpb246IHtcbiAgICAgICAgICBidWNrZXROYW1lOiAnTW9ja1Rvb2xraXRCdWNrZXROYW1lJyxcbiAgICAgICAgICBvYmplY3RLZXk6IGBhc3NldHMvU29tZVN0YWNrU29tZVJlc291cmNlNDU2Ny9zb3VyY2UtaGFzaC4ke2V4dH1gLFxuICAgICAgICB9LFxuICAgICAgICBzb3VyY2U6IHtcbiAgICAgICAgICBwYWNrYWdpbmc6ICdmaWxlJyxcbiAgICAgICAgICBwYXRoOiBfX2ZpbGVuYW1lLFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgXSk7XG4gIH0pO1xuXG4gIHRlc3QoJ2hhc2ggYW5kIElEIHRoZSBzYW1lID0+IG9ubHkgb25lIHBhdGggY29tcG9uZW50JywgYXN5bmMgKCkgPT4ge1xuICAgIC8vIEdJVkVOXG4gICAgY29uc3QgZXh0ID0gX19maWxlbmFtZS5tYXRjaCgvXFwuKFt0al1zKSQvKT8uWzFdO1xuICAgIGNvbnN0IHN0YWNrID0gc3RhY2tXaXRoQXNzZXRzKFtcbiAgICAgIHtcbiAgICAgICAgc291cmNlSGFzaDogJ3NvdXJjZS1oYXNoJyxcbiAgICAgICAgcGF0aDogX19maWxlbmFtZSxcbiAgICAgICAgaWQ6ICdzb3VyY2UtaGFzaCcsXG4gICAgICAgIHBhY2thZ2luZzogJ2ZpbGUnLFxuICAgICAgICBzM0J1Y2tldFBhcmFtZXRlcjogJ0J1Y2tldFBhcmFtZXRlcicsXG4gICAgICAgIHMzS2V5UGFyYW1ldGVyOiAnS2V5UGFyYW1ldGVyJyxcbiAgICAgICAgYXJ0aWZhY3RIYXNoUGFyYW1ldGVyOiAnQXJ0aWZhY3RIYXNoUGFyYW1ldGVyJyxcbiAgICAgIH0sXG4gICAgXSk7XG5cbiAgICAvLyBXSEVOXG4gICAgYXdhaXQgYWRkTWV0YWRhdGFBc3NldHNUb01hbmlmZXN0KHN0YWNrLCBhc3NldHMsIGVudlJlc291cmNlcyk7XG5cbiAgICAvLyBUSEVOXG4gICAgZXhwZWN0KGFzc2V0cy50b01hbmlmZXN0KCcuJykuZW50cmllcykudG9FcXVhbChbXG4gICAgICBleHBlY3Qub2JqZWN0Q29udGFpbmluZyh7XG4gICAgICAgIGRlc3RpbmF0aW9uOiB7XG4gICAgICAgICAgYnVja2V0TmFtZTogJ01vY2tUb29sa2l0QnVja2V0TmFtZScsXG4gICAgICAgICAgb2JqZWN0S2V5OiBgYXNzZXRzL3NvdXJjZS1oYXNoLiR7ZXh0fWAsXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICBdKTtcbiAgfSk7XG5cbiAgdGVzdCgncmV1c2UnLCBhc3luYyAoKSA9PiB7XG4gICAgLy8gR0lWRU5cbiAgICBjb25zdCBzdGFjayA9IHN0YWNrV2l0aEFzc2V0cyhbXG4gICAgICB7XG4gICAgICAgIHBhdGg6IF9fZmlsZW5hbWUsXG4gICAgICAgIGlkOiAnU29tZVN0YWNrU29tZVJlc291cmNlNDU2NycsXG4gICAgICAgIHBhY2thZ2luZzogJ2ZpbGUnLFxuICAgICAgICBzM0J1Y2tldFBhcmFtZXRlcjogJ0J1Y2tldFBhcmFtZXRlcicsXG4gICAgICAgIHMzS2V5UGFyYW1ldGVyOiAnS2V5UGFyYW1ldGVyJyxcbiAgICAgICAgYXJ0aWZhY3RIYXNoUGFyYW1ldGVyOiAnQXJ0aWZhY3RIYXNoUGFyYW1ldGVyJyxcbiAgICAgICAgc291cmNlSGFzaDogJ2Jvb20nLFxuICAgICAgfSxcbiAgICBdKTtcblxuICAgIC8vIFdIRU5cbiAgICBjb25zdCBwYXJhbXMgPSBhd2FpdCBhZGRNZXRhZGF0YUFzc2V0c1RvTWFuaWZlc3Qoc3RhY2ssIGFzc2V0cywgZW52UmVzb3VyY2VzLCBbJ1NvbWVTdGFja1NvbWVSZXNvdXJjZTQ1NjcnXSk7XG5cbiAgICAvLyBUSEVOXG4gICAgZXhwZWN0KHBhcmFtcykudG9FcXVhbCh7XG4gICAgfSk7XG5cbiAgICBleHBlY3QoYXNzZXRzLnRvTWFuaWZlc3QoJy4nKS5lbnRyaWVzKS50b0VxdWFsKFtdKTtcbiAgfSk7XG59KTtcblxuZGVzY3JpYmUoJ2RvY2tlciBhc3NldHMnLCAoKSA9PiB7XG4gIHRlc3QoJ3BhcmFtZXRlciBhbmQgbm8gcmVwb3NpdG9yeSBuYW1lIChvbGQpJywgYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IHdpdGhNb2NrZWQoZW52UmVzb3VyY2VzLCAncHJlcGFyZUVjclJlcG9zaXRvcnknLCBhc3luYyAoKSA9PiB7XG4gICAgICAvLyBHSVZFTlxuICAgICAgY29uc3Qgc3RhY2sgPSBzdGFja1dpdGhBc3NldHMoW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6ICdTdGFjazpDb25zdHJ1Y3QvQUJDMTIzJyxcbiAgICAgICAgICBpbWFnZU5hbWVQYXJhbWV0ZXI6ICdNeVBhcmFtZXRlcicsXG4gICAgICAgICAgcGFja2FnaW5nOiAnY29udGFpbmVyLWltYWdlJyxcbiAgICAgICAgICBwYXRoOiAnL2ZvbycsXG4gICAgICAgICAgc291cmNlSGFzaDogJzAxMjM0NTY3ODlhYmNkZWYnLFxuICAgICAgICB9LFxuICAgICAgXSk7XG4gICAgICBtb2NrRm4oZW52UmVzb3VyY2VzLnByZXBhcmVFY3JSZXBvc2l0b3J5KS5tb2NrUmVzb2x2ZWRWYWx1ZSh7IHJlcG9zaXRvcnlVcmk6ICdkb2NrZXIudXJpJyB9KTtcblxuICAgICAgLy8gV0hFTlxuICAgICAgY29uc3QgcGFyYW1zID0gYXdhaXQgYWRkTWV0YWRhdGFBc3NldHNUb01hbmlmZXN0KHN0YWNrLCBhc3NldHMsIGVudlJlc291cmNlcyk7XG5cbiAgICAgIC8vIFRIRU5cbiAgICAgIGV4cGVjdChlbnZSZXNvdXJjZXMucHJlcGFyZUVjclJlcG9zaXRvcnkpLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKCdjZGsvc3RhY2stY29uc3RydWN0LWFiYzEyMycpO1xuICAgICAgZXhwZWN0KHBhcmFtcykudG9FcXVhbCh7XG4gICAgICAgIE15UGFyYW1ldGVyOiAnZG9ja2VyLnVyaTowMTIzNDU2Nzg5YWJjZGVmJyxcbiAgICAgIH0pO1xuICAgICAgZXhwZWN0KGFzc2V0cy50b01hbmlmZXN0KCcuJykuZW50cmllcykudG9FcXVhbChbXG4gICAgICAgIGV4cGVjdC5vYmplY3RDb250YWluaW5nKHtcbiAgICAgICAgICB0eXBlOiAnZG9ja2VyLWltYWdlJyxcbiAgICAgICAgICBkZXN0aW5hdGlvbjoge1xuICAgICAgICAgICAgaW1hZ2VUYWc6ICcwMTIzNDU2Nzg5YWJjZGVmJyxcbiAgICAgICAgICAgIHJlcG9zaXRvcnlOYW1lOiAnY2RrL3N0YWNrLWNvbnN0cnVjdC1hYmMxMjMnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc291cmNlOiB7XG4gICAgICAgICAgICBkaXJlY3Rvcnk6ICcvZm9vJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9KSxcbiAgICAgIF0pO1xuICAgIH0pO1xuICB9KTtcblxuICB0ZXN0KCdpZiBwYXJhbWV0ZXIgaXMgbGVmdCBvdXQgdGhlbiByZXBvIGFuZCB0YWcgYXJlIHJlcXVpcmVkJywgYXN5bmMgKCkgPT4ge1xuICAgIC8vIEdJVkVOXG4gICAgY29uc3Qgc3RhY2sgPSBzdGFja1dpdGhBc3NldHMoW1xuICAgICAge1xuICAgICAgICBpZDogJ1N0YWNrOkNvbnN0cnVjdC9BQkMxMjMnLFxuICAgICAgICBwYWNrYWdpbmc6ICdjb250YWluZXItaW1hZ2UnLFxuICAgICAgICBwYXRoOiAnL2ZvbycsXG4gICAgICAgIHNvdXJjZUhhc2g6ICcwMTIzNDU2Nzg5YWJjZGVmJyxcbiAgICAgIH0sXG4gICAgXSk7XG5cbiAgICBhd2FpdCBleHBlY3QoYWRkTWV0YWRhdGFBc3NldHNUb01hbmlmZXN0KHN0YWNrLCBhc3NldHMsIGVudlJlc291cmNlcykpLnJlamVjdHMudG9UaHJvdygnSW52YWxpZCBEb2NrZXIgaW1hZ2UgYXNzZXQnKTtcbiAgfSk7XG5cbiAgdGVzdCgnbm8gcGFyYW1ldGVyIGFuZCByZXBvL3RhZyBuYW1lIChuZXcpJywgYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IHdpdGhNb2NrZWQoZW52UmVzb3VyY2VzLCAncHJlcGFyZUVjclJlcG9zaXRvcnknLCBhc3luYyAoKSA9PiB7XG4gICAgICAvLyBHSVZFTlxuICAgICAgY29uc3Qgc3RhY2sgPSBzdGFja1dpdGhBc3NldHMoW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6ICdTdGFjazpDb25zdHJ1Y3QvQUJDMTIzJyxcbiAgICAgICAgICByZXBvc2l0b3J5TmFtZTogJ3JlcG9uYW1lJyxcbiAgICAgICAgICBpbWFnZVRhZzogJzEyMzQ1JyxcbiAgICAgICAgICBwYWNrYWdpbmc6ICdjb250YWluZXItaW1hZ2UnLFxuICAgICAgICAgIHBhdGg6ICcvZm9vJyxcbiAgICAgICAgICBzb3VyY2VIYXNoOiAnMDEyMzQ1Njc4OWFiY2RlZicsXG4gICAgICAgIH0sXG4gICAgICBdKTtcbiAgICAgIG1vY2tGbihlbnZSZXNvdXJjZXMucHJlcGFyZUVjclJlcG9zaXRvcnkpLm1vY2tSZXNvbHZlZFZhbHVlKHsgcmVwb3NpdG9yeVVyaTogJ2RvY2tlci51cmknIH0pO1xuXG4gICAgICAvLyBXSEVOXG4gICAgICBjb25zdCBwYXJhbXMgPSBhd2FpdCBhZGRNZXRhZGF0YUFzc2V0c1RvTWFuaWZlc3Qoc3RhY2ssIGFzc2V0cywgZW52UmVzb3VyY2VzKTtcblxuICAgICAgLy8gVEhFTlxuICAgICAgZXhwZWN0KGVudlJlc291cmNlcy5wcmVwYXJlRWNyUmVwb3NpdG9yeSkudG9IYXZlQmVlbkNhbGxlZFdpdGgoJ3JlcG9uYW1lJyk7XG4gICAgICBleHBlY3QocGFyYW1zKS50b0VxdWFsKHt9KTsgLy8gTm8gcGFyYW1ldGVycyFcbiAgICAgIGV4cGVjdChhc3NldHMudG9NYW5pZmVzdCgnLicpLmVudHJpZXMpLnRvRXF1YWwoW1xuICAgICAgICBleHBlY3Qub2JqZWN0Q29udGFpbmluZyh7XG4gICAgICAgICAgdHlwZTogJ2RvY2tlci1pbWFnZScsXG4gICAgICAgICAgZGVzdGluYXRpb246IHtcbiAgICAgICAgICAgIGltYWdlVGFnOiAnMTIzNDUnLFxuICAgICAgICAgICAgcmVwb3NpdG9yeU5hbWU6ICdyZXBvbmFtZScsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzb3VyY2U6IHtcbiAgICAgICAgICAgIGRpcmVjdG9yeTogJy9mb28nLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pLFxuICAgICAgXSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIHRlc3QoJ3JldXNlJywgYXN5bmMgKCkgPT4ge1xuICAgIC8vIEdJVkVOXG4gICAgY29uc3Qgc3RhY2sgPSBzdGFja1dpdGhBc3NldHMoW1xuICAgICAge1xuICAgICAgICBwYXRoOiBfX2Rpcm5hbWUsXG4gICAgICAgIGlkOiAnU29tZVN0YWNrU29tZVJlc291cmNlNDU2NycsXG4gICAgICAgIHBhY2thZ2luZzogJ2NvbnRhaW5lci1pbWFnZScsXG4gICAgICAgIGltYWdlTmFtZVBhcmFtZXRlcjogJ2FzZGYnLFxuICAgICAgICBzb3VyY2VIYXNoOiAnc291cmNlLWhhc2gnLFxuICAgICAgfSxcbiAgICBdKTtcblxuICAgIC8vIFdIRU5cbiAgICBjb25zdCBwYXJhbXMgPSBhd2FpdCBhZGRNZXRhZGF0YUFzc2V0c1RvTWFuaWZlc3Qoc3RhY2ssIGFzc2V0cywgZW52UmVzb3VyY2VzLCBbJ1NvbWVTdGFja1NvbWVSZXNvdXJjZTQ1NjcnXSk7XG5cbiAgICAvLyBUSEVOXG4gICAgZXhwZWN0KHBhcmFtcykudG9FcXVhbCh7XG4gICAgfSk7XG5cbiAgICBleHBlY3QoYXNzZXRzLnRvTWFuaWZlc3QoJy4nKS5lbnRyaWVzKS50b0VxdWFsKFtdKTtcbiAgfSk7XG59KTtcblxuZnVuY3Rpb24gc3RhY2tXaXRoQXNzZXRzKGFzc2V0RW50cmllczogQXNzZXRNZXRhZGF0YUVudHJ5W10pIHtcbiAgcmV0dXJuIHRlc3RTdGFjayh7XG4gICAgc3RhY2tOYW1lOiAnU29tZVN0YWNrJyxcbiAgICBhc3NldHM6IGFzc2V0RW50cmllcyxcbiAgICB0ZW1wbGF0ZToge1xuICAgICAgUmVzb3VyY2VzOiB7XG4gICAgICAgIFNvbWVSZXNvdXJjZToge1xuICAgICAgICAgIFR5cGU6ICdBV1M6OlNvbWV0aGluZzo6U29tZXRoaW5nJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG1vY2tGbjxGIGV4dGVuZHMgKC4uLnhzOiBhbnlbXSkgPT4gYW55PihmbjogRik6IGplc3QuTW9jazxSZXR1cm5UeXBlPEY+PiB7XG4gIGlmICghamVzdC5pc01vY2tGdW5jdGlvbihmbikpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYE5vdCBhIG1vY2sgZnVuY3Rpb246ICR7Zm59YCk7XG4gIH1cbiAgcmV0dXJuIGZuO1xufVxuIl19