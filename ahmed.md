//Done//
Where you stopped:
-write the circle ci file so to be able to deploy (tests and deployment, try to write a simple command so to test the bin/deploy.sh file)
-write the files of bin/deploy.sh in both api and front
-crate services
-add pipeline screenshots as for descriptions + real description
-bin is not recongnized => SO WE FIRST DO (eb init ...) THEN (eb create --sample) THEN (use and deploy and fix)



//In Progress//
-central configuration file is used to add env variables []
-add documentation folder for the three things required (see the description) => [almost_done] [pipeline_screenshots] 
-two diagrams showing high-level view of the infrastructure + diagram showing the pipline (see the description)
arrows etc [almost_done] [pipeline_diagram]

-Create circle ci process to ensure everything is working just fine and know how to configure circle ci (you can make [almost_done] [deploy]
a simple ci circle) (including env variables, make sure to not change any of them) don't forget to the change the port in server.ts (remove hardconding)
-try to update the configurations from the code (why it doesn't work) very strange
-add comments each time you put a new command and make them straight to the point 


-try to add an uri in your .env host vairable and see if the connections is established successfully or not, and don't change the way sequelize connect to a database
-Create services and make sure every service works fine (including the env variables)
-update circle ci with required env variables
-env variables including aws_bucket, 
-remove password and other unrelated env variables from .sh in api
-update the host api in environment file (add env-variables from the local environment to the eb service)
-udpate the database link in sequalize file
-Connect them together and make sure they work properly (take screeshots of them)
-Make sure building commands and circle ci works fine when trying to update or something (take screenshots) (including env variables)
-screen shots for the configuration screen in circle ci (to show where the env variables were added)


docs:
-provide the link for the app
-screenshots folder
-params for env

-understand what's left