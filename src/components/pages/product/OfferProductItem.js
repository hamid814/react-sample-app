import React from 'react';

import { Link, useHistory } from 'react-router-dom';

const OfferProductItem = ({ product }) => {
  const history = useHistory();
  
  const { id, title, list_image_url, main_price, sell_price, can_add_to_card } = product

  const onBtnClick = () => {
    history.push(`${process.env.PUBLIC_URL}/product/${id}`)
    setTimeout(() => {
      window.location.reload();
    }, 1);
  }
  
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
      <div className="offer-product-item">
        <div className="image">
          <img src={list_image_url} alt={title}/>
        </div>
        <div className="content">
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
          {/* <Link to={`${process.env.PUBLIC_URL}/product/${id}`}> */}
            <div className="btn" onClick={onBtnClick}>
              {
                can_add_to_card
                ? 'ناموجود'
                : 'مشاهده'
              }
            </div>
          {/* </Link> */}
        </div>
      </div>
  )
}

export default OfferProductItem
