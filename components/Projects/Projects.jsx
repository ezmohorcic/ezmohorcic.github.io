import React, { useEffect } from 'react';
import Project from './Project/Project.jsx';
import { motion, useCycle } from 'framer-motion';

import { info_SecretH } from '../../redux/const.js';
import './Projects.css'
import { useDispatch, useSelector } from 'react-redux';
import { firstScrollAction } from '../../redux/actions.js';


/*animaciones de titulo*/

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

/*animaciones de titulo*/


/*animaciones de inicio de border*/

const bckgArr=["offScreen","el1","el2","el3","el4","el5","el6","el7","el8","el9","el9","el10","el11","el12","el13",];
const bckgMovVariants=
{
    offScreen:{transition:{duration:0.6}},
    el1:{top:[-35,-1500],transition:{duration:1.1,ease:"easeIn"}},
    el2:{top:[-35,-1500],transition:{duration:0.6,ease:"easeIn"}},
    el3:{top:[-35,-1500],transition:{duration:0.4,ease:"easeIn"}},
    el4:{top:[-35,-1500],transition:{duration:0.3,ease:"easeIn"}},
    el5:{top:[-35,-1500],transition:{duration:0.2,ease:"easeIn"}},
    el6:{top:[-35,-1500],transition:{duration:0.2,ease:"easeIn"}},
    el7:{top:[-35,-1500],transition:{duration:0.2,ease:"easeIn"}},
    el8:{top:[-35,-1500],transition:{duration:0.2,ease:"easeIn"}},
    el9:{top:[-35,-1500],transition:{duration:0.2,ease:"easeIn"}},
    el10:{top:[-35,-1500],transition:{duration:0.2,ease:"easeIn"}},
    el11:{top:[-35,-1500],transition:{duration:0.2,ease:"easeIn"}},
    el12:{top:[-35,-1500],transition:{duration:0.2,ease:"easeIn"}},
    el13:{opacity:0,height:0},
}
const bckgTimes=[0,1.1,0.6,0.4,0.3,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2]

const animatedBorderVariants={
    offScreen:{opacity:0.1},
    onScreen:{opacity:1,transition:{delay:2,ease:"easeIn",duration:2.2}}
}
/*animaciones de inicio de border*/


export default function Projects()
{

    const firstScroll = useSelector(state=>state.firstScroll);
    const dispatch = useDispatch();
    let control=1;

    useEffect(()=>
    {
        if(firstScroll!=0 && firstScroll<14)
        {
            setTimeout(()=>
            {dispatch(firstScrollAction())},(bckgTimes[firstScroll])*1000)
        }
    },[firstScroll,control]);
    return(
        <div id='projectsBckg'>

            <div id="ProjectCentralBckg">
                {/* <motion.div variants={animatedBorderVariants} initial={"offScreen"} animate={firstScroll? "onScreen" : "offScreen"} id='projectsanimatedBorderLeft'></motion.div> */}
                <motion.div variants={animatedBorderVariants} initial={"offScreen"} animate={firstScroll? "onScreen" : "offScreen"} id='backProjectCont'></motion.div>
                <motion.div id="projectsContainer">       
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
                </motion.div>

                {/* <motion.div variants={animatedBorderVariants} initial={"offScreen"} animate={firstScroll? "onScreen" : "offScreen"} id='projectsanimatedBorderRight'></motion.div> */}
            </div>
            
            <motion.div variants={bckgMovVariants} initial={"offScreen"} animate={bckgArr[firstScroll]} id="projectsMovBackground"></motion.div>
        </div>
        
        
    )
}