import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
  const rate = Math.floor(Math.random() * 5) + 1;

  const ratePanel = useRef(null)

  useEffect(() => {
    for(let i = 0; i < rate; i++) {
      const star = document.createElement('div')
      star.classList.add('dot')
      star.classList.add('gold')
      ratePanel.current.appendChild(star)
    }

    for(let i = 0; i < 5 - rate; i++) {
      const star = document.createElement('div')
      star.classList.add('dot')
      star.classList.add('silver')
      ratePanel.current.appendChild(star)
    }
    
    // eslint-disable-next-line
  }, [])
  
  const { id, title, list_image_url, sell_price, main_price, can_add_to_cart } = product;

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  
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
              `قیمت: ${numberWithCommas(main_price)} ریال`
            }
          </div>
          <div className="sell-price">
            {
              `قیمت: ${numberWithCommas(sell_price)} ریال`
            }
          </div>
        </div>
        <div className="product-desc">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
        </div>
        <div className="rate-panel" ref={ratePanel}>

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
