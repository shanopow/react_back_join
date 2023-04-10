import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

const drawModule = (jsl) => {
    return (
        <article>
        <header>{jsl.code}</header>
        <p>Full Name: {jsl.full_name}</p>
        <p>Delivered to: <ul>{jsl.delivered_to.map(element => <li>{element}</li>)} </ul></p> 
        <p>Ca Weight: {jsl.ca_split}</p>
      </article>
    )
  };
  
function Module() {
    const { code } = useParams();
    const [module, setmodule] = useState([])
    useEffect(() => {
      if (module == 0){
        fetch(`http://127.0.0.1:8000/api/module/${code}`)
        .then(response => response.json())
        .then(data => {
          setmodule(data);
        })
        .catch(error => console.log(error));
      }
    });

    return (
      <div>
        <hr/>
        {drawModule(module)}
      </div>
    )
  }

export default Module