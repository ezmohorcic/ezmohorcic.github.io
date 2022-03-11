import React from 'react';
import Project from './Project/Project.jsx';
import { motion, Variants } from 'framer-motion';

import { info_SecretH } from './Info.js';
import './Projects.css'

const CShellVariants=
{
    offScreen:{opacity:0,width:0,transition:{duration:1, type:"tween"}},
    onScreen:{opacity:1,width:"fit-content",transition:{duration:1, type:"tween"}}
};
const pVariants=
{
    offScreen:{opacity:0,transition:{duration:0.6,delay:0.6}},
    onScreen:{opacity:1,transition:{duration:0.6,delay:0.6}},
}

export default function Projects()
{
    return(
        <div id="projectsContainer">       
            <div id="projectTitleCont">
                <motion.div viewport={{once:true}} variants={CShellVariants} initial={"offScreen"} whileInView={"onScreen"} className='contDecoLineas'>
                    <div className='circuloDeco'></div>
                    <div className='LineaDeco'></div>
                </motion.div> 

                <motion.h1 viewport={{once:true}} variants={pVariants} initial={"offScreen"} whileInView={"onScreen"} id="projectsTitle">Projects</motion.h1>
            
                <motion.div viewport={{once:true}} variants={CShellVariants} initial={"offScreen"} whileInView={"onScreen"} className='contDecoLineas'>    
                    <div className='LineaDeco'></div>
                    <div className='circuloDeco'></div>
                </motion.div>
            </div>

            <Project i={0} info={info_SecretH} title={"Secret H Demo"} img={"./public/secret-h-img.png"} github={"https://github.com/ezmohorcic/secret-h-demo"} deploy={"https://secret-h-demo-v2-h65pv.ondigitalocean.app/"}/>  
                {/* <Project i={1} info={info_SecretH} title={"Secret H Demo"} img={"./public/secret-h-img.png"} github={"https://github.com/ezmohorcic/secret-h-demo"} deploy={"https://secret-h-demo-v2-h65pv.ondigitalocean.app/"}/> */}
        </div>
        
    )
}