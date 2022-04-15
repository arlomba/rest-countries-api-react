export function countriesMapper(countries) {
  return countries.map((country) => {
    const {
      name,
      flag,
      population,
      capital,
      region,
      topLevelDomain,
      nativeName,
      alpha3Code,
      subregion,
      languages,
      currencies,
      borders,
    } = country;
    const tld = topLevelDomain.map((tld) => tld).join(" ");

    return {
      name,
      flag,
      population: population.toLocaleString(),
      capital: capital || "¯\\_(ツ)_/¯",
      region,
      tld,
      native: nativeName,
      alpha3Code,
      subregion,
      languages: languages.map((l) => l.name).join(", "),
      currencies: currencies
        ? currencies.map((c) => c.name).join(", ")
        : "¯\\_(ツ)_/¯",
      borders,
    };
  });
}
