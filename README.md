_Want to *contribute* to open source? Try solving our issues [here](https://github.com/bhatvikrant/world-countries-capitals/issues)_

# world-countries-capitals

A simple [npm](https://www.npmjs.com/package/world-countries-capitals) package to get capital, currency, native language, etc. of all the countries in the world.

![world-countries-capitals](assets/world-countries-capitals.gif)

[![Rate on Openbase](https://badges.openbase.io/js/rating/world-countries-capitals.svg)](https://openbase.io/js/world-countries-capitals?utm_source=embedded&utm_medium=badge&utm_campaign=rate-badge)

[Demo](https://codesandbox.io/s/wcc-demo-tux1b)

[Docs](https://bhatvikrant.github.io/world-countries-capitals/)

## Installation

[![npm install](http://img.shields.io/badge/npm-install-blue.svg?style=for-the-badge&logo=npm)](https://docs.npmjs.com/getting-started/installing-npm-packages-locally) [![Node.js](http://img.shields.io/badge/Node-JS-teal.svg?style=for-the-badge&logo=node.js)](https://nodejs.org/en/) [![Node.js](https://img.shields.io/npm/v/world-countries-capitals?logo=npm&label=world-countries-capitals&style=for-the-badge)](https://www.npmjs.com/package/world-countries-capitals)

`world-countries-capital` is a [Node.js](https://nodejs.org/en/) module, and can be installed using the npm package manager.

Ensure that you have Node.js and npm installed. If you don't have Node.js or npm, you can download and install it [here](https://nodejs.org/en/download/).

Installation is done using the **[`npm install`](https://docs.npmjs.com/getting-started/installing-npm-packages-locally)** command on the terminal if you are on Linux / MacOS or on Command Prompt if you are using Windows:

[![NPM](https://nodei.co/npm/world-countries-capitals.png?compact=true)](https://nodei.co/npm/world-countries-capitals/)

## Importing

Before you can start using this package in your project, you need to import it. It can be imported as follows:

```javascript
const wcc = require("world-countries-capitals");
```

## Usage

This section contains nt to _contribute_ to open source? Try solving our issues [here](https://github.com/bhatvikrant/world-countries-capitals/issues)\_

- `getAllCountryDetails()` <br>
  This method returns an **array of objects** containing all countries, each containing **country**, **capital**, **currency**, **native_language**, **famous for**, **phone_code**, and its **flag**.

      	```javascript
      	[
      		{
      			"country": "afghanistan",
      			"capital": "kabul",
      			"currency": "afghani",
      			"native_language": ["dari persian", "pashto"],
      			"famous_for": "rugs, taliban",
      		"phone_code": "+93",
      		"flag": "https://flagpedia.net/data/flags/h80/af.png"
      		},
      		{
      			"country": "albania",
      			"capital": "tirane",
      			"currency": "lek",
      			"native_language": ["albanian"],
      			"famous_for" : "mother teresa",
      		"phone_code": "+355",
      		"flag": "https://flagpedia.net/data/flags/h80/al.png"
      		},
      		...
      	]
      	```

- `getAllCountries()` <br>
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

---

- `getCountriesByLanguage(languageSpoken)` <br>
  This method returns an **array of objects**, each containing **country**, **capital**, **currency**, **native_language**, **famous_for**, **phone_code**, and **flag** sorted by the _languageSpoken_ passed in as a parameter.<br>
  Response for getCountiesByLanguage('Hindi')

  ```javascript
  [
  	{
  		country: "fiji",
  		capital: "suva",
  		currency: "fijian dollar",
  		native_language: ["english", "bau fijian", "hindi"],
  		famous_for: "friendly people and heavenly tropical islands",
  		phone_code: "+679",
  		flag: "https://flagpedia.net/data/flags/h80/fj.png",
  	},
  	{
  		country: "india",
  		capital: "new delhi",
  		currency: "indian rupee",
  		native_language: ["hindi", "english"],
  		famous_for: "bollywood, yoga, hinduism, food and diversity",
  		phone_code: "+91",
  		flag: "https://flagpedia.net/data/flags/h80/in.png",
  	},
  ];
  ```

---

- `getCountryDetailsByName(countryName)` <br>
  This method returns an **array of objects**, each containing **country**, **capital**, **currency**, **native_language**, **famous_for**, **phone_code**, and **flag** sorted by the _name of the country_ passed in as a parameter.<br>
  Response for getCountryDetailsByName('india')

      	```javascript
      	[
      		{
      			country: "india",
      			capital: "new delhi",
      			currency: "indian rupee",
      			native_language: ["hindi", "english"],
      			famous_for: "bollywood, yoga, hinduism, food and diversity",
      		phone_code: "+91",
      		flag: "https://flagpedia.net/data/flags/h80/in.png"
      		},
      	];
      	```

---

- `getCountryDetailsByCapital(capital)` <br>
  This method returns an **array of objects**, each containing **country**, **capital**, **currency**, **native_language**, **famous_for**, **phone_code**, and **flag** sorted by the _capital_ .<br>
  Response for getCountryDetailsByCapital('delhi')

      	```javascript
      	[
      		{
      			country: "india",
      			capital: "new delhi",
      			currency: "indian rupee",
      			native_language: ["hindi", "english"],
      			famous_for: "bollywood, yoga, hinduism, food and diversity",
      		phone_code: "+91",
      		flag: "https://flagpedia.net/data/flags/h80/in.png"
      		},
      	];
      	```

---

- `getRandomCountry()` <br>
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

---

- `getNRandomCountriesData(n)` <br>
  This method returns an array having **n** number of random country objects, each object containing **country**, **capital**, **currency**, **native_language**, **famous_for**, **phone_code**, and **flag**.<br>
  Sample response for n = 3

      	```javascript
      	[
      		{
      			country: "burundi",
      			capital: "bujumbura",
      			currency: "burundi franc",
      			native_language: ["kirundi", "french"],
      			famous_for: "wildlife and greenery",
      		phone_code: "+257",
      		flag: "https://flagpedia.net/data/flags/h80/bi.png"
      		},
      		{
      			country: "palau",
      			capital: "melekeok",
      			currency: "united states dollar",
      			native_language: ["english", "palauan"],
      			famous_for: "jellyfish lake",
      		phone_code: "+680",
      		flag: "https://flagpedia.net/data/flags/h80/pw.png"
      		},
      		{
      			country: "dominican republic",
      			capital: "santo domingo",
      			currency: "dominican peso",
      			native_language: ["spanish"],
      			famous_for: "blue ocean water, white-sand beaches and beautiful resorts",
      		phone_code: "+1-809, +1-829, +1-849",
      		flag: "https://flagpedia.net/data/flags/h80/do.png"
      		},
      	];
      	```

---

- `getCountriesByFamousFor(famousThing)` <br>
  This method returns an array of objects, each object containing **country**, **capital**, **currency**, **native_language**, **famouse_for**, **phone_code**, and **flag** sorted by the _famousThing_ passed as the parameter.<br>
  Response for getCountriesByFamousFor('oil')

      	```javascript
      	[
      		{
      			country: 'algeria',
      			capital: 'algiers',
      			currency: 'algerian dinar',
      			native_language: ['arabic', 'tamazight', 'french'],
      			famous_for: 'oil and gas reserves',
      		phone_code: '+213',
      		flag: "https://flagpedia.net/data/flags/h80/dz.png"
      		},
      		{
      			country: 'angola',
      			capital: 'luanda',
      			currency: 'kwanza',
      			native_language: ['portuguese'],
      			famous_for: 'oil',
      		phone_code: '+244',
      		flag: "https://flagpedia.net/data/flags/h80/ao.png"
      		},
      		{
      			country: 'bahrain',
      			capital: 'manama',
      			currency: 'bahraini dinar',
      			native_language: ['arabic'],
      			famous_for: 'oil, pearls and world heritage sites',
      		phone_code: '+973',
      		flag: "https://flagpedia.net/data/flags/h80/bh.png"
      		},
      		{
      			country: 'bulgaria',
      			capital: 'sofia',
      			currency: 'lev',
      			native_language: ['bulgarian'],
      			famous_for: 'lavender oil and the rose valley',
      		phone_code: '+359',
      		flag: "https://flagpedia.net/data/flags/h80/bg.png"
      		},
      		{
      			country: 'central african republic',
      			capital: 'bangui',
      			currency: 'central african cfa franc',
      			native_language: ['sango', 'french'],
      			famous_for: 'diamonds, gold, oil and uranium',
      		phone_code: '+236',
      		flag: "https://flagpedia.net/data/flags/h80/cf.png"
      		},
      		{
      			country: 'norway',
      			capital: 'oslo',
      			currency: 'norwegian krone',
      			native_language: ['norwegian'],
      			famous_for: 'oil, fjords, mountains and midnight sun',
      		phone_code: '+47',
      		flag: "https://flagpedia.net/data/flags/h80/no.png"
      		},
      	];
      	```

---

- `getCountriesByContinent(continentCode)`<br>
  This method returns an array of objects, each object containing **country**, **capital**, **currency**, **native_language**, **famouse_for**, **phone_code**, **flag**, **drive_direction**, **continent**, **iso** and **tld** sorted by the _continentCode_
	passed as the parameter.<br>
  Response for `getCountriesByContinent('oc')`

	```js
	[
		{
			"country": "australia",
			"capital": "canberra",
			"currency": "australian dollar",
			"native_language": ["english"],
			"famous_for": "koalas and kangaroos",
			"phone_code": "+61",
			"flag": "https://flagpedia.net/data/flags/h80/au.png",
			"drive_direction": "left",
			"continent": "oc",
			"iso": {
				"numeric": "036",
				"alpha_2": "au",
				"alpha_3": "aus"
			},
			"tld": ".au"
		},
		{
			"country": "fiji",
			"capital": "suva",
			"currency": "fijian dollar",
			"native_language": ["english", "bau fijian", "hindi"],
			"famous_for": "friendly people and heavenly tropical islands",
			"phone_code": "+679",
			"flag": "https://flagpedia.net/data/flags/h80/fj.png",
			"drive_direction": "left",
			"continent": "oc",
			"iso": {
				"numeric": "242",
				"alpha_2": "fj",
				"alpha_3": "fji"
			},
			"tld": ".fj"
		},
		{
			"country": "kiribati",
			"capital": "tarawa atoll",
			"currency": "kiribati dollar",
			"native_language": ["english", "gilbertese"],
			"famous_for": "flyfishing, scuba diving and astounding seabird wildlife",
			"phone_code": "+686",
			"flag": "https://flagpedia.net/data/flags/h80/ki.png",
			"drive_direction": "left",
			"continent": "oc",
			"iso": {
				"numeric": "296",
				"alpha_2": "ki",
				"alpha_3": "kir"
			},
			"tld": ".ki"
		},
		{
			"country": "marshall islands",
			"capital": "majuro",
			"currency": "united states dollar",
			"native_language": ["marshallese", "english"],
			"famous_for": "being fierce and hostile to strangers",
			"phone_code": "+692",
			"flag": "https://flagpedia.net/data/flags/h80/mh.png",
			"drive_direction": "right",
			"continent": "oc",
			"iso": {
				"numeric": "584",
				"alpha_2": "mh",
				"alpha_3": "mhl"
			},
			"tld": ".mh"
		},
		{
			"country": "federal states of micronesia",
			"capital": "palikir",
			"currency": "united states dollar",
			"native_language": ["english"],
			"famous_for": "manta rays, eco-tourism",
			"phone_code": "+691",
			"flag": "https://flagpedia.net/data/flags/h80/fm.png",
			"drive_direction": "right",
			"continent": "oc",
			"iso": {
				"numeric": "583",
				"alpha_2": "fm",
				"alpha_3": "fsm"
			},
			"tld": ".fm"
		},
		{
			"country": "nauru",
			"capital": "yaren",
			"currency": "australian dollar",
			"native_language": ["english", "nauran"],
			"famous_for": "islands of banaba",
			"phone_code": "+674",
			"flag": "https://flagpedia.net/data/flags/h80/nr.png",
			"drive_direction": "left",
			"continent": "oc",
			"iso": {
				"numeric": "520",
				"alpha_2": "nr",
				"alpha_3": "nru"
			},
			"tld": ".nr"
		},
		{
			"country": "new zealand",
			"capital": "wellington",
			"currency": "new zealand dollar",
			"native_language": ["english"],
			"famous_for": "national rugby team",
			"phone_code": "+64",
			"flag": "https://flagpedia.net/data/flags/h80/nz.png",
			"drive_direction": "left",
			"continent": "oc",
			"iso": {
				"numeric": "554",
				"alpha_2": "nz",
				"alpha_3": "nzl"
			},
			"tld": ".nz"
		},
		{
			"country": "palau",
			"capital": "melekeok",
			"currency": "united states dollar",
			"native_language": ["english", "palauan"],
			"famous_for": "jellyfish lake",
			"phone_code": "+680",
			"flag": "https://flagpedia.net/data/flags/h80/pw.png",
			"drive_direction": "right",
			"continent": "oc",
			"iso": {
				"numeric": "585",
				"alpha_2": "pw",
				"alpha_3": "plw"
			},
			"tld": ".pw"
		},
		{
			"country": "papa new guinea",
			"capital": "port moresby papa",
			"currency": "papa new guinean kina",
			"native_language": ["english", "tok pisin", "hiri motu"],
			"famous_for": "scuba diving and marine diversity",
			"phone_code": "+675",
			"flag": "https://flagpedia.net/data/flags/h80/pg.png",
			"drive_direction": "right",
			"continent": "oc",
			"iso": {
				"numeric": "598",
				"alpha_2": "pg",
				"alpha_3": "png"
			},
			"tld": ".pg"
		},
		{
			"country": "samoa",
			"capital": "apia",
			"currency": "tala",
			"native_language": ["samoan", "english"],
			"famous_for": "samoan culture, music, dance and visual arts",
			"phone_code": "+685",
			"flag": "https://flagpedia.net/data/flags/h80/ws.png",
			"drive_direction": "left",
			"continent": "oc",
			"iso": {
				"numeric": "882",
				"alpha_2": "ws",
				"alpha_3": "wsm"
			},
			"tld": ".ws"
		},
		{
			"country": "solomon islands",
			"capital": "honiara",
			"currency": "solomon islands dollar",
			"native_language": ["solomons pijin"],
			"famous_for": "world war 2",
			"phone_code": "+677",
			"flag": "https://flagpedia.net/data/flags/h80/sb.png",
			"drive_direction": "right",
			"continent": "oc",
			"iso": {
				"numeric": "090",
				"alpha_2": "sb",
				"alpha_3": "slb"
			},
			"tld": ".sb"
		},
		{
			"country": "tonga",
			"capital": "nuku'alofa",
			"currency": "pa'anga",
			"native_language": ["tongan", "english"],
			"famous_for": "graceful and dignified dancing of the kingdom",
			"phone_code": "+676",
			"flag": "https://flagpedia.net/data/flags/h80/to.png",
			"drive_direction": "left",
			"continent": "oc",
			"iso": {
				"numeric": "776",
				"alpha_2": "to",
				"alpha_3": "ton"
			},
			"tld": ".to"
		},
		{
			"country": "tuvalu",
			"capital": "vaiaku",
			"currency": "tuvaluan dollar",
			"native_language": ["tuvaluan", "english"],
			"famous_for": "seafaring skills",
			"phone_code": "+668",
			"flag": "https://flagpedia.net/data/flags/h80/tv.png",
			"drive_direction": "left",
			"continent": "oc",
			"iso": {
				"numeric": "798",
				"alpha_2": "tv",
				"alpha_3": "tuv"
			},
			"tld": ".tv"
		},
		{
			"country": "vanuatu",
			"capital": "port-vila",
			"currency": "vanuatu vatu",
			"native_language": ["bislama", "english", "french"],
			"famous_for": "vanuatu's underwater world",
			"phone_code": "+978",
			"flag": "https://flagpedia.net/data/flags/h80/vu.png",
			"drive_direction": "right",
			"continent": "oc",
			"iso": {
				"numeric": "548",
				"alpha_2": "vu",
				"alpha_3": "vut"
			},
			"tld": ".vu"
		},
	]
	```

---

- `getCountryDetailsByISO(isoType, isoValue)`<br>
  This method returns an array with object containing **country**, **capital**, **currency**, **native_language**, **famouse_for**, **phone_code**, **flag**, **drive_direction**, **continent**, **iso** and **tld** filtered by specific _iso_<br>
  Response for `getCountryDetailsByISO('numeric', '616')`

	```js
	{
		"country": "poland",
		"capital": "warsaw",
		"currency": "zloty",
		"native_language": ["polish"],
		"famous_for": "pierogi and potatoes",
		"phone_code": "+48",
		"flag": "https://flagpedia.net/data/flags/h80/pl.png",
		"drive_direction": "right",
		"continent": "eu",
		"iso": {
			"numeric": "616",
			"alpha_2": "pl",
			"alpha_3": "pol"
		},
		"tld": ".pl"
	}
	```

---

- `getCountriesByTLD(tldName)`<br>
  This method returns an array of objects containing **country**, **capital**, **currency**, **native_language**, **famouse_for**, **phone_code**, **flag**, **drive_direction**, **continent**, **iso** and **tld** filtered by _tld_<br>
  Response for `getCountriesByTLD('.pl')`

	```js
	[
		{
      "country": "poland",
      "capital": "warsaw",
      "currency": "zloty",
      "native_language": ["polish"],
      "famous_for": "pierogi and potatoes",
      "phone_code": "+48",
      "flag": "https://flagpedia.net/data/flags/h80/pl.png",
      "drive_direction": "right",
      "continent": "eu",
      "iso": {
        "numeric": "616",
        "alpha_2": "pl",
        "alpha_3": "pol"
      },
      "tld": ".pl"
    }
	]
	```

---

- `getCountriesByConstitutionalForm(constitutionalFormName)`<br>
  This method returns an array of objects, each object containing **country**, **capital**, **currency**, **native_language**, **famouse_for**, **phone_code**, **flag**, **driving_direction**
	and **constitutional_form** sorted by the _constitutionalFormName_ passed as the parameter.<br>
  Response for `getCountriesByConstitutionalForm("absolute monarchy")`:

	```js
	[
		{
			country: 'brunei',
			capital: 'bandar seri begawan',
			currency: 'brunei dollar',
			native_language: ['malay'],
			famous_for: 'gorgeous mosques and islamic architecture',
			phone_code: '+673',
			flag: 'https://flagpedia.net/data/flags/h80/bn.png',
			drive_direction: 'left',
			constitutional_form: 'absolute monarchy'
		},
		{
			country: 'oman',
			capital: 'muscat',
			currency: 'omani rial',
			native_language: ['arabic'],
			famous_for: 'fresh sea and air breathing',
			phone_code: '+968',
			flag: 'https://flagpedia.net/data/flags/h80/om.png',
			drive_direction: 'right',
			constitutional_form: 'absolute monarchy'
		},
		{ country: 'qatar',
			capital: 'doha',
			currency: 'qatari riyal',
			native_language: ['arabic'],
			famous_for: 'qatar airlines',
			phone_code: '+974',
			flag: 'https://flagpedia.net/data/flags/h80/qa.png',
			drive_direction: 'right',
			constitutional_form: 'absolute monarchy'
		},
		{ country: 'saudi arabia',
			capital: 'riyadh',
			currency: 'saudi riyal',
			native_language: ['arabic'],
			famous_for: 'strict rules, wahhabism, mecca and madina',
			phone_code: '+966',
			flag: 'https://flagpedia.net/data/flags/h80/sa.png',
			drive_direction: 'right',
			constitutional_form: 'absolute monarchy'
		},
		{ country: 'eswatini (swaziland)',
			capital: 'mbabane',
			currency: 'lilangeni',
			native_language: ['english', 'siswati'],
			famous_for: 'sibebe rock and largest exposed granite dome',
			phone_code: '+268',
			flag: 'https://flagpedia.net/data/flags/h80/sz.png',
			drive_direction: 'right',
			constitutional_form: 'absolute monarchy'
		},
		{ country: 'vatican city',
			capital: 'vatican city',
			currency: 'euro',
			native_language: ['latin', 'italian'],
			famous_for: 'st. peter\'s basilica, the sistine chapel, and the vatican museums',
			phone_code: '+379',
			flag: 'https://flagpedia.net/data/flags/h80/va.png',
			drive_direction: 'right',
			constitutional_form: 'absolute monarchy'
		}
	]
	```

---

# Example Use Cases

#### Example #1

> To fetch a `random` country.

```javascript
const wcc = require("world-countries-capitals");

console.log(wcc.getRandomCountry());
```

---

### Example #2

> To get the `count` of random countries.

```javascript
const wcc = require("world-countries-capitals");

console.log(wcc.getNRandomCountriesData(3));
```

---

### Example #3

> To fetch a `country` by its capital.

```javascript
const wcc = require("world-countries-capitals");

console.log(wcc.getCountryDetailsByCapital("delhi"));
```

**Note :** the name of the capital (in this case, 'delhi') is **not** case sensitive and can be uppercase or lowercase and the response will remain the same.

---

### Example #4

> Get the details of a `country` with its name.

```javascript
const wcc = require("world-countries-capitals");

console.log(wcc.getCountryDetailsByName("India"));
```

**Note :** the name of the country (in this case, 'India') is _not_ case sensitive and can be uppercase or lowercase and the response will remain the same.

---

### Example #5

> Fetch the `details of country`, with language.

```javascript
const wcc = require("world-countries-capitals");

console.log(wcc.getCountiesByLanguage("hindi"));
```

**Note :** the language (in this case, 'hindi') is _not_ case sensitive and can be uppercase or lowercase and the response will remain the same.

---

### Example #6

> Fetch all `countries'` details.

```javascript
const wcc = require("world-countries-capitals");

console.log(wcc.getAllCountryDetails());
```

---

### Example #7

> Get all the `names` of all countries.

```javascript
const wcc = require("world-countries-capitals");

console.log(wcc.getAllCountries());
```

---

### Example #8

> Get the details of all `countries` that are famous for '_something_'.

```javascript
const wcc = require("world-countries-capitals");

console.log(wcc.getCountriesByFamousFor("oil"));
```

---

### Example #9

> Get all `countries` located in '_eu_'.

```javascript
const wcc = require("world-countries-capitals");

console.log(wcc.getCountriesByContinent("eu"));
```

---

### Example #10

> Get country details using '_numeric_' type ISO code of Poland.

```javascript
const wcc = require("world-countries-capitals");

console.log(wcc.getCountryDetailsByISO("numeric", "616"));
```

---

### Example #11

> Get the all `countries` that use '_.uk_' domain.

```javascript
const wcc = require("world-countries-capitals");

console.log(wcc.getCountriesByTLD(".uk"));
```

---

### Example #12

> Get the details of all `countries` that have '_republic_' constitutional form.

```javascript
const wcc = require("world-countries-capitals");

console.log(wcc.getCountriesByConstitutionalForm("republic"));
```

---

## Demo

In this [Vue.js demo](https://codesandbox.io/s/wcc-demo-tux1b), the package methods are used to search countries by a selected field (name, capital, language, famous for)

---

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
