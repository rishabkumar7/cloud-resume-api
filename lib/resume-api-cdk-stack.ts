import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import { Construct } from 'constructs';

export class ResumeApiCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create Lambda function
    const resumeFunction = new lambda.Function(this, 'ResumeFunction', {
      runtime: lambda.Runtime.PYTHON_3_9,
      handler: 'lambda_function.lambda_handler',
      code: lambda.Code.fromAsset('lambda'),
    });

    // Create API Gateway
    const api = new apigateway.RestApi(this, 'ResumeApi', {
      restApiName: 'Resume Service',
      description: 'This service serves the resume.',
    });

    const resumeIntegration = new apigateway.LambdaIntegration(resumeFunction);
    api.root.addMethod('GET', resumeIntegration);
  }
}