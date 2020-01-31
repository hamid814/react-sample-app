import React, { useReducer } from 'react';
import axios from 'axios';
import Context from './Context';
import Reducer from './Reducer';

const State = props => {
  const initialState = {
    data: 'hello world',
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
    // axios.get('https://jsonplaceholder.typicode.com/todos/1',
    axios.get('http://ninipay.com/api/NPP-dcbq7OjykP',
      {
        // headers: {"Access-Control-Allow-Origin": "*"},
      }
    )
      .then(res => {
        // dispatch({
        //   type: '',
        //   payload: res.data
        // })
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <Context.Provider
      value={{
        data: state.data,
        products: state.products,
        getData,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default State;