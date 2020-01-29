import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import State from './context/State';
import Context from './context/Context';

import * as serviceWorker from './serviceWorker';

const App = () => {
  const { data } = useContext(Context)

  return (
    <div>
      { data }
    </div>
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
