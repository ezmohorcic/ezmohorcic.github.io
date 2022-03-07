import React from 'react';
import { motion } from 'framer-motion';

import "./BackgroundPrincipal.css";

const hourLength=document.documentElement.clientWidth*(25/100)

const animationHourLine=
{
    // offsetRotate: [0,90,180,270,360],
    // translate: "25vw"
    offsetPath: "circle(50% at 25% 25%)"
}

const transitionHourLine=
{
    duration:5,
    repeat: Infinity,
}

export default function BackgroundPrincipal()
{
    return(
        <div id='contBackgroundPrincipal'>
            {/* <div className='HourLineCenter'></div> */}
            <motion.div animate={animationHourLine} transition={transitionHourLine} id='deg0' className='HourLine'></motion.div>
            <motion.div id='deg45' className='HourLine'></motion.div>
            <motion.div id='deg90' className='HourLine'></motion.div>
            <motion.div id='deg135' className='HourLine'></motion.div>
            <motion.div id='deg180' className='HourLine'></motion.div>
            <motion.div id='deg225' className='HourLine'></motion.div>
            <motion.div id='deg270' className='HourLine'></motion.div>
            <motion.div id='deg315' className='HourLine'></motion.div>
        </div>
    )
}
