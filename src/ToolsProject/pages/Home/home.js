import AddVideo from "../../component/addvideo/addVideo";
import ToolsFooter from "../../component/footer/toolsFooter";
import ToolsNavbar from "../../component/navbar/navbar";
import ToolsInfo from "../toolInfo/toolnfo";
import TopSales from "../topsales/Topsales";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../component/navbar/localizaion";
import { useDarkMode } from "../../component/navbar/darkMode";
import { FaBolt, FaTools } from "react-icons/fa";
import HeroTextAnimation from "../toolInfo/picBack";
import "../toolInfo/toolInfo.css"; // Import the CSS for styling

function ToolsHome({ setItems, items }) {
  const { t } = useLanguage();
  const { darkMode } = useDarkMode();
  const navigate = useNavigate();

  useEffect(() => {
    const isLoginIn = localStorage.getItem("isLoginIn");
    if (!isLoginIn) {
      navigate("/login-page");
    }
  }, [navigate]);

  const handleDelete = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
    localStorage.setItem("items", JSON.stringify(items));
  };

  const editHandler = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <>
      <ToolsNavbar />

      <div className={darkMode ? 'dark-mode' : ''}>
        <HeroTextAnimation />
      </div>

      <div className={darkMode ? 'dark-mode' : ''}>
        <ToolsInfo />
      </div>

      <motion.div
        className="mt-32 flex gap-8 justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`flex items-center gap-2 px-6 py-3 rounded-2xl shadow-md transition-all ${
            darkMode 
              ? 'bg-orange-900 hover:bg-orange-800' 
              : 'bg-orange-100 hover:bg-orange-200'
          }`}
        >
          <FaBolt color={darkMode ? "orange" : "orange"} />
          <Link 
            className={`font-bold ${darkMode ? 'text-orange-200 hover:text-orange-100' : 'hover:text-orange-600'}`} 
            to="/electric"
          >
            {t.electric}
          </Link>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`flex items-center gap-2 px-6 py-3 rounded-2xl shadow-md transition-all ${
            darkMode 
              ? 'bg-green-900 hover:bg-green-800' 
              : 'bg-green-100 hover:bg-green-200'
          }`}
        >
          <FaTools color={darkMode ? "green" : "green"} />
          <Link 
            className={`font-bold ${darkMode ? 'text-green-200 hover:text-green-100' : 'hover:text-green-600'}`} 
            to="/nonelectric"
          >
            {t.no_electric}
          </Link>
        </motion.button>
      </motion.div>

      <h2 className={`section-title ${darkMode ? 'dark-mode' : ''}`}>{t.hometitle}</h2>

      <div className="card-grid">
        {items.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className={`enhanced-card ${darkMode ? 'dark-mode' : ''}`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="enhanced-card-img"
            />
            <div className="enhanced-card-body">
              <h3 className={`enhanced-card-title ${darkMode ? 'dark-mode' : ''}`}>{item.title}</h3>
              <p className={`enhanced-card-price ${darkMode ? 'dark-mode' : ''}`}>{item.price} AF</p>
              <p className={`enhanced-card-text ${darkMode ? 'dark-mode' : ''}`}>{item.company}</p>
              
              <div className={`enhanced-card-footer ${darkMode ? 'dark-mode' : ''}`}>
                <button
                  onClick={() => editHandler(item.id)}
                  className={`btn btn-warning ${darkMode ? 'dark-mode' : ''}`}
                >
                  {t.edit || "ویرایش"}
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className={`btn btn-danger ${darkMode ? 'dark-mode' : ''}`}
                >
                  {t.delete || "حذف"}
                </button>
              </div>
              
              <Link
                className={`btn btn-outline mt-3 ${darkMode ? 'dark-mode' : ''}`}
                to={item.category === "electronic" ? `/elec-info-more/${item.id}` : `/nonelecinfoMore/${item.id}`}
              >
                {t.KnownMore}
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <h2 className={`section-title ${darkMode ? 'dark-mode' : ''}`}>{t.topSales || "پر فروش ترین ها"}</h2>
      <div className={darkMode ? 'dark-mode' : ''}>
        <TopSales />
      </div>
      
      <div className={darkMode ? 'dark-mode' : ''}>
        <AddVideo />
      </div>
      <div className={darkMode ? 'dark-mode' : ''}>
        <ToolsFooter />
      </div>
    </>
  );
}

export default ToolsHome;