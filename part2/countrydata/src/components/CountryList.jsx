const CountryList = ({ inputValue, allCountries}) => {

  if (!allCountries) return null;

  const countriesToShow = allCountries.filter((country) =>
    country.name.common.toLowerCase().includes(inputValue.toLowerCase())
  );

  if (countriesToShow.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  }
  if (countriesToShow.length === 1) {
    const country = countriesToShow[0];
    return (
      <div>
        <h1>{country.name.common}</h1>
        <p>Capital {country.capital}</p>
        <p>Area {country.area}</p>

        <h2>Languages</h2>
        <ul>
          {Object.values(country.languages).map((lang) => (
            <li key={lang}>{lang}</li>
          ))}
        </ul>
        <img src={country.flags.png} alt={country.flags.alt} />
      </div>
    );
  }

  return (
    <div>
      {countriesToShow.map((country) => (
        <p key={country.cca3}>{country.name.common}</p>
      ))}
    </div>
  );
};

export default CountryList