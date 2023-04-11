import React from 'react';
import ModuleList from '../components/displays/ModuleList';
import { Link } from "react-router-dom";

function Modules() {  
    return(
        <div>
        <li>
            <Link to={`/modules/new`}>Create Module</Link>
        </li>
        <p>Use "modules/delivered/(code)" to see all the modules delivered to that cohort</p>
        <ModuleList/>
        </div>
    );
}

export default Modules;