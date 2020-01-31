import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom';

import Context from '../../../context/Context';

import Loading from '../../layout/Loading';

const Product = ({ match }) => {
  const { getSingleProduct, singleProduct: product, loading } = useContext(Context)

  useEffect(() => {
    getSingleProduct(match.params.product_id)

    // eslint-disable-next-line
  }, [])
  
  if(loading) {
    return (
      <>
        <Loading />
      </>
    )
  } else {
    return (
      <>
        <Link to="/">
          back
        </Link>

        <br/>
      
        single product

        <br/>

        <img src={product.list_image_url} alt={product.title}/>

        {
          product.title
        }
      </>
    )
  }
}

export default Product
