import { useState } from "react";
import "./Calculator.css";
import { evaluate } from "mathjs";

function Calculator() {
  const [result, setResult] = useState("");
  const [point, setPoint] = useState(false);
  let operations = ["+", "-", "×", "÷"];

  const checkInput = (text) => {
    if (text == "×") return "*";
    if (text == "÷") return "/";

    return text;
  };

  const clickHandler = (e) => {
    let input = checkInput(e.target.innerText);

    if (input == ".") {
      if (point == true) return;
      else setPoint(true);
    }

    if (operations.includes(input)) {
      setPoint(false);
    }

    setResult(result + input);
  };

  const clearHandler = () => {
    setResult("");
    setPoint(false);
  };

  const deletebtn = () => {

    
    setResult(result.slice(0, -1));

    if(result.endsWith(".")) {
   
      setPoint(false)
             
  
      }
  };

  const equalBtn = () => {
    setResult(evaluate(result));
    setPoint(false);
  };

  return (
    <div className="container font-bold">
      <div className="screen">{result}</div>

      <div className="buttons">
        <button onClick={clearHandler} className="color twocolor">
          Clear
        </button>
        <button onClick={deletebtn} className="color">
          C
        </button>
        <button onClick={clickHandler} className="color">
          ÷
        </button>
        <button onClick={clickHandler}>7</button>
        <button onClick={clickHandler}>8</button>
        <button onClick={clickHandler}>9</button>
        <button onClick={clickHandler} className="color">
          ×
        </button>
        <button onClick={clickHandler}>4</button>
        <button onClick={clickHandler}>5</button>
        <button onClick={clickHandler}>6</button>
        <button onClick={clickHandler} className="color">
          -
        </button>
        <button onClick={clickHandler}>1</button>
        <button onClick={clickHandler}>2</button>
        <button onClick={clickHandler}>3</button>
        <button onClick={clickHandler} className="color">
          +
        </button>
        <button onClick={clickHandler}>0</button>
        <button onClick={clickHandler}>.</button>
        <button onClick={equalBtn} className="color twocolor">
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
