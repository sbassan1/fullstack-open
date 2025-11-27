import { useState, useEffect } from 'react'
import axios from 'axios'

import Names from './components/Names'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'


const App = () => {
  const [persons, setPersons] = useState([])
  
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'notes')


  const addNewPerson = (event) => {
    event.preventDefault()

    const nameExists = persons.some(person => person.name === newName.trim())

    if (nameExists) {
      alert(`${newName} is already in the phonebook!`)
      return
    }

    setPersons(persons.concat({ name: newName, number: newNumber, id: persons.length + 1 }));

    alert(`${newName} added to the phonebook!`);
    
    setNewName('');
    setNewNumber('');
  }

  const handleNameInputChange = (event) => {
    setNewName((event.target.value))
  }

  const handleNumberInputChange = (event) => {
    setNewNumber((event.target.value))
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  }

  const personsToShow = persons.filter(person => 
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterValue={filter} handleFilterChange={handleFilterChange}></Filter>
      
      <h2>add a new</h2>
      <PersonForm newName={newName} newNumber={newNumber} handleNameInputChange={handleNameInputChange} handleNumberInputChange={handleNumberInputChange} addNewPerson={addNewPerson} ></PersonForm>

      <h2>Numbers</h2>
      <Names persons={personsToShow}></Names>
      
    </div>
  )
}

export default App