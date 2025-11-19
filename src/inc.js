import { useEffect, useState } from "react";
import "./inc.css";
import { number } from "mathjs";
import ButtonClick from "./inc2";

function Inc() {

  const[numbers , setNumbers] = useState(0)

  const incHandler = () => {

       setNumbers(numbers+1)

  }

  const decHandler = () => {

setNumbers(numbers - 1)
  }

  const resetHandler = () => {

  setNumbers(0)

  }

  return (

    <>

        <h1>{numbers}</h1>

        {numbers > 0 && <ButtonClick text="decrease" clickHandler = {decHandler} />}

         <ButtonClick text="increase" clickHandler={incHandler} />
        
        {numbers > 0 && <ButtonClick text="reset" clickHandler={resetHandler} />}

    </>

  );
}

export default Inc;
