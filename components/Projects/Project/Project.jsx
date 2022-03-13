import { motion } from 'framer-motion';
import React from 'react';
import { useSelector } from 'react-redux';

import './Project.css';

const projectVariants={
    offScreen:{rotateX:90},
    onScreen:{rotateX:[90,0],transition:{duration:1.2,delay:0.5,ease:[0.5,0.5,0.5,0.5]}} 
}


const imgTestCont={
    offScreen:{},
    onScreen:{rotateX:[0,-10,-10,10,0],boxShadow: " inset 0 0 3vw 3vw rgba(255,255,255,1)",transition:{duration:0.7,delay:2.2,ease:[0.5,0.5,0.5,0.5]}}

}
const projectImgContVariants={
    offScreen:{y:30},
    onScreen:{y:[30,-30,-50,-30,0],transition:{duration:0.7,delay:2.2,ease:[0.5,0.5,0.5,0.5]}}
}

const allContVariants={
    offScreen:{},
    onScreen:{width:document.documentElement.clientWidth*0.6,boxShadow: " inset 0 -4vh 3vw rgba(255,255,255,0.2)",transition:{duration:0.2,delay:2}}
}

export default function Project(props)
{
    const projectScroll = useSelector(state=>state.projectScroll);

    let projbuttons=[];
    if(props.github){projbuttons.push(<div key={"git-but-"+props.i} className='projectLinkCont'><a className='projectLink' target={"_blank"} href={props.github}>GitHub</a></div>)}
    if(props.deploy){projbuttons.push(<div key={"deploy-but-"+props.i} className='projectLinkCont'><a className='projectLink' target={"_blank"} href={props.deploy}>Abrir</a></div>)}
    return(
        
        <motion.div style={{perspective:500}} variants={projectVariants} initial={"offScreen"} animate={projectScroll? "onScreen" : "offScreen"} className="projectContainer">
            {console.log(projectScroll)}
            <div className="projectTitleCont"><h1 className="projectTitle">{props.title}</h1></div>
            <motion.div  variants={imgTestCont} initial={"offScreen"} animate={projectScroll? "onScreen" : "offScreen"} className="projectImgCont">
                <motion.img variants={projectImgContVariants} initial={"offScreen"} animate={projectScroll? "onScreen" : "offScreen"} src={props.img} className="projectImg" alt="Not-owo found :c" />
            </motion.div>
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