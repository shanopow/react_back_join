import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const drawCohort = (jsl) => {
  return (
    <article>
      <header>{jsl.id}</header>
      <p>Year: {jsl.year}</p>
      <p>Degree: {jsl.degree}</p>
      <p>Name: {jsl.name}</p>
      <li>
        <Link to={`/cohorts/${jsl.id}`}>More Info</Link>
      </li>
    </article>
  )
};

function CohortList() {
  const [degrees, setcohorts] = useState([])
  
  const displayCohorts = () => {
    return degrees.map(element => <div>{drawCohort(element)}</div>);
  };
  
  useEffect(() => {
    if (degrees == 0){
      fetch("http://127.0.0.1:8000/api/cohort")
      .then(response => response.json())
      .then(data => {
        setcohorts(data)
      })
      .catch(error => console.log(error));
    }
  });
  
  return (
    <div>
      <hr/>
      <h1>Cohorts</h1>
      {displayCohorts()}
    </div>
  );
}

export default CohortList