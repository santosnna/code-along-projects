# Express Essential Training
This is web application consists of a backend server with routing endpoints to retrieve data from a JSON file, to serve static files such as images, and to simulate POST, PUT and DELETE requests. It was created using the Express application generator.

It contains the following folder structure:
- [express-app](./express-app)
  - [data:](./express-app/data) contains the JSON file which is consumed by the application
  - [images:](./express-app/images) contains a JPG file sent to one of the routes
  - [public:](./express-app/public) contains the files served statically

## Getting started
Execute in terminal:
```bash
npm install
npm start
```

The server runs on port **3000** . <!-- Check for port on project -->

### App routes
There are 7 routes:
- http:localhost:3000 - *displays all data*
- http:localhost:3000/tent.jpg - *sends a static file JPG image response from 'public'*
- http:localhost:3000/download - *sends a download response*
- http:localhost:3000/redirect - *sends a redirect response to the LinkedIn website*
- http:localhost:3000/end - *sends an end response*
- http:localhost:3000/item/:id - *displays a specific item*
  - ':id' should be a number from 0 - 50 or any other included id number
- http:localhost:3000/images/rocket.jpg - *sends a JPG file image response*

You may also test the following endpoints using Postman:
- http:localhost:3000/newItem - *sends a POST request to include a new item*
  - Object format should be:
  ```JSON
  {"id": Number,"first_name": String,"last_name": String,"email": String,"gender": String}
  ```
- http:localhost:3000/item - *this route accepts different method requests*
  - GET: *throws an error handled by a custom middleware*
  - PUT or DELETE: *send responses handled by a custom middleware*

## Development
This project uses the Node.js environment to support the backend server.  
Visit http://nodejs.org for more information.

This project uses the Express framework for routing endpoints.  
Visit https://expressjs.com/ for more information.

This project uses some of EcmaScript2015 (ES6) syntax and Babel JavaScript compiler as a compatibility best practice.  
Visit https://www.w3schools.com/js/js_es6.asp and https://babeljs.io/docs/en/ for more information.

This project uses the "serve-favicon" middleware for serving a favicon.  
Visit https://www.npmjs.com/package/serve-favicon for more information.

This project uses the "path" middleware.  
Visit https://www.npmjs.com/package/path for more information.

## Credits
The present application was developed with the help of Emmanuel Henri and is the result of completing the course with the same name on the LinkedIn Learning platform.

Contact me for further information on:  
LinkedIn: [Nathan Santos](https://www.linkedin.com/in/nathan-santos-a512a053/ "Personal LinkedIn Profile")