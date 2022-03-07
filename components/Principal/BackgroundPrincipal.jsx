import React from 'react';
import { motion } from 'framer-motion';

import "./BackgroundPrincipal.css";

const hourLength=document.documentElement.clientWidth*(25/100)

const animationHourLine=[{rotate: [0,90,180,270,360]},{rotate: [45,135,225,315,405]},{rotate: [90,180,270,360,450]},{rotate: [135,225,315,405,495]}]

const transitionHourLine=
{
    duration:30,
    repeat: Infinity,
    ease:[0.5,0.5,0.5,0.5]
}

export default function BackgroundPrincipal()
{
    return(
        <div id='contBackgroundPrincipal'>
            <motion.div animate={animationHourLine[0]} transition={transitionHourLine}  className='HourLine'></motion.div>
            <motion.div animate={animationHourLine[1]} transition={transitionHourLine}  className='HourLine'></motion.div>
            <motion.div animate={animationHourLine[2]} transition={transitionHourLine}  className='HourLine'></motion.div>
            <motion.div animate={animationHourLine[3]} transition={transitionHourLine}  className='HourLine'></motion.div>
        </div>
    )
}
