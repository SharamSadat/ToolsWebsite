import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import ToolsNavbar from "../../component/navbar/navbar";
import { motion } from "framer-motion";
import { useLanguage } from "../../component/navbar/localizaion";
import { useDarkMode } from "../../component/navbar/darkMode";
import "../../tools.css"; // Import global styles

function CreatePage({ setItems }) {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { darkMode } = useDarkMode();

  const [values, setValues] = useState({
    image: "",
    title: "",
    category: "",
    price: 0,
    qty: 1,
    company: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.image || !values.title || !values.price || !values.company || !values.category) {
      Swal.fire({
        title: t.error || "خطا!",
        text: t.fillFields || "تمام فیلدها را پر کنید.",
        icon: "error",
        confirmButtonText: t.ok || "تایید",
      });
      return;
    }

    const newItem = { id: Date.now(), ...values };
    const storedItems = JSON.parse(localStorage.getItem("items")) || [];
    const updatedItems = [...storedItems, newItem];

    localStorage.setItem("items", JSON.stringify(updatedItems));
    setItems(updatedItems);

    Swal.fire({
      title: t.success || "موفقیت!",
      text: t.itemAdded || "آیتم با موفقیت اضافه شد.",
      icon: "success",
      confirmButtonText: t.ok || "باشه",
    });

    navigate("/");
  };

  return (
    <>
      <ToolsNavbar />
      <motion.form
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        onSubmit={handleSubmit}
        className={`mt-20 w-[90%] md:w-[500px] mx-auto enhanced-card ${darkMode ? 'dark-mode' : ''}`}
      >
        <div className="enhanced-card-body">
          <h1 className={`section-title ${darkMode ? '!text-blue-400' : '!text-blue-700'} !mb-6`}>
            {t.createTool || "ایجاد ابزار"}
          </h1>

          <div className="mb-4">
            <label className={`block font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {t.picture}
            </label>
            <input
              type="file"
              accept="image/*"
              className={`w-full p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                darkMode 
                  ? 'bg-gray-700 border-gray-600 text-white' 
                  : 'border border-gray-300'
              }`}
              onChange={(e) => {
                const file = e.target.files[0];
                const imageUrl = URL.createObjectURL(file);
                setValues({ ...values, image: imageUrl });
              }}
            />
          </div>

          <div className="mb-4">
            <label className={`block font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {t.toolName || "اسم محصول"}
            </label>
            <input
              type="text"
              placeholder={t.toolName || "اسم محصول"}
              className={`w-full p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                darkMode 
                  ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                  : 'border border-gray-300'
              }`}
              onChange={(e) => setValues({ ...values, title: e.target.value })}
            />
          </div>

          <div className="mb-4">
            <label className={`block font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {t.selectType || "انتخاب نوع وسیله"}
            </label>
            <select
              onChange={(e) => setValues({ ...values, category: e.target.value })}
              className={`w-full p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                darkMode 
                  ? 'bg-gray-700 border-gray-600 text-white' 
                  : 'border border-gray-300'
              }`}
              defaultValue=""
            >
              <option value="" disabled>
                {t.selectType || "انتخاب نوع وسیله"}
              </option>
              <option value="electronic">{t.electric}</option>
              <option value="non-electronic">{t.no_electric}</option>
            </select>
          </div>

          <div className="mb-4">
            <label className={`block font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {t.price || "قیمت محصول"}
            </label>
            <input
              type="number"
              dir="ltr"
              placeholder={t.price || "قیمت محصول"}
              className={`w-full p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                darkMode 
                  ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                  : 'border border-gray-300'
              }`}
              onChange={(e) => setValues({ ...values, price: Number(e.target.value) })}
            />
          </div>

          <div className="mb-4">
            <label className={`block font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {t.qty || "تعداد آیتم"}
            </label>
            <input
              type="number"
              dir="rtl"
              placeholder={t.qty || "تعداد آیتم"}
              className={`w-full p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                darkMode 
                  ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                  : 'border border-gray-300'
              }`}
              onChange={(e) => setValues({ ...values, qty: Number(e.target.value) })}
            />
          </div>

          <div className="mb-6">
            <label className={`block font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {t.company || "کمپنی محصول"}
            </label>
            <input
              type="text"
              placeholder={t.company || "کمپنی محصول"}
              className={`w-full p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                darkMode 
                  ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                  : 'border border-gray-300'
              }`}
              onChange={(e) => setValues({ ...values, company: e.target.value })}
            />
          </div>

          <button
            type="submit"
            className={`w-full font-black py-3 btn btn-primary ${darkMode ? 'dark-mode' : ''}`}
          >
            {t.add || "اضافه کن"}
          </button>
        </div>
      </motion.form>
    </>
  );
}

export default CreatePage;