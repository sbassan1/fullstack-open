import { useState } from "react"


const CountryCard = ({ country, initialState }) => {
    const [show, setShow] = useState(initialState)

    const changeShow = () => {
        setShow(!show)
    }

    if (show) {
        return (
            <div>
                <p>{country.name?.common} <button onClick={changeShow}>hide</button> </p>
                <h1>{country.name?.common}</h1>
                <p>Capital {country.capital}</p>
                <p>Area {country.area}</p>

                <h2>Languages</h2>
                <ul>
                {country.languages ? Object.values(country.languages).map((lang) => (
                    <li key={lang}>{lang}</li>
                )) : null}
                </ul>
                <img src={country.flags?.png} alt={country.flags?.alt} style={{width: '150px'}} />
            </div>
        )
    } else {
        return (
            <p>{country.name?.common} <button onClick={changeShow}>show</button> </p>
        )
    }
}

export default CountryCard