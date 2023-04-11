import React from 'react';
import DegreeList from '../components/displays/DegreeList';
import { Link } from "react-router-dom";

function Degrees() {  
    return(
        <div>
        <li>
            <Link to={`/degrees/new`}>Create Degree</Link>
        </li>
        <DegreeList/>
        </div>
    );
}

export default Degrees;