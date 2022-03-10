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
  const [scroll,setScroll]=useState(0);
  function handleScroll(e)
  {
    let raw=0;
    if(scroll==0)
    {
      if(e.deltaY>0)
      {
        raw=document.documentElement.clientHeight;
        window.scrollTo(0,raw) 
      }
    } 
    else
    {
      console.log(e.deltaY>0)
      if(e.deltaY>0)
      {
        raw=scroll + document.documentElement.clientHeight;
        window.scrollTo(0,raw);
      }
      else
      {
        raw = scroll - document.documentElement.clientHeight;
        window.scrollTo(0,raw)
      }
    }
    setScroll(raw)
    console.log(scroll,e.deltaY,raw)
  }
  
  return(
    <Provider store={store}>
      <div id='appAll' onWheel={(e)=>handleScroll(e)}>
        <div id='principalApp'>
          <BackgroundPrincipal/>
          <Principal/>
        </div>
        <Projects/>
      </div>      
    </Provider>
  )
}


