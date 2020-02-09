const fs = require("fs");

fs.readFile("./data/data.json", (err, data) => {
    if (err) throw err;
    let countries = JSON.parse(data);

    let toLowerCaseCountries = countries.map(item => {
        return {
            country: item.country.toLowerCase(),
            capital: item.capital.toLowerCase(),
            currency: item.currency.toLowerCase(),
            native_language: item.native_language.toLowerCase()
        };
    });

    let dataToBeWritten = toLowerCaseCountries.map(item => {
        return JSON.stringify(item, null, 4);
    });

    fs.writeFile("./data/data2.json", dataToBeWritten, err => {
        if (err) throw err;
        console.log("Data is written");
    });
});
