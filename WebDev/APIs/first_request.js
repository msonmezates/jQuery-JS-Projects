// Example of using request package
const request = require('request');

// google api example
// request('http://www.google.com', (error, response, body) => {
//   if(error) {
//     console.log('Something went wrong!');
//     console.log(error);
//   } else if (response.statusCode === 200) {
//     console.log(body);
//   }
// });

// yahoo weather api example
console.log("Sunset time in Hawai is at...");
request('https://query.yahooapis.com/v1/public/yql?q=select%20astronomy.sunset%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22maui%2C%20hi%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys', (error,response,body) => {
  if(!error && response.statusCode === 200) {
    const parsedData = JSON.parse(body);
    console.log(parsedData.query.results.channel.astronomy.sunset);
  }
});