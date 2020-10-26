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
        "country": "afghanistan",
        "capital": "kabul",
        "currency": "afghani",
        "native_language": ["dari persian", "pashto"],
        "famous_for": "rugs, taliban",
        "phone_code": "+93",
        "flag": "https://flagpedia.net/data/flags/h80/af.png",
        "drive_direction": "right",
        "alcohol_prohibition": "nationwide",
        "area": {
          "km2": 652864,
          "mi2": 252072
        },
        "continent": "as",
        "iso": {
          "numeric": "004",
          "alpha_2": "af",
          "alpha_3": "afg"
        },
        "tld": ".af",
        "constitutional_form": "republic",
        "language_codes": ["fa-AF", "ps-AF"],
        "is_landlocked": true
      });
    });
  });

  describe("The getCountryDetailsByName when given a country's name", () => {
    it("returns the countries with that name", () => {
      expect(countryApi.getCountryDetailsByName("albania")[0]).toEqual({
        "country": "albania",
        "capital": "tirane",
        "currency": "lek",
        "native_language": ["albanian"],
        "famous_for": "mother teresa",
        "phone_code": "+355",
        "flag": "https://flagpedia.net/data/flags/h80/al.png",
        "drive_direction": "right",
        "alcohol_prohibition": "none",
        "area": {
          "km2": 28748,
          "mi2": 11100
        },
        "continent": "eu",
        "iso": {
          "numeric": "008",
          "alpha_2": "al",
          "alpha_3": "alb"
        },
        "tld": ".al",
        "constitutional_form": "republic",
        "language_codes": ["sq-AL"],
        "is_landlocked": false
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
        "country": "bosnia and herzegovina",
        "capital": "sarajevo",
        "currency": "convertible mark",
        "native_language": ["bosnian", "croatian", "serbian"],
        "famous_for": "natural environment and cultural heritage",
        "phone_code": "+387",
        "flag": "https://flagpedia.net/data/flags/h80/ba.png",
        "drive_direction": "right",
        "alcohol_prohibition": "none",
        "area": {
          "km2": 51209,
          "mi2": 19772
        },
        "continent": "eu",
        "iso": {
          "numeric": "070",
          "alpha_2": "ba",
          "alpha_3": "bih"
        },
        "tld": ".ba",
        "constitutional_form": "republic",
        "language_codes": ["bs-BA", "hr-BA", "sr-BA"],
        "is_landlocked": false
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
  
  describe("The getCountriesByAlcoholProhibition", () => {
    const results = countryApi.getCountriesByAlcoholProhibition("nationwide");
    const expectedResults = [
      {
        country: 'afghanistan',
        capital: 'kabul',
        currency: 'afghani',
        native_language: [ 'dari persian', 'pashto' ],
        famous_for: 'rugs, taliban',
        phone_code: '+93',
        flag: 'https://flagpedia.net/data/flags/h80/af.png',
        drive_direction: 'right',
        alcohol_prohibition: 'nationwide',
        area: { km2: 652864, mi2: 252072 },
        continent: 'as',
        iso: { numeric: '004', alpha_2: 'af', alpha_3: 'afg' },
        tld: '.af',
        constitutional_form: 'republic',
        language_codes: [ 'fa-AF', 'ps-AF' ],
        is_landlocked: true
      },
      {
        country: 'brunei',
        capital: 'bandar seri begawan',
        currency: 'brunei dollar',
        native_language: [ 'malay' ],
        famous_for: 'gorgeous mosques and islamic architecture',
        phone_code: '+673',
        flag: 'https://flagpedia.net/data/flags/h80/bn.png',
        drive_direction: 'left',
        alcohol_prohibition: 'nationwide',
        area: { km2: 5765, mi2: 2226 },
        continent: 'as',
        iso: { numeric: '096', alpha_2: 'bn', alpha_3: 'brn' },
        tld: '.bn',
        constitutional_form: 'absolute monarchy',
        language_codes: [ 'ms-BN' ],
        is_landlocked: false
      },
      {
        country: 'djibouti',
        capital: 'djibouti',
        currency: 'djiboutian franc',
        native_language: [ 'arabic', 'french' ],
        famous_for: 'amazing landscapes, limestone vents and flamingos',
        phone_code: '+253',
        flag: 'https://flagpedia.net/data/flags/h80/dj.png',
        drive_direction: 'right',
        alcohol_prohibition: 'nationwide',
        area: { km2: 23200, mi2: 9000 },
        continent: 'af',
        iso: { numeric: '262', alpha_2: 'dj', alpha_3: 'dji' },
        tld: '.dj',
        constitutional_form: 'republic',
        language_codes: [ 'ar-DJ', 'fr-DJ' ],
        is_landlocked: false
      },
      {
        country: 'iran',
        capital: 'tehran',
        currency: 'rial',
        native_language: [ 'persian' ],
        famous_for: 'nuclear weapon, shia muslims, poetry, persian carpet',
        phone_code: '+98',
        flag: 'https://flagpedia.net/data/flags/h80/ir.png',
        drive_direction: 'right',
        alcohol_prohibition: 'nationwide',
        area: { km2: 1648195, mi2: 636372 },
        continent: 'as',
        iso: { numeric: '364', alpha_2: 'ir', alpha_3: 'irn' },
        tld: '.ir',
        constitutional_form: 'republic',
        language_codes: [ 'fa-IR' ],
        is_landlocked: false
      },
      {
        country: 'kuwait',
        capital: 'kuwait city',
        currency: 'kuwaiti dollar',
        native_language: [ 'arabic', 'english' ],
        famous_for: "victim of saddam's invasion",
        phone_code: '965',
        flag: 'https://flagpedia.net/data/flags/h80/kw.png',
        drive_direction: 'right',
        alcohol_prohibition: 'nationwide',
        area: { km2: 17818, mi2: 6880 },
        continent: 'as',
        iso: { numeric: '414', alpha_2: 'kw', alpha_3: 'kwt' },
        tld: '.kw',
        constitutional_form: 'constitutional monarchy',
        language_codes: [ 'ar-KW', 'en-KW' ],
        is_landlocked: false
      },
      {
        country: 'libya',
        capital: 'tripoli',
        currency: 'libyan dinar',
        native_language: [ 'arabic' ],
        famous_for: 'sahara desert',
        phone_code: '+218',
        flag: 'https://flagpedia.net/data/flags/h80/ly.png',
        drive_direction: 'right',
        alcohol_prohibition: 'nationwide',
        area: { km2: 1759540, mi2: 679360 },
        continent: 'af',
        iso: { numeric: '434', alpha_2: 'ly', alpha_3: 'lby' },
        tld: '.ly',
        constitutional_form: 'n/a',
        language_codes: [ 'ar-LY' ],
        is_landlocked: false
      },
      {
        country: 'mauritania',
        capital: 'nouakchott',
        currency: 'ouguiya',
        native_language: [ 'arabic' ],
        famous_for: 'large reserves of iron ore, copper, and gypsum',
        phone_code: '+222',
        flag: 'https://flagpedia.net/data/flags/h80/mr.png',
        drive_direction: 'right',
        alcohol_prohibition: 'nationwide',
        area: { km2: 1030700, mi2: 398000 },
        continent: 'af',
        iso: { numeric: '478', alpha_2: 'mr', alpha_3: 'mrt' },
        tld: '.mr',
        constitutional_form: 'republic',
        language_codes: [ 'ar-MR' ],
        is_landlocked: false
      },
      {
        country: 'saudi arabia',
        capital: 'riyadh',
        currency: 'saudi riyal',
        native_language: [ 'arabic' ],
        famous_for: 'strict rules, wahhabism, mecca and madina',
        phone_code: '+966',
        flag: 'https://flagpedia.net/data/flags/h80/sa.png',
        drive_direction: 'right',
        alcohol_prohibition: 'nationwide',
        area: { km2: 2149690, mi2: 830000 },
        continent: 'as',
        iso: { numeric: '682', alpha_2: 'sa', alpha_3: 'sau' },
        tld: '.sa',
        constitutional_form: 'absolute monarchy',
        language_codes: [ 'ar-SA' ],
        is_landlocked: false
      },
      {
        country: 'somalia',
        capital: 'mogadishu',
        currency: 'somali shilling',
        native_language: [ 'somali', 'arabic' ],
        famous_for: 'frankincense and myrrh',
        phone_code: '+252',
        flag: 'https://flagpedia.net/data/flags/h80/so.png',
        drive_direction: 'right',
        alcohol_prohibition: 'nationwide',
        area: { km2: 637657, mi2: 246201 },
        continent: 'af',
        iso: { numeric: '706', alpha_2: 'so', alpha_3: 'som' },
        tld: '.so',
        constitutional_form: 'republic',
        language_codes: [ 'so-SO' ],
        is_landlocked: false
      }    
    ];
    it("returns the details of all countries where nationwide alcohol prohibition is applicable", () => {
       expect(results).toEqual(expectedResults); 
    });
    it("returns the total number of countries where no alcohol prohibition is applicable", () => {
      expect(countryApi.getCountriesByAlcoholProhibition("none").length).toEqual(176);
    });
  });
  describe("The getCountryDetailsByCapital when given a capital", () => {
    it("returns the details of countries with that capital", () => {
      expect(countryApi.getCountryDetailsByCapital("kabul")[0]).toEqual({
        "country": "afghanistan",
        "capital": "kabul",
        "currency": "afghani",
        "native_language": ["dari persian", "pashto"],
        "famous_for": "rugs, taliban",
        "phone_code": "+93",
        "flag": "https://flagpedia.net/data/flags/h80/af.png",
        "drive_direction": "right",
        "alcohol_prohibition": "nationwide",
        "area": {
          "km2": 652864,
          "mi2": 252072
        },
        "continent": "as",
        "iso": {
          "numeric": "004",
          "alpha_2": "af",
          "alpha_3": "afg"
        },
        "tld": ".af",
        "constitutional_form": "republic",
        "language_codes": ["fa-AF", "ps-AF"],
        "is_landlocked": true
      });
    });
  });

  describe("The getCountryDetailsByName when given a country's name", () => {
    it("returns the countries with that name", () => {
      expect(countryApi.getCountryDetailsByName("albania")[0]).toEqual({
        "country": "albania",
        "capital": "tirane",
        "currency": "lek",
        "native_language": ["albanian"],
        "famous_for": "mother teresa",
        "phone_code": "+355",
        "flag": "https://flagpedia.net/data/flags/h80/al.png",
        "drive_direction": "right",
        "alcohol_prohibition": "none",
        "area": {
          "km2": 28748,
          "mi2": 11100
        },
        "continent": "eu",
        "iso": {
          "numeric": "008",
          "alpha_2": "al",
          "alpha_3": "alb"
        },
        "tld": ".al",
        "constitutional_form": "republic",
        "language_codes": ["sq-AL"],
        "is_landlocked": false
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
        "country": "bosnia and herzegovina",
        "capital": "sarajevo",
        "currency": "convertible mark",
        "native_language": ["bosnian", "croatian", "serbian"],
        "famous_for": "natural environment and cultural heritage",
        "phone_code": "+387",
        "flag": "https://flagpedia.net/data/flags/h80/ba.png",
        "drive_direction": "right",
        "alcohol_prohibition": "none",
        "area": {
          "km2": 51209,
          "mi2": 19772
        },
        "continent": "eu",
        "iso": {
          "numeric": "070",
          "alpha_2": "ba",
          "alpha_3": "bih"
        },
        "tld": ".ba",
        "constitutional_form": "republic",
        "language_codes": ["bs-BA", "hr-BA", "sr-BA"],
        "is_landlocked": false
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
        country: 'australia',
        capital: 'canberra',
        currency: 'australian dollar',
        native_language: [ 'english' ],
        famous_for: 'koalas and kangaroos',
        phone_code: '+61',
        flag: 'https://flagpedia.net/data/flags/h80/au.png',
        drive_direction: 'left',
        alcohol_prohibition: 'none',
        area: { km2: 7692024, mi2: 2969907 },
        continent: 'oc',
        iso: { numeric: '036', alpha_2: 'au', alpha_3: 'aus' },
        tld: '.au',
        constitutional_form: 'constitutional monarchy',
        language_codes: [ 'en-AU' ],
        is_landlocked: false
      },
      {
        country: 'fiji',
        capital: 'suva',
        currency: 'fijian dollar',
        native_language: [ 'english', 'bau fijian', 'hindi' ],
        famous_for: 'friendly people and heavenly tropical islands',
        phone_code: '+679',
        flag: 'https://flagpedia.net/data/flags/h80/fj.png',
        drive_direction: 'left',
        alcohol_prohibition: 'none',
        area: { km2: 18272, mi2: 7055 },
        continent: 'oc',
        iso: { numeric: '242', alpha_2: 'fj', alpha_3: 'fji' },
        tld: '.fj',
        constitutional_form: 'republic',
        language_codes: [ 'en-FJ', 'fj-FJ' ],
        is_landlocked: false
      },
      {
        country: 'kiribati',
        capital: 'tarawa atoll',
        currency: 'kiribati dollar',
        native_language: [ 'english', 'gilbertese' ],
        famous_for: 'flyfishing, scuba diving and astounding seabird wildlife',
        phone_code: '+686',
        flag: 'https://flagpedia.net/data/flags/h80/ki.png',
        drive_direction: 'left',
        alcohol_prohibition: 'none',
        area: { km2: 811, mi2: 313 },
        continent: 'oc',
        iso: { numeric: '296', alpha_2: 'ki', alpha_3: 'kir' },
        tld: '.ki',
        constitutional_form: 'republic',
        language_codes: [ 'en-KI' ],
        is_landlocked: false
      },
      {
        country: 'marshall islands',
        capital: 'majuro',
        currency: 'united states dollar',
        native_language: [ 'marshallese', 'english' ],
        famous_for: 'being fierce and hostile to strangers',
        phone_code: '+692',
        flag: 'https://flagpedia.net/data/flags/h80/mh.png',
        drive_direction: 'right',
        alcohol_prohibition: 'none',
        area: { km2: 181, mi2: 70 },
        continent: 'oc',
        iso: { numeric: '584', alpha_2: 'mh', alpha_3: 'mhl' },
        tld: '.mh',
        constitutional_form: 'republic',
        language_codes: [ 'en-MH', 'mh-MH' ],
        is_landlocked: false
      },
      {
        country: 'federal states of micronesia',
        capital: 'palikir',
        currency: 'united states dollar',
        native_language: [ 'english' ],
        famous_for: 'manta rays, eco-tourism',
        phone_code: '+691',
        flag: 'https://flagpedia.net/data/flags/h80/fm.png',
        drive_direction: 'right',
        alcohol_prohibition: 'none',
        area: { km2: 702, mi2: 271 },
        continent: 'oc',
        iso: { numeric: '583', alpha_2: 'fm', alpha_3: 'fsm' },
        tld: '.fm',
        constitutional_form: 'republic',
        language_codes: [ 'en-FM' ],
        is_landlocked: false
      },
      {
        country: 'nauru',
        capital: 'yaren',
        currency: 'australian dollar',
        native_language: [ 'english', 'nauran' ],
        famous_for: 'islands of banaba',
        phone_code: '+674',
        flag: 'https://flagpedia.net/data/flags/h80/nr.png',
        drive_direction: 'left',
        alcohol_prohibition: 'none',
        area: { km2: 21, mi2: 8.1 },
        continent: 'oc',
        iso: { numeric: '520', alpha_2: 'nr', alpha_3: 'nru' },
        tld: '.nr',
        constitutional_form: 'republic',
        language_codes: [ 'en-NR', 'na-NR' ],
        is_landlocked: false
      },
      {
        country: 'new zealand',
        capital: 'wellington',
        currency: 'new zealand dollar',
        native_language: [ 'english' ],
        famous_for: 'national rugby team',
        phone_code: '+64',
        flag: 'https://flagpedia.net/data/flags/h80/nz.png',
        drive_direction: 'left',
        alcohol_prohibition: 'none',
        area: { km2: 270467, mi2: 104428 },
        continent: 'oc',
        iso: { numeric: '554', alpha_2: 'nz', alpha_3: 'nzl' },
        tld: '.nz',
        constitutional_form: 'constitutional monarchy',
        language_codes: [ 'en-NZ' ],
        is_landlocked: false
      },
      {
        country: 'palau',
        capital: 'melekeok',
        currency: 'united states dollar',
        native_language: [ 'english', 'palauan' ],
        famous_for: 'jellyfish lake',
        phone_code: '+680',
        flag: 'https://flagpedia.net/data/flags/h80/pw.png',
        drive_direction: 'right',
        alcohol_prohibition: 'none',
        area: { km2: 459, mi2: 177 },
        continent: 'oc',
        iso: { numeric: '585', alpha_2: 'pw', alpha_3: 'plw' },
        tld: '.pw',
        constitutional_form: 'republic',
        language_codes: [ 'en-PW' ],
        is_landlocked: false
      },
      {
        country: 'papa new guinea',
        capital: 'port moresby papa',
        currency: 'papa new guinean kina',
        native_language: [ 'english', 'tok pisin', 'hiri motu' ],
        famous_for: 'scuba diving and marine diversity',
        phone_code: '+675',
        flag: 'https://flagpedia.net/data/flags/h80/pg.png',
        drive_direction: 'right',
        alcohol_prohibition: 'none',
        area: { km2: 462840, mi2: 178700 },
        continent: 'oc',
        iso: { numeric: '598', alpha_2: 'pg', alpha_3: 'png' },
        tld: '.pg',
        constitutional_form: 'constitutional monarchy',
        language_codes: [ 'en-PG' ],
        is_landlocked: false
      },
      {
        country: 'samoa',
        capital: 'apia',
        currency: 'tala',
        native_language: [ 'samoan', 'english' ],
        famous_for: 'samoan culture, music, dance and visual arts',
        phone_code: '+685',
        flag: 'https://flagpedia.net/data/flags/h80/ws.png',
        drive_direction: 'left',
        alcohol_prohibition: 'none',
        area: { km2: 2842, mi2: 1097 },
        continent: 'oc',
        iso: { numeric: '882', alpha_2: 'ws', alpha_3: 'wsm' },
        tld: '.ws',
        constitutional_form: 'republic',
        language_codes: [ 'en-WS', 'sm-WS' ],
        is_landlocked: false
      },
      {
        country: 'solomon islands',
        capital: 'honiara',
        currency: 'solomon islands dollar',
        native_language: [ 'solomons pijin' ],
        famous_for: 'world war 2',
        phone_code: '+677',
        flag: 'https://flagpedia.net/data/flags/h80/sb.png',
        drive_direction: 'right',
        alcohol_prohibition: 'none',
        area: { km2: 28896, mi2: 11157 },
        continent: 'oc',
        iso: { numeric: '090', alpha_2: 'sb', alpha_3: 'slb' },
        tld: '.sb',
        constitutional_form: 'constitutional monarchy',
        language_codes: [ 'en-SB' ],
        is_landlocked: false
      },
      {
        country: 'tonga',
        capital: "nuku'alofa",
        currency: "pa'anga",
        native_language: [ 'tongan', 'english' ],
        famous_for: 'graceful and dignified dancing of the kingdom',
        phone_code: '+676',
        flag: 'https://flagpedia.net/data/flags/h80/to.png',
        drive_direction: 'left',
        alcohol_prohibition: 'none',
        area: { km2: 747, mi2: 288 },
        continent: 'oc',
        iso: { numeric: '776', alpha_2: 'to', alpha_3: 'ton' },
        tld: '.to',
        constitutional_form: 'constitutional monarchy',
        language_codes: [ 'en-TO', 'to-TO' ],
        is_landlocked: false
      },
      {
        country: 'tuvalu',
        capital: 'vaiaku',
        currency: 'tuvaluan dollar',
        native_language: [ 'tuvaluan', 'english' ],
        famous_for: 'seafaring skills',
        phone_code: '+668',
        flag: 'https://flagpedia.net/data/flags/h80/tv.png',
        drive_direction: 'left',
        alcohol_prohibition: 'none',
        area: { km2: 26, mi2: 10 },
        continent: 'oc',
        iso: { numeric: '798', alpha_2: 'tv', alpha_3: 'tuv' },
        tld: '.tv',
        constitutional_form: 'constitutional monarchy',
        language_codes: [ 'en-TV' ],
        is_landlocked: false
      },
      {
        country: 'vanuatu',
        capital: 'port-vila',
        currency: 'vanuatu vatu',
        native_language: [ 'bislama', 'english', 'french' ],
        famous_for: "vanuatu's underwater world",
        phone_code: '+978',
        flag: 'https://flagpedia.net/data/flags/h80/vu.png',
        drive_direction: 'right',
        alcohol_prohibition: 'none',
        area: { km2: 12189, mi2: 4706 },
        continent: 'oc',
        iso: { numeric: '548', alpha_2: 'vu', alpha_3: 'vut' },
        tld: '.vu',
        constitutional_form: 'republic',
        language_codes: [ 'bi-VU', 'en-VU', 'fr-VU' ],
        is_landlocked: false    
      },
    ];
    const asiaCountries = countryApi.getCountriesByContinent("as");
    const [russiaCountry] = countryApi.getCountryDetailsByName("russia");

    it("returns correct amount of africa countries (uppercase)", () => {
      expect(africaCountries.length).toBe(55);
    });
    it("returns correct amount of europe countries", () => {
      expect(europeCountries.length).toBe(47);
    });
    it("returns all oceania countries", () => {
      expect(oceaniaCountries).toEqual(expectedOceaniaCountries);
    });
    it("returns the same country using 'eu' or 'as' continent", () => {
      expect(europeCountries).toContain(jasmine.objectContaining(russiaCountry));
      expect(asiaCountries).toContain(jasmine.objectContaining(russiaCountry));
    });
  });

  describe("The getCountryDetailsByISO", () => {
    const [numericCountry] = countryApi.getCountryDetailsByISO("numeric", "616");
    const [alpha2Country] = countryApi.getCountryDetailsByISO("ALPHA_2", "PL");
    const [alpha3Country] = countryApi.getCountryDetailsByISO("alpha_3", "pol");
    const expectedCountry = {
      country: "poland",
      capital: "warsaw",
      currency: "zloty",
      native_language: ["polish"],
      famous_for: "pierogi and potatoes",
      phone_code: "+48",
      flag: "https://flagpedia.net/data/flags/h80/pl.png",
      drive_direction: "right",
      alcohol_prohibition: 'none',
      area: {
        km2: 312696,
        mi2: 120733,
      },
      continent: "eu",
      iso: {
        numeric: "616",
        alpha_2: "pl",
        alpha_3: "pol",
      },
      tld: ".pl",
      constitutional_form: "republic",
      language_codes: ["pl-PL"],
      is_landlocked: false,
    };

    it("returns correct country using numeric ISO", () => {
      expect(numericCountry).toEqual(expectedCountry);
    });
    it("returns correct country using Alpha-2 ISO (uppercase)", () => {
      expect(alpha2Country).toEqual(expectedCountry);
    });
    it("returns correct country using Alpha-3 ISO", () => {
      expect(alpha3Country).toEqual(expectedCountry);
    });
  });

  describe("The getCountriesByTLD", () => {
    const [dotPLCountry] = countryApi.getCountriesByTLD(".pl");
    const expectedDotPLCountry = {
      country: "poland",
      capital: "warsaw",
      currency: "zloty",
      native_language: ["polish"],
      famous_for: "pierogi and potatoes",
      phone_code: "+48",
      flag: "https://flagpedia.net/data/flags/h80/pl.png",
      drive_direction: "right",
      alcohol_prohibition: 'none',
      area: {
        km2: 312696,
        mi2: 120733,
      },
      continent: "eu",
      iso: {
        numeric: "616",
        alpha_2: "pl",
        alpha_3: "pol",
      },
      tld: ".pl",
      constitutional_form: "republic",
      language_codes: ["pl-PL"],
      is_landlocked: false,
    };
    const dotRSCountries = countryApi.getCountriesByTLD(".RS");
    const expectedDotRSCountries = [
      {
        country: "kosovo",
        capital: "pristina",
        currency: "euro",
        native_language: ["albanian", "serbian"],
        famous_for: "mountains and wine",
        phone_code: "+383",
        flag: "https://flagpedia.net/data/flags/h80/xk.png",
        drive_direction: "right",
        alcohol_prohibition: 'none',
        area: {
          km2: 10887,
          mi2: 4203,
        },
        continent: "eu",
        iso: {
          numeric: "383",
          alpha_2: "xk",
          alpha_3: "xkx",
        },
        tld: ".rs",
        constitutional_form: "republic",
        language_codes: ["sr-XK", "sq-XK"],
        is_landlocked: true,
      },
      {
        country: "serbia",
        capital: "belgrade",
        currency: "serbian dinar",
        native_language: ["serbian"],
        famous_for: "culture, history, delicious cuisine, and nightlife",
        phone_code: "+381",
        flag: "https://flagpedia.net/data/flags/h80/rs.png",
        drive_direction: "right",
        alcohol_prohibition: 'none',
        area: {
          km2: 88361,
          mi2: 34116,
        },
        continent: "eu",
        iso: {
          numeric: "688",
          alpha_2: "rs",
          alpha_3: "srb"
        },
        tld: ".rs",
        constitutional_form: "republic",
        language_codes: ["sr-RS"],
        is_landlocked: true,
      },
    ];
    const [dotUKCountry] = countryApi.getCountriesByTLD(".uk");
    const expectedDotUKCountry = {
      country: "united kingdom",
      capital: "london",
      currency: "pound sterling",
      native_language: ["english"],
      famous_for: "david beckham, fish and chips, big ben, red buses, black cabs, oasis, blur, the beatles, london and tea",
      phone_code: "+44",
      flag: "https://flagpedia.net/data/flags/h80/gb.png",
      drive_direction: "right",
      alcohol_prohibition: 'none',
      area: {
        km2: 242495,
        mi2: 93628,
      },
      continent: "eu",
      iso: {
        numeric: "826",
        alpha_2: "gb",
        alpha_3: "gbr",
      },
      tld: ".gb/.uk",
      constitutional_form: "constitutional monarchy",
      language_codes: ["en-GB"],
      is_landlocked: false,
    };
    const [dotGBCountry] = countryApi.getCountriesByTLD(".GB");

    it("returns correct country using '.pl' domain", () => {
      expect(dotPLCountry).toEqual(expectedDotPLCountry);
    });
    it("returns correct countries using '.RS' (uppercase) domain", () => {
      expect(dotRSCountries).toEqual(expectedDotRSCountries);
    });
    it("returns correct country using '.uk' domain", () => {
      expect(dotUKCountry).toEqual(expectedDotUKCountry);
    });
    it("returns the same country using '.uk' or '.GB' (uppercase) domain", () => {
      expect(dotUKCountry).toEqual(dotGBCountry);
    });
  });

  describe("The getCountriesByConstitutionalForm", () => {
    const republicCountries = countryApi.getCountriesByConstitutionalForm("republic");
    const monarchyCountries = countryApi.getCountriesByConstitutionalForm("monarchy");
    const absoluteMonarchyCountries = countryApi
      .getCountriesByConstitutionalForm("absolute monarchy");
    const constitutionalMonarchyCountries = countryApi
      .getCountriesByConstitutionalForm("constitutional monarchy");

    it("returns the countries that have 'republic' constitutional form", () => {
      expect(republicCountries.length).toBe(148);
    });
    it("returns the countries that have 'monarchy' constitutional form", () => {
      expect(monarchyCountries.length).toBe(44);
    });
    it("returns the countries that have 'absolute monarchy' constitutional form", () => {
      expect(absoluteMonarchyCountries.length).toBe(6);
    });
    it("returns the countries that have 'constitutional monarchy' constitutional form", () => {
      expect(constitutionalMonarchyCountries.length)
        .toBe(monarchyCountries.length - absoluteMonarchyCountries.length);
    });
  });

  describe("The getAllCountriesByLandlock", () => {
    const landLockedCountries = countryApi.getCountriesByLandLock(true);
    const notLandLockedCountries = countryApi.getCountriesByLandLock(false);

    it("returns all the landlocked countries", () => {
      expect(landLockedCountries.length).toEqual(45);
    });

    it("returns all the countries which are not landlocked", () => {
      expect(notLandLockedCountries.length).toEqual(151);
    });

    it("returns countries with isLandLocked set to true", () => {
      expect(landLockedCountries[0]).toEqual({
        country: "afghanistan",
        capital: "kabul",
        currency: "afghani",
        native_language: ["dari persian", "pashto"],
        famous_for: "rugs, taliban",
        phone_code: "+93",
        flag: "https://flagpedia.net/data/flags/h80/af.png",
        drive_direction: "right",
        alcohol_prohibition: 'nationwide',
        continent: "as",
        iso: {
          numeric: "004",
          alpha_2: "af",
          alpha_3: "afg",
        },
        tld: ".af",
        constitutional_form: "republic",
        language_codes: ["fa-AF", "ps-AF"],
        area: {
          "km2": 652864,
          "mi2": 252072,
        },
        is_landlocked: true,
      });
    });

    it("returns countries with isLandLocked set to false", () => {
      expect(notLandLockedCountries[0]).toEqual({
        country: "albania",
        capital: "tirane",
        currency: "lek",
        native_language: ["albanian"],
        famous_for: "mother teresa",
        phone_code: "+355",
        flag: "https://flagpedia.net/data/flags/h80/al.png",
        drive_direction: "right",
        alcohol_prohibition: 'none',
        area: {
          "km2": 28748,
          "mi2": 11100,
        },
        continent: "eu",
        iso: {
          numeric: "008",
          alpha_2: "al",
          alpha_3: "alb",
        },
        tld: ".al",
        constitutional_form: "republic",
        language_codes: ["sq-AL"],
        is_landlocked: false,
      });
    });
  });
});
