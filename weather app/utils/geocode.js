const request = require("request");

const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1IjoicmF2aXBhdGVsNDQzIiwiYSI6ImNsZW1tamozOTBuaHAzcnFjZ2RxdXo0dDAifQ.D9xMfOwiPH1T5IPGIbzMbA&limit=1";
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("we are not able to find cordinates", undefined);
    } else if (body.error) {
      callback(body.error, undefined);
    } else {
      callback(undefined, {
        longitude: body.features[0].center[0],
        lattitude: body.features[0].center[1],
        places: body.features[0].place_name,
      });
    }
  });
};
module.exports = geocode;
