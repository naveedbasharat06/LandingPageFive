import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./counterSlice";
import { RootState } from "./store";

function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-center py-6 bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Redux Counter
        </h1>

        <div className="flex items-center justify-between mb-6">
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full transition duration-200 ease-in-out transform hover:scale-105"
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            -
          </button>

          <span className="text-3xl font-semibold mx-4 min-w-[50px] text-center">
            {count}
          </span>

          <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition duration-200 ease-in-out transform hover:scale-105"
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            +
          </button>
        </div>

        <button
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          Add 5
        </button>

        <div className="mt-4 text-sm text-gray-500 text-center">
          <p>Redux state management with Tailwind CSS</p>
        </div>
      </div>
    </div>
  );
}

export default Counter;
