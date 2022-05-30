import React from "react";

function TodoItem(props) {
  return (
    <div className="d-flex align-middle m-4">
      <button
        className="btn btn-danger mx-5"
        onClick={() => {
          props.removeTodo(props.id);
        }}
      >
        X
      </button>
      <p>{props.item}</p>
    </div>
  );
}

export default TodoItem;
