let data = require("./data/data.json");
let request = require('request');
let fs = require('fs');

const importData = async () => {
    const promises = []
    for (let row of data) {
        let country = row.country;
        promises.push(new Promise((resolve) => {
            request.get({
                url: 'https://api.api-ninjas.com/v1/country?name=' + country,
                headers: {
                    'X-Api-Key': '4NQ1QG5lCfqooEGtRQ+Z5Q==I6hRiII2fmXbBNLs'
                    // YOUR_API_KEY
                },
            }, function (error, response, body) {
                if (error) return console.error('Request failed:', error);
                else if (response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
                else {
                    let json = JSON.parse(body)
                    row.gdp = json[0]?.gdp ?? 0
                    row.gdp_growth = json[0]?.gdp_growth ?? 0
                    row.population = json[0]?.population ?? 0
                    row.homicide_rate = json[0]?.homicide_rate ?? 0
                }
                return resolve()
            });
        }))
    }

    await Promise.all(promises)
    fs.writeFile('./data/data.json', JSON.stringify(data), (err) => {
        if (err) throw err;
        console.log('File was written with updated data and saved!');
    })
};

module.exports = {
    importData
};
