import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const Edit = () => {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const params = useParams();
  const updateTodo = (e) => {
    e.preventDefault();
    if (text) {
      const payload = {
        title: text,
        status: true
      };
      axios
        .put(`https://17ff65.sse.codesandbox.io/todos/${params.title}`, payload)
        .then(() => {
          alert("Data updated");
          navigate("/");
        })
        .catch(() => null);
    } else {
      alert("Please Enter Data To Change");
    }
  };
  useEffect(() => {}, []);

  return (
    <>
      <div>Edit</div>
      <form onSubmit={updateTodo}>
        <input
          type="text"
          placeholder="Enter Updated Title"
          onChange={(e) => setText(e.target.value)}
        />
        <button>Update</button>
      </form>
    </>
  );
};
