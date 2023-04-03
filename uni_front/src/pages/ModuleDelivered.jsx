import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

const drawModule = (jsl) => {
  return (
    <div>
      <h3>{jsl.code}</h3>
      <p>Full Name: {jsl.full_name}</p>
      <p>Ca Weight: {jsl.ca_split}</p>
    </div>
  )
};


function ModuleDelivered() {
    const {delivered} = useParams();
    const [modules, setmodules] = useState([])
  
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/module/?delivered_to=${delivered}`)
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
      <h1>Modules for this</h1>
      {displayModules()}
    </div>
  );
}

export default ModuleDelivered;