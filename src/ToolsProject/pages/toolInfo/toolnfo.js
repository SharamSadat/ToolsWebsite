import { motion } from "framer-motion";
import { useLanguage } from "../../component/navbar/localizaion";
import "./toolInfo.css";

function ToolsInfo() {
  const { t } = useLanguage();

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.02 }}
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="enhanced-card mt-16 mx-auto w-[90%] md:w-[800px]"
      >
        <div className="enhanced-card-body">
          <h5 className="text-accent font-extrabold text-xl text-center mb-3">
            {t.specialOffer}
          </h5>
          <h1 className="section-title text-center !mb-4 !text-3xl md:!text-4xl">
            {t.nameOfDesign}
          </h1>
          <p className="enhanced-card-text text-center leading-relaxed">
            {t.homeDetails}
            {t.homeDetails}
            {t.homeDetails}
          </p>
        </div>
      </motion.div>
    </>
  );
}

export default ToolsInfo;