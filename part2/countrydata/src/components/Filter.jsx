
const Filter = ({filterValue, handleFilterChange}) => {
    return(
        <div>
            <p>find countries <input type="text" value={filterValue} onChange={handleFilterChange}/> </p>
        </div>
    )
}

export default Filter