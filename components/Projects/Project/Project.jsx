import React from 'react';

import './Project.css';

export default function Project(props)
{
    let projbuttons=[];
    if(props.github){projbuttons.push(<div key={"git-but-"+props.i} className='projectLinkCont'><a className='projectLink' target={"_blank"} href={props.github}>GitHub</a></div>)}
    if(props.deploy){projbuttons.push(<div key={"deploy-but-"+props.i} className='projectLinkCont'><a className='projectLink' target={"_blank"} href={props.deploy}>Abrir</a></div>)}
    return(
        <div   ref={el => {
            // el can be null - see https://reactjs.org/docs/refs-and-the-dom.html#caveats-with-callback-refs
            if (!el) return;
    
            console.log(el.getBoundingClientRect()); // prints 200px
          }} className="projectContainer">
            <div className="projectTitleCont"><h1 className="projectTitle">{props.title}</h1></div>
            <img src={props.img} className="projectImg" alt="Not-owo found :c" />
            <div className='projectAllCont'>
                <div className="projectInfoCont">
                    <p>{props.info}</p>
                </div>
                <div className="projectButsCont">
                    {projbuttons}
                </div>
            </div>
        </div>
    )
}