import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const createPost = async (newPost) => {
  const response = await axios.post(
    "https://jsonplaceholder.typicode.com/users",
    newPost
  );
  return response.data;
};

const Mutation = () => {
  const mutation = useMutation({
    mutationFn: createPost,
    onSuccess: (data) => {
      console.log("Post muvaffaqiyatli yuborildi:", data);
    },
    onError: (error) => {
      console.error("Xatolik yuz berdi:", error);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      title: "Saidburxon Jo'rayev",
      content: "Frontend Web Developer",
    };

    mutation.mutate(newPost);
  };

  return (
    <div className="cont">
      <h1 className="text-center text-6xl">Mutation</h1>
      <form onSubmit={handleSubmit}>
        {!mutation.isSuccess && (
          <button
            type="submit"
            className="cursor-pointer text-center text-6xl hover:bg-gray-200 transition p-[10px] rounded-md mt-[100px]"
            disabled={mutation.isPending}
          >
            {mutation.isPending ? "Yuklanmoqda..." : "Yuborish"}
          </button>
        )}
      </form>

      {mutation.isError && (
        <div>Xatolik yuz berdi: {mutation.error.message}</div>
      )}

      {mutation.isSuccess && (
        <h2 className="text-6xl mt-[100px]">Post muvaffaqiyatli yuborildi!</h2>
      )}
    </div>
  );
};

export default Mutation;
