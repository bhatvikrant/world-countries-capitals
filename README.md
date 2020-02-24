#### Want to contribute to open source? check issues [here.](https://github.com/bhatvikrant/world-countries-capitals/issues)

# world-countries-capitals

#### A simple [NPM](https://www.npmjs.com/package/world-countries-capitals) package to get capitals, currency, native language etc. of all the countries in the world

![world-countries-capitals](assets/world-countries-capitals.gif)

[Website](https://bhatvikrant.github.io/world-countries-capitals/)

## Getting started

[![NPM](https://nodei.co/npm/world-countries-capitals.png?compact=true)](https://nodei.co/npm/world-countries-capitals/)

## Installation

[![NPM INSTALL](http://img.shields.io/badge/npm-install-blue.svg?style=for-the-badge&logo=npm)](https://docs.npmjs.com/getting-started/installing-npm-packages-locally) [![NODE JS](http://img.shields.io/badge/Node-JS-teal.svg?style=for-the-badge&logo=node.js)](https://nodejs.org/en/) [![NODE JS](https://img.shields.io/npm/v/world-countries-capitals?logo=npm&label=world-countries-capitals&style=for-the-badge)](https://www.npmjs.com/package/world-countries-capitals)

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before using, [download and install Node.js](https://nodejs.org/en/download/).

Installation is done using the
**[`npm install`](https://docs.npmjs.com/getting-started/installing-npm-packages-locally)** command:

```bash
$ npm i world-countries-capitals --save
```

---

## Importing

```javascript
const wcc = require('world-countries-capitals');
```

---

## Usage

- **getAllCountryDetails()** This method returns an **array of objects** of all countries, each containing **country**, **capital**, **currency**, **native_language** and **famous for**.

```json
    [
        {
            "country": "afghanistan",
            "capital": "kabul",
            "currency": "afghani",
            "native_language": ["dari persian", "pashto"],
            "famous_for": "rugs, taliban"
        },
        {
            "country": "albania",
            "capital": "tirane",
            "currency": "lek",
            "native_language": ["albanian"],
            "famous_for" : "mother teresa"
        },

        ...
    ]
```

---

- **getAllCountries()** This method returns an **array** of **names** of all countries.

```javascript
    [
        'afghanistan',
        'albania',
        'algeria',
        'andorra',
        'angola',
        'antigua & Barbuda',
        'argentina',
        'armenia',
        'australia',
        'austria',
        'azerbaijan',
        ...
    ]
```

---

- **getCountiesByLanguage(languageSpoken)** This method returns an **array of objects**, each containing **country**, **capital**, **currency**, **native_language** and **famous_for** sorted by the _languageSpoken_.

Response for languageSpoken = 'Hindi'

```javascript
[
	{
    {
        country: "fiji",
        capital: "suva",
        currency: "fijian dollar",
        native_language: ["english", "bau fijian", "hindi"],
        famous_for: "friendly people and heavenly tropical islands"
    },
    {
        country: "india",
        capital: "new delhi",
        currency: "indian rupee",
        native_language: ["hindi", "english"],
        famous_for: "bollywood, yoga, hinduism, food and diversity"
    }
];
```

---

- **getCountryDetailsByName(countryName)** This method returns an **array of objects**, each containing **country**, **capital**, **currency**, **native_language** and **famous_for** sorted by the _name of the country_ .

Response for countryName = 'india'

```javascript
[
	{
		country: 'india',
		capital: 'new delhi',
		currency: 'indian rupee',
		native_language: ['hindi', 'english'],
		famous_for: 'bollywood, yoga, hinduism, food and diversity',
	},
];
```

---

- **getCountryDetailsByCapital(capital)** This method returns an **array of objects**, each containing **country**, **capital**, **currency** and **native_language** sorted by the _capital_ .

Response for capital = 'delhi'

```javascript
[
	{
		country: 'india',
		capital: 'new delhi',
		currency: 'indian rupee',
		native_language: ['hindi', 'english'],
		famous_for: 'bollywood, yoga, hinduism, food and diversity',
	},
];
```

---

- **getRandomCountry()** This method returns a random country everytime.

```bash
» node app.js
tuvalu

» node app.js
bhutan

» node app.js
saudi arabia
```

##### where app.js is the file containing the function call.

---

- **getNRandomCountriesData(n)** This method returns an array having **n** random country objects, each object containing **country**, **capital**, **currency** and **native_language**.

Response for n = 3

```javascript
[
	{
		country: 'burundi',
		capital: 'bujumbura',
		currency: 'burundi franc',
		native_language: ['kirundi', 'french'],
		famous_for: 'wildlife and greenery',
	},
	{
		country: 'palau',
		capital: 'melekeok',
		currency: 'united states dollar',
		native_language: ['english', 'palauan'],
		famous_for: 'jellyfish lake',
	},
	{
		country: 'dominican republic',
		capital: 'santo domingo',
		currency: 'dominican peso',
		native_language: ['spanish'],
		famous_for: 'blue ocean water, white-sand beaches and beautiful resorts',
	},
];
```

---

- **getCountriesByFamousFor(famousThing)** This method returns an array of objects, each object containing **country**, **capital**, **currency** and **native_language**, **famouse_for** sorted by what the _famousThing_.

Response for famousThing = 'oil'

```javascript
[
	{
		country: 'algeria',
		capital: 'algiers',
		currency: 'algerian dinar',
		native_language: ['arabic', 'tamazight', 'french'],
		famous_for: 'oil and gas reserves',
	},
	{
		country: 'angola',
		capital: 'luanda',
		currency: 'kwanza',
		native_language: ['portuguese'],
		famous_for: 'oil',
	},
	{
		country: 'bahrain',
		capital: 'manama',
		currency: 'bahraini dinar',
		native_language: ['arabic'],
		famous_for: 'oil, pearls and world heritage sites',
	},
	{
		country: 'bulgaria',
		capital: 'sofia',
		currency: 'lev',
		native_language: ['bulgarian'],
		famous_for: 'lavender oil and the rose valley',
	},
	{
		country: 'central african republic',
		capital: 'bangui',
		currency: 'central african cfa franc',
		native_language: ['sango', 'french'],
		famous_for: 'diamonds, gold, oil and uranium',
	},
	{
		country: 'norway',
		capital: 'oslo',
		currency: 'norwegian krone',
		native_language: ['norwegian'],
		famous_for: 'oil, fjords, mountains and midnight sun',
	},
];
```

---

# Examples

## #1

```javascript
const wcc = require('world-countries-capitals');

console.log(wcc.getRandomCountry());
```

## #2

```javascript
const wcc = require('world-countries-capitals');

console.log(wcc.getNRandomCountriesData(3));
```

## #3

```javascript
const wcc = require('world-countries-capitals');

console.log(wcc.getCountryDetailsByCapital('delhi'));
```

#### in this example the parameter (capital), which has to be a string can be a written in uppercase/lowercase etc. the response will be the same.

## #4

```javascript
const wcc = require('world-countries-capitals');

console.log(wcc.getCountryDetailsByName('India'));
```

#### in this example the parameter (countryName), which has to be a string can be a written in uppercase/lowercase etc. the response will be the same.

## #5

```javascript
const wcc = require('world-countries-capitals');

console.log(wcc.getCountiesByLanguage('hindi'));
```

#### in this example the parameter (languageSpoken), which has to be a string can be a written in uppercase/lowercase etc. the response will be the same.

## #6

```javascript
const wcc = require('world-countries-capitals');

console.log(wcc.getAllCountryDetails());
```

## #7

```javascript
const wcc = require('world-countries-capitals');

console.log(wcc.getAllCountries());
```

## #8

```javascript
const wcc = require('world-countries-capitals');

console.log(wcc.getCountriesByFamousFor('oil'));
```

---

# Want to contribute?

> Please check issues **[here](https://github.com/bhatvikrant/world-countries-capitals/issues)** !

![](https://img.shields.io/github/contributors/bhatvikrant/world-countries-capitals)

![](https://img.shields.io/github/forks/bhatvikrant/world-countries-capitals?style=social)

![](https://img.shields.io/github/stars/bhatvikrant/world-countries-capitals?style=social)

---

## License

![GitHub license](https://img.shields.io/github/license/bhatvikrant/world-countries-capitals.svg?style=for-the-badge&logo=github)

---

## Let's get connected

[![Twitter Follow](https://img.shields.io/twitter/follow/vikrantbhat1022.svg?style=for-the-badge&logo=twitter)](https://twitter.com/vikrantbhat1022)

[![GitHub followers](https://img.shields.io/github/followers/bhatvikrant.svg?label=Follow&style=for-the-badge&logo=github)](https://github.com/bhatvikrant/)

[![LinkedIn](https://img.shields.io/static/v1.svg?label=connect&message=@vikrantbhat&color=success&logo=linkedin&style=for-the-badge&logoColor=white&colorA=blue)](https://www.linkedin.com/in/vikrant-bhat-2b6221189/)

<hr>

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://github.com/bhatvikrant/world-countries-capitals) [![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://github.com/bhatvikrant/world-countries-capitals) [![forthebadge](https://forthebadge.com/images/badges/makes-people-smile.svg)](https://github.com/bhatvikrant/world-countries-capitals) [![forthebadge](https://forthebadge.com/images/badges/check-it-out.svg)](https://github.com/bhatvikrant/world-countries-capitals)
