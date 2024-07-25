# Resume API CDK Project

This project deploys a serverless Resume API using AWS CDK. It creates an AWS Lambda function to serve resume data and an API Gateway to expose the Lambda function via a REST API.

## API URL

The Resume API is accessible at:
https://jner4mrs02.execute-api.us-east-1.amazonaws.com/prod/

## Prerequisites

- Node.js (v18.x or later)
- AWS CLI configured with appropriate credentials
- AWS CDK CLI (`npm install -g aws-cdk`)

## Setup

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/resume-api-cdk.git
    cd resume-api-cdk
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Configure AWS CLI:**
    Ensure your AWS CLI is set up with the correct credentials and region:
    ```bash
    aws configure
    ```
    You'll be prompted to enter:
    - AWS Access Key ID
    - AWS Secret Access Key
    - Default region name (e.g., `us-east-1`)

## Automated Deployment with GitHub Actions

This project uses GitHub Actions for automated deployment. The workflow is defined in `.github/workflows/deploy.yml`.

To use this workflow:

1. Add your AWS credentials to your GitHub repository secrets:
    - `AWS_ACCESS_KEY_ID`
    - `AWS_SECRET_ACCESS_KEY`

2. Push your changes to the `main` branch. The workflow will automatically deploy your stack.

## Testing

To test the API, send a GET request to the API URL:
```bash
curl https://jner4mrs02.execute-api.us-east-1.amazonaws.com/prod/
