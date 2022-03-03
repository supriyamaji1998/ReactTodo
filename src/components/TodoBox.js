import React, { useEffect, useState } from "react";
import DoneList from "./DoneList";
import TodoList from "./TodoList";
import "./TodoBox.css";
import axios from "axios";
export default function TodoBox() {
  const [list, setList] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/1/todos")
      .then((res) => {
        setList(res.data);
        // console.log(res.data);
      });
  }, []);
  const ToogleMode = () => {
    if (darkMode) {
      setDarkMode(false);
    } else {
      setDarkMode(true);
    }
  };
  console.log(darkMode);
  return (
    <div style={{ backgroundColor: darkMode ? "black" : "aqua" }}>
      {" "}
      <label
        class="switch"
        style={{ backgroundColor: darkMode ? "black" : "aqua" }}
      >
        <input type="checkbox" onClick={ToogleMode} />
        <span class="slider round"></span>
      </label>
      <div
        className="TodoBox"
        style={{
          backgroundColor: darkMode ? "black" : "aqua",
          color: darkMode ? "white" : "black",
        }}
      >
        <TodoList list={list} setList={setList} darkMode={darkMode} />
        <DoneList list={list} setList={setList} darkMode={darkMode} />
      </div>
    </div>
  );
}
