import React, { useEffect, useState } from "react";
import "./TodoList.css";
export default function TodoList({ list, setList, darkMode }) {
  const [todoList, setTodoList] = useState([]);
  const [item, setAddItem] = useState(false);
  const [newTodo, setNewTodo] = useState({
    userId: 1,
    id: "",
    title: "",
    completed: false,
  });
  useEffect(() => {
    const filterList = list.filter((ele) => ele.completed === false);
    setTodoList([...filterList]);
  }, [list]);
  const handleDone = (doneId) => {
    let temp = [...list];
    for (let i = 0; i < temp.length && temp.length > 0; i++) {
      if (temp[i].id === doneId) {
        temp[i].completed = true;
      }
    }
    console.log(temp, doneId);
    setList([...temp]);
  };
  const handleChange = () => {
    if (item) {
      setAddItem(false);
    } else {
      setAddItem(true);
    }
  };
  const handleDelete = (deleteId) => {
    const filterList = list.filter((ele) => ele.id !== deleteId);
    setList([...filterList]);
  };
  const handleInput = (e) => {
    setNewTodo({ ...newTodo, id: list.length - 1, title: e.target.value });
  };
  const addToDoList = () => {
    if (newTodo.title.length > 0) {
      setList([...list, newTodo]);
      setNewTodo({
        userId: 1,
        id: "",
        title: "",
        completed: false,
      });
      setAddItem(false);
    } else {
      alert("Invalid Input");
    }
  };
  return (
    <div
      className="ListBox"
      style={{ border: darkMode ? "3px solid white " : "3px solid black" }}
    >
      <h1>todo</h1>
      <ul style={{ listStyle: "none" }}>
        {todoList.map((ele, index) => (
          <div className="listItem" key={ele.id}>
            <h4>{index + 1}.</h4>
            <li>{ele.title}</li>
            <div className="ButtonBox">
              <button id="green" onClick={() => handleDone(ele.id)}>
                done
              </button>
              <button id="red" onClick={() => handleDelete(ele.id)}>
                delete
              </button>
            </div>
          </div>
        ))}
      </ul>
      {item ? (
        <div style={{ padding: "15px" }}>
          <input
            type="text"
            onChange={handleInput}
            style={{
              border: "none",
              padding: "5px",
              fontSize: "15px",
            }}
          />
          <button
            type="submit"
            onClick={addToDoList}
            style={{
              border: "none",
              padding: "5px",
              backgroundColor: "green",
              fontSize: "15px",
              cursor: "pointer",
            }}
          >
            {" "}
            Add{" "}
          </button>
        </div>
      ) : (
        <h3
          onClick={handleChange}
          style={{ cursor: "pointer", padding: "15px" }}
        >
          +Item
        </h3>
      )}
    </div>
  );
}
