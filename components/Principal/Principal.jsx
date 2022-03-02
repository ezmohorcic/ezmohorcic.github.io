import React from 'react';
import { Link } from 'react-router-dom';

export default function Principal()
{
    console.log("owo")
    return(
        <div id="principalContainer">
            <h1 id='principalNombre'>Ivanna Mohorcic</h1>
            <h2 id='principalTitulo'>Desarrolladora Web - Full Stack</h2>

            <div className="principalContLinksExternos">
                <a href="" className="principalLinksExternos">Linked-In</a>
            </div>

            <div className="principalContLinksExternos">
                <a href="" className="principalLinksExternos">GitHub</a>
            </div>

            <div className="principalContLinksExternos">
                <Link></Link>
            </div>
        </div>
    )
}