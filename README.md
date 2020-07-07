# Social Networking API
Node.js based social networking application where friends may comment on each other's posts, to demonstrate the backend work supported by a MongoDB and Mongoose ODM, and the API routes from an Express.js server, as seen by testing locally through the Insomnia tool.

## GitHub URL

https://github.com/ktrnthsnr/socialNetworkAPI


## Table of Contents

* [Description](#description)
* [Technology](#technology)
* [Installations](#installations)
* [Usage](#usage)
* [Testing](#testing)
* [Schema](#schema)
* [Userstory](#Userstory)
* [Contribution](#contribution)

## Description

- In this social networking application API, users may create a list of friends, then post some of their thoughts and also react to each other's thoughts. Additionally, users may be able to edit or delete these as well. 

- The Node.js based API uses Express.js for routing, MongoDB as the NoSQL backend database, Mongoose Object Data Management (ODM) system to manage the database queries, and Moment.js npm package to format any time dependent aspects of the application. 

- This Readme.md includes a walkthrough of the backend portion of the work required by a website to provide large amounts of unstructured data.  The walkthrough listed under the TOC Usage, shows the application if it were cloned to a localhost and started at the Node.js commandline, with the API endpoints viewed through the Insomnia tool. Invoking the application at the bash terminal, the JavaScript begins with the start up of the Express.js server which then creates the Mongoose table models, syncing to the MongoDB backend. Then through the debugging Insomnia tool, you can view the API routes and JSON output shown when a user is created, their friends are added to their lists, and their thoughts and reactions to their friends' thoughts are added, updated or removed. 

## Technology

MongoDB, Express.js, Mongoose, Insomnia, Node.js, JavaScript, ES6, npm, Moment.js

## Installations

- Prereq: install VSCode, Node.js, and MySQL http://dev.mysql.com/downloads/
- After cloning the GitHub repo to your local drive, run the following in the VSCode command-line terminal
- Install all components listed within the package.json file for npm
- $ `npm i`
-
- For custom installations, start with initializing npm
- $ `npm init -y` or $ `npm install`
- Manaully update the package.json to  `"main": "server.js",` instead of index.js
- Create a .gitignore file in the root and add `node_modules` to this file
- If you need to re-add the dependencies, run $ `npm install`

## Usage

- If this applicatin is cloned from github, complete the installationt, then start up at the bash commandline, by typing
- $ `npm start`
- Here is walkthrough of the application from the localhost, if viewing the API routes through Insomnia,
https://drive.google.com/file/d/1dJ-OlTGk3EytEQz7VkF12kezHgnAioXQ/view
- 
![site](./img/site.jpg "insert")


## Testing

- For testing the API routes locally, here is an Insomnia walkthrough to view GET, POST, PULL, DELETE API routes
<insert Screencastify link>

## Schema

## Userstory
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data

## Contribution

ktrnthsnr

### ©️2020 ktrnthsnr
