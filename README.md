![world-countries-capitals][ASSET_LOGO]

# world-countries-capitals

[![Release version][BADGE_NPM_RELEASE]][URL_NPM]
![NPM downloads][BADGE_NPM_DOWNLOADS]
[![Bundle minified size][BADGE_BUNDLE_SIZE]][URL_BUNDLEPHOBIA]
<br>
![GitHub watchers][BADGE_GH_WATCHERS]
![GitHub stars][BADGE_GH_STARS]
![GitHub forks][BADGE_GH_FORKS]
[![GitHub issues][BADGE_GH_ISSUES]][URL_GH_ISSUES]
[![GitHub pull requests][BADGE_GH_PULL_REQUESTS]][URL_GH_PULL_REQUESTS]

[![License][BADGE_LICENSE]][LICENSE]

[![Openbase rating][BADGE_OPENBASE_RATING]][URL_OPENBASE]

---

## Table of Contents

1. [Introduction][URL_INTRODUCTION]
2. [Demos][URL_DEMOS]
3. [Installation][URL_INSTALLATION]
4. [How to use][URL_HOW_TO_USE]
5. [Data model][URL_DATA_MODEL]
6. [Available methods][URL_AVAILABLE_METHODS]
7. [Contributing][URL_CONTRIBUTING]
8. [Core Team][URL_CORE_TEAM]
9. [License][URL_LICENSE]

---

## Introduction

> **World-Countries-Capitals** is _JavaScript_ Library that give access to static data
> of all countries in the world.

Currently available data for each country is:
- **country** - country name
- **capital** - capital city
- **currency** - currency that is used
- **native_language** - list of official languages that are used in country
- **famous_for** - list of things that makes country famous for
- **phone_code** - country dial-in (calling) code
- **flag** - image of country flag
- **drive_direction** - drive direction
- **alcohol_prohibition** - status of alcohol prohibition
- **area** - country size (square kilometers and square miles)
- **continent** - 2-letter code of continent where the country is
- **iso** - country ISO 3166-1 code (numeric, alpha-2, alpha-3)
- **tld** - country code top-level domain
- **constitutional_form** - official political system
- **language_codes** - list of langauge codes (combination of _ISO 639-1_ and _ISO 3166-1 alpha-2_)
- **is_landlocked** - information whether country is surrounded by one or more countries

You can check all changes in the project at [releases page on Github][URL_GH_RELEASES]
or in [changelog][DOC_CHANGELOG].

Feel free to give this project a ⭐️&nbsp; if it helped you! 🤗

[↑ Back to menu][URL_TOC]

---

## Demos

Here are demos/examples created by community ❤️

- [Vue.js demo](https://codesandbox.io/s/wcc-demo-tux1b)
	- Search countries by a selected field
	- Created by [@leodrk](https://github.com/leodrk)

[↑ Back to menu][URL_TOC]

---

## Installation

Install with [NPM][URL_NPM]:
```
npm install world-countries-capitals
```

Install with [Yarn][URL_YARN]:
```
yarn add world-countries-capitals
```

[↑ Back to menu][URL_TOC]

---

## How to use

Depends which way you choose to [install this package][URL_INSTALLATION],
there might be a different way to use it.

- _CommonJS_:
	```js
	// 1. Load _wcc_ Package
	const wcc = require('world-countries-capitals')

	// 2. Use any _wcc_ Method
	const randomCountryName = wcc.getRandomCountry()

	// 3. Play with returned data
	console.log(randomCountryName) // Possible output: 'poland'
	```

[↑ Back to menu][URL_TOC]

---

## Data model

Type definition of each `Country {Object}`:
```js
/**
 * @typedef {Object} Country
 * @property {String} country - Country name
 * @property {String} capital - Capital city name
 * @property {String} currency - Currency name
 * @property {String[]} native_language - Array or native languages
 * @property {String} famous_for - Comma separated favourites
 * @property {String} phone_code - Phone prefix
 * @property {String} flag - Flag image
 * @property {String} drive_direction - Drive direction
 * @property {String} alcohol_prohibition - Alcohol prohibition status
 * @property {Object} area - Country size
 * @property {Number} area.km2 - Country size in square kilometers
 * @property {Number} area.mi2 - Country size in square miles
 * @property {String} continent - Continent that country belong to
 * @property {Object} iso - ISO 3166-1 standard codes
 * @property {String} iso.numeric - 3-digit code
 * @property {String} iso.alpha_2 - 2-letter code
 * @property {String} iso.alpha_3 - 3-letter code
 * @property {String} tld - Country code top-level domain
 * @property {String} constitutional_form - Name of official political system
 * @property {String[]} language_codes - Array of language codes
 * @property {Boolean} is_landlocked - Is country surrounded by one or more countries
 */
```

Sample `Country {Object}`:
```js
{
	country: 'poland',
	capital: 'warsaw',
	currency: 'zloty',
	native_language: ['polish'],
	famous_for: 'pierogi and potatoes',
	phone_code: '+48',
	flag: 'https://flagpedia.net/data/flags/h80/pl.png',
	drive_direction: 'right',
	alcohol_prohibition: 'none',
	area: {
		km2: 312696,
		mi2: 120733,
	},
	continent: 'eu',
	iso: {
		numeric: '616',
		alpha_2: 'pl',
		alpha_3: 'pol',
	},
	tld: '.pl',
	constitutional_form: 'republic',
	language_codes: ['pl-PL'],
	is_landlocked: false
}
```

[↑ Back to menu][URL_TOC]

---

## Available methods

After [importing _world-countries-capitals_ Package][URL_HOW_TO_USE],
you have access to methods listed below:

```js
/*
 * Get list of all country names
 * @returns {String[]}
*/
wcc.getAllCountries()
```

```js
/*
 * Get all countries with details
 * @returns {Country[]}
*/
wcc.getAllCountryDetails()
```

```js
/*
 * Get random country name
 * @returns {String}
*/
wcc.getRandomCountry()
```

```js
/*
 * Get specific amount of random countries
 * @param {Number} amount - amount of countries to get
 * @returns {Country[]}
*/
wcc.getNRandomCountriesData(amount)
// Example: wcc.getNRandomCountriesData(3)

```

```js
/*
 * Get country details by its name
 * @param {String} name - country name
 * @returns {Country}
*/
wcc.getCountryDetailsByName(name)
// Example: wcc.getCountryDetailsByName('poland')
```

```js
/*
 * Get country details by its capital city
 * @param {String} capital - name of capital city
 * @returns {Country}
*/
wcc.getCountryDetailsByCapital(capital)
// Example: wcc.getCountryDetailsByCapital('warsaw')
```

```js
/*
 * Get all countries by specific language
 * @param {String} language - language name
 * @returns {Country[]}
*/
wcc.getCountriesByLanguage(language)
// Example: wcc.getCountriesByLanguage('polish')
```

```js
/*
 * Get all countries that are famous for specific thing
 * @param {String} famousThing - thing that makes country famous for
 * @returns {Country[]}
*/
wcc.getCountriesByFamousFor(famousThing)
// Example: wcc.getCountriesByFamousFor('pierogi')
```

```js
/*
 * Get all countries by specific drive direction
 * @param {String} direction - drive direction (one of: 'left', 'right')
 * @returns {Country[]}
*/
wcc.getCountriesByDriveDirection(direction)
// Example: wcc.getCountriesByDriveDirection('left')
```

```js
/*
 * Get all countries by alcohol prohibition type
 * @param {String} type - prohibition type (one of: 'none', 'limited', 'regional', 'nationwide')
 * @returns {Country[]}
*/
wcc.getCountriesByAlcoholProhibition(type)
// Example: wcc.getCountriesByAlcoholProhibition('nationwide')
```

```js
/*
 * Get all countries that are located on specific continent
 * @param {String} code - 2-letter continent code (one of: 'AF', 'AN', 'AS', 'EU', 'NA', 'OC', 'SA')
 * @returns {Country[]}
*/
wcc.getCountriesByContinent(code)
// Example: wcc.getCountriesByContinent('eu')
```

```js
/*
 * Get country found by one of _ISO 3166-1_ code type
 * @param {String} isoType - ISO type (one of: 'numeric', 'alpha-2', 'alpha-3')
 * @param {String} isoValue - ISO code of specific country that match to `isoType`
 * @returns {Country}
*/
wcc.getCountryDetailsByISO(isoType, isoValue)
// Example: wcc.getCountryDetailsByISO('numeric', '616')
```

```js
/*
 * Get all countries by specific _ccTLD_
 * @param {String} tld - name of the _country code top-level domain_ (including `.` character)
 * @returns {Country[]}
*/
wcc.getCountriesByTLD(tld)
// Example: wcc.getCountriesByTLD('.pl')
```

```js
/*
 * Get all countries by specific constitutional form
 * @param {String} form - name of country constitutional form
 * @returns {Country[]}
*/
wcc.getCountriesByConstitutionalForm(form)
// Example: wcc.getCountriesByConstitutionalForm('republic')
```

```js
/*
 * Get all countries that are surrounded by one or more countries
 * @param {Boolean} isLandLocked - is country landlocked
 * @returns {Country[]}
*/
wcc.getCountriesByLandLock(isLandLocked)
// Example: wcc.getCountriesByLandLock(true)
```

❗️ All params are **NOT** case sensitive so no matter how argument looks,
the response will remain the same.

[↑ Back to menu][URL_TOC]

---

## Contributing

Contributions, issues and feature requests are always welcome!

Feel free to check our [issues page][URL_GH_ISSUES] to see all open issues.
If this is your first time contributing to _Open Source_ project,
check out the [contributing guidelines][DOC_CONTRIBUTING] first.

You can also suggest a new feature by [creating an issue][URL_GH_NEW_ISSUE].
Please wait for confirmation before working on it.

[↑ Back to menu][URL_TOC]

---

## Core team

### Vikrant Bhat
[![Vikrant Bhat GitHub profile](
	https://img.shields.io/github/followers/bhatvikrant?style=flat&logo=github&logoColor=181717&label=GitHub&labelColor=FFFFFF&color=181717
)](https://github.com/bhatvikrant)
[![Vikrant Bhat Twitter profile](
	https://img.shields.io/twitter/follow/vikrantbhat1022?style=flat&logo=twitter&logoColor=1DA1F2&label=Twitter&labelColor=FFFFFF&color=1DA1F2
)](https://twitter.com/vikrantbhat1022)
[![Vikrant Bhat LinkedIn profile](
	https://img.shields.io/static/v1?style=flat&logo=linkedin&logoColor=0077B5&label=LinkedIn&labelColor=FFFFFF&color=0077B5&message=Vikrant%20Bhat
)](https://linkedin.com/in/vikrant-bhat-2b6221189)
<br>
[![Vikrant Bhat personal website](
	https://img.shields.io/static/v1?style=flat&label=Website&labelColor=FFFFFF&color=333333&message=underreacted.netlify.app
)](https://underreacted.netlify.app)

### Damian Szczypka
[![Damian Szczypka GitHub profile](
	https://img.shields.io/github/followers/sthiepaan?style=flat&logo=github&logoColor=181717&label=GitHub&labelColor=FFFFFF&color=181717
)](https://github.com/sthiepaan)
[![Damian Szczypka Twitter profile](
	https://img.shields.io/twitter/follow/sthiepaan?style=flat&logo=twitter&logoColor=1DA1F2&label=Twitter&labelColor=FFFFFF&color=1DA1F2
)](https://twitter.com/sthiepaan)
[![Damian Szczypka LinkedIn profile](
	https://img.shields.io/static/v1?style=flat&logo=linkedin&logoColor=0077B5&label=LinkedIn&labelColor=FFFFFF&color=0077B5&message=Damian%20Szczypka
)](https://linkedin.com/in/damianszczypka)
<br>
[![Damian Szczypka personal website](
	https://img.shields.io/static/v1?style=flat&label=Website&labelColor=FFFFFF&color=333333&message=damianszczypka.com
)](http://damianszczypka.com)

If you'd like to see everyone who contributed to this project,
view the [contributions page][URL_GH_CONTRIBUTORS]!
<br>
Thank you to everyone who contributes! 🙌

[↑ Back to menu][URL_TOC]

---

## License

Copyright &copy; 2020 [Vikrant Bhat](https://github.com/bhatvikrant).
<br>
This project is [MIT][LICENSE] licensed.

[↑ Back to menu][URL_TOC]

---

[ASSET_LOGO]: assets/world-countries-capitals.gif
[BADGE_NPM_RELEASE]: https://img.shields.io/npm/v/world-countries-capitals?style=flat&logo=npm&label=version
[BADGE_NPM_DOWNLOADS]: https://img.shields.io/npm/dt/world-countries-capitals?style=flat&logo=npm
[BADGE_BUNDLE_SIZE]: https://img.shields.io/bundlephobia/min/world-countries-capitals?style=flat&
[BADGE_GH_WATCHERS]: https://img.shields.io/github/watchers/bhatvikrant/world-countries-capitals?style=flat&logo=github
[BADGE_GH_STARS]: https://img.shields.io/github/stars/bhatvikrant/world-countries-capitals?style=flat&logo=github
[BADGE_GH_FORKS]: https://img.shields.io/github/forks/bhatvikrant/world-countries-capitals?style=flat&logo=github
[BADGE_GH_ISSUES]: https://img.shields.io/github/issues/bhatvikrant/world-countries-capitals?style=flat&logo=github
[BADGE_GH_PULL_REQUESTS]: https://img.shields.io/github/issues-pr/bhatvikrant/world-countries-capitals?style=flat&logo=github
[BADGE_LICENSE]: https://img.shields.io/npm/l/world-countries-capitals?style=flat
[BADGE_OPENBASE_RATING]: https://badges.openbase.io/js/rating/world-countries-capitals.svg
[DOC_CHANGELOG]: CHANGELOG.md
[DOC_CONTRIBUTING]: .github/CONTRIBUTING.md
[LICENSE]: LICENSE
[URL_TOC]: #table-of-contents
[URL_INTRODUCTION]: #introduction
[URL_DEMOS]: #demos
[URL_INSTALLATION]: #installation
[URL_HOW_TO_USE]: #how-to-use
[URL_DATA_MODEL]: #data-model
[URL_AVAILABLE_METHODS]: #available-methods
[URL_CONTRIBUTING]: #contributing
[URL_CORE_TEAM]: #core-team
[URL_LICENSE]: #license
[URL_NPM]: https://www.npmjs.com/package/world-countries-capitals
[URL_YARN]: https://yarnpkg.com/package/world-countries-capitals
[URL_UNPKG]: https://unpkg.com/world-countries-capitals
[URL_BUNDLEPHOBIA]: https://bundlephobia.com/result?p=world-countries-capitals
[URL_GH_ISSUES]: https://github.com/bhatvikrant/world-countries-capitals/issues
[URL_GH_NEW_ISSUE]: https://github.com/bhatvikrant/world-countries-capitals/issues/new
[URL_GH_PULL_REQUESTS]: https://github.com/bhatvikrant/world-countries-capitals/pulls
[URL_GH_RELEASES]: https://github.com/bhatvikrant/world-countries-capitals/releases
[URL_GH_CONTRIBUTORS]: https://github.com/bhatvikrant/world-countries-capitals/graphs/contributors
[URL_OPENBASE]: https://openbase.io/js/world-countries-capitals
