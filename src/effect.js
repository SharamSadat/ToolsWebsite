import { useState } from "react";
import "./effect.css";

function Effect() {
  const [Change , setChange] = useState("success");

  const clickHandler = () => {

   Change == "success" ? setChange("failed") : setChange("success") ;

  };

  return (
    <>
     <div className={`container ${Change}`}>

{Change == "success" ? "پرداخت شما موفقیت آمیز بود" : " پرداخت شما موفقیت آمیز نبود"}

     </div>

       <button onClick={clickHandler}>Click Me</button>
    </>
  );
}
export default Effect;
