import React, { useEffect, useState } from "react";

const DataScience = () => {
  const [datascience, setDataScience] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/portfolio/datascience/")
      .then((res) => res.json())
      .then((data) => setDataScience(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Data Science</h1>
      <ul>
        {datascience.map((datascience) => (
          <li key={datascience.id}>{datascience.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataScience;
