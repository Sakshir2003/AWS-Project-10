# AWS-Project-10
# Containerized Node.js Application (Project 10)

This project demonstrates how to containerize a Node.js web application using Docker and deploy it to a serverless AWS environment using **Amazon Elastic Container Service (ECS)** on **AWS Fargate** and **Amazon Elastic Container Registry (ECR)**.

## Architecture Overview

1.  **Node.js App**: A simple Express.js web server.
2.  **Docker**: Packages the Node.js app and its dependencies into a standard image.
3.  **Amazon ECR**: A fully managed container registry that stores our built Docker image.
4.  **Amazon ECS (Fargate)**: A serverless compute engine for containers. It pulls the image from ECR and runs it without us having to manage any underlying EC2 instances.

## Technologies Used
- Node.js & Express
- Docker
- Amazon Elastic Container Registry (ECR)
- Amazon Elastic Container Service (ECS)
- AWS Fargate
- Python & Boto3 (for automated deployment)

## Deployment Instructions

### Prerequisites
1.  **Docker Desktop** must be installed and running on your machine.
2.  AWS CLI configured with appropriate credentials.
3.  Python 3.7+ and `boto3` installed.

### Automated Deployment

Run the included deployment script to build the Docker image, push it to ECR, and deploy it to ECS automatically:

```bash
python deploy_infrastructure.py
```

**What the script does:**
1.  Creates a new Amazon ECR Repository.
2.  Authenticates Docker to your new ECR registry.
3.  Builds the Node.js Docker image locally.
4.  Pushes the built Docker image to ECR.
5.  Sets up an IAM Task Execution Role (so ECS can pull the image and write logs).
6.  Creates a CloudWatch Log Group.
7.  Creates an ECS Cluster.
8.  Registers an ECS Task Definition specifically for Fargate (defining CPU/Memory and Port mappings).
9.  Creates a Security Group that allows inbound traffic on port 3000.
10. Launches an ECS Service that spins up the container using Fargate.
11. Waits for the container to start and outputs the Public IP address for you to access the web app.

### Testing the App

At the end of the deployment script, it will provide a URL (e.g., `http://<PUBLIC_IP>:3000`). Simply click that link or paste it into your browser to see your containerized Node.js application running live on AWS!
