import { useState, useEffect } from "react";

const drawDegree = (jsl) => {
  return (
    <div>
      <h2>{jsl.full_name}</h2>
      <p>ShortCode: {jsl.shortcode}</p>
    </div>
  )
};

function DegreeList() {
  const [degrees, setdegrees] = useState([])
  const displayDegrees = () => {
    return degrees.map(element => <div>{drawDegree(element)}</div>);
  };
  
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/degree")
      .then(response => response.json())
      .then(data => {
        setdegrees(data)
      })
      .catch(error => console.log(error));
  });
  
  return (
    <div>
      <hr/>
      <h1>Degrees</h1>
      {displayDegrees()}
    </div>
  );
}

export default DegreeList