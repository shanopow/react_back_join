import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

const drawCohorts = (jsl) => {  
  return (
      <div>
        <h3>ID: {jsl.id}</h3>
        <p>Year: {jsl.year}</p>
        <p>Degree: {jsl.degree}</p>
        <p>Name: {jsl.name}</p>
      </div>
    )
  };

const drawDegree = (jsl) => {
    return (
      <div>
        <h3>{jsl.full_name}</h3>
        <p>ShortCode: {jsl.shortcode}</p>
      </div>
    )
  };
  
function Degree() {
    const { shortcode } = useParams();
    const [degree, setdegree] = useState([]);
    const [cohorts, setCohorts] = useState([]);
    useEffect(() => {
      if (degree == 0){
        fetch(`http://127.0.0.1:8000/api/degree/${shortcode}`).then(response => response.json())
        .then(data => {
          setdegree(data);
        })
        .catch(error => console.log(error));
      }
      
      if (cohorts == 0){
        fetch(`http://127.0.0.1:8000/api/cohort/?degree=${shortcode}`).then(response => response.json())
        .then(data => {
          setCohorts(data);
        })
        .catch(error => console.log(error));
      }
    });
    
    const displayCohorts = () => {
      return cohorts.map(element => <div>{drawCohorts(element)}</div>);
    };
    
    return (
      <div>
        <hr/>
        <h1>Degree</h1>
        {drawDegree(degree)}
        <h1>Cohorts </h1>
        {displayCohorts(cohorts)}
      </div>
    )
  }

export default Degree