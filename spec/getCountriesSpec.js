describe("The index", () => {
  const testUtils = require("./specHelper");
  const countryApi = require("../index.js");

  describe("The getRandomCountry", () => {
    it("returns a randomly selected country", () => {
      expect(countryApi.getRandomCountry()).toBeDefined();
    });
  });

  describe("The getNRandomCountriesData", () => {
    it("returns a N randomly selected countries' data", () => {
      expect(countryApi.getNRandomCountriesData(64).length).toEqual(64);
    });
  });

  describe("The getCountryDetailsByCapital when given a capital", () => {
    it("returns the details of countries with that capital", () => {
      expect(countryApi.getCountryDetailsByCapital("kabul")[0]).toEqual({
        country: "afghanistan",
        capital: "kabul",
        currency: "afghani",
        native_language: ["dari persian", "pashto"],
        famous_for: "rugs, taliban",
        phone_code: "+93",
        flag: "https://flagpedia.net/data/flags/h80/af.png",
        drive_direction: "right",
        continent: "as",
        iso: {
          numeric: "004",
          alpha_2: "af",
          alpha_3: "afg",
        },
        tld: ".af",
      });
    });
  });

  describe("The getCountryDetailsByName when given a country's name", () => {
    it("returns the countries with that name", () => {
      expect(countryApi.getCountryDetailsByName("albania")[0]).toEqual({
        country: "albania",
        capital: "tirane",
        currency: "lek",
        native_language: ["albanian"],
        famous_for: "mother teresa",
        phone_code: "+355",
        flag: "https://flagpedia.net/data/flags/h80/al.png",
        drive_direction: "right",
        continent: "eu",
        iso: {
          numeric: "008",
          alpha_2: "al",
          alpha_3: "alb",
        },
        tld: ".al",
      });
    });
  });

  describe("The getCountriesByDriveDirection when given a country's drive direction", () => {
    it("returns the countries that use this driving direction", () => {
      expect(countryApi.getCountriesByDriveDirection("left").length).toBe(46);
    });
  });

  describe("The getCountriesByLanguage when given a language", () => {
    it("returns countries with that language being their native language", () => {
      expect(countryApi.getCountriesByLanguage("bosnian")[0]).toEqual({
        country: "bosnia and herzegovina",
        capital: "sarajevo",
        currency: "convertible mark",
        native_language: ["bosnian", "croatian", "serbian"],
        famous_for: "natural environment and cultural heritage",
        phone_code: "+387",
        flag: "https://flagpedia.net/data/flags/h80/ba.png",
        drive_direction: "right",
        continent: "eu",
        iso: {
          numeric: "070",
          alpha_2: "ba",
          alpha_3: "bih",
        },
        tld: ".ba",
      });
    });
  });

  describe("The getAllCountryDetails", () => {
    it("returns the details of all countries", () => {
      expect(countryApi.getAllCountryDetails().length).toEqual(196);
    });
  });

  describe("The getAllCountries", () => {
    it("returns all of the countries", () => {
      expect(countryApi.getAllCountries().length).toEqual(196);
    });
  });

  describe("The getCountriesByFamousFor", () => {
    const actualCountries = countryApi.getCountriesByFamousFor("oil");
    const expectedCountries = [
      {
        country: "algeria",
        capital: "algiers",
        currency: "algerian dinar",
        native_language: ["arabic", "tamazight", "french"],
        famous_for: "oil and gas reserves",
        phone_code: "+213",
      },
      {
        country: "angola",
        capital: "luanda",
        currency: "kwanza",
        native_language: ["portuguese"],
        famous_for: "oil",
        phone_code: "+244",
      },
      {
        country: "bahrain",
        capital: "manama",
        currency: "bahraini dinar",
        native_language: ["arabic"],
        famous_for: "oil, pearls and world heritage sites",
        phone_code: "+973",
      },
      {
        country: "bulgaria",
        capital: "sofia",
        currency: "lev",
        native_language: ["bulgarian"],
        famous_for: "lavender oil and the rose valley",
        phone_code: "+359",
      },
      {
        country: "central african republic",
        capital: "bangui",
        currency: "central african cfa franc",
        native_language: ["sango", "french"],
        famous_for: "diamonds, gold, oil and uranium",
        phone_code: "+236",
      },
      {
        country: "norway",
        capital: "oslo",
        currency: "norwegian krone",
        native_language: ["norwegian"],
        famous_for: "oil, fjords, mountains and midnight sun",
        phone_code: "+47",
      },
    ];
    it("returns countries famous for oil", () => {
      expect(
        testUtils.countryArraysAreEqual(actualCountries, expectedCountries)
      ).toBeTrue();
    });
  });

  describe("The getCountriesByContinent", () => {
    const africaCountries = countryApi.getCountriesByContinent("AF");
    const europeCountries = countryApi.getCountriesByContinent("eu");
    const oceaniaCountries = countryApi.getCountriesByContinent("oc");
    const expectedOceaniaCountries = [
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
    ];

    it("returns correct amount of africa countries using UPPERCASE", () => {
      expect(africaCountries.length).toBe(55);
    });
    it("returns correct amount of europe countries", () => {
      expect(europeCountries.length).toBe(47);
    });
    it("returns all oceania countries", () => {
      expect(oceaniaCountries).toEqual(expectedOceaniaCountries);
    });
  });
});
