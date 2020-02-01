import React, { useContext } from 'react'

import Context from '../../../context/Context';

import ProductItem from './ProductItem' 
import Filter from './Filter' 
import DisplayType from './DisplayType' 

import './products.scss';

const Products = () => {
  const { products } = useContext(Context)
  
  return (
    <div className="all-products">
      <div className="title">
        همه محصولات
      </div>
      <div className="control-panel">
        <Filter />
        <DisplayType />
      </div>
      {
        products.map(product => (
          <ProductItem key={product.id} product={product} />
        ))
      }
    </div>
  )
}

export default Products
