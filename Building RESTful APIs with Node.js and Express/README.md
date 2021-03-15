# Building RESTful APIs with Node.js and Express.js

This is a backend application with endpoints to add, delete, update and pull data a CRM. Currently, it does not have a user interface and should be accessed via Postman or similar.

It contains the following folder structure:

- [CRM](./CRM)
  - [public](./CRM/public) contains the files served statically
  - [src](./CRM/src) contains the main structure for the application
    - [controllers](./CRM/src/controllers) contains the functions that manipulate data
    - [models](./CRM/src/models) contains the MongoDB models for persisting data
    - [routes](./CRM/src/routes) contain the routing to access the data

## Getting started

Execute in terminal:

```bash
npm install
npm start
```

The server runs on port **4000** .

There are **3** routes which accept multiple method requests:

- http:localhost:4000
- http:localhost:4000/contact
  - GET: _pulls contacts from database_
  - POST: _adds a contact to database_
  - Object format should be:
  ```JSON
  {"firstName": String,"lastName": String,"email": String,"company": String,"phone": Number,"created_date": Date(UTC format)}
  ```
- http:localhost:4000/contact/:id
  - :id should be the \_id value from MongoDB
  - GET: _pulls data from specific contact_
  - PUT: _updates data for the specified contact_
  - DELETE: _deletes specified contact from database_

There are **2** routes to access statically served files

- http://localhost:4000/football.jpeg
- http://localhost:4000/sky.jpeg

The server persists using `MongoDB`.

## Development

This project uses the Node.js environment to support the backend server.  
Visit http://nodejs.org for more information.

This project uses the Express framework for routing endpoints.  
Visit https://expressjs.com/ for more information.

This project uses some of EcmaScript2015 (ES6) syntax and Babel JavaScript compiler as a compatibility best practice.  
Visit https://www.w3schools.com/js/js_es6.asp and https://babeljs.io/docs/en/ for more information.

This project uses MongoDB as database.  
Visit https://www.mongodb.com/ for more information.

This projects uses Mongoose to build schemas.  
Visit https://mongoosejs.com/ for more information.

## Credits

The present application was developed with the help of Emmanuel Henri and is the result of completing the course with the same name on the [LinkedIn Learning](https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express/building-a-rest-api-with-node-and-express) platform.

Contact me for further information on:  
LinkedIn: [Nathan Santos](https://www.linkedin.com/in/nathan-santos-a512a053/ "Personal LinkedIn Profile")
