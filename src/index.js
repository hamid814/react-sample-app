import React, { useEffect, useContext } from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';

import Navbar from './components/layout/Navbar';

import State from './context/State';
import Context from './context/Context';

import * as serviceWorker from './serviceWorker';

const App = () => {
  const { data, getData } = useContext(Context)

  useEffect(() => {
    getData()
    // eslint-disable-next-line
  }, [])

  const onButtonClicked = () => {
    console.log('here')
  }

  return (
    <>
      <Navbar />
      { data }
      <button onClick={onButtonClicked}>
        get data
      </button>
    </>
  );
}

const StateContainer = () => {
  return (
    <State>
      <App />
    </State>
  )
}

ReactDOM.render(<StateContainer />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
