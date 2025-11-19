import { memo, useEffect, useMemo, useRef, useState } from "react";
import "./memo.css";

const Memo = () => {
  //     const [count , setCount] = useState(0) ;
  //     const [names , setNames] = useState("") ;
  //     let memoValue = useRef(2) ;

  //     const memorizeValue = useMemo(() => {

  //          return memoValue.current *= 2 ;

  //     } , [count])

  //     useEffect(() => {

  //          console.log("Memo Component Mount !" , memorizeValue)

  //         //  return(() => {

  //         //      console.log("Memo Component unmount!" , memorizeValue)

  //         //  })

  //     })

  // return(
  // <>

  //       <h1>{count}</h1>
  //       <button onClick={() => setCount(count + 1 )}>Increase</button><br />

  //       <input type="text" style={{background:"red"}} onChange={(e) => setNames(e.target.value)} />
  //       <h1>{names}</h1>

  // </>

  // )

  const [count, setCount] = useState(0);
  const [color, setColor] = useState(["orange", "green", "white", "black"]);
 

  useMemo(() => {
    if (count >= 5 && count <= 10) {
      setColor("orange");
    } else if (count >= 10 && count <= 15) {
      setColor("green");
    } else if (count >= 15) {
      setColor("black");
    } else {
      setColor("white");
    }
  }, [count]);

  return (
    <>
      <h1 className={color}>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click Me</button>

    </>
  );
}


export default Memo;
