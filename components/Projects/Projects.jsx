import React from 'react';
import Project from './Project/Project.jsx';

export default function Projects()
{
    return(
        <div id="projectsContainer">
            <h1>projects</h1>
            <Project i={0} img={"./public/secret-h-img.png"} github={"https://github.com/ezmohorcic/secret-h-demo"} deploy={"https://secret-h-demo-v2-h65pv.ondigitalocean.app/"}/>
        </div>
    )
}