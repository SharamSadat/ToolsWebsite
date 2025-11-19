import { useState } from "react";
import "./MessageBox.css";

function MessageBox() {

  let [color , setColor] = useState("success") ;

  const clickHandler = () => {

     color == "success" ? setColor("failed") : setColor("success") ;

  }

  return (

    <>
      <div className={`messageBox ${color}`}>
       
    { color == "success" 

      ? "عملیه به درستی اجرا شد " 
      : "عملیه زیر ناموفق به پایان رسید "

}

      </div>

      <button onClick={clickHandler}>click me</button>
    </>
  )

}
export default MessageBox;
