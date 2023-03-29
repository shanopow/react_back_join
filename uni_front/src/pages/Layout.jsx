import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;


/*
import DegreeList from './components/displays/getDegrees';

function App() {
  return (
  <div className="App">
    <DegreeList/>
  </div>
  );
}

export default App;
*/