import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TodoFailure, TodoRequest, TodoSuccess } from "../Redux/actions";
import { POST_TODO_FAILURE, POST_TODO_REQUEST } from "../Redux/actionsType";

export const Todos = () => {
  const dispatch = useDispatch();
  const getTodos = () => {
    dispatch(TodoRequest());
    axios
      .get("https://17ff65.sse.codesandbox.io/todos")
      .then((res) => dispatch(TodoSuccess(res.data)))
      .catch(() => dispatch(TodoFailure()));

    setText("");
  };
  useEffect(() => {
    getTodos();
  }, []);

  const { todos, isLoading, isError } = useSelector((state) => {
    return {
      todos: state.AppReducer.todos,
      isLoading: state.AppReducer.isLoading,
      isError: state.AppReducer.isError
    };
  });

  const [text, setText] = useState("");
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (text) {
      const payload = {
        title: text,
        status: false
      };

      axios
        .post("https://17ff65.sse.codesandbox.io/todos", payload)
        .then(() => dispatch(getTodos()))
        .catch(() => null);
    }
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://17ff65.sse.codesandbox.io/todos/${id}`)
      .then(() => dispatch(getTodos()))
      .catch(() => null);
  };

  return isLoading ? (
    <div>..loading</div>
  ) : isError ? (
    <div>...Error</div>
  ) : (
    <>
      <div>
        <form onSubmit={handleOnSubmit}>
          <input
            className="input"
            type="text"
            placeholder="Add Something"
            onChange={(e) => setText(e.target.value)}
          />
          <button>+</button>
        </form>{" "}
        <br /> <br />
      </div>
      <div>
        {todos &&
          todos.map((d) => (
            <div
              key={d.id}
              style={{
                display: "flex",
                border: "1px solid maroon",
                backgroundColor: "brown",
                width: "400px",
                margin: "auto",
                marginTop: "10px",
                padding: "5px",
                borderRadius: "8px"
              }}
            >
              <div
                style={{
                  marginRight: "30px"
                }}
              >
                {d.title}
              </div>
              <div
                style={{
                  marginRight: "30px",
                  color: "white"
                }}
              >
                {d.status ? "✓" : "✘"}
              </div>
              <button
                style={{
                  marginRight: "30px"
                }}
                onClick={() => handleDelete(d.id)}
              >
                Delete
              </button>
              <button>
                <Link to={`/edit/${d.title}`}>Update</Link>
              </button>
            </div>
          ))}
      </div>
    </>
  );
};
