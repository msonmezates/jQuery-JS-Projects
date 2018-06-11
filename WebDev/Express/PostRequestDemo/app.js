const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true })); // this is boilerplate to use body-parser

app.set("view engine", "ejs");

const friends = ["John","Doe","Jane","Tony","Sam"]; // declare an araay of friends globally

app.get("/", (req,res) => {
  res.render("home");
});

app.post("/addfriend", (req,res) => {
  console.log(req.body.newfriend); // the form has always body...newfriend comes from form in friends.ejs file 
  let newFriend = req.body.newfriend; 
  friends.push(newFriend);
  res.redirect("/friends"); // res.redirect is useful to updates forms
});

app.get("/friends", (req,res) => {
  res.render("friends", { friends });
});

app.get("*", (req,res) => {
  res.send("404 Error not found!")
});

app.listen(process.env.PORT || 3000, () => console.log("Server has started..."));