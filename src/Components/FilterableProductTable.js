import React from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

/* Outer component */
export default function FilterableProductTable(props) {
  const {products} = props;
  return (
    <div>
      <SearchBar products={products}/>
      <ProductTable producs={products}/>
     </div>
  )
}