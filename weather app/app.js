const request = require("request");
const url =
  "http://api.weatherstack.com/current?access_key=57a7876a5110b1f536df7149146d3dac&query=Ahmedabad";
request({ url, json: true }, (err, res) => {
  console.log(res.body.current.temperature);
});
