function countriesAreEqual(actualCountry, expectedCountry) {
    return expectedCountry.country === actualCountry.country
    && expectedCountry.capital === actualCountry.capital
    && expectedCountry.currency === actualCountry.currency
    && arraysAreEqual(expectedCountry.native_language, actualCountry.native_language)
    && expectedCountry.famous_for === actualCountry.famous_for;
}

function arraysAreEqual(actual, expected) {
    if (expected.length != actual.length) {
        return false;
    }
    for (let i = 0; i < expected.length; i++) {
        if (expected[i] != actual[i]) {
            return false;
        }
    }
    return true;
}

function countryArraysAreEqual(actualCountries, expectedCountries) {
    for (let i = 0; i < expectedCountries.length; i++) {
        if(countriesAreEqual(actualCountries[i], expectedCountries[i]) === false) {
            return false;
        }
    }
    return true;
}

module.exports = {
    countriesAreEqual,
    arraysAreEqual,
    countryArraysAreEqual
}