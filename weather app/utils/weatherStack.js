const request = require("request");

const weatherStack = (lattitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=49b6a4eaa833e4363f16214a2d8e58d1&query=${lattitude},${longitude}`;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("we are not able connect weather stack", undefined);
    } else if (body.error) {
      callback(
        "unable to find location you entered in weather stack",
        undefined
      );
    } else {
      callback(undefined, {
        temperature: body.current.temperature,
        feel_like: body.current.feelslike,
        name_: body.location.name,
        region: body.location.region,
        country: body.location.country,
      });
    }
  });
};
module.exports = weatherStack;
