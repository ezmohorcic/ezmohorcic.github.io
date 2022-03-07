import React, { Fragment,useEffect,useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store.js'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Principal from './components/Principal/Principal.jsx';
import Projects from './components/Projects/Projects.jsx';

import "./App.css"
import BackgroundPrincipal from './components/Principal/BackgroundPrincipal.jsx';

function handleScroll()
{
  const y_axis = window.scrollY
  console.log("scroll",y_axis)
}

export default function App()
{

  let scroll=0;
  useEffect(() => {
    function updatePosition() {
        if(scroll==0 && window.scrollY!=0) 
        {
          window.scrollTo(0,document.documentElement.clientHeight)
          scroll=document.documentElement.clientHeight;
        }
        else{scroll=window.scrollY}
        
    }

    window.addEventListener('scroll', updatePosition)
    updatePosition()

    return () => window.removeEventListener('scroll', updatePosition)
   }, [])
  //console.log(document.documentElement.clientHeight)
  return(
    <Provider store={store}>
      <div >
        <div id='principalApp'>
          <BackgroundPrincipal/>
          <Principal/>
        </div>
        
        <Projects/>
      </div>      
    </Provider>
  )
}


