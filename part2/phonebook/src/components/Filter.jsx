
const Filter = ({ filterValue, handleFilterChange }) => {
  return(
    <div>
      <p>filter shown with  <input type="text" value={filterValue} onChange={handleFilterChange}/> </p>
    </div>
  )
}

export default Filter