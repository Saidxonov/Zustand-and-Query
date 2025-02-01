import React from "react";
import { NavLink } from "react-router-dom";

function RTK() {
  return (
    <div className="cont mt-[50px]">
      <h1 className="text-center text-6xl mt-[50px]">React Query</h1>
      <div className="flex text-4xl gap-[100px] mt-[100px] ml-[350px]">
        <NavLink to="/query">useQuery</NavLink>
        <NavLink to="/mutation">useMutation</NavLink>
        <NavLink to="/pagination">Pagination</NavLink>
      </div>
    </div>
  );
}

export default RTK;
