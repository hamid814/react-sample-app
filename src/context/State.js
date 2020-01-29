import React, { useReducer } from 'react';
import Context from './Context';
import Reducer from './Reducer';

const State = props => {
  const initialState = {
    data: 'hello world!',
  };

  const [state, dispatch] = useReducer(Reducer, initialState);

  // Get data
  const setData = (data) => {
    dispatch({
      type: 'set-data',
      payload: data
    });
  }

  return (
    <Context.Provider
      value={{
        data: state.data,
        setData,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default State;