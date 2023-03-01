const geocode = require("./utils/geocode");
const weatherStack = require("./utils/weatherStack");
const express = require("express");
const app = express();

geocode("ahmedabad", (error, { longitude, lattitude, places }) => {
  console.log(longitude, lattitude, places);
  weatherStack(
    lattitude,
    longitude,
    (error, { temperature, feel_like, name_, region, country }) => {
      console.log(`we are currently in ${places}, and temprature is ${temperature} and it feel's like
      ${feel_like} and name is ${name_} region is ${region} and country is ${country}`);
    }
  );
});
app.listen(3000, () => {
  console.log("we are succesfullu running our app on 3000");
});
