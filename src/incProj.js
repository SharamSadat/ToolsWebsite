import { useState } from "react";

function IncProj() {
  const [num, setNum] = useState(0);

  const incHandler = () => {
    setNum(num + 1);
  };

  const decHandler = () => {
    setNum(num - 1);
  };

  const resetHandler = () => {
    setNum(0);
  };

  return (
    <>
      <h1 className="font-bold text-[50px] text-center mt-8">{num}</h1>
      <hr />

      <div className="text-center">
        
        {num > 0 && <button
          className="pr-4 bg-red-600 text-white font-bold"
          onClick={decHandler}
        >
          Decrease
        </button>}

        <button
          className="pr-4 bg-green-600 text-white font-bold"
          onClick={incHandler}
        >
          Increase
        </button>

        {num > 0 && <button
          className="bg-blue-600 text-white font-bold"
          onClick={resetHandler}
        >
          Reset
        </button>}

      </div>
    </>
  );
}

export default IncProj;
