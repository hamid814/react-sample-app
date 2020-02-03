import React from 'react'

const OfferProductItem = ({ product }) => {
  console.log(product)
  
  const { title, list_image_url, main_price, sell_price } = product
  
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <>
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
          <div className="button">

          </div>
        </div>
      </div>
    </>
  )
}

export default OfferProductItem
