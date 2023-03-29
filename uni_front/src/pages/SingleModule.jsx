import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

const drawModule = (jsl) => {
    return (
        <div>
        <h2>{jsl.code}</h2>
        <p>Full Name: {jsl.full_name}</p>
        <p>Delivered to: {jsl.delivered_to}</p>
        <p>Ca Split: {jsl.ca_split}</p>
      </div>
    )
  };
  
function Module() {
    const { code } = useParams();
    const [module, setmodule] = useState({})
    useEffect(() => {
      fetch(`http://127.0.0.1:8000/api/module/${code}`)
        .then(response => response.json())
        .then(data => {
          setmodule(data);
        })
        .catch(error => console.log(error));
    });
    return (
      <div>
        <hr/>
        {drawModule(module)}
      </div>
    )
  }

export default Module