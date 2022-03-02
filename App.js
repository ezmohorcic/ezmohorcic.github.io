import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store.js'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Principal from './components/Principal/Principal.jsx';
import Projects from './components/Projects/Projects.jsx'

export default function App()
{
  return(
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<><Principal/><Projects/></>}/>   
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}


