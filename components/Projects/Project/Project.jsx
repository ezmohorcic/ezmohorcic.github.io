import { motion } from 'framer-motion';
import React from 'react';
import { useSelector } from 'react-redux';

import './Project.css';

const projectVariants={
    offScreen:{rotateX:90,translateZ:200},
    onScreen:{rotateX:[90,0],translateZ:[200,0],transition:{duration:1.2,delay:0.5,ease:[0.5,0.5,0.5,0.5]}} 
}

const projectTitleVariants={
    offScreen:{},
    onScreen:{color:["#ffffff","#d4af37","#ffffff"],transition:{duration:1,delay:2.8,ease:[0.5,0.5,0.5,0.5]}}
}


const decoImgUpVariants={
    offScreen:{opacity:0},
    onScreen:
    {
        opacity:[0,1,1,1],
        border:["0.3vw solid rgba(255,255,255,1)","0.3vw solid rgba(212,175,55,1)","0.3vw solid rgba(212,175,55,1)","0.3vw solid rgba(255,255,255,1)"],
        transition:{duration:0.8,delay:2.8,ease:[0.5,0.5,0.5,0.5]},
    }
}

const imgContVariants={
    offScreen:{},
    onScreen:
    {
        border:"0.1vw solid white",
        rotateX:[-10,-20,-20,10,0],
        boxShadow:["inset 0 0 2vw 2vw rgba(0,0,0,1)","inset 0 0 2vw 2vw rgba(0,0,0,1)","inset 0 0 2vw 2vw rgba(212,175,55,1)","inset 0 0 2vw 2vw rgba(212,175,55,1)","inset 0 0 2vw 2vw rgba(255,255,255,1)"],
        transition:{duration:0.8,delay:2.2,ease:[0.5,0.5,0.5,0.5]}
    }
}

const projectImgContVariants={
    offScreen:{y:100},
    onScreen:
    {
        y:["10vh","-5vh","-10vh","-3vh","0vh"],
        transition:{duration:0.8,delay:2.2,ease:[0.5,0.5,0.5,0.5]}
    }
}

const decoImgDownVariants={
    offScreen:{opacity:0},
    onScreen:
    {
        opacity:[0,1,1,1],
        border:["0.3vw solid rgba(255,255,255,1)","0.3vw solid rgba(212,175,55,1)","0.3vw solid rgba(212,175,55,1)","0.3vw solid rgba(255,255,255,1)"],
        transition:{duration:0.8,delay:2.0,ease:[0.5,0.5,0.5,0.5]},
    }
}

const allContVariants={
    offScreen:{},
    onScreen:
    {
        width:[document.documentElement.clientWidth*0.4,document.documentElement.clientWidth*0.6,document.documentElement.clientWidth*0.6,document.documentElement.clientWidth*0.6,document.documentElement.clientWidth*0.6],
        boxShadow: ["inset 0 -4vh 3vw rgba(100,100,100,0.4)","inset 0 -4vh 3vw rgba(100,100,100,0.4)","inset 0 -4vh 3vw rgba(212,175,55,1)","inset 0 -4vh 3vw rgbargba(212,175,55,1)","inset 0 -4vh 3vw rgba(100,100,100,0.4)"],
        transition:{duration:0.6,delay:2,ease:[0.5,0.5,0.5,0.5]}
    }
}

export default function Project(props)
{
    const projectScroll = useSelector(state=>state.projectScroll);
    console.log(props.i)
    let projbuttons=[];
    if(props.github){projbuttons.push(<div key={"git-but-"+props.i} className='projectLinkCont'><a className='projectLink' target={"_blank"} href={props.github}>GitHub</a></div>)}
    if(props.deploy){projbuttons.push(<div key={"deploy-but-"+props.i} className='projectLinkCont'><a className='projectLink' target={"_blank"} href={props.deploy}>Abrir</a></div>)}
    return(
        
        <motion.div style={{perspective:500}} variants={projectVariants} initial={"offScreen"} animate={projectScroll? "onScreen" : "offScreen"} className="projectContainer">
            
            <div className="projectTitleCont">
                <motion.h1 variants={projectTitleVariants} initial={"offScreen"} animate={projectScroll? "onScreen" : "offScreen"} className="projectTitle">{props.title}</motion.h1>
            </div>

            <div  className='projectImgDecoCont'>
                <motion.div variants={decoImgUpVariants} initial={"offScreen"} animate={projectScroll? "onScreen" : "offScreen"} className='projectImgDeco imgDecoUp'></motion.div>
                <motion.div variants={decoImgUpVariants} initial={"offScreen"} animate={projectScroll? "onScreen" : "offScreen"} className='projectImgDeco imgDecoUp'></motion.div>
            </div>
            
            <motion.div  variants={imgContVariants} initial={"offScreen"} animate={projectScroll? "onScreen" : "offScreen"} className="projectImgCont">
                <motion.img variants={projectImgContVariants} initial={"offScreen"} animate={projectScroll? "onScreen" : "offScreen"} src={props.img} className="projectImg" alt="Not-owo found :c" />  
            </motion.div>
            
            <div className='projectImgDecoCont'>
                <motion.div variants={decoImgDownVariants} initial={"offScreen"} animate={projectScroll? "onScreen" : "offScreen"} className='projectImgDeco imgDecoDown'></motion.div>
                <motion.div variants={decoImgDownVariants} initial={"offScreen"} animate={projectScroll? "onScreen" : "offScreen"} className='projectImgDeco imgDecoDown'></motion.div>
            </div>
            
            <motion.div variants={allContVariants} initial={"offScreen"} animate={projectScroll? "onScreen" : "offScreen"} className='projectAllCont'>
                <div className="projectInfoCont">
                    <p>{props.info}</p>
                </div>
                <div className="projectButsCont">
                    {projbuttons}
                </div>
            </motion.div>

        </motion.div>
    )
}