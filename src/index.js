import React, { useEffect, useContext } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.scss';

import Navbar from './components/layout/Navbar';
import Products from './components/pages/products/Products';
import Product from './components/pages/product/Product';

import State from './context/State';
import Context from './context/Context';

import * as serviceWorker from './serviceWorker';

const App = () => {
  const { getProducts } = useContext(Context)

  useEffect(() => {
    getProducts()
    // eslint-disable-next-line
  }, [])

  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Products} />
          <Route exact path='/Product/:product_id' component={Product} />
        </Switch>
      </>
    </Router>
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
