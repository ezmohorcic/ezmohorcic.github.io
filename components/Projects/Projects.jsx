import React from 'react';
import Project from './Project/Project.jsx';

import { info_SecretH } from './Info.js';

import './Projects.css'

export default function Projects()
{
    return(
        <div id="projectsContainer">
            <h1 id="projectsTitle">Projects</h1>
            <Project i={0} info={info_SecretH} title={"Secret H Demo"} img={"./public/secret-h-img.png"} github={"https://github.com/ezmohorcic/secret-h-demo"} deploy={"https://secret-h-demo-v2-h65pv.ondigitalocean.app/"}/>
        </div>
        
    )
}