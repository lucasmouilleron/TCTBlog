---
layout: post
title: Diplomatic Cover project builder
categories: [code]
tags: [grunt, build]
picture: http://haveidols.com/grabs/Screen%20Shot%202014-06-25%20at%2011.28.32.png
description: Concepts and main tasks of our project builder we use at Diplomatic Cover
---
{% include JB/setup %}

Here at Diplomatic Cover, we want our webapps and websites to be _tested_, _optimzed_ and _maintainable_.

To reach theses goals, we use __battle tested technology stack__, a __normalized files tree__, a __custom project builder__ and __multiple environments deployments__.

##Files tree
- build : our build module > dc-build
- local : non vesionned files such as config file ```config.json```, sass caches, etc.
- db : db dumps
- dev : JS (require) ans SASS sources
- samples : sample files (automatically duplicated and configured)
- web : final website or webapp directory

##Main tasks of our custom builder
The builder is a collection of Grunt contrib and custom tasks

###Automatic project configuration : 
- ```grunt init```
- Copies and configures the sample files that lives in the ```samples``` folder
- Files are copied from ```samples``` to ```web``` whilst keeping the original tree from ```samples```
- While copying, content that matches patterns {dc:*} are replaced with values defined in the main config file
- For example : 
    - Sample files ```samples/test/wp-config.php``` and ```samples/.htaccess``` are copied in ```web/test/wp-config.php``` and ```web/.htaccess```
    - In file ```samples/test/wp-config.php```, the string ```{dc:dbName}``` is replaced by the ```dbName``` parameter defined in ```local/config.json```

###Database management and versionning : 
- The dump file ```db/project-name.sql``` is versionned
- ```grunt db:restore``` : Loads data in the database from the dump file
- ```grunt db:backup``` : Dumps the database to the dump file
- When commiting changes, if some database modifications were done, run ```grunt db:backup``` before commiting
- When checkouting or upating, run ```grunt db:restore``` the be up to date with the versionned database

###Compilation
- SASS and JS (require) source watching and compilation
- Browser syncing : ```grunt sync``` synces the browser and source files (css injection, live reload for the rest)

###The "build" task :
- Compiles the project 
- By default, ```init``` then ```compile:styles``` and then ```compile:scripts```
- Is called when deploying the project on testings and production environments

##Automated deployments
We use 3 environments : internal testing, (dev team, project management), external testing (clients) and production.
We deploy projects on these environments from our svn server with tags.

###The deploying process : 
- Exporting the project in a tmp directory from its repository in ```/tmp/PROJECT_NAME```
- Running the project ```build``` task with the targeted environment ```config.json``` file
- Moving the built project to its final destination : an Apache served folder
- Then notifying dev team, project management and / or client a new version of the product is available for testing
- And finally removing the folder ```/tmp/PROJECT_NAME```

###Node modules optimization : 
Grunt requires to run ```npm install``` to download and install the Gruntfile dependencies.
Because we do not want to version theses files (in node_modules), we'd have to run this long command on every deployment

And because we are a bit smart, here is what we do : 

- The ```package.json``` file is where we keep track of grunt external dependencies
- If this file changes, dependencies have changed
- We keep the svn version number within the file as so : ```"version": "$Id$"```
- Just before building the project, we look if the folder ```/tmp/node_modules/PROJECT_NAME/VERSION_NUMBER/node_modules``` exsits
- If it doesn't, we copy the project build folder in ```/tmp/node_modules/PROJECT_NAME/VERSION_NUMBER``` and perform the ```npm install```
- In all cases, we copy ```/tmp/node_modules/PROJECT_NAME/VERSION_NUMBER/node_modules``` files in ```/tmp/PROJECT_NAME/build/nodes_modules```

##Builder maintainability and customization
- The builder is kept in its own repository
- The configuration is kept in the ```config``` folder of each projects
- If specific tasks need to be added or modified, the builder is duplicated within the project

##Final thoughts
> It is a good practice to use a common build process, whether working on local or testing on pre production environments

<!-- tsk -->

> The sample files dedicated ```samples``` tree is great to setup evironment contextualized files as it avoids poluting the ```web``` folder with unused sample files