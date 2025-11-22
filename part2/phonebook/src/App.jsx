import { useState } from 'react'

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
    { name: 'Arto Hellas', number: '040-123456', id: 1 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('');

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

  return (
    <div>
      <h2>Phonebook</h2>
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
      
      <Names persons={persons}></Names>
      
    </div>
  )
}

export default App