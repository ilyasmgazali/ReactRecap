import React from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'
export default function ProductTable(props) {
  const { products } = props;
  
  const rows = [];
  let lastCategory = null;
  
  products.forEach((product)=>{
    if(product.cateogry !==lastCategory){//for each category, put into a row
      rows.push(
        <ProductCategoryRow
          cateogry={product.cateogry}
          key={product.cateogry}
        />
      )
    }
    rows.push(
      <ProductRow
      product={product}
      key={product.name}
      />
    )
    lastCategory = product.cateogry; //see last category
  })
  return (
    <table>
      <tread>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </tread>
      <tbody>
        {rows} 
      {/** 
        <ProductCategoryRow/>
        <ProductRow/>
      */}
      </tbody>
    </table>
  )
}