import { useState, useEffect } from 'react'

import Names from './components/Names'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Notification from './components/Notification.jsx'

import personsService from './services/persons.js'


const App = () => {
  const [persons, setPersons] = useState([])
  const [message, setMessage] = useState('')
  const [notificationType, setNotificationType] = useState('empty')
  
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    console.log('effect')
    personsService.getAll()
    .then(personsInitial => {
      setPersons(personsInitial)
    })
  }, [])

  console.log('render', persons.length, 'notes')

  const addNewPerson = (event) => {
    event.preventDefault();
    const personExisting = persons.find(p => p.name === newName);

    if (personExisting) {
      const confirmUpdate = window.confirm(
        `${newName} is already in the phonebook, replace old number with a new one?`
      );

      if (confirmUpdate) {
        const updatedContact = { ...personExisting, number: newNumber };

        personsService
          .update(personExisting.id, updatedContact)
          .then(returnedPerson => {
          
            setMessage(`Replaced ${newName} with new number`)
            setNotificationType('success')
            setTimeout(() => {
              setMessage(``)
              setNotificationType('empty')
            }, 5000)
            
            setPersons(persons.map(p => p.id !== personExisting.id ? p : returnedPerson));
            setNewName('');
            setNewNumber('');
          })
          .catch(() => {

            setMessage(`Error: ${newName} was already deleted from the server`)
            setNotificationType('error')
            setTimeout(() => {
              setMessage(``)
              setNotificationType('empty')
            }, 5000)
            
            setPersons(persons.filter(p => p.id !== personExisting.id));
          });
      }
      return; 
    }

    personsService
      .create({ name: newName, number: newNumber , id: String(persons.length + 1)})
      .then(newContact => {
        setPersons(persons.concat(newContact));
        setNewName('');
        setNewNumber('');


        setMessage(`Added ${newName}`)
        setNotificationType('success')
        setTimeout(() => {
          setMessage(``)
          setNotificationType('empty')
        }, 5000)
      
      });
  };

  const handleNameInputChange = (event) => {
    setNewName((event.target.value))
  }

  const handleNumberInputChange = (event) => {
    setNewNumber((event.target.value))
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  }

  const deletePerson = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      personsService
        .remove(id)
        .then(() => {
          setPersons(persons.filter(p => p.id !== id));

          setMessage(`${name} deleted from phonebook successfully`)
          setNotificationType('success')
          setTimeout(() => {
            setMessage(``)
            setNotificationType('empty')
          }, 5000)

        })
        // eslint-disable-next-line no-unused-vars
        .catch(error => {

          setMessage(`Error: ${name} was already deleted from the server'`)
          setNotificationType('error')
          setTimeout(() => {
            setMessage(``)
            setNotificationType('empty')
          }, 5000)
          
          setPersons(persons.filter(p => p.id !== id));
        });
    }
  };

  const personsToShow = persons.filter(person => 
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterValue={filter} handleFilterChange={handleFilterChange}></Filter>
      
      <Notification message={message} type={notificationType}></Notification>

      <h2>add a new</h2>
      <PersonForm newName={newName} newNumber={newNumber} handleNameInputChange={handleNameInputChange} handleNumberInputChange={handleNumberInputChange} addNewPerson={addNewPerson} ></PersonForm>

      <h2>Numbers</h2>
      <Names persons={personsToShow} deletePerson={deletePerson}></Names>
      
    </div>
  )
}

export default App