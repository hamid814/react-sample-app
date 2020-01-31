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

        {
          product.title
        }
      </>
    )
  }
}

export default Product
