import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';

const Product = ({ match }) => {
  const [loading, setLoading] = useState(true)
  const [product, setProduct] = useState(null)
  
  useEffect(() => {
    axios.get(`/api/product/${match.params.product_id}`)
      .then(res => {
        setProduct(res.data)
        setLoading(false)
      })
      .catch(err => {
        console.log(err)
      })
    
    // eslint-disable-next-line
  }, [])
  
  if(loading) {
    return (
      <>
        is loading
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

        <img src="http://ninipay.com/media/product-image/1563873658_27747.jpg" alt="noname"/>
      </>
    )
  }
}

export default Product
