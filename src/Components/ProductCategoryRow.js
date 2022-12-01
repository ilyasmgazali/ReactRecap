import React from 'react'

export default function ProductCategoryRow(props) {
  const {category} = props; //row 
  return (
    <tr><th colSpan="2">{category}</th></tr>
  )
}