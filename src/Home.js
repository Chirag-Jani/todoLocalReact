import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

function Home() {
  // getting data from local storage
  const getLocalStorageData = () => {
    let todoList = localStorage.getItem("ToDo");
    if (todoList) {
      return JSON.parse(todoList);
    } else {
      return [];
    }
  };

  const [input, setinput] = useState("");
  const [currList, setCurrList] = useState(getLocalStorageData());

  // this will be called each time currList gets updated and it will update the localstorage
  useEffect(() => {
    localStorage.setItem("ToDo", JSON.stringify(currList));
  }, [currList]);

  // handling user input
  const handleInput = (e) => {
    setinput(e.target.value);
  };

  // adding to list
  const addTodo = (e) => {
    if (input !== "") {
      setCurrList([...currList, input]);
      setinput("");
    } else {
      alert("Please enter text.");
    }
    localStorage.setItem("ToDo", JSON.stringify(currList));
  };

  // deleting from list
  const removeTodo = (id) => {
    setCurrList((oldList) => {
      return oldList.filter((list, index) => {
        return index !== id;
      });
    });
    // first updating currList and then setting localstorage to the updated currList
    localStorage.setItem("ToDo", JSON.stringify(currList));
  };
  return (
    <div className="container">
      <h2 className="m-3">Your ToDo List</h2>
      <div className="inputSection">
        <input
          type="text"
          placeholder="Enter todo here!"
          className="mx-2 p-1 text-center"
          onChange={handleInput}
          value={input}
        />
        <input
          type="submit"
          onClick={addTodo}
          className="btn btn-primary"
          value="Add"
        />
      </div>
      <div>
        <h3 className="my-5">Your list items:</h3>
        {currList.map((item, index) => {
          return (
            <TodoItem
              id={index}
              item={item}
              key={index}
              removeTodo={removeTodo}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
