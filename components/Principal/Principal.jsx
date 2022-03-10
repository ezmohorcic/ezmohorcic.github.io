import React from 'react';
import { motion } from 'framer-motion';

import "./Principal.css";
import { useDispatch, useSelector } from 'react-redux';
import { PrincipalLinkHover } from '../../redux/actions';

const CShellVariants=
{
    offScreen:{opacity:0,width:0,transition:{duration:1, type:"tween"}},
    onScreen:{opacity:1,width:"fit-content",transition:{duration:1, type:"tween"}}
};
const pVariants=
{
    offScreen:{opacity:0,transition:{duration:1,delay:1}},
    onScreen:{opacity:1,transition:{duration:1,delay:1}},
}
const butHover=
{
    boxShadow: "inset 0 0 1.1vw 0.2vw #D4AF37",
    clipPath: "inset(1vw 0 1vw 0)",
    borderColor:"#D4AF37",
    color:"#D4AF37",
    transition:{duration:0.2}
}

const aHover={color:"#D4AF37"}

export default function Principal()
{
    const linkHover = useSelector(state=> state.pLinkHover);
    const dispatch = useDispatch();
    
    return(
        <div id="principalContainer" >
            <motion.div viewport={{once:true}} variants={CShellVariants} initial={"offScreen"} whileInView={"onScreen"} className='contDecoLineas'>
                <div className='circuloDeco'></div>
                <div className='LineaDeco'></div>
            </motion.div>

            <motion.div viewport={{once:true}} variants={CShellVariants} initial={"offScreen"} whileInView={"onScreen"} id="principalCardShell">
                <div  id="principalNameCont">
                    <motion.h1 viewport={{once:true}} variants={pVariants} initial={"offScreen"} whileInView={"onScreen"} id='principalNombre'>Ivanna Minerva Mohorcic</motion.h1>
                </div>
                <div id="principalTituloCont"><motion.h2 viewport={{once:true}} variants={pVariants} initial={"offScreen"} whileInView={"onScreen"} id='principalTitulo'>Desarrolladora Web - Full Stack</motion.h2></div>
                <div id='linksPrincipalCont'>
                    <motion.div  whileHover={butHover} viewport={{once:true}} variants={pVariants} initial={"offScreen"} whileInView={"onScreen"} className="principalShellExternos">
                        <motion.a onMouseOver={()=>dispatch(PrincipalLinkHover())} onMouseLeave={()=>dispatch(PrincipalLinkHover())} whileHover={aHover} target={"_blank"} href="https://linkedin.com/in/ivanna-mohorcic-94b96420a" className="principalLinksExternos">Linked-In</motion.a>
                    </motion.div>
                    <motion.div whileHover={butHover} viewport={{once:true}} variants={pVariants} initial={"offScreen"} whileInView={"onScreen"} className="principalShellExternos principalDerechaLink">
                        <motion.a onMouseOver={()=>dispatch(PrincipalLinkHover())} onMouseLeave={()=>dispatch(PrincipalLinkHover())} whileHover={aHover} target={"_blank"} href="https://github.com/ezmohorcic" className="principalLinksExternos">GitHub</motion.a>
                    </motion.div>
                    <motion.div whileHover={butHover} viewport={{once:true}} variants={pVariants} initial={"offScreen"} whileInView={"onScreen"} className="principalShellExternos principalDerechaLink">
                        <motion.a onMouseOver={()=>dispatch(PrincipalLinkHover())} onMouseLeave={()=>dispatch(PrincipalLinkHover())} whileHover={aHover} target={"_blank"} href="https://ezmohorcic.github.io/Ivanna_Mohorcic_Resume.pdf" className="principalLinksExternos">CV</motion.a>
                    </motion.div>
                </div>
            </motion.div>

            <motion.div viewport={{once:true}} variants={CShellVariants} initial={"offScreen"} whileInView={"onScreen"} className='contDecoLineas'>    
                <div className='LineaDeco'></div>
                <div className='circuloDeco'></div>
            </motion.div>
        </div>
    )
}