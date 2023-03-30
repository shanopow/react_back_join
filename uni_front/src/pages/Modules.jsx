import React from 'react';
import ModuleList from '../components/displays/ModuleList';

function Modules() {  
    return(
        <div>
        <p>Use "modules/code" for individual pages</p>
        <p>Use "modules/delivered/" to see all the modules delivered to that cohort</p>
        <ModuleList/>
        </div>
    );
}

export default Modules;