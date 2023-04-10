import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const drawModule = (jsl) => {
  
  return (
    <article>
      <header>{jsl.code}</header>
      <p>Full Name: {jsl.full_name}</p>
      <p>Delivered to: <ul>{jsl.delivered_to.map(element => <li>{element}</li>)} </ul></p> 
      <p>Ca Weight: {jsl.ca_split}</p>
      <li>
            <Link to={`/modules/${jsl.code}`}>More Info</Link>
        </li>
    </article>
  )
};


function ModuleList() {
  const [modules, setmodules] = useState([])
  
  useEffect(() => {
    if (modules == 0){
      fetch("http://127.0.0.1:8000/api/module")
      .then(response => response.json())
      .then(data => {
        setmodules(data)
      })
      .catch(error => console.log(error));
    }
  });
  
  const displayModules = () => {
    return modules.map(element => <div>{drawModule(element)}</div>);
  };
  
  return (
    <div>
      <hr/>
      <h1>Modules</h1>
      {displayModules()}
    </div>
  );
}

export default ModuleList;