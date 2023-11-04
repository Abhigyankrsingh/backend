var express = require('express');
var router = express.Router();

const userModel = require("./users");

// Middleware function
router.use(function(req, res, next) {
  // Perform some middleware actions
  console.log('Middleware executed');
  // Continue to the next middleware or route handler
  next();
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

router.get("/allusers", async function(req, res) {
  let allUsers = await userModel.find();
  res.send(allUsers);
});

router.get("/findUser", async function(req, res) {
  let user = await userModel.findOne({ username: "Abhi" });
  res.send(user);
});

router.get("/delete", async function(req,res){
  await userModel.findOneandDelete({
     username: "Abhi"
  });

  res.send(deleteduser);
})

router.get("/allusers", async function (req,res){
  let all = await userModel.find()
  res.send(all);
});

router.get("/", function (req,res){
  req.session,ban = true;
  res.render("index");
});

module.exports = router;
