// import cheerio to web-scrape flag images
const cheerio = require("cheerio");
const axios = require("axios");
const flagURL = "https://flagpedia.net/index";
const countriesJSON = require('./clonedJSON');
const fs = require('fs');

axios.get(flagURL).then((response) => {
    
    // load html into cheerio
    $ = cheerio.load(response.data);
    let flags = [];

    // loop through flag-grid classes on "https://flagpedia.net/index"
    $('.flag-grid li a').each(function (i, ele) {

        // get image src and country name used to match flag src img into original data.json
        let imgPath = $(ele).children('picture').children('img').attr('src');
        let fullImgPath = "https://flagpedia.net" + imgPath
        let countryName = $(ele).text().trim();

        // create temp obj
        let obj = {
            img: fullImgPath,
            country: countryName
        }

        // add to object
        flags[i] = obj;

    });

    // used to store number of matches
    let matches = []

    // used nested for loops, probably not best implementation
    // feel free to change to better method in future
    for (let i = 0; i < countriesJSON.length; i++) {
        for (let k = 0; k < flags.length; k++) {
            // trimmed variable for abnormal country name cases
            // i.e. "the bahamas === bahamas"
            // i.e. "& === and"
            let trimmed = '';
            if (countriesJSON[i].country.includes('the')) {
                trimmed = countriesJSON[i].country.slice(0, 4);
            }
            if (countriesJSON[i].country.includes('&')) {
                trimmed = countriesJSON[i].country.replace("&", "and");
            }
            if (countriesJSON[i].country.toLowerCase() === flags[k].country.toLowerCase() ||
                trimmed.toLowerCase() === flags[k].country.toLowerCase()) {
                countriesJSON[i].flag = flags[k].img;
                matches.push(k);
            };
        }
    }

    // convert to string
    let stringJSON = JSON.stringify(countriesJSON, null, ' ');
    
    // write updated JSON oject to new file called newData.json
    fs.writeFile("newData.json", stringJSON, (err) => {
        if (err) throw err;
        console.log('File was written with updated data and saved!');
    })

    // length of arrays
    console.log(countriesJSON.length);
    console.log(matches.length);

    // sanity check %
    // here you'll see output in the terminal
    // showing that ~91% of countries in the data.json
    // file have been populated with flag images
    console.log("Matched " + ((matches.length / countriesJSON.length).toFixed(2) * 100) + "% of countries flags");


    // my suggestion for your "unique data issue on github"
    // uncomment this below and update the original data.json file to include the flag image src's
    // console.log(countriesJSON);
})
.catch((error) => {
    console.error(error);
});




