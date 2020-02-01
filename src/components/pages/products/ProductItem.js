import React from 'react'
import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
  return (
    <div className="product-item">
      <div className="image">
        <img src={product.list_image_url} alt={product.title}/>
      </div>
      <div className="content">
        <div className="product-title">
          {
            product.title
          }
        </div>
        <div className="product-price">

        </div>
        <div className="product-desc">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
        </div>
        <div className="btn-panel">
          <Link to={`/product/${product.id}`}>
            <button className="btn">
              مشاهده
            </button>
          </Link>
          <button className="btn">
            اضافه به سبد خرید
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductItem
