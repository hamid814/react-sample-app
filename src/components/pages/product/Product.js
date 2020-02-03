import React, { useRef, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom';

import './product.scss';

import Context from '../../../context/Context';

import Loading from '../../layout/Loading';
import OfferProductItem from './OfferProductItem';

const Product = ({ match }) => {
  const { getSingleProduct, singleProduct: product, loading } = useContext(Context)

  const rate = Math.floor(Math.random() * 5) + 1;

  const ratePanel = useRef(null)

  useEffect(() => {
    if(!loading) {
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
    }

    // eslint-disable-next-line
  }, [loading])

  useEffect(() => {
    getSingleProduct(match.params.product_id)

    // eslint-disable-next-line
  }, [])

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
    
  if(loading) {
    return (
      <>
        <Loading />
      </>
    )
  } else {
    const { title, list_image_url, main_price, sell_price, can_add_to_cart, suggested_products, related_products } = product;
    
    return (
      <>
        <div className="product-page-container">
          <div className="back">
            <Link to={process.env.PUBLIC_URL + "/"}>
              همه محصولات
            </Link>
          </div>
          <div className="content">
            <div className="right">
              <img src={list_image_url} alt=""/>
            </div>
            <div className="left">
              <div ref={ratePanel} className="rate-panel">
              
              </div>
              <div className="title">
                { title }
              </div>
              <div className="price-panel">
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
              <div className="btn-panel">
                <div className={`btn ${!can_add_to_cart && 'deactive'}`}>
                  افزودن به سبد خرید
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="suggested-products-container">
          <div className="title">
            محصولات پیشنهادی
          </div>
          <div className="suggested-products-content">
            {
              suggested_products.map(p => (
                <OfferProductItem key={p.id} product={p} />
              ))  
            }
          </div>
        </div>
        <div className="related-products-container">
          <div className="title">
            محصولات مرتبط
          </div>
          <div className="related-products-content">
            {
              related_products.map(p => (
                <OfferProductItem key={p.id} product={p} />
              ))  
            }
          </div>
        </div>
      </>
    )
  }
}

export default Product
