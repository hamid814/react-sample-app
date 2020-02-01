import React, { useContext } from 'react'

import Context from '../../../context/Context';

import ProductItem from './ProductItem' 
import Filter from './Filter' 
import DisplayType from './DisplayType' 

import './products.scss';

const Products = () => {
  const { products, productsDisplayType } = useContext(Context)
  
  return (
    <div className={`all-products display-${productsDisplayType}`}>
      <div className="title">
        همه محصولات
      </div>
      <div className="control-panel">
        <Filter />
        <DisplayType />
      </div>
      <div className="products-content">
        {
          products.map(product => (
            <ProductItem key={product.id} product={product} />
          ))
        }
      </div>
    </div>
  )
}

export default Products
