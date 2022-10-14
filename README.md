# Simple Lamda-Severless service

This Repository holds the skeleton for the lambda functions needed for the BMH project.

Repo was bootstrapped by [serverless](https://www.serverless.com/)

## Run 

The project can be released manually using the `serverless` CLI.

1. Clone the repository `$ git clone git@github.com:amarachi-akuwudike/serverless-lambda-example.git`.
2. Install dependencies (`yarn install`)  
3. Add the environment variable for SNS_ARN.
4. run `serverless deploy --stage dev`.  

Default is `dev` if not provided.
