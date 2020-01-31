import React, { useReducer } from 'react';
import axios from 'axios';
import Context from './Context';
import Reducer from './Reducer';

const State = props => {
  const initialState = {
    products: [],
  };

  const [state, dispatch] = useReducer(Reducer, initialState);

  // eslint-disable-next-line
  const tempFunc = () => {
    dispatch({
      type: 'nothing',
      paylaod: 'delete this function'
    })
  }

  // Get data
  const getData = () => {
    axios.get('http://ninipay.com/api/NPP-dcbq7OjykP')
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

  return (
    <Context.Provider
      value={{
        products: state.products,
        getData,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default State;