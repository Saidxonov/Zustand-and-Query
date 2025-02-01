import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

function Query() {
  function getUsers() {
    return axios.get("https://jsonplaceholder.typicode.com/users");
  }

  const { data, isLoading, isError } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  console.log(data?.data);
  return (
    <div className="cont">
      <h1 className="text-center text-6xl">
        {isLoading ? "Loading..." : "Query"}
      </h1>
      {isError && (
        <h2 className="text-red-600 text-center text-2xl mt-[20px]">
          Xatolik yuz berdi
        </h2>
      )}
      <div className="flex items-center flex-wrap gap-[30px] mt-[50px]">
        {data?.data.length > 0 &&
          data.data.map(function (value, index) {
            return (
              <div
                key={index}
                className="border-2 border-gray-300 w-[300px] p-[10px] h-[100px]"
              >
                <div className="name truncate">
                  <h3>🌎 {value.name}</h3>
                </div>
                <div className="truncate">
                  <h2>🔴 {value.email} </h2>
                </div>
                <div className="truncate">
                  <h2>💢 {value.username}</h2>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Query;
