import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../component/navbar/localizaion";

function TopSales() {
  const [topSales, setTopSales] = useState([]);
  const { t } = useLanguage();

  useEffect(() => {
    // گرفتن سفارشات از localStorage
    const orders = JSON.parse(localStorage.getItem("orders"));

    // فقط سفارشات Completed
    const completedOrders = orders ? orders.filter(o => o.status === "Completed") : [];

    // شمارش تعداد هر محصول
    const productCount = {};
    completedOrders.forEach(order => {
      if (!productCount[order.id]) {
        productCount[order.id] = { ...order, count: order.qty || 1 };
      } else {
        productCount[order.id].count += order.qty || 1;
      }
    });

    // فیلتر: فقط محصولاتی که بیشتر از 10 بار سفارش شدند

    const filtered = Object.values(productCount).filter(p => p.count >= 10);
    setTopSales(filtered);
  }, []);

  return (
    <div className="mt-12 px-6">
      {topSales.length === 0 ? (
        <p className="text-center font-semibold text-gray-500">
          {t.topSalesCount}
        </p>
      ) : (
        <div className="card-grid">
          {topSales.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.05 }}
              className="enhanced-card"
            >
              <img
                src={item.image}
                alt={item.title}
                className="enhanced-card-img"
              />
              <div className="enhanced-card-body">
                <h3 className="enhanced-card-title">{item.title}</h3>
                <p className="enhanced-card-text">شرکت: {item.company}</p>
                <div className="enhanced-card-price">قیمت: {item.price} افغانی</div>
                <p className="text-green-600 font-bold mt-3">
                  تعداد فروش: {item.count}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TopSales;