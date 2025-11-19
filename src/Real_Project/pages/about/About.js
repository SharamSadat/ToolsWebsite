import "./About.css";
import MyNavbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios" ;

function About() {
  const [buttonClick, setButtonClick] = useState("");
  const [send, setSend] = useState(true);

  const options = useEffect(() => {

    axios.post("http://localhost:3000" , send) 
    
  })

  const submitHandler = (e) => {

    if (send !== 200) {
  
      setSend(e.target.value)
      Swal.fire({
        title: "Error🧭",
        text: "در خواست شما ناموفق بود ",
        icon: "error",
        confirmButtonText: "تایید",
      });
     
    } else {
      setSend(e.target.value)
      Swal.fire({
        title: "Success🤴",
        text: "در خواست شما با موفقیت ارسال شد",
        icon: "success",
        confirmButtonText: "تایید",
      })
     }
      

    }

    

  const cancelHandler = (e) => {
    setButtonClick("");
  };

  return (
    <>
      <MyNavbar />

      <h1 className="Title">به بخش مطالعه در مورد سایت ما خوش آمدید !</h1>

      <div className="all">
        <Link className="Link" to="./teachInfo">
          ورود به بخش اساتید
        </Link>

        <Link className="Link" to="./site">
          جزییات سایت
        </Link>

        <form>
          <div className="report">
            <h1>Report Part</h1>
            <textarea
              name="about"
              value={buttonClick}
              onChange={(e) => setButtonClick(e.target.value)}
              cols="30"
              rows="10"
              placeholder="نظریات تان را با ما در میان بگذارید ! "
            />
          </div>

          <div className="done">
            <button type="button" className="confirm" onClick={submitHandler}>
              Submit
            </button>
            <button type="button" className="cancel" onClick={cancelHandler}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default About;
