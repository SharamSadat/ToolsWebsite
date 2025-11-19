import { useState } from "react";
import MyNavbar from "../../components/navbar/Navbar";
import Swal from "sweetalert2";

import "./Login.css";
import { useNavigate } from "react-router-dom";
import { isLogin } from "../../Login1";

function Login() {

   const [username , setUsername] = useState("") ;

   const [password , setPassword] = useState("") ;

   const navigate = useNavigate() ;

   const submitHandler = () => {

      if(username == "Admin" && password == "123") {

        document.cookie = "username = Admin ; expires = Fri , 20 March 2025 12:00:00 UTC ; path=/" ;

        navigate("/panel") ;
        

       Swal.fire({

       
       title : "خوش آمدید!" , 
       text : "اجرا با موفقیت انجام شد " ,
       icon : "success" , 
       confirmButtonText : "تایید"

       })  

      }

      else{

           Swal.fire({ 

              title : "خطا!" ,
              text : "یوزر نیم یا پسورد اشتباه است !" ,
              icon : "error" ,
              confirmButtonText : "تایید" 

           })

      }

   }

  return (
    <>
      <MyNavbar />

      <form dir="rtl" className="login">
        <h1 className="safha">فورم ورود به سایت </h1>
        <table>
          <tr>
            <td>نام کاربردی : </td>
            <td>
              <input onChange={ (e) => setUsername(e.target.value) } type="text" placeholder="نام کاربردی" />
            </td>
            <br />
          </tr>

          <tr>
            <td>گذرواژه : </td>
            <td>
              <input onChange={ (e) => setPassword(e.target.value) } type="password" placeholder="گذرواژه" />
            </td>
          </tr>
        </table>

        <input type="button" onClick={submitHandler} value="ورود" className="log" />

        <p className="create">
          ایجاد حساب جدید<a href="create.js">Create Account</a>
        </p>
      </form>
    </>
  );
}
export default Login;
