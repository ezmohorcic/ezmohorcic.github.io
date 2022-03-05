import React from 'react';
import { motion } from 'framer-motion';

import "./Principal.css";

const CShellVariants=
{
    offScreen:{opacity:0,width:0,transition:{duration:1, type:"tween"}},
    onScreen:{opacity:1,width:"fit-content",transition:{duration:1, type:"tween"}}
};
const pVariants=
{
    offScreen:{opacity:0,transition:{duration:1,delay:1}},
    onScreen:{opacity:1,transition:{duration:1,delay:1}}
}


export default function Principal()
{
    return(
        <div id="principalContainer" >
            <motion.div variants={CShellVariants} initial={"offScreen"} whileInView={"onScreen"} className='contDecoLineas'>
                <div className='circuloDeco'></div>
                <div className='LineaDeco'></div>
            </motion.div>

            <motion.div variants={CShellVariants} initial={"offScreen"} whileInView={"onScreen"} id="principalCardShell">
                <div  id="principalNameCont">
                    <motion.h1 variants={pVariants} initial={"offScreen"} whileInView={"onScreen"} id='principalNombre'>Ivanna Minerva Mohorcic</motion.h1>
                </div>
                <div id="principalTituloCont"><motion.h2 variants={pVariants} initial={"offScreen"} whileInView={"onScreen"} id='principalTitulo'>Desarrolladora Web - Full Stack</motion.h2></div>
                <div id='linksPrincipalCont'>
                    <motion.div variants={pVariants} initial={"offScreen"} whileInView={"onScreen"} className="principalShellExternos">
                        <a  target={"_blank"} href="https://linkedin.com/in/ivanna-mohorcic-94b96420a" className="principalLinksExternos">Linked-In</a>
                    </motion.div>
                    <motion.div variants={pVariants} initial={"offScreen"} whileInView={"onScreen"} className="principalShellExternos principalDerechaLink">
                        <a  target={"_blank"} href="https://github.com/ezmohorcic" className="principalLinksExternos">GitHub</a>
                    </motion.div>
                </div>
            </motion.div>

            <motion.div variants={CShellVariants} initial={"offScreen"} whileInView={"onScreen"} className='contDecoLineas'>    
                <div className='LineaDeco'></div>
                <div className='circuloDeco'></div>
            </motion.div>
        </div>
    )
}