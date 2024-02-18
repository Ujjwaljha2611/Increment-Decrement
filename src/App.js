import "./App.css";
import { useState } from "react";

function App() {

  const [count, setCount] = useState(0);

  function decreaseHandler(){
    setCount(count-1);
  }

  function increaseHandler(){
    setCount(count+1);
  }

  function resetHandler(){
    setCount(0);
  }

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center flex-col gap-10 bg-[#344151]">
      <div className="text-[#0398d4] text-2xl font-medium"> Increment and Decrement </div>
      <div className="bg-white gap-12 justify-center flex py-3 rounded-sm text-[25px] text-[#344151] ">
        <button onClick={decreaseHandler} className="flex border-r-2 text-center justify-center items-center w-20 border-[#bfbfbf] text-5xl m-t-0">-</button>  {/*made flex to put in center */}
        <div className="flex justify-center items-center text-center">{count}</div>
        <button onClick={increaseHandler} className="flex justify-center items-center border-l-2 text-center w-20 border-[#bfbfbf] text-5xl">+</button>
      </div>
      <button onClick={resetHandler} className="bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg ">Reset</button>
    </div>
  );
}

export default App;
