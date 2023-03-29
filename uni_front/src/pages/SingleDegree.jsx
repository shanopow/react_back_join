import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

const drawDegree = (jsl) => {
    return (
      <div>
        <h2>{jsl.full_name}</h2>
        <p>ShortCode: {jsl.shortcode}</p>
      </div>
    )
  };
  
function Degree() {
    const { shortcode } = useParams();
    const [degree, setdegree] = useState({})
    useEffect(() => {
      fetch(`http://127.0.0.1:8000/api/degree/${shortcode}`)
        .then(response => response.json())
        .then(data => {
          setdegree(data);
        })
        .catch(error => console.log(error));
    });
    return (
      <div>
        <hr/>
        {drawDegree(degree)}
      </div>
    )
  }

export default Degree