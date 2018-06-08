const express = require('express');
const app = express();

// Let's define the routes
// "/" will display "Hi there!"
app.get("/",(req,res) => {
  res.send("Hi there!");
});
// "/bye" will display "Goodbye!"
app.get("/bye",(req,res) => {
  res.send("Goodbye!");
});
// "/dog" will display "Wuff!"
app.get("/dog",(req,res) => {
  console.log("You just made a request to '/dog'");
  res.send("Wuff!");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server has started!");
});