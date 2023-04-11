import React from 'react';
import CohortList from '../components/displays/CohortList';
import { Link } from "react-router-dom";

function Cohorts() {  
    return(
        <div>
        <li>
            <Link to={`/cohorts/new`}>Create Cohort</Link>
        </li>
        <CohortList/>
        </div>
    );
}

export default Cohorts;