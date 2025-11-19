import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import background from "../../assets/background.jpg";
import { useLanguage } from "../../component/navbar/localizaion";
import { useDarkMode } from "../../component/navbar/darkMode";

function HeroTextAnimation() {
  

  const {t} = useLanguage() ;
  const { darkMode } = useDarkMode();

  const texts = t.textss ;

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
      
      <img
        src={background}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      
      <div className={`absolute inset-0 ${darkMode ? 'bg-black bg-opacity-50' : 'bg-black bg-opacity-50'}`}></div>

      <AnimatePresence mode="wait">
        <motion.h1
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-white text-4xl md:text-6xl font-extrabold text-center px-4"
        >
          {texts[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
}

export default HeroTextAnimation;