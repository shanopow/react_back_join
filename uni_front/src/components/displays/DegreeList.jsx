import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const drawDegree = (jsl) => {
  return (
    <article>
      <header>{jsl.shortcode}</header>
      <p>Full Name: {jsl.full_name}</p>
      <li>
        <Link to={`/degrees/${jsl.shortcode}`}>More Info</Link>
      </li>
    </article>
  )
};


function DegreeList() {
  const [degrees, setdegrees] = useState([])
  
  useEffect(() => {
    if (degrees == 0){
      fetch("http://127.0.0.1:8000/api/degree")
      .then(response => response.json())
      .then(data => {
        setdegrees(data)
      })
      .catch(error => console.log(error));

    }
      });
  
  const displayDegrees = () => {
    return degrees.map(element => <div>{drawDegree(element)}</div>);
  };
  
  return (
    <div>
      <hr/>
      <h1>Degrees</h1>
      {displayDegrees()}
    </div>
  );
}

export default DegreeList