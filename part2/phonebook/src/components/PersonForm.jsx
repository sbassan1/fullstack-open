
const PersonForm = ({newName, handleNameInputChange, newNumber, handleNumberInputChange, addNewPerson}) => {
  return (
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
  )
}

export default PersonForm