var express = require('express');
var router = express.Router();

const userModel = require("./users");


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
  res.send("User created: " + createdUser); // Use res.send to send a string as a response
});


router.get("/allusers", async function(req,res){
  let allusers = await userModel.find();
  res.send(allusers);
})



module.exports = router;
