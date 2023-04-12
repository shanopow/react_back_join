import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import GradeForm from '../components/displays/forms/GradeForm';

const drawGrades = (jsl) => {
    return (
      <article>
        <p>Ca Mark: {jsl.ca_mark}</p>
        <p>Exam mark: {jsl.exam_mark}</p>
        <p>Total Grade: {jsl.total_grade}</p>
      </article>
    )
};

const drawModule = (jsl) => {
  return (
    <div>
      <h3>{jsl.code}</h3>
      <p>Full Name: {jsl.full_name}</p>
      <p>Ca Weight: {jsl.ca_split}</p>
    </div>
  )
};


function StudentGrade() {
    const { id, code } = useParams();

    const [modules, setmodule] = useState([]);

    const [grades, setgrades] = useState([]);

    const [gid, setgid] = useState();

    useEffect(() => {      
    
      if (modules == 0){
        fetch(`http://127.0.0.1:8000/api/module/${code}`)
        .then(response => response.json())
        .then(data => {
          setmodule(data)
        })
        .catch(error => console.log(error));
      }


      if (grades == 0){
        fetch(`http://127.0.0.1:8000/api/grade/?student=${id}&module=${code}`)
        .then(response => response.json())
        .then(data => {
          setgrades(data[0]);
          setgid(data[0].id);
        })
        .catch(error => console.log(error));
      } 

    });

    return (
      <div>
        <hr/>
        <h1>Change a Grade</h1>
        < hr/>
        <h1>Grade</h1>
        {drawGrades(grades)}
        
        <h1> Module</h1>
        {drawModule(modules)}
      
        <h1> Change the Grade</h1>
        {GradeForm(gid)}
      </div>
    )
  }

export default StudentGrade