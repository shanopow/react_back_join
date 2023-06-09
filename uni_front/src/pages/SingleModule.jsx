import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
     
const drawModule = (jsl) => {
    return (
        <article>
        <header>{jsl.code}</header>
        <p>Full Name: {jsl.full_name}</p>
        <p>Ca Weight: {jsl.ca_split}</p>
        <p>Delivered to: <ul>{jsl.delivered_to} </ul></p> 
      </article>
    )
  };
  
function SingleModule() {
    const { code } = useParams();
    const [modules, setmodules] = useState([]);
    useEffect(() => {
      if (modules == 0){
        fetch(`http://127.0.0.1:8000/api/module/${code}`)
        .then(response => response.json())
        .then(data => {
          setmodules(data)
        })
        .catch(error => console.log(error));
      }
    });

    return (
      <div>
        <hr/>
        {drawModule(modules)}
      </div>
    )
  }

export default SingleModule