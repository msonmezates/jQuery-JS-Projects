const express = require('express');
const app = express();

app.get("/", (req,res) => {
  res.render("home.ejs");
});

app.get("/fallinlovewith/:thing", (req,res) => {
  const {thing} = req.params;
  res.render("love.ejs", {thingVar: thing}); // To pass thing in to love.ejs file, we need to use an object. thingvar is our variable inside love.ejs file.
});

app.listen(process.env.PORT || 3000, () => console.log("Server has started..."));