import React, { Fragment,useEffect,useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store.js'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Principal from './components/Principal/Principal.jsx';
import Projects from './components/Projects/Projects.jsx';

import "./App.css"

function handleScroll()
{
  const y_axis = window.scrollY
  console.log("scroll",y_axis)
}

export default function App()
{

 const [scrollPosition, setPosition] = useState({ scrollX: 0, scrollY: 0 })
  let scroll=0;
  useEffect(() => {
    function updatePosition() {
        setPosition({ scrollX: window.scrollX, scrollY: window.scrollY })
        console.log(window.scrollY,scroll)
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
        <Principal /><Projects/>
      </div>      
    </Provider>
  )
}


