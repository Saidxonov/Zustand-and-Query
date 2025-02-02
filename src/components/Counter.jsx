import { useCounterStore } from "../store/useCounterStore";

function Counter() {
  const { counter, increment, decrement } = useCounterStore();
  return (
    <div className="cont">
      <h1 className="text-center font-mono text-[200px] mt-[50px]">
        {counter}
      </h1>
      <div className="flex flex-wrap items-center gap-[50px] justify-center">
        <button
          className="select-none text-center cursor-pointer text-4xl"
          onClick={increment}
        >
          increment
        </button>
        <button
          className="select-none text-center cursor-pointer text-4xl"
          onClick={decrement}
        >
          decrement
        </button>
      </div>
    </div>
  );
}

export default Counter;
