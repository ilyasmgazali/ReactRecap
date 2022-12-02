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
  const [filterText, setFilterText] = useState('Hello World');

  //state of "checked"
  const [inStockOnly, setInStockOnly] = useState(true);

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
      {/** State is hooked below, therefore refreshing that component/sub component
       * Therefore, better performance
       */}
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