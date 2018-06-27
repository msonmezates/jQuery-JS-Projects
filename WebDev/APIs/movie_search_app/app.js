const express = require('express');
const request = require('request');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req,res) => {
  res.render("search");
});

app.get('/results',(req,res) => {
  const query = req.query.search;
  request(`http://www.omdbapi.com/?s=${query}&apikey=thewdb`, (error, response, body) => {
    if(!error && response.statusCode === 200) {
      let data = JSON.parse(body);
      res.render('results', { data });
    } else {
      console.log(error);
    }
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Movie app has started...');
});