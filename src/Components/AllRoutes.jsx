import React from "react";
import { Routes, Route } from "react-router-dom";
import { Edit } from "./Edit";
import { Todos } from "./Todos";

export const AllRoutes = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Todos />} />
          <Route path="/edit/:title" element={<Edit />} />
        </Routes>
      </div>
    </>
  );
};
