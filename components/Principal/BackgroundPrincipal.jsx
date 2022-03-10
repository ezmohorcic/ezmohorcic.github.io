import React, { useEffect, useState } from 'react';
import { motion,useAnimation,useCycle } from 'framer-motion';

import "./BackgroundPrincipal.css";
import { useSelector } from 'react-redux';

const transitionHourLine=
{
    duration:30,
    repeat: Infinity,
    ease:[0.5,0.5,0.5,0.5]
}
const HourLineStyle={width:document.documentElement.clientWidth*(7/10)}


const animationMinuteLine=[{rotate: [0,-90,-180,-270,-360]},{rotate: [-22.5,-112.5,-202.5,-292.5,-382.5]},{rotate: [-45,-135,-225,-315,-405]},{rotate: [-67.5,-157.5,-247.5,-337.5,-427.5]},{rotate: [-90,-180,-270,-360,-450]},{rotate: [-112.5,-202.5,-292.5,-382.5,-472.5]},{rotate: [-135,-225,-315,-405,-495]},{rotate: [-157.5,-247.5,-337.5,-427.5,-517.5]}]
const MinuteLineStyle={width:document.documentElement.clientWidth*(9.5/10)}

const animationHourLine=
[
    {rotate: [0,90,180,270,360]},
    {rotate: [45,135,225,315,405]},
    {rotate: [90,180,270,360,450]},
    {rotate: [135,225,315,405,495]}
]

const transitionMinuteLine=
{
    duration:15,
    repeat: Infinity,
    ease:[0.5,0.5,0.5,0.5]
}

export default function BackgroundPrincipal()
{
    const linkHover = useSelector(state=> state.pLinkHover);
    const [cycle,setCycle]= useCycle("TrueAn","falseAn");

    useEffect(()=>
    {   
        linkHover==1? setCycle("TrueAn") : setCycle("falseAn");
    },[linkHover]);
    return(
        <div id='contBackgroundPrincipal' >
            <motion.div  style={HourLineStyle} initial={"falseAn"} animate={animationHourLine[0]} transition={transitionHourLine}  className='HourLine'></motion.div>
            <motion.div  style={HourLineStyle} initial={"falseAn"} animate={animationHourLine[1]} transition={transitionHourLine}  className='HourLine'></motion.div>
            <motion.div  style={HourLineStyle} initial={"falseAn"} animate={animationHourLine[2]} transition={transitionHourLine}  className='HourLine'></motion.div>
            <motion.div  style={HourLineStyle} initial={"falseAn"} animate={animationHourLine[3]} transition={transitionHourLine}  className='HourLine'></motion.div>

            {/* <motion.div variants={animationHourLine} initial={"Frot0"} animate={cycle=="TrueAn"? "Trot0" : "Frot0"} transition={transitionHourLine}  className='HourLine'></motion.div> */}
        
            <motion.div style={MinuteLineStyle} animate={animationMinuteLine[0]} transition={transitionMinuteLine}  className='MinuteLine'></motion.div>
            <motion.div style={MinuteLineStyle} animate={animationMinuteLine[1]} transition={transitionMinuteLine}  className='MinuteLine'></motion.div>
            <motion.div style={MinuteLineStyle} animate={animationMinuteLine[2]} transition={transitionMinuteLine}  className='MinuteLine'></motion.div>
            <motion.div style={MinuteLineStyle} animate={animationMinuteLine[3]} transition={transitionMinuteLine}  className='MinuteLine'></motion.div>
            <motion.div style={MinuteLineStyle} animate={animationMinuteLine[4]} transition={transitionMinuteLine}  className='MinuteLine'></motion.div>
            <motion.div style={MinuteLineStyle} animate={animationMinuteLine[5]} transition={transitionMinuteLine}  className='MinuteLine'></motion.div>
            <motion.div style={MinuteLineStyle} animate={animationMinuteLine[6]} transition={transitionMinuteLine}  className='MinuteLine'></motion.div>
            <motion.div style={MinuteLineStyle} animate={animationMinuteLine[7]} transition={transitionMinuteLine}  className='MinuteLine'></motion.div>
        </div>
    )
}
