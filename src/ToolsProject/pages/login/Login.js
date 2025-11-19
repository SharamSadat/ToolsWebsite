import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import ToolsNavbar from "../../component/navbar/navbar";
import "../../tools.css"; // Import global styles
import { useLanguage } from "../../component/navbar/localizaion";

function Login({ onLogin }) {

  const {t} = useLanguage() ;
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const storedUser = JSON.parse(localStorage.getItem("user"));

  const handleLogin = () => {
    if (storedUser && storedUser.name === userName && storedUser.password === password) {
      localStorage.setItem("isLoginIn", "true");
   
      navigate("/");
    } else {
      Swal.fire({
        title: "خطای رخ داد",
        text: "نام کاربری یا رمز عبور اشتباه است",
        icon: "error",
        confirmButtonText: "تایید",
      });
    }
  };

  return (
    <>
      <ToolsNavbar />
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="enhanced-card w-full max-w-md">
          <div className="enhanced-card-body">
            <h1 className="section-title !text-blue-700 !mb-8">{t.LoginPage}</h1>
            
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700 font-medium mb-2">
                {t.fullName}
              </label>
              <input
                id="username"
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder={`${t.fullName}`}
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                {t.password}
              </label>
              <input
                id="password"
                type="password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={`${t.password}`}
              />
            </div>
            
            <button
              onClick={handleLogin}
              className="w-full btn btn-primary py-3 mb-4"
            >
             {t.loginTitle}
            </button>
            
            <div className="text-center mt-4">
              <p className="text-gray-600 text-sm">
                {t.notAccount}
              </p>
              <Link
                to="/signup"
                className="text-blue-600 hover:text-blue-800 font-medium mt-2 inline-block"
              >
                {t.register}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;