import React from 'react'
import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
  return (
    <div>
      {
        product.id
      }
      {
        product.title
      }
      {
        product.sell_price
      }
      <img src={product.list_image_url} alt={product.title}/>
      <Link to={`/product/${product.id}`}>
        <button>
          مشاهد/خرید
        </button>
      </Link>
    </div>
  )
}

export default ProductItem
