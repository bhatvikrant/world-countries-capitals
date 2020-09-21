let data = require("./data/data.json");

const randomNum = () => {
  return Math.floor(Math.random() * data.length);
};

/**
 * Returns the name of a random country from the list of
 * countries in the dataset
 * @returns {string} The name of a country picked at random
 */
const getRandomCountry = () => {
  let randNum = randomNum();
  return data[randNum].country;
};

/**
 * Returns an array having `count` number of different random country objects,
 * each object containing `country`, `capital`, `currency`, `native_language`,
 * `famous_for`, and `phone_code`.
 * @param {integer} count Number of country objects in the array to be returned
 * @returns {Array} An array having `count` number of country objects
 */
const getNRandomCountriesData = (count) => {
  let randomCountriesSet = new Set(); // to prevent duplicate countries
  while (randomCountriesSet.size < count) {
    let country = data[randomNum()];
    randomCountriesSet.add(country); // adds a country to the Array
  }
  return Array.from(randomCountriesSet); // Returns the Array
};

// Helper function
const getCountriesByObject = (value, obj) => {
  let resultArray = [];
  value = value.toLowerCase();
  object = obj;
  data.forEach((item) => {
    item[object] = item[object];
    if (item[object] && item[object].includes(value)) {
      resultArray.push(item);
    }
  });

  return resultArray;
};

/**
 * Returns an array of objects, each containing `country`, `capital`,
 * `currency` and `native_language` filtered by `capital` .
 * @param {string} capital The name (not case-sensitive) of the capital of the country
 * @returns {Array} An array of country objects
 */
const getCountryDetailsByCapital = (capital) => {
  return getCountriesByObject(capital, "capital");
};

/**
 * Returns an array of objects, each containing `country`, `capital`,
 * `currency` and `native_language` filtered by `country` .
 * @param {string} country The name (not case-sensitive) of the country
 * @returns {Array} An array of country objects
 */
const getCountryDetailsByName = (country) => {
  return getCountriesByObject(country, "country");
};

/**
 * Returns an array of objects, each containing `country`, `capital`,
 * `currency` and `native_language` filtered by the `languageSpoken` .
 * @param {string} languageSpoken The language spoken (not case-sensitive) by the country
 * @returns {Array} An array of country objects
 */
const getCountriesByLanguage = (languageSpoken) => {
  return getCountriesByObject(languageSpoken, "native_language");
};

/**
 * Returns an array of objects, each containing `country`, `capital`,
 * `currency` and `native_language` filtered by the `languageSpoken` .
 * @param {'left' | 'right'} direction The driving direction followed by the country
 * @returns {Array} An array of country objects
 */
const getCountriesByDriveDirection = (direction) => {
  let value;
  switch (direction) {
    case "left":
      value = "left";
      break;
    case "right":
      value = "right";
      break;
    default:
      throw new Error('direction must be "left" or "right"');
  }
  return getCountriesByObject(value, "drive_direction");
};

/**
 * Returns an array of objects containing all countries, each containing `country`, `capital`,
 * `currency`, `native_language`, `famous_for`, and `phone_code`
 * @returns {Array} An array of country objects
 */
const getAllCountryDetails = () => {
  return data;
};

/**
 * Returns an array containing the name of all the countries in the dataset
 * @returns {Array} An array of country objects
 */
const getAllCountries = () => {
  return data.map(({ country }) => country);
};

/**
 * Returns an array of objects containing all countries, each containing `country`, `capital`,
 * `currency`, `native_language`, `famous_for`, and `phone_code`, filtered by `famousThing`
 * @param {string} famousThing What the country is famous for
 * @returns {Array} An array of country objects
 */
const getCountriesByFamousFor = (famousThing) => {
  return data.filter(
    (country) => country.famous_for.search("\\b" + famousThing + "\\b") != -1
  );
};

module.exports = {
  getRandomCountry,
  getNRandomCountriesData,
  getCountryDetailsByCapital,
  getCountryDetailsByName,
  getAllCountryDetails,
  getAllCountries,
  getCountriesByLanguage,
  getCountriesByFamousFor,
  getCountriesByDriveDirection,
};
