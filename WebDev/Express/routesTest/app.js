const express = require('express');
const app = express();

app.get("/", (req,res) => {
  res.send("Hi there!")
});

app.get("/speak/:myVariable", (req,res) => {
  const { myVariable } = req.params;
  res.send("This is the " + myVariable.toLowerCase());
});

app.get("/repeat/:myString/:id", (req,res) => {
  const { myString, id } = req.params;
  let message = '';
  for(let i=0; i<id; i++) {
    message += myString + ' ';
    
  }
  res.send(message);
});

// default route
app.get("*", (req,res) => {
  res.send("Sorry, page not found...")
});

app.listen(process.env.PORT || 3000, () => console.log("Server started..."));