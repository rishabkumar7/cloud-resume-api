"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cxschema = require("@aws-cdk/cloud-assembly-schema");
;
const util_1 = require("./util");
const bootstrap_1 = require("../lib/api/bootstrap");
const cdk_toolkit_1 = require("../lib/cdk-toolkit");
const list_stacks_1 = require("../lib/list-stacks");
describe('list', () => {
    let cloudFormation;
    let bootstrapper;
    beforeEach(() => {
        jest.resetAllMocks();
        bootstrapper = (0, util_1.instanceMockFrom)(bootstrap_1.Bootstrapper);
        bootstrapper.bootstrapEnvironment.mockResolvedValue({ noOp: false, outputs: {} });
    });
    test('stacks with no dependencies', async () => {
        let cloudExecutable = new util_1.MockCloudExecutable({
            stacks: [
                MockStack.MOCK_STACK_A,
                {
                    stackName: 'Test-Stack-B',
                    template: { Resources: { TemplateName: 'Test-Stack-B' } },
                    env: 'aws://123456789012/bermuda-triangle-1',
                    metadata: {
                        '/Test-Stack-B': [
                            {
                                type: cxschema.ArtifactMetadataEntryType.STACK_TAGS,
                            },
                        ],
                    },
                },
            ],
        });
        // GIVEN
        const toolkit = new cdk_toolkit_1.CdkToolkit({
            cloudExecutable,
            configuration: cloudExecutable.configuration,
            sdkProvider: cloudExecutable.sdkProvider,
            deployments: cloudFormation,
        });
        // WHEN
        const workflow = await (0, list_stacks_1.listStacks)(toolkit, { selectors: ['Test-Stack-A', 'Test-Stack-B'] });
        // THEN
        expect(JSON.stringify(workflow)).toEqual(JSON.stringify([{
                id: 'Test-Stack-A',
                name: 'Test-Stack-A',
                environment: {
                    account: '123456789012',
                    region: 'bermuda-triangle-1',
                    name: 'aws://123456789012/bermuda-triangle-1',
                },
                dependencies: [],
            },
            {
                id: 'Test-Stack-B',
                name: 'Test-Stack-B',
                environment: {
                    account: '123456789012',
                    region: 'bermuda-triangle-1',
                    name: 'aws://123456789012/bermuda-triangle-1',
                },
                dependencies: [],
            }]));
    });
    test('stacks with dependent stacks', async () => {
        let cloudExecutable = new util_1.MockCloudExecutable({
            stacks: [
                MockStack.MOCK_STACK_A,
                {
                    stackName: 'Test-Stack-B',
                    template: { Resources: { TemplateName: 'Test-Stack-B' } },
                    env: 'aws://123456789012/bermuda-triangle-1',
                    metadata: {
                        '/Test-Stack-B': [
                            {
                                type: cxschema.ArtifactMetadataEntryType.STACK_TAGS,
                            },
                        ],
                    },
                    depends: ['Test-Stack-A'],
                },
            ],
        });
        // GIVEN
        const toolkit = new cdk_toolkit_1.CdkToolkit({
            cloudExecutable,
            configuration: cloudExecutable.configuration,
            sdkProvider: cloudExecutable.sdkProvider,
            deployments: cloudFormation,
        });
        // WHEN
        const workflow = await (0, list_stacks_1.listStacks)(toolkit, { selectors: ['Test-Stack-A', 'Test-Stack-B'] });
        // THEN
        expect(JSON.stringify(workflow)).toEqual(JSON.stringify([{
                id: 'Test-Stack-A',
                name: 'Test-Stack-A',
                environment: {
                    account: '123456789012',
                    region: 'bermuda-triangle-1',
                    name: 'aws://123456789012/bermuda-triangle-1',
                },
                dependencies: [],
            },
            {
                id: 'Test-Stack-B',
                name: 'Test-Stack-B',
                environment: {
                    account: '123456789012',
                    region: 'bermuda-triangle-1',
                    name: 'aws://123456789012/bermuda-triangle-1',
                },
                dependencies: [{
                        id: 'Test-Stack-A',
                        dependencies: [],
                    }],
            }]));
    });
    // In the context where we have a display name set to hieraricalId/stackName
    // we would need to pass in the displayName to list the stacks.
    test('stacks with dependent stacks and have display name set to hieraricalId/stackName', async () => {
        let cloudExecutable = new util_1.MockCloudExecutable({
            stacks: [
                MockStack.MOCK_STACK_A,
                {
                    stackName: 'Test-Stack-B',
                    template: { Resources: { TemplateName: 'Test-Stack-B' } },
                    env: 'aws://123456789012/bermuda-triangle-1',
                    metadata: {
                        '/Test-Stack-B': [
                            {
                                type: cxschema.ArtifactMetadataEntryType.STACK_TAGS,
                            },
                        ],
                    },
                    depends: ['Test-Stack-A'],
                    displayName: 'Test-Stack-A/Test-Stack-B',
                },
            ],
        });
        // GIVEN
        const toolkit = new cdk_toolkit_1.CdkToolkit({
            cloudExecutable,
            configuration: cloudExecutable.configuration,
            sdkProvider: cloudExecutable.sdkProvider,
            deployments: cloudFormation,
        });
        // WHEN
        const workflow = await (0, list_stacks_1.listStacks)(toolkit, { selectors: ['Test-Stack-A', 'Test-Stack-A/Test-Stack-B'] });
        // THEN
        expect(JSON.stringify(workflow)).toEqual(JSON.stringify([{
                id: 'Test-Stack-A',
                name: 'Test-Stack-A',
                environment: {
                    account: '123456789012',
                    region: 'bermuda-triangle-1',
                    name: 'aws://123456789012/bermuda-triangle-1',
                },
                dependencies: [],
            },
            {
                id: 'Test-Stack-A/Test-Stack-B',
                name: 'Test-Stack-B',
                environment: {
                    account: '123456789012',
                    region: 'bermuda-triangle-1',
                    name: 'aws://123456789012/bermuda-triangle-1',
                },
                dependencies: [{
                        id: 'Test-Stack-A',
                        dependencies: [],
                    }],
            }]));
    });
    test('stacks with display names and have nested dependencies', async () => {
        let cloudExecutable = new util_1.MockCloudExecutable({
            stacks: [
                MockStack.MOCK_STACK_A,
                {
                    stackName: 'Test-Stack-B',
                    template: { Resources: { TemplateName: 'Test-Stack-B' } },
                    env: 'aws://123456789012/bermuda-triangle-1',
                    metadata: {
                        '/Test-Stack-B': [
                            {
                                type: cxschema.ArtifactMetadataEntryType.STACK_TAGS,
                            },
                        ],
                    },
                    depends: ['Test-Stack-A'],
                    displayName: 'Test-Stack-A/Test-Stack-B',
                },
                {
                    stackName: 'Test-Stack-C',
                    template: { Resources: { TemplateName: 'Test-Stack-C' } },
                    env: 'aws://123456789012/bermuda-triangle-1',
                    metadata: {
                        '/Test-Stack-C': [
                            {
                                type: cxschema.ArtifactMetadataEntryType.STACK_TAGS,
                            },
                        ],
                    },
                    depends: ['Test-Stack-B'],
                    displayName: 'Test-Stack-A/Test-Stack-B/Test-Stack-C',
                },
            ],
        });
        // GIVEN
        const toolkit = new cdk_toolkit_1.CdkToolkit({
            cloudExecutable,
            configuration: cloudExecutable.configuration,
            sdkProvider: cloudExecutable.sdkProvider,
            deployments: cloudFormation,
        });
        // WHEN
        const workflow = await (0, list_stacks_1.listStacks)(toolkit, { selectors: ['Test-Stack-A', 'Test-Stack-A/Test-Stack-B', 'Test-Stack-A/Test-Stack-B/Test-Stack-C'] });
        // THEN
        expect(JSON.stringify(workflow)).toEqual(JSON.stringify([{
                id: 'Test-Stack-A',
                name: 'Test-Stack-A',
                environment: {
                    account: '123456789012',
                    region: 'bermuda-triangle-1',
                    name: 'aws://123456789012/bermuda-triangle-1',
                },
                dependencies: [],
            },
            {
                id: 'Test-Stack-A/Test-Stack-B',
                name: 'Test-Stack-B',
                environment: {
                    account: '123456789012',
                    region: 'bermuda-triangle-1',
                    name: 'aws://123456789012/bermuda-triangle-1',
                },
                dependencies: [{
                        id: 'Test-Stack-A',
                        dependencies: [],
                    }],
            },
            {
                id: 'Test-Stack-A/Test-Stack-B/Test-Stack-C',
                name: 'Test-Stack-C',
                environment: {
                    account: '123456789012',
                    region: 'bermuda-triangle-1',
                    name: 'aws://123456789012/bermuda-triangle-1',
                },
                dependencies: [{
                        id: 'Test-Stack-A/Test-Stack-B',
                        dependencies: [{
                                id: 'Test-Stack-A',
                                dependencies: [],
                            }],
                    }],
            }]));
    });
    test('stacks with nested dependencies', async () => {
        let cloudExecutable = new util_1.MockCloudExecutable({
            stacks: [
                MockStack.MOCK_STACK_A,
                {
                    stackName: 'Test-Stack-B',
                    template: { Resources: { TemplateName: 'Test-Stack-B' } },
                    env: 'aws://123456789012/bermuda-triangle-1',
                    metadata: {
                        '/Test-Stack-B': [
                            {
                                type: cxschema.ArtifactMetadataEntryType.STACK_TAGS,
                            },
                        ],
                    },
                    depends: ['Test-Stack-A'],
                },
                {
                    stackName: 'Test-Stack-C',
                    template: { Resources: { TemplateName: 'Test-Stack-C' } },
                    env: 'aws://123456789012/bermuda-triangle-1',
                    metadata: {
                        '/Test-Stack-C': [
                            {
                                type: cxschema.ArtifactMetadataEntryType.STACK_TAGS,
                            },
                        ],
                    },
                    depends: ['Test-Stack-B'],
                },
            ],
        });
        // GIVEN
        const toolkit = new cdk_toolkit_1.CdkToolkit({
            cloudExecutable,
            configuration: cloudExecutable.configuration,
            sdkProvider: cloudExecutable.sdkProvider,
            deployments: cloudFormation,
        });
        // WHEN
        const workflow = await (0, list_stacks_1.listStacks)(toolkit, { selectors: ['Test-Stack-A', 'Test-Stack-B', 'Test-Stack-C'] });
        // THEN
        expect(JSON.stringify(workflow)).toEqual(JSON.stringify([{
                id: 'Test-Stack-A',
                name: 'Test-Stack-A',
                environment: {
                    account: '123456789012',
                    region: 'bermuda-triangle-1',
                    name: 'aws://123456789012/bermuda-triangle-1',
                },
                dependencies: [],
            },
            {
                id: 'Test-Stack-B',
                name: 'Test-Stack-B',
                environment: {
                    account: '123456789012',
                    region: 'bermuda-triangle-1',
                    name: 'aws://123456789012/bermuda-triangle-1',
                },
                dependencies: [{
                        id: 'Test-Stack-A',
                        dependencies: [],
                    }],
            },
            {
                id: 'Test-Stack-C',
                name: 'Test-Stack-C',
                environment: {
                    account: '123456789012',
                    region: 'bermuda-triangle-1',
                    name: 'aws://123456789012/bermuda-triangle-1',
                },
                dependencies: [{
                        id: 'Test-Stack-B',
                        dependencies: [{
                                id: 'Test-Stack-A',
                                dependencies: [],
                            }],
                    }],
            }]));
    });
    // In the context of stacks with cross-stack or cross-region references,
    // the dependency mechanism is responsible for appropriately applying dependencies at the correct hierarchy level,
    // typically at the top-level stacks.
    // This involves handling the establishment of cross-references between stacks or nested stacks
    // and generating assets for nested stack templates as necessary.
    test('stacks with cross stack referencing', async () => {
        let cloudExecutable = new util_1.MockCloudExecutable({
            stacks: [
                {
                    stackName: 'Test-Stack-A',
                    template: {
                        Resources: {
                            MyBucket1Reference: {
                                Type: 'AWS::CloudFormation::Stack',
                                Properties: {
                                    TemplateURL: 'XXXXXXXXXXXXXXXXXXXXXXXXX',
                                    Parameters: {
                                        BucketName: { 'Fn::GetAtt': ['MyBucket1', 'Arn'] },
                                    },
                                },
                            },
                        },
                    },
                    env: 'aws://123456789012/bermuda-triangle-1',
                    metadata: {
                        '/Test-Stack-A': [
                            {
                                type: cxschema.ArtifactMetadataEntryType.STACK_TAGS,
                            },
                        ],
                    },
                    depends: ['Test-Stack-C'],
                },
                MockStack.MOCK_STACK_C,
            ],
        });
        // GIVEN
        const toolkit = new cdk_toolkit_1.CdkToolkit({
            cloudExecutable,
            configuration: cloudExecutable.configuration,
            sdkProvider: cloudExecutable.sdkProvider,
            deployments: cloudFormation,
        });
        // WHEN
        const workflow = await (0, list_stacks_1.listStacks)(toolkit, { selectors: ['Test-Stack-A', 'Test-Stack-C'] });
        // THEN
        expect(JSON.stringify(workflow)).toEqual(JSON.stringify([{
                id: 'Test-Stack-C',
                name: 'Test-Stack-C',
                environment: {
                    account: '123456789012',
                    region: 'bermuda-triangle-1',
                    name: 'aws://123456789012/bermuda-triangle-1',
                },
                dependencies: [],
            },
            {
                id: 'Test-Stack-A',
                name: 'Test-Stack-A',
                environment: {
                    account: '123456789012',
                    region: 'bermuda-triangle-1',
                    name: 'aws://123456789012/bermuda-triangle-1',
                },
                dependencies: [{
                        id: 'Test-Stack-C',
                        dependencies: [],
                    }],
            }]));
    });
    test('stacks with circular dependencies should error out', async () => {
        let cloudExecutable = new util_1.MockCloudExecutable({
            stacks: [
                {
                    stackName: 'Test-Stack-A',
                    template: { Resources: { TemplateName: 'Test-Stack-A' } },
                    env: 'aws://123456789012/bermuda-triangle-1',
                    metadata: {
                        '/Test-Stack-A': [
                            {
                                type: cxschema.ArtifactMetadataEntryType.STACK_TAGS,
                            },
                        ],
                    },
                    depends: ['Test-Stack-B'],
                },
                {
                    stackName: 'Test-Stack-B',
                    template: { Resources: { TemplateName: 'Test-Stack-B' } },
                    env: 'aws://123456789012/bermuda-triangle-1',
                    metadata: {
                        '/Test-Stack-B': [
                            {
                                type: cxschema.ArtifactMetadataEntryType.STACK_TAGS,
                            },
                        ],
                    },
                    depends: ['Test-Stack-A'],
                },
            ],
        });
        // GIVEN
        const toolkit = new cdk_toolkit_1.CdkToolkit({
            cloudExecutable,
            configuration: cloudExecutable.configuration,
            sdkProvider: cloudExecutable.sdkProvider,
            deployments: cloudFormation,
        });
        // WHEN
        await expect(() => (0, list_stacks_1.listStacks)(toolkit, { selectors: ['Test-Stack-A', 'Test-Stack-B'] })).rejects.toThrow('Could not determine ordering');
    });
});
class MockStack {
}
MockStack.MOCK_STACK_A = {
    stackName: 'Test-Stack-A',
    template: { Resources: { TemplateName: 'Test-Stack-A' } },
    env: 'aws://123456789012/bermuda-triangle-1',
    metadata: {
        '/Test-Stack-A': [
            {
                type: cxschema.ArtifactMetadataEntryType.STACK_TAGS,
            },
        ],
    },
};
MockStack.MOCK_STACK_C = {
    stackName: 'Test-Stack-C',
    template: {
        Resources: {
            MyBucket1: {
                Type: 'AWS::S3::Bucket',
                Properties: {
                    AccessControl: 'PublicRead',
                },
                DeletionPolicy: 'Retain',
            },
        },
    },
    env: 'aws://123456789012/bermuda-triangle-1',
    metadata: {
        '/Test-Stack-C': [
            {
                type: cxschema.ArtifactMetadataEntryType.STACK_TAGS,
            },
        ],
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1zdGFja3MudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3Qtc3RhY2tzLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyREFBMkQ7QUFBQSxDQUFDO0FBQzVELGlDQUFrRjtBQUNsRixvREFBb0Q7QUFFcEQsb0RBQWdEO0FBQ2hELG9EQUFnRDtBQUVoRCxRQUFRLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRTtJQUNwQixJQUFJLGNBQXdDLENBQUM7SUFDN0MsSUFBSSxZQUF1QyxDQUFDO0lBRTVDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7UUFDZCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFFckIsWUFBWSxHQUFHLElBQUEsdUJBQWdCLEVBQUMsd0JBQVksQ0FBQyxDQUFDO1FBQzlDLFlBQVksQ0FBQyxvQkFBb0IsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBUyxDQUFDLENBQUM7SUFDM0YsQ0FBQyxDQUFDLENBQUM7SUFFSCxJQUFJLENBQUMsNkJBQTZCLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDN0MsSUFBSSxlQUFlLEdBQUcsSUFBSSwwQkFBbUIsQ0FBQztZQUM1QyxNQUFNLEVBQUU7Z0JBQ04sU0FBUyxDQUFDLFlBQVk7Z0JBQ3RCO29CQUNFLFNBQVMsRUFBRSxjQUFjO29CQUN6QixRQUFRLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLEVBQUU7b0JBQ3pELEdBQUcsRUFBRSx1Q0FBdUM7b0JBQzVDLFFBQVEsRUFBRTt3QkFDUixlQUFlLEVBQUU7NEJBQ2Y7Z0NBQ0UsSUFBSSxFQUFFLFFBQVEsQ0FBQyx5QkFBeUIsQ0FBQyxVQUFVOzZCQUNwRDt5QkFDRjtxQkFDRjtpQkFDRjthQUNGO1NBQ0YsQ0FBQyxDQUFDO1FBQ0gsUUFBUTtRQUNSLE1BQU0sT0FBTyxHQUFHLElBQUksd0JBQVUsQ0FBQztZQUM3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QUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDO0FBRUgsTUFBTSxTQUFTOztBQUNVLHNCQUFZLEdBQXNCO0lBQ3ZELFNBQVMsRUFBRSxjQUFjO0lBQ3pCLFFBQVEsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsRUFBRTtJQUN6RCxHQUFHLEVBQUUsdUNBQXVDO0lBQzVDLFFBQVEsRUFBRTtRQUNSLGVBQWUsRUFBRTtZQUNmO2dCQUNFLElBQUksRUFBRSxRQUFRLENBQUMseUJBQXlCLENBQUMsVUFBVTthQUNwRDtTQUNGO0tBQ0Y7Q0FDRixDQUFDO0FBQ3FCLHNCQUFZLEdBQXNCO0lBQ3ZELFNBQVMsRUFBRSxjQUFjO0lBQ3pCLFFBQVEsRUFBRTtRQUNSLFNBQVMsRUFBRTtZQUNULFNBQVMsRUFBRTtnQkFDVCxJQUFJLEVBQUUsaUJBQWlCO2dCQUN2QixVQUFVLEVBQUU7b0JBQ1YsYUFBYSxFQUFFLFlBQVk7aUJBQzVCO2dCQUNELGNBQWMsRUFBRSxRQUFRO2FBQ3pCO1NBQ0Y7S0FDRjtJQUNELEdBQUcsRUFBRSx1Q0FBdUM7SUFDNUMsUUFBUSxFQUFFO1FBQ1IsZUFBZSxFQUFFO1lBQ2Y7Z0JBQ0UsSUFBSSxFQUFFLFFBQVEsQ0FBQyx5QkFBeUIsQ0FBQyxVQUFVO2FBQ3BEO1NBQ0Y7S0FDRjtDQUNGLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjeHNjaGVtYSBmcm9tICdAYXdzLWNkay9jbG91ZC1hc3NlbWJseS1zY2hlbWEnOztcbmltcG9ydCB7IGluc3RhbmNlTW9ja0Zyb20sIE1vY2tDbG91ZEV4ZWN1dGFibGUsIFRlc3RTdGFja0FydGlmYWN0IH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCB7IEJvb3RzdHJhcHBlciB9IGZyb20gJy4uL2xpYi9hcGkvYm9vdHN0cmFwJztcbmltcG9ydCB7IERlcGxveW1lbnRzIH0gZnJvbSAnLi4vbGliL2FwaS9kZXBsb3ltZW50cyc7XG5pbXBvcnQgeyBDZGtUb29sa2l0IH0gZnJvbSAnLi4vbGliL2Nkay10b29sa2l0JztcbmltcG9ydCB7IGxpc3RTdGFja3MgfSBmcm9tICcuLi9saWIvbGlzdC1zdGFja3MnO1xuXG5kZXNjcmliZSgnbGlzdCcsICgpID0+IHtcbiAgbGV0IGNsb3VkRm9ybWF0aW9uOiBqZXN0Lk1vY2tlZDxEZXBsb3ltZW50cz47XG4gIGxldCBib290c3RyYXBwZXI6IGplc3QuTW9ja2VkPEJvb3RzdHJhcHBlcj47XG5cbiAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgamVzdC5yZXNldEFsbE1vY2tzKCk7XG5cbiAgICBib290c3RyYXBwZXIgPSBpbnN0YW5jZU1vY2tGcm9tKEJvb3RzdHJhcHBlcik7XG4gICAgYm9vdHN0cmFwcGVyLmJvb3RzdHJhcEVudmlyb25tZW50Lm1vY2tSZXNvbHZlZFZhbHVlKHsgbm9PcDogZmFsc2UsIG91dHB1dHM6IHt9IH0gYXMgYW55KTtcbiAgfSk7XG5cbiAgdGVzdCgnc3RhY2tzIHdpdGggbm8gZGVwZW5kZW5jaWVzJywgYXN5bmMgKCkgPT4ge1xuICAgIGxldCBjbG91ZEV4ZWN1dGFibGUgPSBuZXcgTW9ja0Nsb3VkRXhlY3V0YWJsZSh7XG4gICAgICBzdGFja3M6IFtcbiAgICAgICAgTW9ja1N0YWNrLk1PQ0tfU1RBQ0tfQSxcbiAgICAgICAge1xuICAgICAgICAgIHN0YWNrTmFtZTogJ1Rlc3QtU3RhY2stQicsXG4gICAgICAgICAgdGVtcGxhdGU6IHsgUmVzb3VyY2VzOiB7IFRlbXBsYXRlTmFtZTogJ1Rlc3QtU3RhY2stQicgfSB9LFxuICAgICAgICAgIGVudjogJ2F3czovLzEyMzQ1Njc4OTAxMi9iZXJtdWRhLXRyaWFuZ2xlLTEnLFxuICAgICAgICAgIG1ldGFkYXRhOiB7XG4gICAgICAgICAgICAnL1Rlc3QtU3RhY2stQic6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6IGN4c2NoZW1hLkFydGlmYWN0TWV0YWRhdGFFbnRyeVR5cGUuU1RBQ0tfVEFHUyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSk7XG4gICAgLy8gR0lWRU5cbiAgICBjb25zdCB0b29sa2l0ID0gbmV3IENka1Rvb2xraXQoe1xuICAgICAgY2xvdWRFeGVjdXRhYmxlLFxuICAgICAgY29uZmlndXJhdGlvbjogY2xvdWRFeGVjdXRhYmxlLmNvbmZpZ3VyYXRpb24sXG4gICAgICBzZGtQcm92aWRlcjogY2xvdWRFeGVjdXRhYmxlLnNka1Byb3ZpZGVyLFxuICAgICAgZGVwbG95bWVudHM6IGNsb3VkRm9ybWF0aW9uLFxuICAgIH0pO1xuXG4gICAgLy8gV0hFTlxuICAgIGNvbnN0IHdvcmtmbG93ID0gYXdhaXQgbGlzdFN0YWNrcyh0b29sa2l0LCB7IHNlbGVjdG9yczogWydUZXN0LVN0YWNrLUEnLCAnVGVzdC1TdGFjay1CJ10gfSk7XG5cbiAgICAvLyBUSEVOXG4gICAgZXhwZWN0KEpTT04uc3RyaW5naWZ5KHdvcmtmbG93KSkudG9FcXVhbChKU09OLnN0cmluZ2lmeShbe1xuICAgICAgaWQ6ICdUZXN0LVN0YWNrLUEnLFxuICAgICAgbmFtZTogJ1Rlc3QtU3RhY2stQScsXG4gICAgICBlbnZpcm9ubWVudDoge1xuICAgICAgICBhY2NvdW50OiAnMTIzNDU2Nzg5MDEyJyxcbiAgICAgICAgcmVnaW9uOiAnYmVybXVkYS10cmlhbmdsZS0xJyxcbiAgICAgICAgbmFtZTogJ2F3czovLzEyMzQ1Njc4OTAxMi9iZXJtdWRhLXRyaWFuZ2xlLTEnLFxuICAgICAgfSxcbiAgICAgIGRlcGVuZGVuY2llczogW10sXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ1Rlc3QtU3RhY2stQicsXG4gICAgICBuYW1lOiAnVGVzdC1TdGFjay1CJyxcbiAgICAgIGVudmlyb25tZW50OiB7XG4gICAgICAgIGFjY291bnQ6ICcxMjM0NTY3ODkwMTInLFxuICAgICAgICByZWdpb246ICdiZXJtdWRhLXRyaWFuZ2xlLTEnLFxuICAgICAgICBuYW1lOiAnYXdzOi8vMTIzNDU2Nzg5MDEyL2Jlcm11ZGEtdHJpYW5nbGUtMScsXG4gICAgICB9LFxuICAgICAgZGVwZW5kZW5jaWVzOiBbXSxcbiAgICB9XSkpO1xuICB9KTtcblxuICB0ZXN0KCdzdGFja3Mgd2l0aCBkZXBlbmRlbnQgc3RhY2tzJywgYXN5bmMgKCkgPT4ge1xuICAgIGxldCBjbG91ZEV4ZWN1dGFibGUgPSBuZXcgTW9ja0Nsb3VkRXhlY3V0YWJsZSh7XG4gICAgICBzdGFja3M6IFtcbiAgICAgICAgTW9ja1N0YWNrLk1PQ0tfU1RBQ0tfQSxcbiAgICAgICAge1xuICAgICAgICAgIHN0YWNrTmFtZTogJ1Rlc3QtU3RhY2stQicsXG4gICAgICAgICAgdGVtcGxhdGU6IHsgUmVzb3VyY2VzOiB7IFRlbXBsYXRlTmFtZTogJ1Rlc3QtU3RhY2stQicgfSB9LFxuICAgICAgICAgIGVudjogJ2F3czovLzEyMzQ1Njc4OTAxMi9iZXJtdWRhLXRyaWFuZ2xlLTEnLFxuICAgICAgICAgIG1ldGFkYXRhOiB7XG4gICAgICAgICAgICAnL1Rlc3QtU3RhY2stQic6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6IGN4c2NoZW1hLkFydGlmYWN0TWV0YWRhdGFFbnRyeVR5cGUuU1RBQ0tfVEFHUyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZXBlbmRzOiBbJ1Rlc3QtU3RhY2stQSddLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KTtcblxuICAgIC8vIEdJVkVOXG4gICAgY29uc3QgdG9vbGtpdCA9IG5ldyBDZGtUb29sa2l0KHtcbiAgICAgIGNsb3VkRXhlY3V0YWJsZSxcbiAgICAgIGNvbmZpZ3VyYXRpb246IGNsb3VkRXhlY3V0YWJsZS5jb25maWd1cmF0aW9uLFxuICAgICAgc2RrUHJvdmlkZXI6IGNsb3VkRXhlY3V0YWJsZS5zZGtQcm92aWRlcixcbiAgICAgIGRlcGxveW1lbnRzOiBjbG91ZEZvcm1hdGlvbixcbiAgICB9KTtcblxuICAgIC8vIFdIRU5cbiAgICBjb25zdCB3b3JrZmxvdyA9IGF3YWl0IGxpc3RTdGFja3MoIHRvb2xraXQsIHsgc2VsZWN0b3JzOiBbJ1Rlc3QtU3RhY2stQScsICdUZXN0LVN0YWNrLUInXSB9KTtcblxuICAgIC8vIFRIRU5cbiAgICBleHBlY3QoSlNPTi5zdHJpbmdpZnkod29ya2Zsb3cpKS50b0VxdWFsKEpTT04uc3RyaW5naWZ5KFt7XG4gICAgICBpZDogJ1Rlc3QtU3RhY2stQScsXG4gICAgICBuYW1lOiAnVGVzdC1TdGFjay1BJyxcbiAgICAgIGVudmlyb25tZW50OiB7XG4gICAgICAgIGFjY291bnQ6ICcxMjM0NTY3ODkwMTInLFxuICAgICAgICByZWdpb246ICdiZXJtdWRhLXRyaWFuZ2xlLTEnLFxuICAgICAgICBuYW1lOiAnYXdzOi8vMTIzNDU2Nzg5MDEyL2Jlcm11ZGEtdHJpYW5nbGUtMScsXG4gICAgICB9LFxuICAgICAgZGVwZW5kZW5jaWVzOiBbXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnVGVzdC1TdGFjay1CJyxcbiAgICAgIG5hbWU6ICdUZXN0LVN0YWNrLUInLFxuICAgICAgZW52aXJvbm1lbnQ6IHtcbiAgICAgICAgYWNjb3VudDogJzEyMzQ1Njc4OTAxMicsXG4gICAgICAgIHJlZ2lvbjogJ2Jlcm11ZGEtdHJpYW5nbGUtMScsXG4gICAgICAgIG5hbWU6ICdhd3M6Ly8xMjM0NTY3ODkwMTIvYmVybXVkYS10cmlhbmdsZS0xJyxcbiAgICAgIH0sXG4gICAgICBkZXBlbmRlbmNpZXM6IFt7XG4gICAgICAgIGlkOiAnVGVzdC1TdGFjay1BJyxcbiAgICAgICAgZGVwZW5kZW5jaWVzOiBbXSxcbiAgICAgIH1dLFxuICAgIH1dKSk7XG4gIH0pO1xuXG4gIC8vIEluIHRoZSBjb250ZXh0IHdoZXJlIHdlIGhhdmUgYSBkaXNwbGF5IG5hbWUgc2V0IHRvIGhpZXJhcmljYWxJZC9zdGFja05hbWVcbiAgLy8gd2Ugd291bGQgbmVlZCB0byBwYXNzIGluIHRoZSBkaXNwbGF5TmFtZSB0byBsaXN0IHRoZSBzdGFja3MuXG4gIHRlc3QoJ3N0YWNrcyB3aXRoIGRlcGVuZGVudCBzdGFja3MgYW5kIGhhdmUgZGlzcGxheSBuYW1lIHNldCB0byBoaWVyYXJpY2FsSWQvc3RhY2tOYW1lJywgYXN5bmMgKCkgPT4ge1xuICAgIGxldCBjbG91ZEV4ZWN1dGFibGUgPSBuZXcgTW9ja0Nsb3VkRXhlY3V0YWJsZSh7XG4gICAgICBzdGFja3M6IFtcbiAgICAgICAgTW9ja1N0YWNrLk1PQ0tfU1RBQ0tfQSxcbiAgICAgICAge1xuICAgICAgICAgIHN0YWNrTmFtZTogJ1Rlc3QtU3RhY2stQicsXG4gICAgICAgICAgdGVtcGxhdGU6IHsgUmVzb3VyY2VzOiB7IFRlbXBsYXRlTmFtZTogJ1Rlc3QtU3RhY2stQicgfSB9LFxuICAgICAgICAgIGVudjogJ2F3czovLzEyMzQ1Njc4OTAxMi9iZXJtdWRhLXRyaWFuZ2xlLTEnLFxuICAgICAgICAgIG1ldGFkYXRhOiB7XG4gICAgICAgICAgICAnL1Rlc3QtU3RhY2stQic6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6IGN4c2NoZW1hLkFydGlmYWN0TWV0YWRhdGFFbnRyeVR5cGUuU1RBQ0tfVEFHUyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZXBlbmRzOiBbJ1Rlc3QtU3RhY2stQSddLFxuICAgICAgICAgIGRpc3BsYXlOYW1lOiAnVGVzdC1TdGFjay1BL1Rlc3QtU3RhY2stQicsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pO1xuXG4gICAgLy8gR0lWRU5cbiAgICBjb25zdCB0b29sa2l0ID0gbmV3IENka1Rvb2xraXQoe1xuICAgICAgY2xvdWRFeGVjdXRhYmxlLFxuICAgICAgY29uZmlndXJhdGlvbjogY2xvdWRFeGVjdXRhYmxlLmNvbmZpZ3VyYXRpb24sXG4gICAgICBzZGtQcm92aWRlcjogY2xvdWRFeGVjdXRhYmxlLnNka1Byb3ZpZGVyLFxuICAgICAgZGVwbG95bWVudHM6IGNsb3VkRm9ybWF0aW9uLFxuICAgIH0pO1xuXG4gICAgLy8gV0hFTlxuICAgIGNvbnN0IHdvcmtmbG93ID0gYXdhaXQgbGlzdFN0YWNrcyggdG9vbGtpdCwgeyBzZWxlY3RvcnM6IFsnVGVzdC1TdGFjay1BJywgJ1Rlc3QtU3RhY2stQS9UZXN0LVN0YWNrLUInXSB9KTtcblxuICAgIC8vIFRIRU5cbiAgICBleHBlY3QoSlNPTi5zdHJpbmdpZnkod29ya2Zsb3cpKS50b0VxdWFsKEpTT04uc3RyaW5naWZ5KFt7XG4gICAgICBpZDogJ1Rlc3QtU3RhY2stQScsXG4gICAgICBuYW1lOiAnVGVzdC1TdGFjay1BJyxcbiAgICAgIGVudmlyb25tZW50OiB7XG4gICAgICAgIGFjY291bnQ6ICcxMjM0NTY3ODkwMTInLFxuICAgICAgICByZWdpb246ICdiZXJtdWRhLXRyaWFuZ2xlLTEnLFxuICAgICAgICBuYW1lOiAnYXdzOi8vMTIzNDU2Nzg5MDEyL2Jlcm11ZGEtdHJpYW5nbGUtMScsXG4gICAgICB9LFxuICAgICAgZGVwZW5kZW5jaWVzOiBbXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnVGVzdC1TdGFjay1BL1Rlc3QtU3RhY2stQicsXG4gICAgICBuYW1lOiAnVGVzdC1TdGFjay1CJyxcbiAgICAgIGVudmlyb25tZW50OiB7XG4gICAgICAgIGFjY291bnQ6ICcxMjM0NTY3ODkwMTInLFxuICAgICAgICByZWdpb246ICdiZXJtdWRhLXRyaWFuZ2xlLTEnLFxuICAgICAgICBuYW1lOiAnYXdzOi8vMTIzNDU2Nzg5MDEyL2Jlcm11ZGEtdHJpYW5nbGUtMScsXG4gICAgICB9LFxuICAgICAgZGVwZW5kZW5jaWVzOiBbe1xuICAgICAgICBpZDogJ1Rlc3QtU3RhY2stQScsXG4gICAgICAgIGRlcGVuZGVuY2llczogW10sXG4gICAgICB9XSxcbiAgICB9XSkpO1xuICB9KTtcblxuICB0ZXN0KCdzdGFja3Mgd2l0aCBkaXNwbGF5IG5hbWVzIGFuZCBoYXZlIG5lc3RlZCBkZXBlbmRlbmNpZXMnLCBhc3luYyAoKSA9PiB7XG4gICAgbGV0IGNsb3VkRXhlY3V0YWJsZSA9IG5ldyBNb2NrQ2xvdWRFeGVjdXRhYmxlKHtcbiAgICAgIHN0YWNrczogW1xuICAgICAgICBNb2NrU3RhY2suTU9DS19TVEFDS19BLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhY2tOYW1lOiAnVGVzdC1TdGFjay1CJyxcbiAgICAgICAgICB0ZW1wbGF0ZTogeyBSZXNvdXJjZXM6IHsgVGVtcGxhdGVOYW1lOiAnVGVzdC1TdGFjay1CJyB9IH0sXG4gICAgICAgICAgZW52OiAnYXdzOi8vMTIzNDU2Nzg5MDEyL2Jlcm11ZGEtdHJpYW5nbGUtMScsXG4gICAgICAgICAgbWV0YWRhdGE6IHtcbiAgICAgICAgICAgICcvVGVzdC1TdGFjay1CJzogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogY3hzY2hlbWEuQXJ0aWZhY3RNZXRhZGF0YUVudHJ5VHlwZS5TVEFDS19UQUdTLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlcGVuZHM6IFsnVGVzdC1TdGFjay1BJ10sXG4gICAgICAgICAgZGlzcGxheU5hbWU6ICdUZXN0LVN0YWNrLUEvVGVzdC1TdGFjay1CJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHN0YWNrTmFtZTogJ1Rlc3QtU3RhY2stQycsXG4gICAgICAgICAgdGVtcGxhdGU6IHsgUmVzb3VyY2VzOiB7IFRlbXBsYXRlTmFtZTogJ1Rlc3QtU3RhY2stQycgfSB9LFxuICAgICAgICAgIGVudjogJ2F3czovLzEyMzQ1Njc4OTAxMi9iZXJtdWRhLXRyaWFuZ2xlLTEnLFxuICAgICAgICAgIG1ldGFkYXRhOiB7XG4gICAgICAgICAgICAnL1Rlc3QtU3RhY2stQyc6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6IGN4c2NoZW1hLkFydGlmYWN0TWV0YWRhdGFFbnRyeVR5cGUuU1RBQ0tfVEFHUyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZXBlbmRzOiBbJ1Rlc3QtU3RhY2stQiddLFxuICAgICAgICAgIGRpc3BsYXlOYW1lOiAnVGVzdC1TdGFjay1BL1Rlc3QtU3RhY2stQi9UZXN0LVN0YWNrLUMnLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KTtcblxuICAgIC8vIEdJVkVOXG4gICAgY29uc3QgdG9vbGtpdCA9IG5ldyBDZGtUb29sa2l0KHtcbiAgICAgIGNsb3VkRXhlY3V0YWJsZSxcbiAgICAgIGNvbmZpZ3VyYXRpb246IGNsb3VkRXhlY3V0YWJsZS5jb25maWd1cmF0aW9uLFxuICAgICAgc2RrUHJvdmlkZXI6IGNsb3VkRXhlY3V0YWJsZS5zZGtQcm92aWRlcixcbiAgICAgIGRlcGxveW1lbnRzOiBjbG91ZEZvcm1hdGlvbixcbiAgICB9KTtcblxuICAgIC8vIFdIRU5cbiAgICBjb25zdCB3b3JrZmxvdyA9IGF3YWl0IGxpc3RTdGFja3MoIHRvb2xraXQsIHsgc2VsZWN0b3JzOiBbJ1Rlc3QtU3RhY2stQScsICdUZXN0LVN0YWNrLUEvVGVzdC1TdGFjay1CJywgJ1Rlc3QtU3RhY2stQS9UZXN0LVN0YWNrLUIvVGVzdC1TdGFjay1DJ10gfSk7XG5cbiAgICAvLyBUSEVOXG4gICAgZXhwZWN0KEpTT04uc3RyaW5naWZ5KHdvcmtmbG93KSkudG9FcXVhbChKU09OLnN0cmluZ2lmeShbe1xuICAgICAgaWQ6ICdUZXN0LVN0YWNrLUEnLFxuICAgICAgbmFtZTogJ1Rlc3QtU3RhY2stQScsXG4gICAgICBlbnZpcm9ubWVudDoge1xuICAgICAgICBhY2NvdW50OiAnMTIzNDU2Nzg5MDEyJyxcbiAgICAgICAgcmVnaW9uOiAnYmVybXVkYS10cmlhbmdsZS0xJyxcbiAgICAgICAgbmFtZTogJ2F3czovLzEyMzQ1Njc4OTAxMi9iZXJtdWRhLXRyaWFuZ2xlLTEnLFxuICAgICAgfSxcbiAgICAgIGRlcGVuZGVuY2llczogW10sXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ1Rlc3QtU3RhY2stQS9UZXN0LVN0YWNrLUInLFxuICAgICAgbmFtZTogJ1Rlc3QtU3RhY2stQicsXG4gICAgICBlbnZpcm9ubWVudDoge1xuICAgICAgICBhY2NvdW50OiAnMTIzNDU2Nzg5MDEyJyxcbiAgICAgICAgcmVnaW9uOiAnYmVybXVkYS10cmlhbmdsZS0xJyxcbiAgICAgICAgbmFtZTogJ2F3czovLzEyMzQ1Njc4OTAxMi9iZXJtdWRhLXRyaWFuZ2xlLTEnLFxuICAgICAgfSxcbiAgICAgIGRlcGVuZGVuY2llczogW3tcbiAgICAgICAgaWQ6ICdUZXN0LVN0YWNrLUEnLFxuICAgICAgICBkZXBlbmRlbmNpZXM6IFtdLFxuICAgICAgfV0sXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ1Rlc3QtU3RhY2stQS9UZXN0LVN0YWNrLUIvVGVzdC1TdGFjay1DJyxcbiAgICAgIG5hbWU6ICdUZXN0LVN0YWNrLUMnLFxuICAgICAgZW52aXJvbm1lbnQ6IHtcbiAgICAgICAgYWNjb3VudDogJzEyMzQ1Njc4OTAxMicsXG4gICAgICAgIHJlZ2lvbjogJ2Jlcm11ZGEtdHJpYW5nbGUtMScsXG4gICAgICAgIG5hbWU6ICdhd3M6Ly8xMjM0NTY3ODkwMTIvYmVybXVkYS10cmlhbmdsZS0xJyxcbiAgICAgIH0sXG4gICAgICBkZXBlbmRlbmNpZXM6IFt7XG4gICAgICAgIGlkOiAnVGVzdC1TdGFjay1BL1Rlc3QtU3RhY2stQicsXG4gICAgICAgIGRlcGVuZGVuY2llczogW3tcbiAgICAgICAgICBpZDogJ1Rlc3QtU3RhY2stQScsXG4gICAgICAgICAgZGVwZW5kZW5jaWVzOiBbXSxcbiAgICAgICAgfV0sXG4gICAgICB9XSxcbiAgICB9XSkpO1xuICB9KTtcblxuICB0ZXN0KCdzdGFja3Mgd2l0aCBuZXN0ZWQgZGVwZW5kZW5jaWVzJywgYXN5bmMgKCkgPT4ge1xuICAgIGxldCBjbG91ZEV4ZWN1dGFibGUgPSBuZXcgTW9ja0Nsb3VkRXhlY3V0YWJsZSh7XG4gICAgICBzdGFja3M6IFtcbiAgICAgICAgTW9ja1N0YWNrLk1PQ0tfU1RBQ0tfQSxcbiAgICAgICAge1xuICAgICAgICAgIHN0YWNrTmFtZTogJ1Rlc3QtU3RhY2stQicsXG4gICAgICAgICAgdGVtcGxhdGU6IHsgUmVzb3VyY2VzOiB7IFRlbXBsYXRlTmFtZTogJ1Rlc3QtU3RhY2stQicgfSB9LFxuICAgICAgICAgIGVudjogJ2F3czovLzEyMzQ1Njc4OTAxMi9iZXJtdWRhLXRyaWFuZ2xlLTEnLFxuICAgICAgICAgIG1ldGFkYXRhOiB7XG4gICAgICAgICAgICAnL1Rlc3QtU3RhY2stQic6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6IGN4c2NoZW1hLkFydGlmYWN0TWV0YWRhdGFFbnRyeVR5cGUuU1RBQ0tfVEFHUyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZXBlbmRzOiBbJ1Rlc3QtU3RhY2stQSddLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgc3RhY2tOYW1lOiAnVGVzdC1TdGFjay1DJyxcbiAgICAgICAgICB0ZW1wbGF0ZTogeyBSZXNvdXJjZXM6IHsgVGVtcGxhdGVOYW1lOiAnVGVzdC1TdGFjay1DJyB9IH0sXG4gICAgICAgICAgZW52OiAnYXdzOi8vMTIzNDU2Nzg5MDEyL2Jlcm11ZGEtdHJpYW5nbGUtMScsXG4gICAgICAgICAgbWV0YWRhdGE6IHtcbiAgICAgICAgICAgICcvVGVzdC1TdGFjay1DJzogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogY3hzY2hlbWEuQXJ0aWZhY3RNZXRhZGF0YUVudHJ5VHlwZS5TVEFDS19UQUdTLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlcGVuZHM6IFsnVGVzdC1TdGFjay1CJ10sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pO1xuXG4gICAgLy8gR0lWRU5cbiAgICBjb25zdCB0b29sa2l0ID0gbmV3IENka1Rvb2xraXQoe1xuICAgICAgY2xvdWRFeGVjdXRhYmxlLFxuICAgICAgY29uZmlndXJhdGlvbjogY2xvdWRFeGVjdXRhYmxlLmNvbmZpZ3VyYXRpb24sXG4gICAgICBzZGtQcm92aWRlcjogY2xvdWRFeGVjdXRhYmxlLnNka1Byb3ZpZGVyLFxuICAgICAgZGVwbG95bWVudHM6IGNsb3VkRm9ybWF0aW9uLFxuICAgIH0pO1xuXG4gICAgLy8gV0hFTlxuICAgIGNvbnN0IHdvcmtmbG93ID0gYXdhaXQgbGlzdFN0YWNrcyggdG9vbGtpdCwgeyBzZWxlY3RvcnM6IFsnVGVzdC1TdGFjay1BJywgJ1Rlc3QtU3RhY2stQicsICdUZXN0LVN0YWNrLUMnXSB9KTtcblxuICAgIC8vIFRIRU5cbiAgICBleHBlY3QoSlNPTi5zdHJpbmdpZnkod29ya2Zsb3cpKS50b0VxdWFsKEpTT04uc3RyaW5naWZ5KFt7XG4gICAgICBpZDogJ1Rlc3QtU3RhY2stQScsXG4gICAgICBuYW1lOiAnVGVzdC1TdGFjay1BJyxcbiAgICAgIGVudmlyb25tZW50OiB7XG4gICAgICAgIGFjY291bnQ6ICcxMjM0NTY3ODkwMTInLFxuICAgICAgICByZWdpb246ICdiZXJtdWRhLXRyaWFuZ2xlLTEnLFxuICAgICAgICBuYW1lOiAnYXdzOi8vMTIzNDU2Nzg5MDEyL2Jlcm11ZGEtdHJpYW5nbGUtMScsXG4gICAgICB9LFxuICAgICAgZGVwZW5kZW5jaWVzOiBbXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnVGVzdC1TdGFjay1CJyxcbiAgICAgIG5hbWU6ICdUZXN0LVN0YWNrLUInLFxuICAgICAgZW52aXJvbm1lbnQ6IHtcbiAgICAgICAgYWNjb3VudDogJzEyMzQ1Njc4OTAxMicsXG4gICAgICAgIHJlZ2lvbjogJ2Jlcm11ZGEtdHJpYW5nbGUtMScsXG4gICAgICAgIG5hbWU6ICdhd3M6Ly8xMjM0NTY3ODkwMTIvYmVybXVkYS10cmlhbmdsZS0xJyxcbiAgICAgIH0sXG4gICAgICBkZXBlbmRlbmNpZXM6IFt7XG4gICAgICAgIGlkOiAnVGVzdC1TdGFjay1BJyxcbiAgICAgICAgZGVwZW5kZW5jaWVzOiBbXSxcbiAgICAgIH1dLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdUZXN0LVN0YWNrLUMnLFxuICAgICAgbmFtZTogJ1Rlc3QtU3RhY2stQycsXG4gICAgICBlbnZpcm9ubWVudDoge1xuICAgICAgICBhY2NvdW50OiAnMTIzNDU2Nzg5MDEyJyxcbiAgICAgICAgcmVnaW9uOiAnYmVybXVkYS10cmlhbmdsZS0xJyxcbiAgICAgICAgbmFtZTogJ2F3czovLzEyMzQ1Njc4OTAxMi9iZXJtdWRhLXRyaWFuZ2xlLTEnLFxuICAgICAgfSxcbiAgICAgIGRlcGVuZGVuY2llczogW3tcbiAgICAgICAgaWQ6ICdUZXN0LVN0YWNrLUInLFxuICAgICAgICBkZXBlbmRlbmNpZXM6IFt7XG4gICAgICAgICAgaWQ6ICdUZXN0LVN0YWNrLUEnLFxuICAgICAgICAgIGRlcGVuZGVuY2llczogW10sXG4gICAgICAgIH1dLFxuICAgICAgfV0sXG4gICAgfV0pKTtcbiAgfSk7XG5cbiAgLy8gSW4gdGhlIGNvbnRleHQgb2Ygc3RhY2tzIHdpdGggY3Jvc3Mtc3RhY2sgb3IgY3Jvc3MtcmVnaW9uIHJlZmVyZW5jZXMsXG4gIC8vIHRoZSBkZXBlbmRlbmN5IG1lY2hhbmlzbSBpcyByZXNwb25zaWJsZSBmb3IgYXBwcm9wcmlhdGVseSBhcHBseWluZyBkZXBlbmRlbmNpZXMgYXQgdGhlIGNvcnJlY3QgaGllcmFyY2h5IGxldmVsLFxuICAvLyB0eXBpY2FsbHkgYXQgdGhlIHRvcC1sZXZlbCBzdGFja3MuXG4gIC8vIFRoaXMgaW52b2x2ZXMgaGFuZGxpbmcgdGhlIGVzdGFibGlzaG1lbnQgb2YgY3Jvc3MtcmVmZXJlbmNlcyBiZXR3ZWVuIHN0YWNrcyBvciBuZXN0ZWQgc3RhY2tzXG4gIC8vIGFuZCBnZW5lcmF0aW5nIGFzc2V0cyBmb3IgbmVzdGVkIHN0YWNrIHRlbXBsYXRlcyBhcyBuZWNlc3NhcnkuXG4gIHRlc3QoJ3N0YWNrcyB3aXRoIGNyb3NzIHN0YWNrIHJlZmVyZW5jaW5nJywgYXN5bmMgKCkgPT4ge1xuICAgIGxldCBjbG91ZEV4ZWN1dGFibGUgPSBuZXcgTW9ja0Nsb3VkRXhlY3V0YWJsZSh7XG4gICAgICBzdGFja3M6IFtcbiAgICAgICAge1xuICAgICAgICAgIHN0YWNrTmFtZTogJ1Rlc3QtU3RhY2stQScsXG4gICAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICAgIFJlc291cmNlczoge1xuICAgICAgICAgICAgICBNeUJ1Y2tldDFSZWZlcmVuY2U6IHtcbiAgICAgICAgICAgICAgICBUeXBlOiAnQVdTOjpDbG91ZEZvcm1hdGlvbjo6U3RhY2snLFxuICAgICAgICAgICAgICAgIFByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgICAgICAgIFRlbXBsYXRlVVJMOiAnWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWCcsXG4gICAgICAgICAgICAgICAgICBQYXJhbWV0ZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIEJ1Y2tldE5hbWU6IHsgJ0ZuOjpHZXRBdHQnOiBbJ015QnVja2V0MScsICdBcm4nXSB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGVudjogJ2F3czovLzEyMzQ1Njc4OTAxMi9iZXJtdWRhLXRyaWFuZ2xlLTEnLFxuICAgICAgICAgIG1ldGFkYXRhOiB7XG4gICAgICAgICAgICAnL1Rlc3QtU3RhY2stQSc6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6IGN4c2NoZW1hLkFydGlmYWN0TWV0YWRhdGFFbnRyeVR5cGUuU1RBQ0tfVEFHUyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZXBlbmRzOiBbJ1Rlc3QtU3RhY2stQyddLFxuICAgICAgICB9LFxuICAgICAgICBNb2NrU3RhY2suTU9DS19TVEFDS19DLFxuICAgICAgXSxcbiAgICB9KTtcblxuICAgIC8vIEdJVkVOXG4gICAgY29uc3QgdG9vbGtpdCA9IG5ldyBDZGtUb29sa2l0KHtcbiAgICAgIGNsb3VkRXhlY3V0YWJsZSxcbiAgICAgIGNvbmZpZ3VyYXRpb246IGNsb3VkRXhlY3V0YWJsZS5jb25maWd1cmF0aW9uLFxuICAgICAgc2RrUHJvdmlkZXI6IGNsb3VkRXhlY3V0YWJsZS5zZGtQcm92aWRlcixcbiAgICAgIGRlcGxveW1lbnRzOiBjbG91ZEZvcm1hdGlvbixcbiAgICB9KTtcblxuICAgIC8vIFdIRU5cbiAgICBjb25zdCB3b3JrZmxvdyA9IGF3YWl0IGxpc3RTdGFja3MoIHRvb2xraXQsIHsgc2VsZWN0b3JzOiBbJ1Rlc3QtU3RhY2stQScsICdUZXN0LVN0YWNrLUMnXSB9KTtcblxuICAgIC8vIFRIRU5cbiAgICBleHBlY3QoSlNPTi5zdHJpbmdpZnkod29ya2Zsb3cpKS50b0VxdWFsKEpTT04uc3RyaW5naWZ5KFt7XG4gICAgICBpZDogJ1Rlc3QtU3RhY2stQycsXG4gICAgICBuYW1lOiAnVGVzdC1TdGFjay1DJyxcbiAgICAgIGVudmlyb25tZW50OiB7XG4gICAgICAgIGFjY291bnQ6ICcxMjM0NTY3ODkwMTInLFxuICAgICAgICByZWdpb246ICdiZXJtdWRhLXRyaWFuZ2xlLTEnLFxuICAgICAgICBuYW1lOiAnYXdzOi8vMTIzNDU2Nzg5MDEyL2Jlcm11ZGEtdHJpYW5nbGUtMScsXG4gICAgICB9LFxuICAgICAgZGVwZW5kZW5jaWVzOiBbXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnVGVzdC1TdGFjay1BJyxcbiAgICAgIG5hbWU6ICdUZXN0LVN0YWNrLUEnLFxuICAgICAgZW52aXJvbm1lbnQ6IHtcbiAgICAgICAgYWNjb3VudDogJzEyMzQ1Njc4OTAxMicsXG4gICAgICAgIHJlZ2lvbjogJ2Jlcm11ZGEtdHJpYW5nbGUtMScsXG4gICAgICAgIG5hbWU6ICdhd3M6Ly8xMjM0NTY3ODkwMTIvYmVybXVkYS10cmlhbmdsZS0xJyxcbiAgICAgIH0sXG4gICAgICBkZXBlbmRlbmNpZXM6IFt7XG4gICAgICAgIGlkOiAnVGVzdC1TdGFjay1DJyxcbiAgICAgICAgZGVwZW5kZW5jaWVzOiBbXSxcbiAgICAgIH1dLFxuICAgIH1dKSk7XG4gIH0pO1xuXG4gIHRlc3QoJ3N0YWNrcyB3aXRoIGNpcmN1bGFyIGRlcGVuZGVuY2llcyBzaG91bGQgZXJyb3Igb3V0JywgYXN5bmMgKCkgPT4ge1xuICAgIGxldCBjbG91ZEV4ZWN1dGFibGUgPSBuZXcgTW9ja0Nsb3VkRXhlY3V0YWJsZSh7XG4gICAgICBzdGFja3M6IFtcbiAgICAgICAge1xuICAgICAgICAgIHN0YWNrTmFtZTogJ1Rlc3QtU3RhY2stQScsXG4gICAgICAgICAgdGVtcGxhdGU6IHsgUmVzb3VyY2VzOiB7IFRlbXBsYXRlTmFtZTogJ1Rlc3QtU3RhY2stQScgfSB9LFxuICAgICAgICAgIGVudjogJ2F3czovLzEyMzQ1Njc4OTAxMi9iZXJtdWRhLXRyaWFuZ2xlLTEnLFxuICAgICAgICAgIG1ldGFkYXRhOiB7XG4gICAgICAgICAgICAnL1Rlc3QtU3RhY2stQSc6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6IGN4c2NoZW1hLkFydGlmYWN0TWV0YWRhdGFFbnRyeVR5cGUuU1RBQ0tfVEFHUyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZXBlbmRzOiBbJ1Rlc3QtU3RhY2stQiddLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgc3RhY2tOYW1lOiAnVGVzdC1TdGFjay1CJyxcbiAgICAgICAgICB0ZW1wbGF0ZTogeyBSZXNvdXJjZXM6IHsgVGVtcGxhdGVOYW1lOiAnVGVzdC1TdGFjay1CJyB9IH0sXG4gICAgICAgICAgZW52OiAnYXdzOi8vMTIzNDU2Nzg5MDEyL2Jlcm11ZGEtdHJpYW5nbGUtMScsXG4gICAgICAgICAgbWV0YWRhdGE6IHtcbiAgICAgICAgICAgICcvVGVzdC1TdGFjay1CJzogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogY3hzY2hlbWEuQXJ0aWZhY3RNZXRhZGF0YUVudHJ5VHlwZS5TVEFDS19UQUdTLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlcGVuZHM6IFsnVGVzdC1TdGFjay1BJ10sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pO1xuXG4gICAgLy8gR0lWRU5cbiAgICBjb25zdCB0b29sa2l0ID0gbmV3IENka1Rvb2xraXQoe1xuICAgICAgY2xvdWRFeGVjdXRhYmxlLFxuICAgICAgY29uZmlndXJhdGlvbjogY2xvdWRFeGVjdXRhYmxlLmNvbmZpZ3VyYXRpb24sXG4gICAgICBzZGtQcm92aWRlcjogY2xvdWRFeGVjdXRhYmxlLnNka1Byb3ZpZGVyLFxuICAgICAgZGVwbG95bWVudHM6IGNsb3VkRm9ybWF0aW9uLFxuICAgIH0pO1xuXG4gICAgLy8gV0hFTlxuICAgIGF3YWl0IGV4cGVjdCgoKSA9PlxuICAgICAgbGlzdFN0YWNrcyggdG9vbGtpdCwgeyBzZWxlY3RvcnM6IFsnVGVzdC1TdGFjay1BJywgJ1Rlc3QtU3RhY2stQiddIH0pLFxuICAgICkucmVqZWN0cy50b1Rocm93KCdDb3VsZCBub3QgZGV0ZXJtaW5lIG9yZGVyaW5nJyk7XG4gIH0pO1xufSk7XG5cbmNsYXNzIE1vY2tTdGFjayB7XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgTU9DS19TVEFDS19BOiBUZXN0U3RhY2tBcnRpZmFjdCA9IHtcbiAgICBzdGFja05hbWU6ICdUZXN0LVN0YWNrLUEnLFxuICAgIHRlbXBsYXRlOiB7IFJlc291cmNlczogeyBUZW1wbGF0ZU5hbWU6ICdUZXN0LVN0YWNrLUEnIH0gfSxcbiAgICBlbnY6ICdhd3M6Ly8xMjM0NTY3ODkwMTIvYmVybXVkYS10cmlhbmdsZS0xJyxcbiAgICBtZXRhZGF0YToge1xuICAgICAgJy9UZXN0LVN0YWNrLUEnOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiBjeHNjaGVtYS5BcnRpZmFjdE1ldGFkYXRhRW50cnlUeXBlLlNUQUNLX1RBR1MsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIH07XG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgTU9DS19TVEFDS19DOiBUZXN0U3RhY2tBcnRpZmFjdCA9IHtcbiAgICBzdGFja05hbWU6ICdUZXN0LVN0YWNrLUMnLFxuICAgIHRlbXBsYXRlOiB7XG4gICAgICBSZXNvdXJjZXM6IHtcbiAgICAgICAgTXlCdWNrZXQxOiB7XG4gICAgICAgICAgVHlwZTogJ0FXUzo6UzM6OkJ1Y2tldCcsXG4gICAgICAgICAgUHJvcGVydGllczoge1xuICAgICAgICAgICAgQWNjZXNzQ29udHJvbDogJ1B1YmxpY1JlYWQnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgRGVsZXRpb25Qb2xpY3k6ICdSZXRhaW4nLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIGVudjogJ2F3czovLzEyMzQ1Njc4OTAxMi9iZXJtdWRhLXRyaWFuZ2xlLTEnLFxuICAgIG1ldGFkYXRhOiB7XG4gICAgICAnL1Rlc3QtU3RhY2stQyc6IFtcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6IGN4c2NoZW1hLkFydGlmYWN0TWV0YWRhdGFFbnRyeVR5cGUuU1RBQ0tfVEFHUyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgfVxufVxuIl19