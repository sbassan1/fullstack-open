import { useState } from 'react'

const Names = ({persons}) => {
  return (
    <div>
      {
        persons.map( person => (
          <p key={person.name}>{person.name}</p>
        ))
      }
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addNewName = (event) => {
    event.preventDefault()

    const nameExists = persons.some(person => person.name === newName)

    if (nameExists) {
      alert(`${newName} is already in the phonebook!`)
      return
    }

    setPersons(persons.concat({ name: newName }))
    alert(`${newName} added to the phonebook!`)
    setNewName('')
  }

  const handleInputChange = (event) => {
    setNewName((event.target.value).trim())
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input onChange={handleInputChange} value={newName} />
        </div>
        <div>
          <button type="submit" onClick={addNewName}>add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      
      <Names persons={persons}></Names>
      
    </div>
  )
}

export default App