import { useState } from "react";

import { useEffect } from "react";

import "./text.css";

function Text() {
  const [con, setCon] = useState(0);

  const [point, setPoint] = useState("");

  const Increase = () => {
    setCon(con + 1);
  };

  useEffect(() => {
    if (con > 5) setPoint("green");
  }, [con]);

  useEffect(() => {
    if (con > 20 )
                setPoint("orange");
  }, [con]);

  return (
    <>
      <h1 className={`screen ${point}`}>{con}</h1>

      <button onClick={Increase}>Increase</button>
    </>
  );
}

export default Text;
