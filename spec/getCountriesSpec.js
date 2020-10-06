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
        alcohol_prohibition: 'nationwide',
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
        alcohol_prohibition: 'none',
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
        alcohol_prohibition: 'none',
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
  
  describe("The getCountriesByAlcoholProhibition where parameter is none", () => {
    it("returns the total number of countries where no alcohol prohibition is applicable", () => {
      expect(countryApi.getCountriesByAlcoholProhibition("none").length).toEqual(176);
    });
  });

  describe("The getCountriesByAlcoholProhibition where parameter is nationwide", () => {
    const results = countryApi.getCountriesByAlcoholProhibition("nationwide");

    const expectedResults = [

      {
        country: 'afghanistan',
        capital: 'kabul',
        currency: 'afghani',
        native_language: ['dari persian', 'pashto'],

        famous_for: 'rugs, taliban',
        phone_code: '+93',
        flag: 'https://flagpedia.net/data/flags/h80/af.png',
        drive_direction: 'right',
        alcohol_prohibition: 'nationwide',
      },
      {
        country: 'brunei',
        capital: 'bandar seri begawan',
        currency: 'brunei dollar',
        native_language: ['malay'],

        famous_for: 'gorgeous mosques and islamic architecture',
        phone_code: '+673',
        flag: 'https://flagpedia.net/data/flags/h80/bn.png',
        drive_direction: 'left',
        alcohol_prohibition: 'nationwide',
      },
      {
        country: 'djibouti',
        capital: 'djibouti',
        currency: 'djiboutian franc',
        native_language: ['arabic', 'french'],
        famous_for: 'amazing landscapes, limestone vents and flamingos',
        phone_code: '+253',
        flag: 'https://flagpedia.net/data/flags/h80/dj.png',
        drive_direction: 'right',
        alcohol_prohibition: 'nationwide',
      },
      {
        country: 'iran',
        capital: 'tehran',
        currency: 'rial',
        native_language: ['persian'],
        famous_for: 'nuclear weapon, shia muslims, poetry, persian carpet',
        phone_code: '+98',
        flag: 'https://flagpedia.net/data/flags/h80/ir.png',
        drive_direction: 'right',
        alcohol_prohibition: 'nationwide',
      },
      {
        country: 'kuwait',
        capital: 'kuwait city',
        currency: 'kuwaiti dollar',
        native_language: ['arabic', 'english'],
        famous_for: "victim of saddam's invasion",
        phone_code: '965',
        flag: 'https://flagpedia.net/data/flags/h80/kw.png',
        drive_direction: 'right',
        alcohol_prohibition: 'nationwide',
      },
      {
        country: 'libya',
        capital: 'tripoli',
        currency: 'libyan dinar',
        native_language: ['arabic'],
        famous_for: 'sahara desert',
        phone_code: '+218',
        flag: 'https://flagpedia.net/data/flags/h80/ly.png',
        drive_direction: 'right',
        alcohol_prohibition: 'nationwide',
      },
      {
        country: 'mauritania',
        capital: 'nouakchott',
        currency: 'ouguiya',
        native_language: ['arabic'],
        famous_for: 'large reserves of iron ore, copper, and gypsum',
        phone_code: '+222',
        flag: 'https://flagpedia.net/data/flags/h80/mr.png',
        drive_direction: 'right',
        alcohol_prohibition: 'nationwide',
      },
      {
        country: 'saudi arabia',
        capital: 'riyadh',
        currency: 'saudi riyal',
        native_language: ['arabic'],
        famous_for: 'strict rules, wahhabism, mecca and madina',
        phone_code: '+966',
        flag: 'https://flagpedia.net/data/flags/h80/sa.png',
        drive_direction: 'right',
        alcohol_prohibition: 'nationwide',
      },
      {
        country: 'somalia',
        capital: 'mogadishu',
        currency: 'somali shilling',
        native_language: ['somali', 'arabic'],
        famous_for: 'frankincense and myrrh',
        phone_code: '+252',
        flag: 'https://flagpedia.net/data/flags/h80/so.png',
        drive_direction: 'right',
        alcohol_prohibition: 'nationwide',
      }
    ];
    it("returns the details of all countries where nationwide alcohol prohibition is applicable", () => {
       expect(results).toEqual(expectedResults); 
    });
  });
});
