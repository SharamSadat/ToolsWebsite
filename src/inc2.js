import { useEffect, useState } from "react";

function ButtonClick() {
  const [numbers, setNumbers] = useState(0);
  const [state, setState] = useState([]);

  useEffect(() => {
    console.log("App => mount");
  });

  return (
    <>
      <h1>{numbers}</h1>
      <button onClick={() => setNumbers(numbers + 1)}>Increase</button>
      <br />

      <hr />

      <input
        type="text"
        style={{ border: "2px solid gray", marginLeft: "12px" }}
        onChange={(e) => setState(e.target.value)}
      />
      <br />
      <br />
      <h1 style={{marginLeft:"12px"}}>Input Value : {state}</h1>
    </>
  );
}

export default ButtonClick;
