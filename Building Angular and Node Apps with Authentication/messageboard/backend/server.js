/**
 * Importing modules
 */
var express = require("express");
var jwt = require("jsonwebtoken");

/**
 * Variable declaration
 */
var app = express();
var api = express.Router();
var auth = express.Router();

app.use(express.json());

var messages = [
  { text: "Hello", owner: "Tim" },
  { text: "Hey", owner: "Jane" },
];

var users = [{ firstName: "a", email: "a", password: "a", id: 0 }];

/**
 * Setting CORS
 */
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});


/**
 * App routes
 */
api.get("/messages", (req, res) => {
  res.json(messages);
});

api.get("/messages/:user", (req, res) => {
  var user = req.params.user;
  var result = messages.filter((message) => message.owner == user);

  res.json(result);
});

api.post("/messages", (req, res) => {
  messages.push(req.body);
  res.json(req.body);
});

api.get('/users/me', checkAuthenticated, (req, res) => {
  res.json(users[req.user]);
});

api.post('/users/me', checkAuthenticated, (req, res) => {
  var user = users[req.user];

  user.firstName = req.body.firstName;
  user.lastName = req.body.lastName;

  // res.json(user);
});

auth.post("/login", (req, res) => {
  var user = users.find((user) => user.email == req.body.email);

  if (!user) sendAuthError(res);
  if (user.password == req.body.password) sendToken(user, res);
  else sendAuthError(res);
});

auth.post("/register", (req, res) => {
  console.log(req.body)
  var index = users.push(req.body) - 1;
  var user = users[index];
  user.id = index;

  sendToken(user, res);
});

/**
 * This function sets a JWT token for a specific user identified by and id along with the private key decoder 
 * @param {*} user 
 * @param {*} res 
 */
function sendToken(user, res) {
  // In production, the key parameter should not be hard-coded and should come from a configuration file instead
  var token = jwt.sign(user.id, "123"); 
  res.json({ firstName: user.firstName, token });
}

/**
 * This function sends an error message in case of an inexisting user
 * @param {*} res 
 * @returns a JSON object with a message
 */
function sendAuthError(res) {
  return res.json({ success: false, message: "Email or Password incorrect" });
}

/**
 * This function checks whether the user has been authenticated with a valid name and password
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function checkAuthenticated(req, res, next) {
  if(!req.header('authorization')) 
    return res.status(401).send({message: 'Unauthorized request. Missing authentication header.'});

  var token = req.header('authorization').split(' ')[1];
  var payload = jwt.decode(token, '123');

  if(!payload) return res.status(401).send({message: 'Unauthorized request. Authentication header invalid.'});

  req.user = payload;

  next();
}

/**
 * Router setting
 */
app.use("/api", api);
app.use("/auth", auth);

app.listen(63145, () => {console.log('Server running on port 63145')});
