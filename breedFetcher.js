const request = require('request');
const { assert } = require('chai');
const fetchBreedDescription = (breed, callback) => {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

  request(url, (err, res, body) => {
    if (err) {
      callback(err, null);
      return;
    }

    const data = JSON.parse(body);
    if (data.length === 0) {
      callback(`No description found for breed '${breed}'`, null);
      return;
    }

    const description = data[0].description;
    callback(null, description);
  });
};

module.exports = fetchBreedDescription;
