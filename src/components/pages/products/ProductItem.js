import React from 'react'

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
      <button>
        مشاهد/خرید
      </button>
    </div>
  )
}

export default ProductItem
