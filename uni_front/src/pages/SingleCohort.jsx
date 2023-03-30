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

const drawStudents = (jsl) =>{
  return (
    <div>
      <h2>ID: {jsl.student_id}</h2>
      <p>First Name: {jsl.first_name}</p>
      <p>Last Name: {jsl.last_name}</p>
      <p>Cohort: {jsl.cohort}</p>
      <p>Email: {jsl.email}</p>
    </div>
  )
};


function Cohort() {
    const { id } = useParams();
    const [cohort, setcohort] = useState({});
    const [students, setstudents] = useState([]);
    useEffect(() => {
      fetch(`http://127.0.0.1:8000/api/cohort/${id}`).then(response => response.json())
      .then(data => {
        setcohort(data);
      })
      
      fetch(`http://127.0.0.1:8000/api/student/?cohort=${id}`).then(response => response.json())
      .then(data => {
        setstudents(data)
      })
      .catch(error => console.log(error));
    });
    
    const displayStudents = () => {
      return students.map(element => <div>{drawStudents(element)}</div>);
    };


    return (
      <div>
        <hr/>
        {drawCohort(cohort)}
        <h1>Students</h1>
        {displayStudents(students)}
      </div>
    )
  }

export default Cohort