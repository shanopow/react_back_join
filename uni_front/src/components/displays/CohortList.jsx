import { useState, useEffect } from "react";

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

function CohortList() {
  const [degrees, setcohorts] = useState([])
  const displayCohorts = () => {
    return degrees.map(element => <div>{drawCohort(element)}</div>);
  };
  
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/cohort")
      .then(response => response.json())
      .then(data => {
        setcohorts(data)
      })
      .catch(error => console.log(error));
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