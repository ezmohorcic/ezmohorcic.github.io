import React, { Fragment,useEffect,useState } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';

import {BrowserRouter,Routes,Route} from "react-router-dom";
import Principal from './components/Principal/Principal.jsx';
import Projects from './components/Projects/Projects.jsx';
import store from './redux/store.js'
import BackgroundPrincipal from './components/Principal/BackgroundPrincipal.jsx';
import { firstScrollAction, showProject } from './redux/actions.js';
import { cant_projects } from './redux/const.js';

import "./App.css";


const sideLinesUpVariants={
  top:[0,-(document.documentElement.clientHeight*(cant_projects+1))],
  transition:{duration:20,ease:[0.5,0.5,0.5,0.5],repeat:Infinity}
}

const sideLinesDownVariants={
  top:[-document.documentElement.clientHeight*(cant_projects+1),0],
  transition:{duration:20,ease:[0.5,0.5,0.5,0.5],repeat:Infinity}
}

const sidesLineContVariants={
  offScreen:{opacity:0.1},
  onScreen:{opacity:1,transition:{delay:2,ease:"easeIn",duration:2.2}}
}

export default function App()
{
  const [scroll,setScroll]=useState(0);
  const firstScroll = useSelector(state=>state.firstScroll);
  const dispatch = useDispatch();

  function handleScroll(e)
  {
    let raw=0;
    if(scroll==0)
    {
      if(e.deltaY>0)
      {
        raw=document.documentElement.clientHeight;
        window.scrollTo(0,raw);
        dispatch(firstScrollAction());
      }
    } 
    else
    {
      if(e.deltaY>0)
      {
        if(scroll/document.documentElement.clientHeight<cant_projects+1){raw=scroll + document.documentElement.clientHeight;}
        else {raw = scroll;}
        window.scrollTo(0,raw);
        console.log(scroll/document.documentElement.clientHeight==1,scroll/document.documentElement.clientHeight)
        if(scroll/document.documentElement.clientHeight==1){dispatch(showProject());}
      }
      else
      {
        raw = scroll - document.documentElement.clientHeight;
        window.scrollTo(0,raw)
      }
    }
    setScroll(raw)
  }

  function createUpLines()
  {
    let lines=[];

    for(let i=0;i<(cant_projects+1)*10;i++)
    {
      lines.push(<div key={"lineSide_"+i} className='sidesLine'></div>)
    }

    return lines;
  }
  
  return(
      <div id='appAll' onWheel={(e)=>handleScroll(e)}>
        <div id='principalApp'>
          <BackgroundPrincipal/>
          <Principal/>
        </div>
        <div id="projectsAll">
          <motion.div variants={sidesLineContVariants} animate={firstScroll? "onScreen" : "offScreen"} className='projectSidesCont'>
            <motion.div animate={sideLinesUpVariants} style={{height:document.documentElement.clientHeight*(cant_projects+1)}} id="leftOut" className='projectSidesLine'>{createUpLines()}</motion.div>
            <motion.div animate={sideLinesDownVariants} style={{height:document.documentElement.clientHeight*(cant_projects+1)}} id="leftIn" className='projectSidesLine'>{createUpLines()}</motion.div>
          </motion.div>
          <Projects/>
          <motion.div variants={sidesLineContVariants} animate={firstScroll? "onScreen" : "offScreen"} className='projectSidesCont'>
            <motion.div animate={sideLinesDownVariants} style={{height:document.documentElement.clientHeight*(cant_projects+1)}} id="rightIn" className='projectSidesLine'>{createUpLines()}</motion.div>
            <motion.div animate={sideLinesUpVariants} style={{height:document.documentElement.clientHeight*(cant_projects+1)}} id="rightOut" className='projectSidesLine'>{createUpLines()}</motion.div>
          </motion.div>
        </div>      
      </div>     
  )
}


