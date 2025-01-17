# serverless-app-react-aws
Serverless application in AWS 

## Table of Contents
1. [About](#about)
2. [Getting Started](#getting-started)
3. [Contact](#contact)

## About
This project builds a React App for querying and inserting customer information to DynamoDB table.
This App will invoke AWS API Gateway GET and POST method for the query and data insertion.
The below AWS services are used for this project:
  AWS API Gateway - REST API
  AWS Lambda (Python)
  AWS DynamoDB
  
## Getting Started
### Prerequisites
### 1.0
- AWS Account
  - Create a Free tier account
  - URL: https://signin.aws.amazon.com/signup?request_type=register

- IAM User & Permissions
  - IAM user Assign required privileges to IAM user
  - Login as IAM user and not as root user to avoid potential security issues(Recommended)
### 1.1
- Installation on Local Machine
  - Node.js
    - Download URL: https://nodejs.org/en
  - Visual Studio Code
    - Download URL: https://code.visualstudio.com/
#### 1.2  
- Git Installation
  - Dwonload Link: https://git-scm.com/downloads
#### 1.3
- Clone the repository to local
    - React : git clone https://github.com/noelaanzi/serverless-app-react-aws.git
    - The Lambda fucntion python code <serverless-dynamodb-.py> is available in the below repository,
      you can just copy and use it as per your convenience.
    - Python: git clone https://github.com/noelaanzi/aws-lambda-dynamodb-python.git

### Steps
### 2.0
- Amazon DynamoDB
  - Create DynamoDB from AWS console
    - Table Name: [customer]   
    - Items : CustomerId,Name,Email 
    - For detailed tutorial please watch the video from below link:
      - YouTube Tutorial: AWS DynamoDB Tutorial | NoSQL Database
      - YouTube Link: https://youtu.be/pYT916ddW5s

 ### 2.1 
 - AWS Lambda
   - From AWS console create a Lambda Function to query and insert data to DynamoDB
     - YouTube Tutorial: AWS Lambda Tutorial | Beginner - Advanced
     - YouTube Link: https://youtu.be/La8uu9CHRIA

### 2.2
- AWS API Gateway
  - Create a new API Gateway API from AWS console to interact with React App and Lambda
  - YouTube Tutorial: AWS API Gateway - Lambda Integration Tutorial
  - YouTube Link: https://youtu.be/kv63fQiaPT0

### 2.3
- React App
  - Query and insert customer information through HTTP requests
  - Steps to run React App locally from VS Code
    * Afther repository is cloned locally as menntioned in [#### 1.3- Clone the repository to local]
    - Open the folder in VS code
    - Open Terminal
    - The [node_modules] folder may be missing which is usually excluded while uploading to GitHub repository
    - 2.3.1. Run below command to install Node modules  
            - npm install
    - 2.3.2. Run the build command to build the app
           - npm run build
    - 2.3.2. Run the commands to serve the files using a local HTTP server
            - npm install -g serve
    - 2.3.3. Run the command for serving production build
            - serve -s build
            - The above command will produce the below output
              copy and enter the local URL [http://localhost:3000] in the browser, which will open the React App
      
               ┌─────────────────────────────────────────┐
               │                                         │
               │   Serving!                              │
               │                                         │
               │   - Local:    http://localhost:3000     │
               │   - Network:  http://192.168.3.2:3000   │
               │                                         │
               │   Copied local address to clipboard!    │
               │                                         │
               └─────────────────────────────────────────┘
          
### 2.4
- Clean up Resources
  - Delete Amazon DynamoDB
  - Delete CloudWatch Logs
  - Delete IAM Roles
  - Delete Lambda Function
  - Delete API Gateway
    
## Contact
- Name: Arockiadoss Jesudoss
- GitHub: https://github.com/noelaanzi
- Linkedin: www.linkedin.com/in/arockiadoss-4756a4145
- YouTube: https://www.youtube.com/@IT-SkilL-MasteR
- Facebook: https://www.facebook.com/Arockiadoss.sna/
- Instagram : https://www.instagram.com/arockiadoss_sna/?hl=en

