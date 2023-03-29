import React from "react";
import { Link } from "react-router-dom";

function navbar() {
  return (
        <nav>
        <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/degrees">Degrees</Link>
            </li>
            <li>
            <Link to="/cohorts">Cohorts</Link>
        </li>
        </ul>
    </nav>
    );
}

export default navbar;