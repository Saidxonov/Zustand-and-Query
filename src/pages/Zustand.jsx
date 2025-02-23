import React from "react";
import { NavLink } from "react-router-dom";

function Zustand() {
  return (
    <div className="cont mt-[50px]">
      <h1 className="text-center text-6xl mt-[50px]">Zustand</h1>
      <div className="flex text-4xl gap-[100px] mt-[100px] ml-[350px]">
        <NavLink className="cursor-none" to="/zustand/counter">
          Counter
        </NavLink>
        <NavLink className="cursor-none" to="/zustand/todo">
          Todo
        </NavLink>
        <NavLink className="cursor-none" to="/pagination">
          Modal
        </NavLink>
        <NavLink className="cursor-none">Login/Logout</NavLink>
      </div>
    </div>
  );
}

export default Zustand;
