import React from 'react';
import { createStore, applyMiddleware, compose } from "redux";
// import store from "./redux/store.js"
import ReactDOM from 'react-dom';
import App from './app';
import { Provider, useDispatch } from 'react-redux';

const store = createStore(
  rootReducer
);

ReactDOM.render(    
  <Provider store={store}><App/></Provider>,
      document.getElementById('root')
    );