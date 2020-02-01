import React, { useReducer } from 'react';
import axios from 'axios';
import Context from './Context';
import Reducer from './Reducer';

const State = props => {
  const initialState = {
    products: [],
    singleProduct: null,
    loading: true,
    productsDisplayType: 'table', // values: 'table' / 'row'
  };

  const [state, dispatch] = useReducer(Reducer, initialState);

  // Get data
  const getProducts = () => {
    
    setLoading(true);
    
    axios.get('/api/NPP-dcbq7OjykP')
      .then(res => {
        dispatch({
          type: 'get-data',
          payload: res.data
        })
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const getSingleProduct = (id) => {

    setLoading(true);

    axios.get(`/api/product/${id}`)
      .then(res => {
        dispatch({
          type: 'set-single-product',
          payload: res.data
        })
        setLoading(false)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const setLoading = (stat) => {
    dispatch({
      type: 'set-loading',
      payload: stat,
    })
  }

  const setProductsDisplayType = (type) => {
    dispatch({
      type: 'set-products-display-type',
      payload: type
    })
  }

  return (
    <Context.Provider
      value={{
        products: state.products,
        singleProduct: state.singleProduct,
        loading: state.loading,
        productsDisplayType: state.productsDisplayType,
        getProducts,
        getSingleProduct,
        setProductsDisplayType
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default State;