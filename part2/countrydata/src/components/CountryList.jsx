import CountryCard from "./CountryCard";


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
    console.log(country)
    return (
      <CountryCard country={country} initialState={true} ></CountryCard>
    );
  }

  return (
    <div>
      {countriesToShow.map((country) => (
        <CountryCard country={country} initialState={false}></CountryCard>
      ))}
    </div>
  );
};

export default CountryList