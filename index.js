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

const getCountriesByAlcoholProhibition = (prohibitionType) =>{
  let value;
  switch (prohibitionType) {
    case "none":
      value = "none";
      break;
    case "limited":
      value = "limited";
      break;
    case "regional":
      value = "regional";
      break;
    case "nationwide":
      value = "nationwide";
      break;
    default:
      throw new Error('Prohibition type must be "none", "limited", "regional" or "nationwide"');
  }
  return getCountriesByObject(value,"alcohol_prohibition");
}

/**
 * Returns an array of objects, each containing `country`, `capital`, `currency`, `native_language`,
 * `famous_for`, `phone_code`, `flag`, `drive_direction`, `continent`, `iso` and `tld`
 * filtered by `continentCode`
 * @param {string} continentCode The continent 2-letter code (not case-sensitive)
 * @returns {Array} An array of country objects
 */
const getCountriesByContinent = (continentCode) => {
  continentCode = continentCode.toLowerCase();

  return data.filter(country => country.continent
    .split("/")
    .includes(continentCode)
  );
};

/**
 * Returns an array with object containing `country`, `capital`, `currency`, `native_language`,
 * `famous_for`, `phone_code`, `flag`, `drive_direction`, `continent`, `iso` and `tld`
 * filtered by specific `iso`
 * @param {'numeric' | 'alpha_2' | 'alpha_3'} isoType The code of the country (ISO 3166-1 standard)
 * @param {string} isoValue The ISO code value (not case-sensitive) of the country
 * @returns {Array} An array with country object
 */
const getCountryDetailsByISO = (isoType, isoValue) => {
  let type;

  isoType = isoType.toLowerCase();
  isoValue = isoValue.toLowerCase();

  switch (isoType) {
    case "numeric":
      type = "numeric";
      break;
    case "alpha_2":
      type = "alpha_2";
      break;
    case "alpha_3":
      type = "alpha_3";
      break;
    default:
      throw new Error("isoType must be 'numeric', 'alpha_2' or 'alpha_3'");
  }

  return data.filter(country => country.iso[type] === isoValue);
};

/**
 * Returns an array of objects containing `country`, `capital`, `currency`, `native_language`,
 * `famous_for`, `phone_code`, `flag`, `drive_direction`, `continent`, `iso` and `tld`
 * filtered by `tld`
 * @param {string} tldName The name (not case-sensitive) of the country code top-level domain
 * @returns {Array} An array of country objects
 */
const getCountriesByTLD = (tldName) => {
  tldName = tldName.toLowerCase();

  return data.filter(country => country.tld
    .split("/")
    .includes(tldName)
  );
};

/**
 * Returns an array of objects containing all countries, each containing `country`, `capital`,
 * `currency`, `native_language`, `famous_for`, and `phone_code`, `flag`, `drive_direction`
 * and `constitutional_form` filtered by `constitutional_form`
 * @param {string} constitutionalFormName Name of country constitutional form
 * @returns {Array} An array of country objects
 */
const getCountriesByConstitutionalForm = (constitutionalFormName) => {
  const result = data.filter((country) => {
    return country.constitutional_form.includes(constitutionalFormName)
  });

  if (!result.length) {
    throw new Error(
      `No country was found! Available constitutional forms are:
      'republic', 'constitutional monarchy', 'absolute monarchy' and 'n/a'
    `);
  }

  return result;
}

/** 
 * Returns an array of objects containing all countries, each containing `country`, `capital`,
 * `currency`, `native_language`, `famous_for`, `phone_code`, `flag` and `drive_direction` filtered by `is_landlocked`
 * @param { Boolean } isLandLocked  Country that is surrounded by one or more countries
 * @returns {Array} An array of country objects
*/
const getCountriesByLandLock = (isLandLocked) => {
  return data.filter( country => country.is_landlocked === isLandLocked);
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
  getCountriesByAlcoholProhibition,
  getCountriesByContinent,
  getCountryDetailsByISO,
  getCountriesByTLD,
  getCountriesByConstitutionalForm,
  getCountriesByLandLock,
};
