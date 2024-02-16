import React from "react";
import Create from "./Create";
import { useState } from "react";

function Hook() {
  const [toDos, settoDos] = useState([]);

  return (
    <div>
      <h1>ToDo List</h1>
      <Create />
      {toDos.length === 0 ? (
        <div>
          <h2>No record</h2>
        </div>
      ) : (
        toDos.map((toDo) => {
          <div>{todo}</div>;
        })
      )}
    </div>
  );
}

export default Hook;
