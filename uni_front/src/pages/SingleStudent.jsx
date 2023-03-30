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

const drawGrades = (jsl) => {
    return (
      <div>
        <h2>{jsl.id}</h2>
        <p>Module: {jsl.module}</p>
        <p>Ca mark: {jsl.ca_mark}</p>
        <p>Exam mark: {jsl.exam_mark}</p>
        <p>Total Grade: {jsl.total_grade}</p>
      </div>
    )
};
  


function Student() {
    const { id } = useParams();
    const [student, setstudent] = useState({});
    const [grades, setgrades] = useState([]);
    useEffect(() => {
      fetch(`http://127.0.0.1:8000/api/student/${id}`)
        .then(response => response.json())
        .then(data => {
          setstudent(data);
        })

        fetch(`http://127.0.0.1:8000/api/grade/?student=${id}`).then(response => response.json())
        .then(data => {
          setgrades(data);
        })
        .catch(error => console.log(error));
    });

    const displayGrades = () => {
      return grades.map(element => <div>{drawGrades(element)}</div>);
    };

    return (
      <div>
        <hr/>
        {drawStudent(student)}
        <h1>Grades</h1>
        {displayGrades(grades)}
      </div>
    )
  }

export default Student