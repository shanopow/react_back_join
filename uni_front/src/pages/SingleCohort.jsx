import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

const drawCohort = (jsl) => {  
  return (
      <div>
        <h3>ID: {jsl.id}</h3>
        <p>Year: {jsl.year}</p>
        <p>Degree: {jsl.degree}</p>
        <p>Name: {jsl.name}</p>
      </div>
    )
  };

const drawStudents = (jsl) =>{
  return (
    <div>
      <h3>ID: {jsl.student_id}</h3>
      <p>First Name: {jsl.first_name}</p>
      <p>Last Name: {jsl.last_name}</p>
      <p>Cohort: {jsl.cohort}</p>
      <p>Email: {jsl.email}</p>
    </div>
  )
};


function Cohort() {
    const { id } = useParams();
    const [cohort, setcohort] = useState([]);
    const [students, setstudents] = useState([]);
    useEffect(() => {
      if(cohort == 0){
          fetch(`http://127.0.0.1:8000/api/cohort/${id}`).then(response => response.json())
        .then(data => {
          setcohort(data);
        })
        .catch(error => console.log(error));
      }
      
      if (students == 0){
        fetch(`http://127.0.0.1:8000/api/student/?cohort=${id}`).then(response => response.json())
        .then(data => {
          setstudents(data)
        })
        .catch(error => console.log(error));
      }
    });
    
    const displayStudents = () => {
      return students.map(element => <div>{drawStudents(element)}</div>);
    };


    return (
      <div>
        <hr/>
        <h1>Cohort</h1>
        {drawCohort(cohort)}
        <h1>Students</h1>
        {displayStudents(students)}
      </div>
    )
  }

export default Cohort