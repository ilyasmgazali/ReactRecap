import React from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'
export default function ProductTable(props) {
  console.log("Here");
  console.log(props.products);
  console.log("Here");
  const { products, inStockOnly, filterText } = props;
    
  const rows = [];
  let lastCategory = null;
  
  products.forEach((product)=>{
    // conditional for search
    if(product.name.indexOf(filterText)){
      return;
    }

    //if checked, dont print product
    if (inStockOnly && !product.stocked ){
      return //end loop for this cycle and dont return it 
    }

    console.log("product log here");
    console.log(product);
    console.log("product log here");
    if(product.category !==lastCategory){//for each category, put into a row
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      )
    }
    rows.push(
      <ProductRow
      product={product}
      key={product.name}
      />
    )
    lastCategory = product.category; //see last category
  })
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
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