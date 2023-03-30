import { useState, useEffect } from "react";

const drawModule = (jsl) => {
  
  return (
    <div>
      <h2>{jsl.code}</h2>
      <p>Full Name: {jsl.full_name}</p>
      <p>Delivered to: <ul>{jsl.delivered_to.map(element => <li>{element}</li>)} </ul></p> 
      <p>Ca Split: {jsl.ca_split}</p>
    </div>
  )
};


function ModuleList() {
  const [modules, setmodules] = useState([])
  
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/module")
      .then(response => response.json())
      .then(data => {
        setmodules(data)
      })
      .catch(error => console.log(error));
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