var express = require('express');
var router = express.Router();

const userModel = require("./users");

router.use((req, res, next) => {
  // Middleware logic
  // Do operations
  next(); // Don't forget to call next() to move to the next middleware
  // Send response after other middlewares or route handlers are executed
  res.send("running");
});

/* GET home page. */
router.get('/', function(req, res) {
  res.render("index");
});

router.get('/create', async function(req, res) {
  const createdUser = await userModel.create({
    username: "Abhi",
    age: 21 // Assuming this should be the age value
  });

  // Send a response or handle the created user as needed
  res.send("User created: " + createdUser);
});

module.exports = router;
