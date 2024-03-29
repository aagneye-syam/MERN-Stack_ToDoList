import React, { useEffect, useState } from "react";
import Create from "./Create";
import axios from "axios";
import {
  BsCircleFill,
  BsFillCheckCircleFill,
  BsFillTrashFill,
} from "react-icons/bs";

function Home() {
  const [toDos, setToDos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/get")
      .then((result) => setToDos(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleEdit = (id) => {
    axios
      .put("http://localhost:3001/update/" + id)
      .then(() => location.reload())
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) =>{
    axios
      .delete("http://localhost:3001/delete/" + id)
      .then(() => location.reload())
      .catch((err) => console.log(err));
  }

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
            <div className="checkbox" onClick={() => handleEdit(toDo._id)}>
              {toDo.done ? (
                <BsFillCheckCircleFill className="icon" />
              ) : (
                <BsCircleFill className="icon" />
              )}
              <p className={toDo.done ? "line_through" : ""}>{toDo.task}</p>
            </div>
            <div>
              <span>
                <BsFillTrashFill className="icon" onClick={(id)=> {handleDelete(toDo._id)}} />
              </span>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Home;
