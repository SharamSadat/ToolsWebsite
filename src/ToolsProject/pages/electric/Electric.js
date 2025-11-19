import ToolsNavbar from "../../component/navbar/navbar";
import ToolsFooter from "../../component/footer/toolsFooter";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../tools.css"; // Import global styles
import { useLanguage } from "../../component/navbar/localizaion";
import { useDarkMode } from "../../component/navbar/darkMode";

function Electric() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("items")) || [];
    const filtered = stored.filter((item) => item.category === "electronic");
    setItems(filtered);
  }, []);

  const {t} = useLanguage() ;
  const { darkMode } = useDarkMode();

  return (
    <>
      <ToolsNavbar />
      <h1 className={`section-title relative top-12 mt-24 ${darkMode ? '!text-orange-400' : '!text-orange-500'}`}>{t.electric}</h1>

      <div className="card-grid">
        {items.length > 0 ? (
          items.map((item) => (
            <div key={item.id} className={`enhanced-card ${darkMode ? 'dark-mode' : ''}`}>
              <img 
                src={item.image} 
                alt={item.title} 
                className="enhanced-card-img"
              />
              <div className="enhanced-card-body">
                <h3 className={`enhanced-card-title ${darkMode ? 'dark-mode' : ''}`}>{t.toolName} : {item.title}</h3>
                <p className={`enhanced-card-text ${darkMode ? 'dark-mode' : ''}`}>{t.company} : {item.company}</p>
                <div className={`enhanced-card-price ${darkMode ? 'dark-mode' : ''}`}>{t.cost} : {item.price} {t.afghani}</div>
                <Link 
                  className={`btn btn-primary ${darkMode ? 'dark-mode' : ''}`}
                  to={`/elec-info-more/${item.id}`}
                >
                  {t.KnownMore}
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className={`text-center text-xl col-span-full py-12 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            {t.nothingExist}
          </p>
        )}
      </div>

      <ToolsFooter />
    </>
  );
}

export default Electric;