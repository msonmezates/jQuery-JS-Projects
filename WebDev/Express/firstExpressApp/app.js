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

// Let's create a pattern by using route parameters i.e. params
// Here is a reddit example
app.get("/r/:subredditName", (req, res) => {
  let { subredditName } = req.params;
  res.send(`Welcome to the ${subredditName.toUpperCase()} Subreddit!`);
});

// Another reddit example with more params
app.get("/r/:subredditName/comments/:id/:title", (req,res) => {
  // console.log(req.params);
  res.send("Welcome to the COMMENTS PAGE!");
});

// Default route(*) if it doesn't exist
// If I put this route at the top of the file, it will redirect to default route no matter what!!!
// Therefore order of routes matter in express!
app.get("*",(req,res) => {
  res.send("This is the default route");
});


app.listen(process.env.PORT || 3000, () => {
  console.log("Server has started!");
});