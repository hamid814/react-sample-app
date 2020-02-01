import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom';

import './product.scss';

import Context from '../../../context/Context';

import Loading from '../../layout/Loading';

const Product = ({ match }) => {
  const { getSingleProduct, singleProduct: product, loading } = useContext(Context)

  useEffect(() => {
    getSingleProduct(match.params.product_id)

    // eslint-disable-next-line
  }, [])
  
    console.log(product)
    
  if(loading) {
    return (
      <>
        <Loading />
      </>
    )
  } else {
    return (
      <>
        <div className="product-page-container">
          <div className="alert">

          </div>
          <div className="back">
            <Link to="/">
              back
            </Link>
          </div>
          <div className="content">
            <div className="right">
              <img src={product.list_image_url} alt=""/>
            </div>
            <div className="left">
              <div className="title">
                { product.title }
              </div>
              
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Product
