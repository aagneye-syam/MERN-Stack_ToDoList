import React, { useEffect, useState } from "react";
import Create from "./Create";
import axios from 'axios'

function Home() {
  const [toDos, setToDos] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/get')
      .then(result => setToDos(result.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>ToDo List</h1>
      <Create />
      {toDos.length === 0 ? (
        <div>
          <h2>No record</h2>
        </div>
      ) : ( 
        toDos.map((toDo, index) => (
          <div key={index}>{toDo.task}</div>
        ))
      )}
    </div>
  );
}

export default Home;
