import { useState } from "react";
import "./calculator.css" ;

function Calculator() {

     let [result , setResult] = useState("") ;

     let [point , setPoint] = useState(false) ;

     let operetors = ["+" , "-" , "*" , "/"] ;

    let input ;

    const checkInput = (text) => {

       if(text == "÷") return "/" ;

       if(text == "×") return "*" ;

       return text ;

    }

    const clickHandler = (e) => {

         input  = checkInput(e.target.innerText) ;

         if(input == ".") {

           if(point == true) return

           else setPoint(true) ;

         }

         if(operetors.includes(input)) {

            setPoint(false) ;

         }

         setResult(result + input) ;

    }

    // Clear BTN 

    const clearHandler = () => {

        setResult(result.slice(0 , -1)) ;

    }

    // deleteBTN

        const deleteHandler = () => {

            setResult("") ;

        }

        //Equal BTN

    const equalHandler = () => {

        setResult(String(eval(result))) ;

        if(result.includes(".")) {

           setPoint(true) ;

        }
    }
    

return (

<>

<div className = "container">

<div className="screen">{result}</div>

<div className = "buttons">

<button className="span twocolor" onClick={deleteHandler}>Clear</button>
<button className="span" onClick={clearHandler}>C</button>
<button onClick={clickHandler}>÷</button>
<button onClick={clickHandler}>7</button>
<button onClick={clickHandler}>8</button>
<button onClick={clickHandler}>9</button>
<button onClick={clickHandler}>×</button>
<button onClick={clickHandler}>4</button>
<button onClick={clickHandler}>5</button>
<button onClick={clickHandler}>6</button>
<button onClick={clickHandler}>-</button>
<button onClick={clickHandler}>1</button>
<button onClick={clickHandler}>2</button>
<button onClick={clickHandler}>3</button>
<button onClick={clickHandler}>+</button>
<button className="span" onClick={clickHandler}>.</button>
<button onClick={clickHandler}>0</button>
<button className="span twocolor" onClick={equalHandler}>=</button>

</div>


</div>

</>

)

}

export default Calculator ;