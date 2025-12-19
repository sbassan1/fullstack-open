const Names = ({persons, deletePerson}) => {
  return (
    <div>
      {
        persons.map( person => (
          <p key={person.name}>
            {person.name} {person.number} {"  "} 
            <button onClick={() => deletePerson(person.id, person.name)}>
              Delete
            </button>
          </p>
        ))
      }
    </div>
  )
}

export default Names 