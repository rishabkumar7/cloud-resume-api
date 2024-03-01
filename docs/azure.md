# Cloud Resume API with Azure

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fcloudresumeapi.dev&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)
![GitHub Repo stars](https://img.shields.io/github/stars/rishabkumar7/aws-resume-api)


## Azure Resume API Challenge

Welcome to the Azure Resume API Challenge. A project where you will have the opportunity to build and deploy a serverless API using Azure Functions and CosmosDB, integrated with GitHub Actions. The primary goal? Construct an API that can serve resume data in JSON format.

## Challenge Objective 🎯

Your task is to create an Azure Function that fetches resume data stored in CosmosDB and return it in JSON format. To level up the challenge, integrate GitHub Actions to automatically deploy updates to your Azure Functions whenever you push changes to your git repository.

## Key Requirements

- CosmosDB Table: Set up a table named Resumes containing sample resume data.
- Azure Function: Fetch and return resume data based on an id. Utilize HTTP Trigger with anonymous access.
- GitHub Actions: Automatically package and deploy your Lambda function on every push to the repository.

**Bonus**: Use [Azure Bicep](https://learn.microsoft.com/en-us/azure/azure-resource-manager/bicep/overview?tabs=bicep) or [Terraform](https://www.terraform.io/) for infrastructure as code!

## Getting Started 🚀

- **Set Up Azure**: If you haven't already, sign up for an Azure account and set up your credentials. Remember, when using Azure secrets and never expose them in your code.
- **Create a JSON Resume**: Use [this schema](https://jsonresume.org/schema/) to create your own JSON resume.
- **Create Azure Resources**: Deploy the needed Azure services - CosmosDB and Azure Function.
- **Create Your Workflow**: Use the [provided GitHub Actions template](https://github.com/Azure/functions-action) as a guide, but feel free to innovate!
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
