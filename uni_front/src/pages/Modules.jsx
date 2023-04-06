import React from 'react';
import ModuleList from '../components/displays/ModuleList';

function Modules() {  
    return(
        <div>
        <p>Use "modules/delivered/(code)" to see all the modules delivered to that cohort</p>
        <ModuleList/>
        </div>
    );
}

export default Modules;