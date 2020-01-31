import React, { useContext } from 'react'

import Context from '../../../context/Context';

import ProductItem from './ProductItem' 

import './products.scss';

const Products = () => {
  const { products } = useContext(Context)
  
  return (
    <div>
      all products
      {
        products.map(product => (
          <ProductItem key={product.id} product={product} />
        ))
      }
    </div>
  )
}

export default Products
