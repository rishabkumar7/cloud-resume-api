#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { ResumeApiCdkStack } from '../lib/resume-api-cdk-stack';

const app = new cdk.App();
new ResumeApiCdkStack(app, 'ResumeApiCdkStack', {

 
});