/**
 * Importing modules
 */
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

import routes from "./src/routes/crmRoutes";

/**
 * Variable declaration
 */
const app = express();
const PORT = 4000;

/**
 * Mongoose connection
 */
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/CRMdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

/**
 * Bodyparser setup
 */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/**
 * Serving static files
 */
app.use(express.static("public"));

/**
 * App routes
 */
routes(app);
app.get("/", (req, res) =>
  res.send(`Node and express server running on port ${PORT}`)
);

app.listen(PORT, () => console.log(`Your server is running on port ${PORT}`));
