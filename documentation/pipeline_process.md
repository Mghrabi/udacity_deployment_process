# Pipeline Workflow

- build
    - Install node.js of version 14.5
    - Install frontend dependencies
    - Install api dependencies 
    - Apply linting on the frontend
    - Build frontend 
    - Build api

- hold
    - Waiting for a manual approval after the build test has gone with no errors
- deploy
    - Install node.js of version 14.5
    - eb setup
    - aws-cli setup
    - Install frontend dependencies
    - Install api dependencies 
    - Build frontend 
    - Build api
    - deploy frontend
    - deploy api

## Simple diagram for the pipeline

## Successful Pipeline Workflow (screenshots)
