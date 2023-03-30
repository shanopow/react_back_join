import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';


const drawStudent = (jsl) =>{
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

function Student() {
    const { id } = useParams();
    const [student, setstudent] = useState({})
    useEffect(() => {
      fetch(`http://127.0.0.1:8000/api/student/${id}`)
        .then(response => response.json())
        .then(data => {
          setstudent(data);
        })
        .catch(error => console.log(error));
    });
    return (
      <div>
        <hr/>
        {drawStudent(student)}
      </div>
    )
  }

export default Student