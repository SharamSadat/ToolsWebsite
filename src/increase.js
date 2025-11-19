import { useState } from "react"

function Increase() {

    // const [number , setNumber] = useState(0) ;

    // const clickHandler = () => {

    //      setNumber(number + 1) ;

    // }


    const [names , setNames] = useState(["football" , "  " , "volleyball" , "   " , "tennis" , "   "]) ;

    const changeState = () => {

        setNames([...names , "Cricket"]) 

    }

return(

 <>
 
      {/* <h2>{number}</h2>
      <button onClick={clickHandler}>Click Me</button> */}

      <h1>{names}</h1>
      <button onClick={changeState}>changeState</button>
 
 </>

)

}

export default Increase ;