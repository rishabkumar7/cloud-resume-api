"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable import/order */
const path = require("path");
const tree_1 = require("../lib/tree");
describe('some', () => {
    const tree = {
        id: 'App',
        path: '',
        children: {
            Tree: {
                id: 'Tree',
                path: 'Tree',
                constructInfo: {
                    fqn: 'aws-cdk-lib.Construct',
                    version: '1.162.0',
                },
            },
            stack: {
                id: 'stack',
                path: 'stack',
                children: {
                    bucket: {
                        id: 'bucket',
                        path: 'stack/bucket',
                        children: {
                            Resource: {
                                id: 'Resource',
                                path: 'stack/bucket/Resource',
                                attributes: {
                                    'aws:cdk:cloudformation:type': 'AWS::S3::Bucket',
                                    'aws:cdk:cloudformation:props': {},
                                },
                                constructInfo: {
                                    fqn: '@aws-cdk/aws-s3.CfnBucket',
                                    version: '1.162.0',
                                },
                            },
                        },
                        constructInfo: {
                            fqn: '@aws-cdk/aws-s3.Bucket',
                            version: '1.162.0',
                        },
                    },
                    CDKMetadata: {
                        id: 'CDKMetadata',
                        path: 'stack/CDKMetadata',
                        children: {
                            Default: {
                                id: 'Default',
                                path: 'stack/CDKMetadata/Default',
                                constructInfo: {
                                    fqn: 'aws-cdk-lib.CfnResource',
                                    version: '1.162.0',
                                },
                            },
                            Condition: {
                                id: 'Condition',
                                path: 'stack/CDKMetadata/Condition',
                                constructInfo: {
                                    fqn: 'aws-cdk-lib.CfnCondition',
                                    version: '1.162.0',
                                },
                            },
                        },
                        constructInfo: {
                            fqn: 'aws-cdk-lib.Construct',
                            version: '1.162.0',
                        },
                    },
                },
                constructInfo: {
                    fqn: 'aws-cdk-lib.Stack',
                    version: '1.162.0',
                },
            },
        },
        constructInfo: {
            fqn: 'aws-cdk-lib.App',
            version: '1.162.0',
        },
    };
    test('tree matches predicate', () => {
        expect((0, tree_1.some)(tree, node => node.constructInfo?.fqn === '@aws-cdk/aws-s3.Bucket')).toBe(true);
    });
    test('tree does not match predicate', () => {
        expect((0, tree_1.some)(tree, node => node.constructInfo?.fqn === '@aws-cdk/aws-lambda.Function')).toBe(false);
    });
    test('childless tree', () => {
        const childless = {
            id: 'App',
            path: '',
            constructInfo: {
                fqn: 'aws-cdk-lib.App',
                version: '1.162.0',
            },
        };
        expect((0, tree_1.some)(childless, node => node.path.length > 0)).toBe(false);
    });
});
describe('loadTreeFromDir', () => {
    test('can find tree', () => {
        const tree = (0, tree_1.loadTreeFromDir)(path.join(__dirname, 'cloud-assembly-trees', 'built-with-1_144_0'));
        expect(tree.id).toEqual('App');
    });
    test('cannot find tree', () => {
        const tree = (0, tree_1.loadTreeFromDir)(path.join(__dirname, 'cloud-assembly-trees', 'foo'));
        expect(tree).toEqual({});
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidHJlZS50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUNBQWlDO0FBQ2pDLDZCQUE2QjtBQUM3QixzQ0FBdUU7QUFFdkUsUUFBUSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUU7SUFDcEIsTUFBTSxJQUFJLEdBQXNCO1FBQzlCLEVBQUUsRUFBRSxLQUFLO1FBQ1QsSUFBSSxFQUFFLEVBQUU7UUFDUixRQUFRLEVBQUU7WUFDUixJQUFJLEVBQUU7Z0JBQ0osRUFBRSxFQUFFLE1BQU07Z0JBQ1YsSUFBSSxFQUFFLE1BQU07Z0JBQ1osYUFBYSxFQUFFO29CQUNiLEdBQUcsRUFBRSx1QkFBdUI7b0JBQzVCLE9BQU8sRUFBRSxTQUFTO2lCQUNuQjthQUNGO1lBQ0QsS0FBSyxFQUFFO2dCQUNMLEVBQUUsRUFBRSxPQUFPO2dCQUNYLElBQUksRUFBRSxPQUFPO2dCQUNiLFFBQVEsRUFBRTtvQkFDUixNQUFNLEVBQUU7d0JBQ04sRUFBRSxFQUFFLFFBQVE7d0JBQ1osSUFBSSxFQUFFLGNBQWM7d0JBQ3BCLFFBQVEsRUFBRTs0QkFDUixRQUFRLEVBQUU7Z0NBQ1IsRUFBRSxFQUFFLFVBQVU7Z0NBQ2QsSUFBSSxFQUFFLHVCQUF1QjtnQ0FDN0IsVUFBVSxFQUFFO29DQUNWLDZCQUE2QixFQUFFLGlCQUFpQjtvQ0FDaEQsOEJBQThCLEVBQUUsRUFBRTtpQ0FDbkM7Z0NBQ0QsYUFBYSxFQUFFO29DQUNiLEdBQUcsRUFBRSwyQkFBMkI7b0NBQ2hDLE9BQU8sRUFBRSxTQUFTO2lDQUNuQjs2QkFDRjt5QkFDRjt3QkFDRCxhQUFhLEVBQUU7NEJBQ2IsR0FBRyxFQUFFLHdCQUF3Qjs0QkFDN0IsT0FBTyxFQUFFLFNBQVM7eUJBQ25CO3FCQUNGO29CQUNELFdBQVcsRUFBRTt3QkFDWCxFQUFFLEVBQUUsYUFBYTt3QkFDakIsSUFBSSxFQUFFLG1CQUFtQjt3QkFDekIsUUFBUSxFQUFFOzRC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cG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBDb25zdHJ1Y3RUcmVlTm9kZSwgbG9hZFRyZWVGcm9tRGlyLCBzb21lIH0gZnJvbSAnLi4vbGliL3RyZWUnO1xuXG5kZXNjcmliZSgnc29tZScsICgpID0+IHtcbiAgY29uc3QgdHJlZTogQ29uc3RydWN0VHJlZU5vZGUgPSB7XG4gICAgaWQ6ICdBcHAnLFxuICAgIHBhdGg6ICcnLFxuICAgIGNoaWxkcmVuOiB7XG4gICAgICBUcmVlOiB7XG4gICAgICAgIGlkOiAnVHJlZScsXG4gICAgICAgIHBhdGg6ICdUcmVlJyxcbiAgICAgICAgY29uc3RydWN0SW5mbzoge1xuICAgICAgICAgIGZxbjogJ2F3cy1jZGstbGliLkNvbnN0cnVjdCcsXG4gICAgICAgICAgdmVyc2lvbjogJzEuMTYyLjAnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHN0YWNrOiB7XG4gICAgICAgIGlkOiAnc3RhY2snLFxuICAgICAgICBwYXRoOiAnc3RhY2snLFxuICAgICAgICBjaGlsZHJlbjoge1xuICAgICAgICAgIGJ1Y2tldDoge1xuICAgICAgICAgICAgaWQ6ICdidWNrZXQnLFxuICAgICAgICAgICAgcGF0aDogJ3N0YWNrL2J1Y2tldCcsXG4gICAgICAgICAgICBjaGlsZHJlbjoge1xuICAgICAgICAgICAgICBSZXNvdXJjZToge1xuICAgICAgICAgICAgICAgIGlkOiAnUmVzb3VyY2UnLFxuICAgICAgICAgICAgICAgIHBhdGg6ICdzdGFjay9idWNrZXQvUmVzb3VyY2UnLFxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICAgICAgICAgICdhd3M6Y2RrOmNsb3VkZm9ybWF0aW9uOnR5cGUnOiAnQVdTOjpTMzo6QnVja2V0JyxcbiAgICAgICAgICAgICAgICAgICdhd3M6Y2RrOmNsb3VkZm9ybWF0aW9uOnByb3BzJzoge30sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjb25zdHJ1Y3RJbmZvOiB7XG4gICAgICAgICAgICAgICAgICBmcW46ICdAYXdzLWNkay9hd3MtczMuQ2ZuQnVja2V0JyxcbiAgICAgICAgICAgICAgICAgIHZlcnNpb246ICcxLjE2Mi4wJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbnN0cnVjdEluZm86IHtcbiAgICAgICAgICAgICAgZnFuOiAnQGF3cy1jZGsvYXdzLXMzLkJ1Y2tldCcsXG4gICAgICAgICAgICAgIHZlcnNpb246ICcxLjE2Mi4wJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBDREtNZXRhZGF0YToge1xuICAgICAgICAgICAgaWQ6ICdDREtNZXRhZGF0YScsXG4gICAgICAgICAgICBwYXRoOiAnc3RhY2svQ0RLTWV0YWRhdGEnLFxuICAgICAgICAgICAgY2hpbGRyZW46IHtcbiAgICAgICAgICAgICAgRGVmYXVsdDoge1xuICAgICAgICAgICAgICAgIGlkOiAnRGVmYXVsdCcsXG4gICAgICAgICAgICAgICAgcGF0aDogJ3N0YWNrL0NES01ldGFkYXRhL0RlZmF1bHQnLFxuICAgICAgICAgICAgICAgIGNvbnN0cnVjdEluZm86IHtcbiAgICAgICAgICAgICAgICAgIGZxbjogJ2F3cy1jZGstbGliLkNmblJlc291cmNlJyxcbiAgICAgICAgICAgICAgICAgIHZlcnNpb246ICcxLjE2Mi4wJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBDb25kaXRpb246IHtcbiAgICAgICAgICAgICAgICBpZDogJ0NvbmRpdGlvbicsXG4gICAgICAgICAgICAgICAgcGF0aDogJ3N0YWNrL0NES01ldGFkYXRhL0NvbmRpdGlvbicsXG4gICAgICAgICAgICAgICAgY29uc3RydWN0SW5mbzoge1xuICAgICAgICAgICAgICAgICAgZnFuOiAnYXdzLWNkay1saWIuQ2ZuQ29uZGl0aW9uJyxcbiAgICAgICAgICAgICAgICAgIHZlcnNpb246ICcxLjE2Mi4wJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbnN0cnVjdEluZm86IHtcbiAgICAgICAgICAgICAgZnFuOiAnYXdzLWNkay1saWIuQ29uc3RydWN0JyxcbiAgICAgICAgICAgICAgdmVyc2lvbjogJzEuMTYyLjAnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBjb25zdHJ1Y3RJbmZvOiB7XG4gICAgICAgICAgZnFuOiAnYXdzLWNkay1saWIuU3RhY2snLFxuICAgICAgICAgIHZlcnNpb246ICcxLjE2Mi4wJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBjb25zdHJ1Y3RJbmZvOiB7XG4gICAgICBmcW46ICdhd3MtY2RrLWxpYi5BcHAnLFxuICAgICAgdmVyc2lvbjogJzEuMTYyLjAnLFxuICAgIH0sXG4gIH07XG5cbiAgdGVzdCgndHJlZSBtYXRjaGVzIHByZWRpY2F0ZScsICgpID0+IHtcbiAgICBleHBlY3Qoc29tZSh0cmVlLCBub2RlID0+IG5vZGUuY29uc3RydWN0SW5mbz8uZnFuID09PSAnQGF3cy1jZGsvYXdzLXMzLkJ1Y2tldCcpKS50b0JlKHRydWUpO1xuICB9KTtcblxuICB0ZXN0KCd0cmVlIGRvZXMgbm90IG1hdGNoIHByZWRpY2F0ZScsICgpID0+IHtcbiAgICBleHBlY3Qoc29tZSh0cmVlLCBub2RlID0+IG5vZGUuY29uc3RydWN0SW5mbz8uZnFuID09PSAnQGF3cy1jZGsvYXdzLWxhbWJkYS5GdW5jdGlvbicpKS50b0JlKGZhbHNlKTtcbiAgfSk7XG5cbiAgdGVzdCgnY2hpbGRsZXNzIHRyZWUnLCAoKSA9PiB7XG4gICAgY29uc3QgY2hpbGRsZXNzID0ge1xuICAgICAgaWQ6ICdBcHAnLFxuICAgICAgcGF0aDogJycsXG4gICAgICBjb25zdHJ1Y3RJbmZvOiB7XG4gICAgICAgIGZxbjogJ2F3cy1jZGstbGliLkFwcCcsXG4gICAgICAgIHZlcnNpb246ICcxLjE2Mi4wJyxcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIGV4cGVjdChzb21lKGNoaWxkbGVzcywgbm9kZSA9PiBub2RlLnBhdGgubGVuZ3RoID4gMCkpLnRvQmUoZmFsc2UpO1xuICB9KTtcbn0pO1xuXG5kZXNjcmliZSgnbG9hZFRyZWVGcm9tRGlyJywgKCkgPT4ge1xuICB0ZXN0KCdjYW4gZmluZCB0cmVlJywgKCkgPT4ge1xuICAgIGNvbnN0IHRyZWUgPSBsb2FkVHJlZUZyb21EaXIocGF0aC5qb2luKF9fZGlybmFtZSwgJ2Nsb3VkLWFzc2VtYmx5LXRyZWVzJywgJ2J1aWx0LXdpdGgtMV8xNDRfMCcpKTtcbiAgICBleHBlY3QodHJlZS5pZCkudG9FcXVhbCgnQXBwJyk7XG4gIH0pO1xuXG4gIHRlc3QoJ2Nhbm5vdCBmaW5kIHRyZWUnLCAoKSA9PiB7XG4gICAgY29uc3QgdHJlZSA9IGxvYWRUcmVlRnJvbURpcihwYXRoLmpvaW4oX19kaXJuYW1lLCAnY2xvdWQtYXNzZW1ibHktdHJlZXMnLCAnZm9vJykpO1xuICAgIGV4cGVjdCh0cmVlKS50b0VxdWFsKHt9KTtcbiAgfSk7XG59KTsiXX0=