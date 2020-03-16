_Want to contribute to open source? Try solving our issues [here](https://github.com/bhatvikrant/world-countries-capitals/issues)_

# world-countries-capitals

##### A simple [NPM](https://www.npmjs.com/package/world-countries-capitals) package to get capital, currency, native language, etc. of all the countries in the world.

![world-countries-capitals](assets/world-countries-capitals.gif)

[Website](https://bhatvikrant.github.io/world-countries-capitals/)

## Installation

[![NPM INSTALL](http://img.shields.io/badge/npm-install-blue.svg?style=for-the-badge&logo=npm)](https://docs.npmjs.com/getting-started/installing-npm-packages-locally) [![NODE JS](http://img.shields.io/badge/Node-JS-teal.svg?style=for-the-badge&logo=node.js)](https://nodejs.org/en/) [![NODE JS](https://img.shields.io/npm/v/world-countries-capitals?logo=npm&label=world-countries-capitals&style=for-the-badge)](https://www.npmjs.com/package/world-countries-capitals)

world-countries-capital is a [Node.js](https://nodejs.org/en/) module, and can be installed using the npm package manager.

Ensure that you have Node.js and npm installed. If you dont have Node.js or npm, you can download and install it [here](https://nodejs.org/en/download/).

Installation is done using the **[`npm install`](https://docs.npmjs.com/getting-started/installing-npm-packages-locally)** command on the terminal if you are on Linux / MacOS or on Command Prompt if you are using Windows:

[![NPM](https://nodei.co/npm/world-countries-capitals.png?compact=true)](https://nodei.co/npm/world-countries-capitals/)

## Importing

Before you can start using this package in your project, you need to import it. It can be imported as follows:

```javascript
const wcc = require('world-countries-capitals')
```

## Usage

This section contains information about various functions that are currently supported.

- **getAllCountryDetails()** <br>
  This method returns an **array of objects** containing all countries, each containing **country**, **capital**, **currency**, **native_language**, **famous for**, and its **phone_code**.

      	```javascript
      	[
      		{
      			"country": "afghanistan",
      			"capital": "kabul",
      			"currency": "afghani",
      			"native_language": ["dari persian", "pashto"],
      			"famous_for": "rugs, taliban",
      			"phone_code": "+93"
      		},
      		{
      			"country": "albania",
      			"capital": "tirane",
      			"currency": "lek",
      			"native_language": ["albanian"],
      			"famous_for" : "mother teresa",
      			"phone_code": "+355"
      		},
      		...
      	]
      	```

- **getAllCountries()** <br>
  This method returns an **array** conatining the **names** of all countries.

      	```javascript
      	[
      		"afghanistan",
      		"albania",
      		"algeria",
      		"andorra",
      		"angola",
      		...
      	]
      	```

- **getCountiesByLanguage(languageSpoken)** <br>
  This method returns an **array of objects**, each containing **country**, **capital**, **currency**, **native_language**, **famous_for**, and **phone_code** sorted by the _languageSpoken_ passed in as a parameter.<br>
  Response for getCountiesByLanguage('Hindi')


    ```javascript
    [
    	{
    		country: "fiji",
    		capital: "suva",
    		currency: "fijian dollar",
    		native_language: ["english", "bau fijian", "hindi"],
    		famous_for: "friendly people and heavenly tropical islands",
    		phone_code: "+679"
    	},
    	{
    		country: "india",
    		capital: "new delhi",
    		currency: "indian rupee",
    		native_language: ["hindi", "english"],
    		famous_for: "bollywood, yoga, hinduism, food and diversity",
    		phone_code: "+91"
    	}
    ];
    ```

- **getCountryDetailsByName(countryName)** <br>
  This method returns an **array of objects**, each containing **country**, **capital**, **currency**, **native_language**, **famous_for** and **phone_code** sorted by the _name of the country_ passed in as a parameter.<br>
  Response for getCountryDetailsByName('india')

      	```javascript
      	[
      		{
      			country: "india",
      			capital: "new delhi",
      			currency: "indian rupee",
      			native_language: ["hindi", "english"],
      			famous_for: "bollywood, yoga, hinduism, food and diversity",
      			phone_code: "+91"
      		},
      	];
      	```

- **getCountryDetailsByCapital(capital)** <br>
  This method returns an **array of objects**, each containing **country**, **capital**, **currency** and **native_language** sorted by the _capital_ .<br>
  Response for getCountryDetailsByCapital('delhi')

      	```javascript
      	[
      		{
      			country: "india",
      			capital: "new delhi",
      			currency: "indian rupee",
      			native_language: ["hindi", "english"],
      			famous_for: "bollywood, yoga, hinduism, food and diversity",
      			phone_code: "+91"
      		},
      	];
      	```

- **getRandomCountry()** <br>
  This method returns a random country everytime.

      	```bash
      	» node app.js
      	tuvalu

      	» node app.js
      	bhutan

      	» node app.js
      	saudi arabia
      	```

      	***Note*** : *app.js is the file containing the function call.*

- **getNRandomCountriesData(n)** <br>
  This method returns an array having **n** number of random country objects, each object containing **country**, **capital**, **currency**, **native_language**, **famous_for**, and **phone_code**.<br>
  Sample response for n = 3

      	```javascript
      	[
      		{
      			country: "burundi",
      			capital: "bujumbura",
      			currency: "burundi franc",
      			native_language: ["kirundi", "french"],
      			famous_for: "wildlife and greenery",
      			phone_code: "+257"
      		},
      		{
      			country: "palau",
      			capital: "melekeok",
      			currency: "united states dollar",
      			native_language: ["english", "palauan"],
      			famous_for: "jellyfish lake",
      			phone_code: "+680"
      		},
      		{
      			country: "dominican republic",
      			capital: "santo domingo",
      			currency: "dominican peso",
      			native_language: ["spanish"],
      			famous_for: "blue ocean water, white-sand beaches and beautiful resorts",
      			phone_code: "+1-809, +1-829, +1-849"
      		},
      	];
      	```

- **getCountriesByFamousFor(famousThing)** <br>
  This method returns an array of objects, each object containing **country**, **capital**, **currency**, **native_language**, **famouse_for** and **phone_code** sorted by the _famousThing_ passed as the parameter.<br>
  Response for getCountriesByFamousFor('oil')

      	```javascript
      	[
      		{
      			country: 'algeria',
      			capital: 'algiers',
      			currency: 'algerian dinar',
      			native_language: ['arabic', 'tamazight', 'french'],
      			famous_for: 'oil and gas reserves',
      			phone_code: '+213'
      		},
      		{
      			country: 'angola',
      			capital: 'luanda',
      			currency: 'kwanza',
      			native_language: ['portuguese'],
      			famous_for: 'oil',
      			phone_code: '+244'
      		},
      		{
      			country: 'bahrain',
      			capital: 'manama',
      			currency: 'bahraini dinar',
      			native_language: ['arabic'],
      			famous_for: 'oil, pearls and world heritage sites',
      			phone_code: '+973'
      		},
      		{
      			country: 'bulgaria',
      			capital: 'sofia',
      			currency: 'lev',
      			native_language: ['bulgarian'],
      			famous_for: 'lavender oil and the rose valley',
      			phone_code: '+359'
      		},
      		{
      			country: 'central african republic',
      			capital: 'bangui',
      			currency: 'central african cfa franc',
      			native_language: ['sango', 'french'],
      			famous_for: 'diamonds, gold, oil and uranium',
      			phone_code: '+236'
      		},
      		{
      			country: 'norway',
      			capital: 'oslo',
      			currency: 'norwegian krone',
      			native_language: ['norwegian'],
      			famous_for: 'oil, fjords, mountains and midnight sun',
      			phone_code: '+47'
      		},
      	];
      	```

### Example Use Cases

#### Example #1

To fetch a random country.

```javascript
const wcc = require('world-countries-capitals')

console.log(wcc.getRandomCountry())
```

#### Example #2

To get _n_ random countries.

```javascript
const wcc = require('world-countries-capitals')

console.log(wcc.getNRandomCountriesData(3))
```

#### Example #3

To fetch country by capital.

```javascript
const wcc = require('world-countries-capitals')

console.log(wcc.getCountryDetailsByCapital('delhi'))
```

**Note :** the name of the capital (in this case, 'delhi') is _not_ case sensitive and can be uppercase or lowercase and the response will remain the same.

#### Example #4

Get details of a country with its name.

```javascript
const wcc = require('world-countries-capitals')

console.log(wcc.getCountryDetailsByName('India'))
```

**Note :** the name of the country (in this case, 'India') is _not_ case sensitive and can be uppercase or lowercase and the response will remain the same.

#### Example #5

Fetch the details of country, with language.

```javascript
const wcc = require('world-countries-capitals')

console.log(wcc.getCountiesByLanguage('hindi'))
```

**Note :** the language (in this case, 'hindi') is _not_ case sensitive and can be uppercase or lowercase and the response will remain the same.

#### Example #6

Fetch _all_ countries' details.

```javascript
const wcc = require('world-countries-capitals')

console.log(wcc.getAllCountryDetails())
```

#### Example #7

Get all the names of _all_ countries.

```javascript
const wcc = require('world-countries-capitals')

console.log(wcc.getAllCountries())
```

#### Example #8

Get the details of all countries that are famous for '_something_'.

```javascript
const wcc = require('world-countries-capitals')

console.log(wcc.getCountriesByFamousFor('oil'))
```

## Want to contribute to our project?

Please check our issues **[here](https://github.com/bhatvikrant/world-countries-capitals/issues)** !

![](https://img.shields.io/github/contributors/bhatvikrant/world-countries-capitals) ![](https://img.shields.io/github/forks/bhatvikrant/world-countries-capitals?style=social) ![](https://img.shields.io/github/stars/bhatvikrant/world-countries-capitals?style=social)

**Note :** If you are addressing an issue that requires modification of code, remember to execute the tests, using the command **[`npm test`](https://docs.npmjs.com/cli/test)**. It ensures that things are working as they should.

---

## License

![GitHub license](https://img.shields.io/github/license/bhatvikrant/world-countries-capitals.svg?style=for-the-badge&logo=github)

This project is licensed under the MIT License, Copyright (c) 2020 Vikrant Bhat.

---

## Let's Connect

[![Twitter Follow](https://img.shields.io/twitter/follow/vikrantbhat1022.svg?style=for-the-badge&logo=twitter)](https://twitter.com/vikrantbhat1022) [![GitHub followers](https://img.shields.io/github/followers/bhatvikrant.svg?label=Follow&style=for-the-badge&logo=github)](https://github.com/bhatvikrant/) [![LinkedIn](https://img.shields.io/static/v1.svg?label=connect&message=@vikrantbhat&color=success&logo=linkedin&style=for-the-badge&logoColor=white&colorA=blue)](https://www.linkedin.com/in/vikrant-bhat-2b6221189/)

<hr>

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://github.com/bhatvikrant/world-countries-capitals) [![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://github.com/bhatvikrant/world-countries-capitals) [![forthebadge](https://forthebadge.com/images/badges/makes-people-smile.svg)](https://github.com/bhatvikrant/world-countries-capitals) [![forthebadge](https://forthebadge.com/images/badges/check-it-out.svg)](https://github.com/bhatvikrant/world-countries-capitals)
