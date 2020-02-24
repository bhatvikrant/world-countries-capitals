const assert = require("assert");
const testUtils = require("./testUtils");
const countryApi = require("../index.js");

const actualCountries = countryApi.getCountriesFamousFor("oil");
const expectedCountries = [
    {
        country: 'algeria',
        capital: 'algiers',
        currency: 'algerian dinar',
        native_language: [ 'arabic', 'tamazight', 'french' ],
        famous_for: 'oil and gas reserves'
    },
    {
        country: 'angola',
        capital: 'luanda',
        currency: 'kwanza',
        native_language: [ 'portuguese' ],
        famous_for: 'oil'
    },
    {
        country: 'bahrain',
        capital: 'manama',
        currency: 'bahraini dinar',
        native_language: [ 'arabic' ],
        famous_for: 'oil, pearls and world heritage sites'
    },
    {
        country: 'bulgaria',
        capital: 'sofia',
        currency: 'lev',
        native_language: [ 'bulgarian' ],
        famous_for: 'lavender oil and the rose valley'
    },
    {
        country: 'central african republic',
        capital: 'bangui',
        currency: 'central african cfa franc',
        native_language: [ 'sango', 'french' ],
        famous_for: 'diamonds, gold, oil and uranium'
    },
    {
        country: 'norway',
        capital: 'oslo',
        currency: 'norwegian krone',
        native_language: [ 'norwegian' ],
        famous_for: 'oil, fjords, mountains and midnight sun'
    }
];

assert.equal(testUtils.countryArraysAreEqual(actualCountries, expectedCountries), true);