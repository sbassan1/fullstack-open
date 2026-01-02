import { useState, useEffect } from 'react'

import CountryList from './components/CountryList'
import Filter from './components/Filter'

import countriesService from './services/countriesServices' 

function App() {
  const [input, setInput] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    countriesService.getAll()
      .then(initialCountries => {
        setCountries(initialCountries)
      })
      .catch(error => {
        console.error('Error fetching countries:', error)
      })
  }, [])

  const handleFilterChange = (event) => {
    setInput(event.target.value)
  }

  return (
    <>
      <Filter filterValue={input} handleFilterChange={handleFilterChange} />
      <CountryList inputValue={input} allCountries={countries} />
    </>
  )
}

export default App