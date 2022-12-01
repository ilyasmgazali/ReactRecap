import React, {useState} from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'
// import { scryRenderedComponentsWithType } from 'react-dom/test-utils';
// import ProductCategoryRow from './ProductCategoryRow';
// import ProductRow from './ProductRow';

/* Outer component */
export default function FilterableProductTable(props) {
  const {products} = props;

  //search state
  const [filterText, setFilterText] = useState('');

  //
  const [inStockOnly, setInStockOnly] = useState(false);

  //function for search
  const handleFilterText = (filterText) => {
    setFilterText(filterText)
  }

  //create arrow function, put current state in there
  const handleInStockChange = (inStockOnly) => {
    setInStockOnly(inStockOnly) //set to previous
  }

  return (
    <div>
      <SearchBar 
        filterText = {filterText}
        onFilterTextChange={handleFilterText}
        inStockOnly={inStockOnly} //state=state
        onInStockChange={handleInStockChange} //setter function/variable
      />
      <ProductTable 
        //search
        filterText = {filterText}
        //onFilterTextChange={handleFilterText} //dont need

        //other
        inStockOnly={inStockOnly}
        products={products}
      />
     </div>
  )
}