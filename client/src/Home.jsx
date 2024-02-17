import React, { useEffect, useState } from "react";
import Create from "./Create";
import axios from "axios";
import { BsCircleFill, BsFillTrashFill } from "react-icons/bs";

function Home() {
  const [toDos, setToDos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/get")
      .then((result) => setToDos(result.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>ToDo List</h1>
      <Create />
      {toDos.length === 0 ? (
        <div className="task">
          <h2>No record</h2>
        </div>
      ) : (
        toDos.map((toDo, index) => (
          <div className="task" key={index}>
            <div className="checkbox">
              <BsCircleFill className="icon" />
              <p>{toDo.task}</p>
            </div>
            <div>
              <span>
                <BsFillTrashFill className="icon" />
              </span>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Home;
