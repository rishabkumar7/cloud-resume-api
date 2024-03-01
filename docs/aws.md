# Cloud Resume API with AWS

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fcloudresumeapi.dev&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)
![GitHub Repo stars](https://img.shields.io/github/stars/rishabkumar7/cloud-resume-api)

## AWS Resume API Challenge

Welcome to the AWS Lambda Resume API Challenge. A project where you will have the opportunity to build and deploy a serverless API using AWS Lambda and DynamoDB, integrated with GitHub Actions. The primary goal? Construct an API that can serve resume data in JSON format.

## Challenge Objective 🎯

Your task is to create a Lambda function that fetches resume data stored in DynamoDB and return it in JSON format. To level up the challenge, integrate GitHub Actions to automatically deploy updates to your Lambda function whenever you push to your repository.

## Key Requirements

- DynamoDB Table: Set up a table named Resumes containing sample resume data.
- Lambda Function: Fetch and return resume data based on an id.
- API Gateway/Function URLs: Integrate API Gateway for your Lambda Function or use Function URLs to make you Lambda Function accessible.
- GitHub Actions: Automatically package and deploy your Lambda function on every push to the repository.

**Bonus**: Use the [Terraform](https://terraform.io) or [Serverless Framework](https://www.serverless.com/framework) for infrastructure as code! And API Gateway to make you Resume API accessible over the internet.

## Getting Started 🚀

- **Set Up AWS**: If you haven't already, sign up for an AWS account and set up your credentials. Remember, when using AWS secrets and never expose them in your code.
- **Create a JSON Resume**: Use [this schema](https://jsonresume.org/schema/) to create your own JSON resume.
- **Create AWS Resources**: Deploy the needed AWS services - DynamoDB and Lambda Function.
- **Create Your Workflow**: Use the [provided template as a guide](https://github.com/marketplace/actions/aws-lambda-deploy), but feel free to innovate!
- **Test Everything**: Ensure your API works as expected and the GitHub Actions deploy smoothly.

## Submission Guidelines 📥

Ensure all your code is in a GitHub repository.
Make sure your README has detailed instructions on how to run and test your API.
Write a blog post sharing the things you learned during building this project.

Once you're ready to submit, create a pull request to this repository.
Add your name, github repo URL and the resume API URL to the table in `submissions.md` file.
In your pull request, provide a summary of what you've done and any additional features or functionalities you've added.

All the submission can be found [here](/submissions).

## Completion Criteria 🏆

- Functionality: Does the API work? Does the deployment succeed via GitHub Actions?
- Code Quality: Is the code clean, well-organized, and documented?
- Innovation: Did you add any extra features or use any unique methods?

## Acknowledgements 👏

Thank you to everyone who decides to participate. Community challenges like this are a great way to learn, improve, and demonstrate your skills. I can't wait to see what you build!
