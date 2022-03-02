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
                <a target={"_blank"} href="https://linkedin.com/in/ivanna-mohorcic-94b96420a" className="principalLinksExternos">Linked-In</a>
            </div>

            <div className="principalContLinksExternos">
                <a target={"_blank"} href="https://github.com/ezmohorcic" className="principalLinksExternos">GitHub</a>
            </div>

            {/* <div className="principalContLinksExternos">
                <Link></Link>
            </div> */}
        </div>
    )
}