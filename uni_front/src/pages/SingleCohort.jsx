import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

const drawCohort = (jsl) => {
    return (
      <div>
        <h2>{jsl.full_name}</h2>
        <p>ID: {jsl.id}</p>
        <p>Year: {jsl.year}</p>
        <p>Degree: {jsl.degree}</p>
        <p>Name: {jsl.name}</p>
      </div>
    )
  };
  
function Cohort() {
    const { id } = useParams();
    const [cohort, setcohort] = useState({})
    useEffect(() => {
      fetch(`http://127.0.0.1:8000/api/cohort/${id}`)
        .then(response => response.json())
        .then(data => {
          setcohort(data);
        })
        .catch(error => console.log(error));
    });
    return (
      <div>
        <hr/>
        {drawCohort(cohort)}
      </div>
    )
  }

export default Cohort