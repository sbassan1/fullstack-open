import { useState } from 'react'

const Filter = ({ filterValue, handleFilterChange }) => {
  return(
    <div>
      <p>filter shown with  <input type="text" value={filterValue} onChange={handleFilterChange}/> </p>
    </div>
  )
}

const Names = ({persons}) => {
  return (
    <div>
      {
        persons.map( person => (
          <p key={person.name}>{person.name} {person.number}</p>
        ))
      }
    </div>
  )
}

const App = () => {
  
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  
  
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');


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
    setNewNumber(0);
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
      <form>  
        <div>
          name: <input onChange={handleNameInputChange} value={newName} />
        </div>
        <div>
          number: <input onChange={handleNumberInputChange} value={newNumber} />
        </div>
        <div>
          <button type="submit" onClick={addNewPerson}>add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <Names persons={personsToShow}></Names>
      
    </div>
  )
}

export default App