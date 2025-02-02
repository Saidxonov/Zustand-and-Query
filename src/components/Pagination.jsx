import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Pagination, CircularProgress } from "@mui/material";

const fetchUsers = async (page) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=5`
  );
  return data;
};

export default function MuiPaginatedUsers() {
  const [page, setPage] = useState(1);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["users", page],
    queryFn: () => fetchUsers(page),
    keepPreviousData: true,
  });

  console.log(data);

  if (isLoading)
    return (
      <CircularProgress sx={{ marginLeft: "750px", marginTop: "300px" }} />
    );
  if (isError)
    return (
      <h1 className="text-red-400 text-center text-4xl">
        Ma'lumotlarni olishda xatolik yuz berdi...
      </h1>
    );

  return (
    <div className="cont">
      <div className="flex items-center flex-wrap gap-[30px] mt-[50px]">
        {data.length > 0 &&
          data.map(function (value, index) {
            return (
              <div
                key={index}
                className="border-2 border-gray-300 w-full p-[10px] h-[100px]"
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
      <Pagination
        count={2}
        sx={{ marginTop: "50px", marginBottom: "50px" }}
        page={page}
        onChange={(event, value) => setPage(value)}
        color="primary"
      />
    </div>
  );
}
