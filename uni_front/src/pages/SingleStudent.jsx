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
  
const drawModule = (jsl) => {
  return (
    <div>
      <h3>{jsl.code}</h3>
      <p>Full Name: {jsl.full_name}</p>
      <p>Ca Weight: {jsl.ca_split}</p>
    </div>
  )
};

//
function Student() {
    const { id } = useParams();
    const [student, setstudent] = useState({});
    
    const [grades, setgrades] = useState([]);
    
    const [modules, setmodules] = useState([]);
    const [delivered, setcohort] = useState();

    useEffect(() => {
      fetch1();
      fetch2();
      fetch3();
    });
    
    const fetch1 = async () =>{
      const resp = await fetch(`http://127.0.0.1:8000/api/student/${id}`);
      const newdata = await resp.json();
        setstudent(newdata);
        setcohort(newdata.cohort.split("/").slice(-2, -1));
    };
    
    const fetch2 = async() =>{
      const resp = await fetch(`http://127.0.0.1:8000/api/grade/?student=${id}`)
      const newdata = await resp.json()
        setgrades(newdata);
    };
    
    const fetch3 = async() =>{
      if (delivered !== undefined) {
        const resp = await fetch(`http://127.0.0.1:8000/api/module/?delivered_to=${delivered}`)
        const newdata = await resp.json();
        setmodules(newdata);
      }
    };

    const displayGrades = () => {
      return grades.map(element => <div>{drawGrades(element)}</div>);
    };
    
    const displayModules = () => {
      return modules.map(element => <div>{drawModule(element)}</div>);
    };
    

    return (
      <div>
        <hr/>
        {drawStudent(student)}
        <h1>Grades</h1>
        {displayGrades(grades)}
        <h1> Modules</h1>
        {displayModules(modules)}        
      </div>
    )
  }

export default Student