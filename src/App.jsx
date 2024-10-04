import { useState } from "react";

const App = () => {
  const [task, settask] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(task);
  };
  return (
    <div className="bg-zinc-800 w-full h-screen items-center flex flex-col ">
      <div className="mt-[7%] w-[25%] h-[20%] border rounded-3xl flex justify-around items-center">
        <div className="text-yellow-200">
          <h1 className="text-3xl font-bold">LETS TODO</h1>
          <p>Keep Doing Things</p>
        </div>
        <div
          className="h-[110px] w-[110px] bg-orange-600 rounded-full text-black items-center
        flex justify-center text-4xl font-bold"
        >
          <h1>0/0</h1>
        </div>
      </div>

      <form
        onSubmit={submitHandler}
        className=" mt-4 my-[2%] w-[23%] flex justify-evenly"
      >
        <input
          className=" bg-zinc-300 outline-none w-full  rounded-xl h-[70px] px-5 py-3 "
          type="text"
          placeholder="write your next task"
          value={task}
          onChange={(e) => {
            settask(e.target.value);
          }}
        />
        <button className="font-bold text-[50px] text-orange-600 ml-4">
          <i class="ri-add-circle-fill"></i>
        </button>
      </form>

      <div>
        <h1 className="text-2xl font-bold text-yellow-100">No Task Found</h1>
      </div>
    </div>
  );
};

export default App;
