
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "../../tools.css" ;
import ToolsNavbar from "../../component/navbar/navbar";
import { useLanguage } from "../../component/navbar/localizaion";
// Import global styles

function SignUp() {

  const {t} = useLanguage() ;
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    confirm: "",
    date: "",
  });
  const [errors, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (user) {
      // اگر یوزر قبلا ثبت نام گرده بود
      Swal.fire({
        title: "خطا",
        text: "یک کاربر قبلا راجستر شده است",
        icon: "error",
        confirmButtonText: "تایید",
      });

      navigate("/login-page");
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (
      form.email === "" ||
      form.name === "" ||
      form.lastname === "" ||
      form.password === "" ||
      form.confirm === ""
    ) {
      Swal.fire({
        title: "خطای رخ داد",
        text: "انپوت خالی مانده است",
        icon: "error",
        confirmButtonText: "تایید",
      });
      return;
    }

    if (
      !form.name ||
      !form.lastname ||
      !form.email ||
      !form.password ||
      !form.confirm
    ) {
      Swal.fire({
        title: "Error🧭",
        text: "Please fill the inputs",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    // validation Password
    if (form.password !== form.confirm) {
      Swal.fire({
        title: "Error🧭",
        text: "هر دو کود شما با هم مطابقت ندارد",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    // save to localStorage
    localStorage.setItem("user", JSON.stringify(form));
    setError("");
    Swal.fire({
      title: "ثبت نام موفق✅",
      text: "Information added successfully",
      icon: "success",
      confirmButtonText: "OK",
    }).then(() => {
      // بعد از ثبت نام موفق به خانه بره
      navigate("/login-page");
    });
  };

  return (

    <>

    <ToolsNavbar />
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="enhanced-card w-full max-w-md">
        <div className="enhanced-card-body">
          <h1 className="section-title !text-blue-700 !mb-6">{t.signupPage}</h1>
          
          {errors && <div className="text-red-500 mb-4">{errors}</div>}
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                {t.fName}
              </label>
              <input
                id="name"
                type="text"
                name="name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder={`${t.fName}`}
                value={form.name}
                onChange={handleChange}
              />
            </div>
            
            <div>
              <label htmlFor="lastname" className="block text-gray-700 font-medium mb-2">
                {t.lName}
              </label>
              <input
                id="lastname"
                type="text"
                name="lastname"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder={`${t.lName}`}
                value={form.lastname}
                onChange={handleChange}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                {t.email}
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
                placeholder={`${t.emailPlaceholder}`}
                value={form.email}
                onChange={handleChange}
              />
            </div>
            
            <div className="relative">
              <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                {t.password}
              </label>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-12"
                placeholder={`${t.password}`}
                onChange={handleChange}
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute left-3 top-10 cursor-pointer text-gray-500"
              >
                👁‍🗨
              </span>
            </div>
            
            <div className="relative">
              <label htmlFor="confirm" className="block text-gray-700 font-medium mb-2">
                {t.confirmPass}
              </label>
              <input
                id="confirm"
                type={showConfirmPassword ? "text" : "password"}
                name="confirm"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-12"
                placeholder={`${t.confirmPass}`}
                onChange={handleChange}
              />
              <span
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute left-3 top-10 cursor-pointer text-gray-500"
              >
                👁‍🗨
              </span>
            </div>
            
            <div>
              <label htmlFor="date" className="block text-gray-700 font-medium mb-2">
                {t.birthDate}
              </label>
              <input
                id="date"
                type="date"
                name="date"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onChange={handleChange}
              />
            </div>
            
            <button
              type="submit"
              className="w-full btn btn-primary py-3 mt-6"
            >
              {t.register}
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}

export default SignUp;