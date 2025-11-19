import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ToolsNavbar from "../../../component/navbar/navbar";
import Swal from "sweetalert2";
import { useLanguage } from "../../../component/navbar/localizaion";
import { useDarkMode } from "../../../component/navbar/darkMode";

function Order() {

  const {t} = useLanguage() ;
  const { darkMode } = useDarkMode();

  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  const updateStatus = (id, newStatus) => {
    const updatedOrders = orders.map((order) =>
      order.id === id ? { ...order, status: newStatus } : order 
    );
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  const backButton = () => {
    navigate("/");

  };

  const pendingOrders = orders.filter((o) => o.status === "Pending");
  const completedOrders = orders.filter((o) => o.status === "Completed");


  return (

    <>
    
      <ToolsNavbar />
   
    <div className={`flex flex-col items-center mt-20 px-4 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`text-3xl font-bold mb-6 ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}
      >
        {t.orderItem}
      </motion.h2>

      {orders.length === 0 ? (
        <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          {t.emptyOrders}
        </p>
      ) : (
        <div className="w-full max-w-2xl space-y-6">
          
          {pendingOrders.map((order) => (
            <motion.div
              key={order.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`shadow-lg rounded-xl p-4 text-center ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
            >
              <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{order.title}</h3>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                {t.cost} {order.price}  {t.afghani} | {t.numbers} {order.qty}
              </p>
              <p className={darkMode ? 'text-gray-400' : 'text-gray-500'}>{t.orderDate} {order.date}</p>
              <p className="text-yellow-600 font-bold">{t.orderStatus} : {t.pending}</p>

              <button
                onClick={() => updateStatus(order.id, "Completed")}
                className={`mt-3 px-4 py-2 font-semibold rounded-lg ${
                  darkMode 
                    ? 'bg-green-700 text-white hover:bg-green-600' 
                    : 'bg-green-600 text-white hover:bg-green-700'
                }`}
              >
                 
                 {t.changeToCompleted}

              </button>
            </motion.div>
          ))}

          {/* Completed Orders */}
          {completedOrders.map((order) => (
            <motion.div
              key={order.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`shadow-md rounded-xl p-4 text-center line-through ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}
            >
              <h3 className={`text-lg font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>{order.title}</h3>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                {t.cost} {order.price} {t.afghani} | {t.numbers} {order.qty}
              </p>
              <p className={darkMode ? 'text-gray-400' : 'text-gray-500'}>{t.orderDate} {order.date}</p>
              <p className="text-green-600 font-bold">{t.changeToCompleted}</p>
          
            </motion.div>
          ))}
        </div>

      ) }

      <motion.button
        whileHover={{ scale: 1.05 }}
        onClick={backButton}
        className={`mt-6 px-6 py-2 font-semibold rounded-lg shadow-md ${
          darkMode 
            ? 'bg-blue-700 text-white hover:bg-blue-600' 
            : 'bg-blue-600 text-white hover:bg-blue-700'
        }`}
      >
        {t.backToHome}
      </motion.button>
    </div>
     </>
  );
}

export default Order;