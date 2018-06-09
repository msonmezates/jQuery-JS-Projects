const express = require('express');
const app = express();

app.get("/", (req,res) => {
  res.render("home.ejs");
});

app.get("/fallinlovewith/:thing", (req,res) => {
  const {thing} = req.params;
  res.render("love.ejs", {thingVar: thing}); // To pass thing in to love.ejs file, we need to use an object. thingvar is our variable inside love.ejs file.
});

app.get("/posts", (req,res) => {
  const posts = [
    {title:'title1', author: 'author1'},
    {title:'title2', author: 'author2'},
    {title:'title3', author: 'author3'},
  ];

  res.render("posts.ejs",{posts});
});

app.listen(process.env.PORT || 3000, () => console.log("Server has started..."));