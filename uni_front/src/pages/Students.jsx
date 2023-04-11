import React from 'react';
import { Link } from "react-router-dom";

function Students() {  
    return(
        <div>
        <li>
            <Link to={`/students/new`}>Create Student</Link>
        </li>
        <li>
            <Link to={`/students/26870106`}>Example Student Url</Link>
        </li>
        </div>
    );
}

export default Students;