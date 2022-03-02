import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store.js'
import {BrowserRouter,Routes,Route} from "react-router-dom";

export default function App()
{
  return(
    <Provider store={store}>
      <h1>owo App!</h1>
    </Provider>
  )
}