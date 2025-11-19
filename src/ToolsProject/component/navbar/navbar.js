import { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { Globe, Moon, Sun } from "lucide-react";
import { useLanguage } from "./localizaion";
import { useDarkMode } from "./darkMode";

function ToolsNavbar() {
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const { t, changeLang, lang } = useLanguage();
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [isLogin , setIsLogin] = useState(false) ;
  const navigate = useNavigate() ;


  useEffect(() => {

    const storedUser = JSON.parse(localStorage.getItem("user"))
    setIsLogin(storedUser);

  }, []); 

   const handleLogout = () => {
    localStorage.clear("user");
    setIsLogin(false);
    navigate("/login-page");
  };

  return (
    <nav className={`w-full shadow-md fixed top-0 z-50 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="px-6 mx-auto lg:max-w-7xl flex items-center justify-between h-16">
        
         {/* سمت راست: نام سایت  */}
        <h1 className="text-xl md:text-2xl font-extrabold text-orange-600">
          {t.siteName}
        </h1>

        <ul className="hidden md:flex pl-2 mt-2 items-center mr-16 space-x-6">
          <li><NavLink to="/" className={`font-bold no-underline ml-4 ${darkMode ? 'text-blue-300 hover:text-orange-400' : 'text-blue-700 hover:text-orange-600'}`}>{t.home}</NavLink></li>
          <li><NavLink to="/port" className={`font-bold no-underline ${darkMode ? 'text-blue-300 hover:text-orange-400' : 'text-blue-700 hover:text-orange-600'}`}>{t.blog}</NavLink></li>
          <li><NavLink to="/buy-basket" className={`font-bold no-underline ${darkMode ? 'text-blue-300 hover:text-orange-400' : 'text-blue-700 hover:text-orange-600'}`}>{t.basket}</NavLink></li>
          <li><NavLink to="/order" className={`font-bold no-underline ${darkMode ? 'text-blue-300 hover:text-orange-400' : 'text-blue-700 hover:text-orange-600'}`}>{t.orders}</NavLink></li>
          <li><NavLink to="/create-page" className={`font-bold no-underline ${darkMode ? 'text-blue-300 hover:text-orange-400' : 'text-blue-700 hover:text-orange-600'}`}>{t.builder}</NavLink></li>
          <li><NavLink to="/about_us" className={`font-bold no-underline ${darkMode ? 'text-blue-300 hover:text-orange-400' : 'text-blue-700 hover:text-orange-600'}`}>{t.about}</NavLink></li>
        </ul>

       
               <div className="flex items-center space-x-4">

                   <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <Sun className={`w-6 h-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`} />
            ) : (
              <Moon className={`w-6 h-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`} />
            )}
          </button>

          {isLogin ? (
            <button
              onClick={handleLogout}
             >
              <Link to="/logout" className={`font-bold mr-4 border px-3 py-1 rounded-lg transition ${darkMode ? 'text-orange-400 border-orange-400 hover:bg-orange-900' : 'text-orange-600 border-orange-600 hover:bg-orange-50'}`}>
              {t.logout || "خروج"}
              </Link>
            </button>
          ) : (
            <Link
              to="/login-page"
              className={`font-bold border px-3 py-1 rounded-lg transition ${darkMode ? 'text-orange-400 border-orange-400 hover:bg-orange-900' : 'text-orange-600 border-orange-600 hover:bg-orange-50'}`}
            >
              {t.login || "ورود / ثبت‌نام"}
            </Link>
          )}
      
          <div className="relative">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className={`p-2 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
            >
              <Globe className={`w-6 h-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`} />
            </button>

            {langMenuOpen && (
              <div className={`absolute left-0 mt-2 w-32 border shadow-lg rounded-lg ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
                <button
                  onClick={() => changeLang("fa")}
                  className={`block w-full text-right px-4 py-2 ${lang === "fa" ? "font-bold" : ""} ${darkMode ? 'text-white hover:bg-gray-700' : 'text-gray-800 hover:bg-gray-100'}`}
                >
                  فارسی
                </button>
                <button
                  onClick={() => changeLang("en")}
                  className={`block w-full text-right px-4 py-2 ${lang === "en" ? "font-bold" : ""} ${darkMode ? 'text-white hover:bg-gray-700' : 'text-gray-800 hover:bg-gray-100'}`}
                >
                  English
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default ToolsNavbar;
