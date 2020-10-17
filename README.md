![world-countries-capitals][ASSET_LOGO]

# world-countries-capitals

[![Release version](https://img.shields.io/npm/v/world-countries-capitals?logo=npm&label=version)][URL_NPM]
![NPM downloads](https://img.shields.io/npm/dt/world-countries-capitals?logo=npm)
[![Bundle minified size](https://img.shields.io/bundlephobia/min/world-countries-capitals)][URL_BUNDLEPHOBIA]
<br>
![GitHub watchers](https://img.shields.io/github/watchers/bhatvikrant/world-countries-capitals?logo=github)
![GitHub stars](https://img.shields.io/github/stars/bhatvikrant/world-countries-capitals?logo=github)
![GitHub forks](https://img.shields.io/github/forks/bhatvikrant/world-countries-capitals?logo=github)
[![GitHub issues](https://img.shields.io/github/issues/bhatvikrant/world-countries-capitals?logo=github)][URL_GH_ISSUES]
[![GitHub pull requests](https://img.shields.io/github/issues-pr/bhatvikrant/world-countries-capitals?logo=github)][URL_GH_PULL_REQUESTS]

[![License](https://img.shields.io/npm/l/world-countries-capitals)][LICENSE]

[![Openbase rating](https://badges.openbase.io/js/rating/world-countries-capitals.svg)][URL_OPENBASE]

---

## Table of Contents

1. [Introduction][URL_🗺]
2. [Installation][URL_📜]
3. [How to use][URL_📋]
4. [Data model][URL_🧬]
5. [Available methods][URL_🧩]
6. [Demos][URL_🚀]
7. [Contributing][URL_🤝]
8. [Core Team][URL_✨]
9. [License][URL_📝]

---

## 🗺 Introduction

> **World-Countries-Capitals** is _JavaScript_ Library that give access to static data of all countries in the world.

Currenly available data for each country is:
- **country** - country name
- **capital** - capital city
- **currency** - currency that is used
- **native_language** - list of official languages that are used in country
- **famous_for** - list of things that makes country famous for
- **phone_code** - country dial-in (calling) code
- **flag** - image of country flag
- **drive_direction** - drive direction
- **continent** - 2-letter code of continent where the country is
- **iso** - country ISO 3166-1 code (numeric, alpha-2, alpha-3)
- **tld** - country code top-level domain
- **constitutional_form** - official political system

Feel free to give this project a ⭐️ if it helped you! 🤗

[↑ Back to menu][URL_TOC]

---

## 📜 Installation

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

## 📋 How to use

Depends which way you choose to [install this package][URL_📜], there will be different way to access it.

If you use it through _Node.js_, you need to import it:
```js
const wcc = require('world-countries-capitals')
```

[↑ Back to menu][URL_TOC]

---

## 🧬 Data model

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
 * @property {String} continent - Continent that country belong to
 * @property {Object} iso - ISO 3166-1 standard codes
 * @property {String} iso.numeric - 3-digit code
 * @property {String} iso.alpha_2 - 2-letter code
 * @property {String} iso.alpha_3 - 3-letter code
 * @property {String} tld - Country code top-level domain
 * @property {String} constitutional_form - Name of official political system
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
	continent: 'eu',
	iso: {
		numeric: '616',
		alpha_2: 'pl',
		alpha_3: 'pol',
	},
	tld: '.pl',
	constitutional_form: 'republic',
}
```

[↑ Back to menu][URL_TOC]

---

## 🧩 Available methods

| Method                                                      | Parameters                                | Returns                                                                                                  |
| ----------------------------------------------------------- | ----------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `.getAllCountries()`                                        | -                                         | `{String[]}` of all countries names                                                                      |
| `.getAllCountryDetails()`                                   | -                                         | `{Country[]}` with details                                                                               |
| `.getRandomCountry()`                                       | -                                         | `{String}` of random country name                                                                        |
| `.getNRandomCountriesData(n)`                               | `n {Number}`                              | `{Country[]}` with `n` amount of countries                                                               |
| `.getCountryDetailsByName(countryName)`                     | `countryName {String}`                    | `{Country}` found by country name                                                                        |
| `.getCountryDetailsByCapital(capital)`                      | `capital {String}`                        | `{Country}` found by capital name                                                                        |
| `.getCountriesByLanguage(languageSpoken)`                   | `languageSpoken {String}`                 | `{Country[]}` with specific language                                                                     |
| `.getCountriesByFamousFor(famousThing)`                     | `famousThing {String}`                    | `{Country[]}` that are famous for specific thing                                                         |
| `.getCountriesByContinent(continentCode)`                   | `continentCode {String}`                  | `{Country[]}` that are located on specific continent                                                     |
| `.getCountryDetailsByISO(isoType, isoValue)`                | `isoType {String}`<br>`isoValue {String}` | `{Country}` found by one of _ISO 3166-1_ code type<br>(available types: 'numeric', 'alpha-2', 'alpha-3') |
| `.getCountriesByTLD(tldName)`                               | `tldName {String}`                        | `{Country}` found by _ccTLD_                                                                             |
| `.getCountriesByConstitutionalForm(constitutionalFormName)` | `constitutionalFormName {String}`         | `{Country[]}` found by specific constitutional form                                                      |
<br>
❗️ All params are **NOT** case sensitive so no matter how argument looks, the response will remain the same.

[↑ Back to menu][URL_TOC]

---

## 🚀 Demos

Sample basic usage:
```js
// 1. Load _wcc_ Package
const wcc = require('world-countries-capitals')

// 2. Use any _wcc_ Method
const randomCountryName = wcc.getRandomCountry()

// 3. Play with returned data
console.log(randomCountryName) // Possible output: 'poland'
```

More demos/examples created by community ❤️
- [Vue.js demo](https://codesandbox.io/s/wcc-demo-tux1b) - created by [@leodrk](https://github.com/leodrk) - Search countries by a selected field

[↑ Back to menu][URL_TOC]

---

## 🤝 Contributing

Contributions, issues and feature requests are always welcome!

Feel free to check our [issues page][URL_GH_ISSUES] to see all open issues.
If this is your first time contributing to _Open Source_ project, check out the [contributing guidelines][DOC_CONTRIBUTING] first.

You can also suggest a new feature by [creating an issue][URL_GH_NEW_ISSUE].
Please wait for confirmation before working on it.

[↑ Back to menu][URL_TOC]

---

## ✨ Core team

### Vikrant Bhat
[![GitHub followers](https://img.shields.io/github/followers/bhatvikrant?style=flat&logo=github&logoColor=181717&label=GitHub&labelColor=FFFFFF&color=181717)](https://github.com/bhatvikrant)
[![Twitter Follow](https://img.shields.io/twitter/follow/vikrantbhat1022?style=flat&logo=twitter&logoColor=1DA1F2&label=Twitter&labelColor=FFFFFF&color=1DA1F2)](https://twitter.com/vikrantbhat1022)
[![LinkedIn Profile](https://img.shields.io/static/v1?style=flat&logo=linkedin&logoColor=0077B5&label=LinkedIn&labelColor=FFFFFF&color=0077B5&message=Vikrant%20Bhat)](https://linkedin.com/in/vikrant-bhat-2b6221189)
<br>
[![Personal website](https://img.shields.io/static/v1?style=flat&label=Website&labelColor=FFFFFF&color=333333&message=underreacted.netlify.app)](https://underreacted.netlify.app)

### Damian Szczypka
[![GitHub followers](https://img.shields.io/github/followers/sthiepaan?style=flat&logo=github&logoColor=181717&label=GitHub&labelColor=FFFFFF&color=181717)](https://github.com/sthiepaan)
[![Twitter Follow](https://img.shields.io/twitter/follow/sthiepaan?style=flat&logo=twitter&logoColor=1DA1F2&label=Twitter&labelColor=FFFFFF&color=1DA1F2)](https://twitter.com/sthiepaan)
[![LinkedIn Profile](https://img.shields.io/static/v1?style=flat&logo=linkedin&logoColor=0077B5&label=LinkedIn&labelColor=FFFFFF&color=0077B5&message=Damian%20Szczypka)](https://linkedin.com/in/damianszczypka)
<br>
[![Personal website](https://img.shields.io/static/v1?style=flat&label=Website&labelColor=FFFFFF&color=333333&message=damianszczypka.com)](http://damianszczypka.com)

If you'd like to see everyone who contributed to this project, view the [contributions page][URL_GH_CONTRIBUTORS]!
<br>
Thank you to everyone who contributes! 🙌

[↑ Back to menu][URL_TOC]

---

## 📝 License

Copyright &copy; 2020 [Vikrant Bhat](https://github.com/bhatvikrant/).
<br>
This project is [MIT][LICENSE] licensed.

[↑ Back to menu][URL_TOC]

---

<!-- TODO: Prepare CHANGELOG.md file -->
<!-- TODO: Prepare CONTRIBUTING.md file -->
<!-- TODO: Prepare .github template files -->
[ASSET_LOGO]: assets/world-countries-capitals.gif
[DOC_CHANGELOG]: CHANGELOG.md
[DOC_CONTRIBUTING]: CONTRIBUTING.md
[LICENSE]: LICENSE
[URL_TOC]: #table-of-contents
[URL_🗺]: #🗺-introduction
[URL_📜]: #📜-installation
[URL_📋]: #📋-how-to-use
[URL_🧬]: #🧬-data-model
[URL_🧩]: #🧩-available-methods
[URL_🚀]: #🚀-demos
[URL_🤝]: #🤝-contributing
[URL_✨]: #✨-core-team
[URL_📝]: #📝-license
[URL_NPM]: https://www.npmjs.com/package/world-countries-capitals
[URL_YARN]: https://yarnpkg.com/package/world-countries-capitals
[URL_UNPKG]: https://unpkg.com/world-countries-capitals
[URL_BUNDLEPHOBIA]: https://bundlephobia.com/result?p=world-countries-capitals
[URL_GH_ISSUES]: https://github.com/bhatvikrant/world-countries-capitals/issues
[URL_GH_NEW_ISSUE]: https://github.com/bhatvikrant/world-countries-capitals/issues/new
[URL_GH_PULL_REQUESTS]: https://github.com/bhatvikrant/world-countries-capitals/pulls
[URL_GH_CONTRIBUTORS]: https://github.com/bhatvikrant/world-countries-capitals/graphs/contributors
[URL_OPENBASE]: https://openbase.io/js/world-countries-capitals
