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

There are 5 routes:

- http:localhost:3000 - _displays all data_
- http:localhost:3000/download - _sends a download response_
- http:localhost:3000/redirect - _sends a redirect response to the LinkedIn website_
- http:localhost:3000/end - _sends an end response_
- http:localhost:3000/item/:id - _displays a specific item_
  - ':id' should be a number from 0 - 50 or any other included id number

There are **2** routes to access statically served files

- http:localhost:3000/tent.jpg - _sends a static file JPG image response from 'public'_
- http:localhost:3000/images/rocket.jpg - _sends a JPG file image response_

You may also test the following endpoints using Postman:

- http:localhost:3000/newItem - _sends a POST request to include a new item_
  - Object format should be:
  ```JSON
  {"id": Number,"first_name": String,"last_name": String,"email": String,"gender": String}
  ```
- http:localhost:3000/item - _this route accepts different method requests_
  - GET: _throws an error handled by a custom middleware_
  - PUT or DELETE: _send responses handled by a custom middleware_

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

The present application was developed with the help of Emmanuel Henri and is the result of completing the course with the same name on the [LinkedIn Learning](https://www.linkedin.com/learning/express-essential-training/welcome) platform.

Contact me for further information on:  
LinkedIn: [Nathan Santos](https://www.linkedin.com/in/nathan-santos-a512a053/ "Personal LinkedIn Profile")
