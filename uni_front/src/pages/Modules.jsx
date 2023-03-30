import React from 'react';
import ModuleList from '../components/displays/ModuleList';

function Degrees() {  
    return(
        <div>
        <p>Use "modules/id" for individual pages</p>
        <p>Use "modules/delivered" to see all the modules delivered to that cohort</p>
        <ModuleList/>
        </div>
    );
}

export default Degrees;