# Building Angular and Node Apps with Authentication
This is a message board web application with both front-end and back-end components. The system displays messages registered in the application, which can be filtered by name, and has a function for posting new messages that are updated in real time sending notifications for success or failure. It allows for user registration with appropriate form validation and login/logout of existing accounts.

The folder structure is as follows:
- [messageboard](./messageboard)
  - [backend:](./messageboard/backend) serves the Web API to post and get the messages
  - [frontend:](./messageboard/frontend) Angular app 
    - [src](./messageboard/frontend/src)
      - [app:](./messageboard/frontend/src/app) contains the custom components of the application


## Getting started
For the frontend application, execute in terminal:
```bash
npm install
npm start
```
OR
```bash
npm install
ng serve
```
The Angular server runs on port **4200**.


For the backend application, execute in terminal:
```bash
npm install
nodemon .\server.js
```
The NodeJS server runs on port **63145**. 

### App routes
There are 6 routes which can be used with the **frontend** application:
- http:localhost:4200/ - *homepage*
- http:localhost:4200/messages - *displays messages*
- http:localhost:4200/messages/:user - *displays message from specific user*
  - ':user' should be a registered user name
- http:localhost:4200/login - *logs in registered users*
- http:localhost:4200/register - *register a new user to the application*
- http:localhost:4200/user - *allows changes to a user's First Name and Last Name*

You may also test the following endpoints using Postman:
- http:localhost:63145/api/messages
  - POST: *posts a new message to in-app memory*
  ```JSON
  {"text": String, "owner": String }
  ```


## Development
This project uses the Angular framework to build the frontend application.  
Visit https://angular.io/ for more information.

This project uses the Angulas Material UI component library to build reactive forms and notifications.  
Visit https://material.angular.io/ for more information.

This project uses the Typescript syntax.  
Visit https://www.typescriptlang.org/ for more information.

This project uses the Node.js environment to support the backend server.  
Visit http://nodejs.org for more information.

This project uses the Express framework for routing endpoints.  
Visit https://expressjs.com/ for more information.

This project uses JSON Web Token to encrypt sensitive information sent as requests or responses.  
Visit https://jwt.io/introduction for more information.

This project uses Cross-Origin Resource Sharing (CORS).  
Visit https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS for more information.

## Credits
The present application was developed with the help of Alexander Zanfir and is the result of completing the course with the same name on the LinkedIn Learning platform.

Contact me for further information on:  
LinkedIn: [Nathan Santos](https://www.linkedin.com/in/nathan-santos-a512a053/ "Personal LinkedIn Profile")
