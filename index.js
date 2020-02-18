let data = require("./data/data.json");

const randomNum = () => {
    return Math.floor(Math.random() * data.length);
};

// Get a random country
const getRandomCountry = () => {
    let randNum = randomNum();
    return data[randNum].country;
};

// Get data of N countries
const getNRandomCountriesData = count => {
    let randomCountriesSet = new Set(); // to prevent duplicate countries
    while (randomCountriesSet.size < count) {
        let country = data[randomNum()];
        randomCountriesSet.add(country); // adds a country to the Array
    }
    return Array.from(randomCountriesSet); // Returns the Array
};

// Helper function

// const getCountriesByField = (value, fieldName) => {
// 	let resultArray = [];
// 	value = value.toLowerCase();
// 	field = fieldName;
// 	data.forEach((item) => {
// 		item[field] = item[field].toLowerCase();
// 		if (item[field] && item[field].includes(value)) {
// 			resultArray.push(item);
// 		}
// 	});

const getCountriesByObject = (value, obj) => {
    let resultArray = [];
    value = value.toLowerCase();
    object = obj;
    data.forEach(item => {
        item[object] = item[object];
        if (item[object] && item[object].includes(value)) {
            resultArray.push(item);
        }
    });

    return resultArray;
};

// // Get details of a country by the capital name

// const getCountryDetailsByCapital = (capital) => {
// 	return getCountriesByField(capital, 'capital');
// };

// // Get details of a country by the country name
// const getCountryDetailsByName = (country) => {
// 	return getCountriesByField(country, 'country');
// };

// // Get country details by the language spoken
// const getCountiesByLanguage = (languageSpoken) => {
// 	return getCountriesByField(languageSpoken, 'native_language');

const getCountryDetailsByCapital = capital => {
    return getCountriesByObject(capital, "capital");
};

// Get details of a country by the country name
const getCountryDetailsByName = country => {
    return getCountriesByObject(country, "country");
};

// Get country details by the language spoken
const getCountriesByLanguage = languageSpoken => {
    return getCountriesByObject(languageSpoken, "native_language");

};

// Get details of all countries
const getAllCountryDetails = () => {
    return data;
};

// Get all countries Name
const getAllCountries = () => {
    return data.map(({ country }) => country);
};

module.exports = {
    getRandomCountry,
    getNRandomCountriesData,
    getCountryDetailsByCapital,
    getCountryDetailsByName,
    getAllCountryDetails,
    getAllCountries,
    getCountriesByLanguage
};
