/**
 * Importing modules
 */
import express from "express";
import favicon from "serve-favicon";
import path from "path";

import data from "./data/data.json";


/**
 * Variable declaration
 */
const app = express();
const PORT = 3000;


/**
 * Middleware setting
 */
// This is for the public folder on path /
app.use(express.static("public"));

// Method to use json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// This is for images folder on path images
app.use("/images", express.static("images"));
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

// This set a custom middleware for always logging the method and the origin URL
app.use(origin);

// This is for proxies
app.set("trust proxy", "loopback");


/**
 * App routes
 */
app.get("/", (req, res) => {
  res.json(data);
});

app.get("/download", (req, res) => {
  res.download("images/rocket.jpg");
});

app.get("/redirect", (req, res) => {
  res.redirect("http://www.linkedin.com");
});

app.get("/end", (req, res) => {
  console.log("This route uses the end() method which quickly ends the response process without any data.");
  res.end();
});

app.get(
  "/item/:id",
  (req, res, next) => {
    // this is the middleware that pulls the data
    let user = Number(req.params.id) -1;
    console.log(data[user]);
    res.send(data[user]);
    next();
    // this entire block is a middleware
  },
  // this function only runs due to the previous middleware
  (req, res) => console.log("The content above comes from a custom middleware.")
);

app.post("/newItem", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});


// This block uses the route() method to chain the possible requests methods to the same route
app
  .route("/item")
  .get((req, res) => {
    throw new Error();
  })
  .put((req, res) => {
    res.send(response(req));
  })
  .delete((req, res) => {
    res.send(origin());
  });


/**
 * This is a custom middleware to log the original URL and the METHOD used in the request object
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function origin(req, res, next) {
  console.log(`Request from: ${req.originalUrl}`);
  console.log(`Request type: ${req.method}`);
  
  next();
}

/**
 * This function sends a reply used with the response object
 * @param {*} req 
 * @returns a message with the METHOD and original URL from the request object
 */
function response(req) {
  return `A ${req.method} request with ${req.originalUrl} route on port ${PORT}`;
}

/**
 * This is the Error Handling function used as the middleware for the same purpose
 * @param {*} err 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function errorHandling(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send(`
  Red alert! Red alert! Watch out, honey. We have got the status ${res.statusCode} and the error below:
  ${err.stack}
  `);
}

/**
 * Server setting
 */
app.use(errorHandling);

app.listen(PORT, () => {
  console.log(`Your server is running on port ${PORT}`);
});
