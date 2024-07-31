# Azure Resume Challenge
https://github.com/pjferguson/azure-resume
Visit my site! https://www.promyse.info/

## Overview

This project involves setting up and customizing an Azure-based solution with various components:

- **Google Cloud Function (GCF)** for handling HTTP requests and interacting with Firestore.
- **Firestore Database** for storing resume data.
- **GitHub Actions** for CI/CD automation.

## Key Components

- **HTML Customization**: Working through HTML files to tailor the page to experience and goals.
- **JavaScript Configuration**: Implemented `js.main` to count site visitors.
- **Azure DB NoSQL**: Configured for storing website count data, including database, container, and data setup.
- **Azure Functions**: Created with Python, overcoming dependency installation issues in VSCode.

## Progress Log

### 5/28/24

- Created a new key pair for cloning the repo over SSH.
- Managed keys for secure access to GitHub repositories.
- **Virtual Environment**: Installed different packages and Python versions without affecting other projects.
- **Azure Functions**:
  - Set up and triggered locally.
  - Key takeaways: Read Microsoft documentation thoroughly and use virtual environments.


### 5/31/24

- **local.settings.json**: Used for storing secrets and keys locally.
- **Azure Functions Templates**: Provided language-specific templates for new code projects.
- Encountered issues running functions locally due to Python version mismatches.
- Created a class file for holding objects, imported into function file.


### 6/3/24

- Reviewed Microsoft Learn material on Cosmos DB.
- **Cosmos DB** supports multiple APIs for diverse data handling.

### 6/4/24

- **Azure Functions Configuration**:
  - `function.json`: Defines triggers, bindings, and settings.
  - Bindings connect resources to functions.

### 6/5/24

- Reference for Python developers: [Azure Functions Python Reference](https://learn.microsoft.com/en-us/azure/azure-functions/functions-reference-python?tabs=asgi,application-level&pivots=python-mode-decorators)

### 6/6/24

- Required a partition key to read items in Cosmos DB.
- Configured backend, connected DB values to API via JavaScript, and resolved CORS issues.
- Deployed local function to Azure, used Azure Key Vault for secure secret management.
- **CI/CD**:
  - Defined as version control, continuous integration, delivery, and deployment processes.
  - Reconfigured access for Azure Functions and updated CORS settings.

### 6/8/24

- Integrated Azure Key Vault values with Azure Functions.

### 6/10/24

- Resolved function execution issues.
- **Secure Secret Management**:
  - Used Azure Key Vault for endpoint security.
  - Configured Azure Blob Storage for HTML file hosting.
- **CDN Configuration**:
  - Updated DNS CNAME records for the static website.
- **CI/CD Pipeline**:
  - Implemented workflows for automated deployment.
  - Updated Azure Key Vault access and CORS settings.

### 6/11/24

- **GitHub Actions**:
  - Stored Azure credentials and storage access keys as secrets.
  - Developed a frontend CI/CD workflow for automated deployment.

