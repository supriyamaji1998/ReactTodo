import React, { useEffect, useState } from "react";

export default function DoneList({ list, setList, darkMode }) {
  const [todoList, setTodoList] = useState([]);
  useEffect(() => {
    const filterList = list.filter((ele) => ele.completed === true);
    setTodoList([...filterList]);
  }, [list]);
  const handleTodo = (doneId) => {
    let temp = [...list];
    for (let i = 0; i < temp.length && temp.length > 0; i++) {
      if (temp[i].id === doneId) {
        temp[i].completed = false;
      }
    }
    console.log(temp, doneId);
    setList([...temp]);
  };
  const handleDelete = (deleteId) => {
    const filterList = list.filter((ele) => ele.id !== deleteId);
    setList([...filterList]);
  };
  return (
    <div
      className="ListBox"
      style={{ border: darkMode ? "3px solid white " : "3px solid black" }}
    >
      <h1>done</h1>
      <ul style={{ listStyle: "none" }}>
        {todoList.map((ele, index) => (
          <div className="listItem" key={ele.id}>
            <h4>{index + 1}.</h4>
            <li>{ele.title}</li>
            <div className="ButtonBox">
              <button id="green" onClick={() => handleTodo(ele.id)}>
                Todo
              </button>
              <button id="red" onClick={() => handleDelete(ele.id)}>
                delete
              </button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}
