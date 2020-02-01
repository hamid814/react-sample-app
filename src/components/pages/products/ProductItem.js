import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
  const rate = 4;

  let rateIcones;

  useEffect(() => {
    for(let i = 0; i < rate; i++) {
      const star = document.createElement('i')
    }

    for(let i = 0; i < 5 - rate; i++) {
      console.log(i)
    }
    
    // eslint-disable-next-line
  }, [])
  
  const { id, title, list_image_url, sell_price, main_price, can_add_to_cart } = product;
  
  return (
    <div className="product-item">
      <div className="image">
        <img src={list_image_url} alt={title}/>
      </div>
      <div className="content">
        <div className="product-title">
          <Link to={`/product/${id}`}>
            {
              title
            }
          </Link>
        </div>
        <div className="product-price">
          <div className="main-price">
            {
              main_price &&
              `قیمت: ${main_price}`
            }
          </div>
          <div className="sell-price">
            {
              `قیمت: ${sell_price}`
            }
          </div>
        </div>
        <div className="product-desc">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
        </div>
        <div className="rate-panel">

        </div>
        <div className="btn-panel">
          <Link to={`/product/${id}`}>
            <button className="btn">
              مشاهده
            </button>
          </Link>
          <button className={`btn ${!can_add_to_cart && 'deactive'}`}>
            اضافه به سبد خرید
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductItem
