import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ToolsNavbar from "../../../component/navbar/navbar";
import { useLanguage } from "../../../component/navbar/localizaion";
import { useDarkMode } from "../../../component/navbar/darkMode";

function BuyBasket() {

  const {t} = useLanguage() ;
  const { darkMode } = useDarkMode();

  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const storedBasket = JSON.parse(localStorage.getItem("basket")) || [];
    setBasket(storedBasket);
  }, []);

  useEffect(() => {
    const newTotal = basket.reduce(
      (sum, item) => sum + Number(item.price) * Number(item.qty || 1),
      0
    );
    setTotal(newTotal);
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);


  const increaseQty = (index) => {
    const updated = [...basket];
    updated[index].qty = (updated[index].qty || 1) + 1;
    setBasket(updated);
  };

  const decreaseQty = (index) => {
    const updated = [...basket];
    if (updated[index].qty > 1) {
      updated[index].qty -= 1;
      setBasket(updated);
    }
  };

  const handleDeliver = (index) => {
    const item = basket[index];
    if (!item) return;

    // سفارش جدید
    const newOrder = {
      id: Date.now(),
      ...item,
      status: "Pending",
      date: new Date().toLocaleString(),
    };

    // خواندن سفارشات قبلی
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];

    // افزودن سفارش جدید
    localStorage.setItem("orders", JSON.stringify([...storedOrders, newOrder]));

    // حذف آیتم از سبد خرید
    const updatedBasket = basket.filter((_, i) => i !== index);
    setBasket(updatedBasket);
    localStorage.setItem("basket", JSON.stringify(updatedBasket));

    alert("سفارش شما ثبت شد و در حالت Pending قرار گرفت");

  };

  const backButton = () => {

           navigate("/") ;

  }

  return (
    <>

    <ToolsNavbar />
    
    <div className={`max-w-3xl mx-auto mt-20 p-4 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      
      <h2 className={`text-center text-3xl font-bold mb-8 ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>
        {t.basket}
      </h2>

      {basket.length === 0 ? ( 
        <div>
        <p className={`text-center text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          {t.emptyBasket}
        </p>

          <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={backButton}
                className={`mt-6 px-6 w-max mx-[285px] py-2 font-semibold rounded-lg shadow-md ${
                  darkMode 
                    ? 'bg-blue-700 text-white hover:bg-blue-600' 
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {t.backToHome}
              </motion.button>
        </div>
    
      ) : (
        <div className="space-y-4">
          {basket.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className={`shadow-lg rounded-lg p-4 flex justify-between items-center ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              <div>
                <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{item.title}</h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {t.costOfOne} : {item.price} {t.afghani}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => decreaseQty(index)}
                    className={`px-3 py-1 rounded ${
                      darkMode 
                        ? 'bg-red-600 text-white hover:bg-red-700' 
                        : 'bg-red-500 text-white hover:bg-red-600'
                    }`}
                  >
                    -
                  </button>
                  <span className={darkMode ? 'text-white' : 'text-gray-900'}>{item.qty || 1}</span>
                  <button
                    onClick={() => increaseQty(index)}
                    className={`px-3 py-1 rounded ${
                      darkMode 
                        ? 'bg-green-600 text-white hover:bg-green-700' 
                        : 'bg-green-500 text-white hover:bg-green-600'
                    }`}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <p className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {t.totalCost} {(item.qty || 1) * item.price} {t.afghani}
                </p>
                <button
                  onClick={() => handleDeliver(index)}
                  className={`px-4 py-2 rounded-lg ${
                    darkMode 
                      ? 'bg-green-700 text-white hover:bg-green-600' 
                      : 'bg-green-700 text-white hover:bg-green-800'
                  }`}
                >
                  {t.ordinary}
                </button>
              </div>
            </motion.div>
          ))}

          <div className={`rounded-lg p-4 text-center ${darkMode ? 'bg-blue-900 text-white' : 'bg-blue-100'}`}>
            <h3 className="text-lg font-bold">{t.totalPrice} {total} {t.afghani}</h3>
          </div>
        </div>
      )}
    </div>

    </>
  );
}

export default BuyBasket;