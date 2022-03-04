import React from 'react';
import { Link } from 'react-router-dom';

import "./Principal.css"

export default function Principal()
{
    console.log("owo")
    return(
        <div id="principalContainer">
            <div id="principalCardShell">
                <div id="principalNameCont"><h1 id='principalNombre'>Ivanna Minerva Mohorcic</h1></div>
                <div id="principalTituloCont"><h2 id='principalTitulo'>Desarrolladora Web - Full Stack</h2></div>

                <div id='linksPrincipalCont'>
                    <div className="principalShellExternos">
                            <a target={"_blank"} href="https://linkedin.com/in/ivanna-mohorcic-94b96420a" className="principalLinksExternos">Linked-In</a>
                        </div>

                        <div className="principalShellExternos principalDerechaLink">
                            <a target={"_blank"} href="https://github.com/ezmohorcic" className="principalLinksExternos">GitHub</a>
                        </div>
                </div>


                {/* <div className="principalContLinksExternos">
                    <Link></Link>
                </div> */}
            </div>

        </div>
    )
}