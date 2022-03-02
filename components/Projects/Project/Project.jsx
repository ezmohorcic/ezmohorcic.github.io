import React from 'react';

export default function Project(props)
{
    let projbuttons=[];
    if(props.github){projbuttons.push(<div key={"git-but-"+props.i} className='projectLinkCont'><a href={props.github}>GitHub</a></div>)}
    if(props.deploy){projbuttons.push(<div key={"deploy-but-"+props.i} className='projectLinkCont'><a href={props.deploy}>Abrir</a></div>)}
    return(
        <div className="projectContainer">
            <img src={props.img} alt="Not-owo found :c" />
            <div className='projectAllCont'>
                <div className="projectInfoCont">

                </div>
                <div className="projectButsCont">
                    {projbuttons}
                </div>
            </div>
        </div>
    )
}