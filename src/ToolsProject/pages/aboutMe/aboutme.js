import { motion } from "framer-motion";
import { Users, Target, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import ToolsNavbar from "../../component/navbar/navbar";
import "../../tools.css"; // Import global styles
import { useLanguage } from "../../component/navbar/localizaion";
import { useDarkMode } from "../../component/navbar/darkMode";

function AboutUs() {

  const {t} = useLanguage() ;
  const { darkMode } = useDarkMode();

  return (
    <>
      <ToolsNavbar />
      <div className={`min-h-screen p-6 md:p-12 ${darkMode ? 'bg-gradient-to-b from-gray-800 to-gray-900' : 'bg-gradient-to-b from-white to-gray-100'}`}>
        {/* بخش هدر */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className={`section-title ${darkMode ? '!text-blue-400' : '!text-blue-700'}`}>{t.aboutUS}</h1>
          <p className={`text-lg md:text-xl max-w-2xl mx-auto mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {t.aboutTeam}
           </p>
        </motion.div>

        {/* کارت‌ها */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* ماموریت */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`enhanced-card text-center ${darkMode ? 'dark-mode' : ''}`}
          >
            <div className="enhanced-card-body">
              <Target className={`w-14 h-14 mx-auto mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`} />
              <h2 className={`enhanced-card-title ${darkMode ? 'dark-mode' : ''}`}>
                {t.ourMission}

              </h2>
              <p className={`enhanced-card-text ${darkMode ? 'dark-mode' : ''}`}>  

                {t.ourGoals}
                
                            </p>
            </div>
          </motion.div>

          {/* تیم */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`enhanced-card text-center ${darkMode ? 'dark-mode' : ''}`}
          >
            <div className="enhanced-card-body">
              <Users className={`w-14 h-14 mx-auto mb-4 ${darkMode ? 'text-green-400' : 'text-green-500'}`} />
              <h2 className={`enhanced-card-title ${darkMode ? 'dark-mode' : ''}`}>{t.ourTeam}</h2>
              <p className={`enhanced-card-text ${darkMode ? 'dark-mode' : ''}`}>
                {t.teamInfo}
              </p>
            </div>
          </motion.div>

          {/* ارزش‌ها */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`enhanced-card text-center ${darkMode ? 'dark-mode' : ''}`}
          >
            <div className="enhanced-card-body">
              <Lightbulb className={`w-14 h-14 mx-auto mb-4 ${darkMode ? 'text-yellow-400' : 'text-yellow-500'}`} />
              <h2 className={`enhanced-card-title ${darkMode ? 'dark-mode' : ''}`}>{t.ourValence}</h2>
              <p className={`enhanced-card-text ${darkMode ? 'dark-mode' : ''}`}>
                {t.valenceInfo }
               </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mt-16"
        >
          <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            {t.ourSupport}
          </h3>
          <p className={`max-w-xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {t.ourReport}
          </p>
          
          
            <button className={`mt-6 mb-4 font-extrabold px-6 py-3 ${darkMode ? 'btn btn-primary dark-mode' : 'btn btn-primary'}`}>
              {t.connectMe}
            </button>
      
        </motion.div>
      </div>
    </>
  );
}

export default AboutUs;