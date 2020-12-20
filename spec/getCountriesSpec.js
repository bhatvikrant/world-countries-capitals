describe("The index", () => {
  const testUtils = require("./specHelper");
  const countryApi = require("../index.js");

  describe("The getAllCountries", () => {
    it("returns all of the countries", () => {
      expect(countryApi.getAllCountries().length).toEqual(196);
    });
  });

  describe("The getAllCountryDetails", () => {
    it("returns the details of all countries", () => {
      expect(countryApi.getAllCountryDetails().length).toEqual(196);
    });
  });

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

  describe("The getCountryDetailsByName when given a country's name", () => {
    const [alCountry] = countryApi.getCountryDetailsByName("albania");
    const expectedALCountry = {
      country: "albania",
      capital: "tirane",
      currency: "lek",
      native_language: ["albanian"],
      famous_for: "mother teresa",
      phone_code: "+355",
      flag: "https://flagpedia.net/data/flags/h80/al.png",
      drive_direction: "right",
      alcohol_prohibition: "none",
      area: { km2: 28748, mi2: 11100 },
      continent: "eu",
      iso: { numeric: "008", alpha_2: "al", alpha_3: "alb" },
      tld: ".al",
      constitutional_form: "republic",
      language_codes: ["sq-AL"],
      is_landlocked: false,
      neighbors: ["gr", "me", "mk", "xk"],
    };

    it("returns the countries with that name", () => {
      expect(alCountry).toEqual(expectedALCountry);
    });
  });

  describe("The getCountryDetailsByCapital when given a capital", () => {
    const [afCountry] = countryApi.getCountryDetailsByCapital("kabul");
    const [expectedAFCountry] = countryApi.getCountryDetailsByName(
      "afghanistan"
    );

    it("returns the details of countries with that capital", () => {
      expect(afCountry).toEqual(expectedAFCountry);
    });
  });

  describe("The getCountriesByLanguage when given a language", () => {
    const [baCountry] = countryApi.getCountriesByLanguage("bosnian");
    const [expectedBACountry] = countryApi.getCountryDetailsByName(
      "bosnia and herzegovina"
    );

    it("returns countries with that language being their native language", () => {
      expect(baCountry).toEqual(expectedBACountry);
    });
  });

  describe("The getCountriesByFamousFor", () => {
    const actualCountries = countryApi.getCountriesByFamousFor("oil");
    const expectedCountries = [
      ...countryApi.getCountryDetailsByName("algeria"),
      ...countryApi.getCountryDetailsByName("angola"),
      ...countryApi.getCountryDetailsByName("bahrain"),
      ...countryApi.getCountryDetailsByName("bulgaria"),
      ...countryApi.getCountryDetailsByName("central african republic"),
      ...countryApi.getCountryDetailsByName("norway"),
    ];

    it("returns countries famous for oil", () => {
      expect(
        testUtils.countryArraysAreEqual(actualCountries, expectedCountries)
      ).toBeTrue();
    });
  });

  describe("The getCountriesByDriveDirection when given a country's drive direction", () => {
    it("returns the countries that use this driving direction", () => {
      expect(countryApi.getCountriesByDriveDirection("left").length).toBe(46);
    });
  });

  describe("The getCountriesByAlcoholProhibition", () => {
    const results = countryApi.getCountriesByAlcoholProhibition("nationwide");
    const expectedResults = [
      ...countryApi.getCountryDetailsByName("afghanistan"),
      ...countryApi.getCountryDetailsByName("brunei"),
      ...countryApi.getCountryDetailsByName("djibouti"),
      ...countryApi.getCountryDetailsByName("iran"),
      ...countryApi.getCountryDetailsByName("kuwait"),
      ...countryApi.getCountryDetailsByName("libya"),
      ...countryApi.getCountryDetailsByName("mauritania"),
      ...countryApi.getCountryDetailsByName("saudi arabia"),
      ...countryApi.getCountryDetailsByName("somalia"),
    ];

    it("returns the details of all countries where nationwide alcohol prohibition is applicable", () => {
      expect(results).toEqual(expectedResults);
    });
    it("returns the total number of countries where no alcohol prohibition is applicable", () => {
      expect(
        countryApi.getCountriesByAlcoholProhibition("none").length
      ).toEqual(176);
    });
  });

  describe("The getCountriesByContinent", () => {
    const africaCountries = countryApi.getCountriesByContinent("AF");
    const europeCountries = countryApi.getCountriesByContinent("eu");
    const oceaniaCountries = countryApi.getCountriesByContinent("oc");
    const asiaCountries = countryApi.getCountriesByContinent("as");
    const expectedOceaniaCountries = [
      ...countryApi.getCountryDetailsByName("australia"),
      ...countryApi.getCountryDetailsByName("fiji"),
      ...countryApi.getCountryDetailsByName("kiribati"),
      ...countryApi.getCountryDetailsByName("marshall islands"),
      ...countryApi.getCountryDetailsByName("federal states of micronesia"),
      ...countryApi.getCountryDetailsByName("nauru"),
      ...countryApi.getCountryDetailsByName("new zealand"),
      ...countryApi.getCountryDetailsByName("palau"),
      ...countryApi.getCountryDetailsByName("papa new guinea"),
      ...countryApi.getCountryDetailsByName("samoa"),
      ...countryApi.getCountryDetailsByName("solomon islands"),
      ...countryApi.getCountryDetailsByName("tonga"),
      ...countryApi.getCountryDetailsByName("tuvalu"),
      ...countryApi.getCountryDetailsByName("vanuatu"),
    ];
    const [expectedRUCountry] = countryApi.getCountryDetailsByName("russia");

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
      expect(europeCountries).toContain(
        jasmine.objectContaining(expectedRUCountry)
      );
      expect(asiaCountries).toContain(
        jasmine.objectContaining(expectedRUCountry)
      );
    });
  });

  describe("The getCountryDetailsByISO", () => {
    const [numericCountry] = countryApi.getCountryDetailsByISO(
      "numeric",
      "616"
    );
    const [alpha2Country] = countryApi.getCountryDetailsByISO("ALPHA_2", "PL");
    const [alpha3Country] = countryApi.getCountryDetailsByISO("alpha_3", "pol");
    const [expectedCountry] = countryApi.getCountryDetailsByName("poland");

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
    const [expectedDotPLCountry] = countryApi.getCountryDetailsByName("poland");
    const dotRSCountries = countryApi.getCountriesByTLD(".RS");
    const [expectedXKCountry] = countryApi.getCountryDetailsByName("kosovo");
    const [expectedRSCountry] = countryApi.getCountryDetailsByName("serbia");
    const expectedDotRSCountries = [expectedXKCountry, expectedRSCountry];
    const [dotUKCountry] = countryApi.getCountriesByTLD(".uk");
    const [expectedDotUKCountry] = countryApi.getCountryDetailsByName(
      "united kingdom"
    );
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
    const republicCountries = countryApi.getCountriesByConstitutionalForm(
      "republic"
    );
    const monarchyCountries = countryApi.getCountriesByConstitutionalForm(
      "monarchy"
    );
    const absoluteMonarchyCountries = countryApi.getCountriesByConstitutionalForm(
      "absolute monarchy"
    );
    const constitutionalMonarchyCountries = countryApi.getCountriesByConstitutionalForm(
      "constitutional monarchy"
    );

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
      expect(constitutionalMonarchyCountries.length).toBe(
        monarchyCountries.length - absoluteMonarchyCountries.length
      );
    });
  });

  describe("The getAllCountriesByLandlock", () => {
    const [expectedAFCountry] = countryApi.getCountryDetailsByName(
      "afghanistan"
    );
    const [expectedALCountry] = countryApi.getCountryDetailsByName("albania");
    const landLockedCountries = countryApi.getCountriesByLandLock(true);
    const notLandLockedCountries = countryApi.getCountriesByLandLock(false);

    it("returns all the landlocked countries", () => {
      expect(landLockedCountries.length).toEqual(45);
    });
    it("returns all the countries which are not landlocked", () => {
      expect(notLandLockedCountries.length).toEqual(151);
    });
    it("returns countries with isLandLocked set to true", () => {
      expect(landLockedCountries[0]).toEqual(expectedAFCountry);
    });
    it("returns countries with isLandLocked set to false", () => {
      expect(notLandLockedCountries[0]).toEqual(expectedALCountry);
    });
  });

  describe("The getCountryNeighbors", () => {
    const expectedPLNeighborCountries = [
      ...countryApi.getCountryDetailsByName("belarus"),
      ...countryApi.getCountryDetailsByName("czechia"),
      ...countryApi.getCountryDetailsByName("germany"),
      ...countryApi.getCountryDetailsByName("lithuania"),
      ...countryApi.getCountryDetailsByName("russia"),
      ...countryApi.getCountryDetailsByName("slovakia"),
      ...countryApi.getCountryDetailsByName("ukraine"),
    ];

    it("returns countries that are neighbors of 'poland'", () => {
      expect(countryApi.getCountryNeighbors("poland")).toEqual(
        expectedPLNeighborCountries
      );
    });
    it("returns countries that are neighbors of 'Poland'", () => {
      expect(countryApi.getCountryNeighbors("Poland")).toEqual(
        expectedPLNeighborCountries
      );
    });
    it("returns countries that are neighbors of 'POLAND'", () => {
      expect(countryApi.getCountryNeighbors("POLAND")).toEqual(
        expectedPLNeighborCountries
      );
    });
    it("returns countries that are neighbors of '616'", () => {
      expect(countryApi.getCountryNeighbors("616")).toEqual(
        expectedPLNeighborCountries
      );
    });
    it("returns countries that are neighbors of 'pl'", () => {
      expect(countryApi.getCountryNeighbors("pl")).toEqual(
        expectedPLNeighborCountries
      );
    });
    it("returns countries that are neighbors of 'pol'", () => {
      expect(countryApi.getCountryNeighbors("pol")).toEqual(
        expectedPLNeighborCountries
      );
    });
    it("throws an error after passing non-existing country as an argument", () => {
      expect(() =>
        countryApi.getCountryNeighbors("non-existing country")
      ).toThrow();
    });
  });

  describe("The getAvailablePropertyNames", () => {
    const e = [
      "country",
      "capital",
      "currency",
      "native_language",
      "famous_for",
      "phone_code",
      "flag",
      "drive_direction",
      "alcohol_prohibition",
      "area",
      "continent",
      "iso",
      "tld",
      "constitutional_form",
      "language_codes",
      "is_landlocked",
      "neighbors",
    ];

    it("get all property names for a country", () => {
      expect(countryApi.getAvailablePropertyNames()).toEqual(e);
    });
  });
});
