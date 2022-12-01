import React from 'react'

export default function SearchBar(props) {
  const {inStockOnly, filterText} = props;
  
  const handleStockChange = (e) => {
    props.onInStockChange(e.target.checked)
  }

  const hanldeFilterTextChange=(e)=>{
    props.onFilterTextChange(e.target.value) //linked below **
  }
  
  return (
    <form>
      <input 
        type="text" 
        placeholder='Search...'
        value={filterText}                   //linked above **
        onChange={hanldeFilterTextChange}
      />
      <p>
        <input 
          type="checkbox" 
          checked={inStockOnly}
          onChange={handleStockChange}  
        />
        {' '}
        Only show products in stock
      </p>
    </form>
  )
}