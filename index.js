import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import store from './redux/store.js'
import { Provider, useDispatch } from 'react-redux';

ReactDOM.render(    
  <Provider store={store}><App/></Provider>,
      document.getElementById('root')
    );