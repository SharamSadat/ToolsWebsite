import StoreNavbar from "./navbar";
import background from "../assets/همه بکروند.JPG";
import background1 from "../assets/ست بکروند.jpg" ;
import background2 from "../assets/ست دخترانه.jpg" ;
import background3 from "../assets/موزه.JPG" ;
import { motion, AnimatePresence } from "framer-motion";
import background5 from "../assets/جمپر سفید.jpg" ;
import { useEffect, useRef, useState } from "react";
import background4 from "../assets/ست بچه گانه.jpg" ;
import ProductCard from "../pages/homePages/cards";
import TopSales from "../pages/homePages/topsales";

function StoreHome() {

    const [index, setIndex] = useState(0);
    const intervalRef = useRef(null) ;
    const durations = 4000 ;


    const slides = [

        {img : background , text :  "خوش آمدید"} , 
        {img : background1 , text : "به سایت رسمی مغازه جات آنلاین" } ,
       {img : background2 , text : " با داشتن ست های ناب جوره ایی "},
        {img : background3 , text : "کفش های خوش استایل" } ,
        {img : background4 , text :  "لباس های با کیفیت"} ,
       {img : background5 , text :  "با داشتن 100% رضایت مشتریان" } 

    ] ;


    useEffect(() => {

      startAutoPlay() ;
      return stopAutoPlay ;

    } , []) ; 

    const startAutoPlay = () => {

      stopAutoPlay() ; 
      intervalRef.current = setInterval(() => {
         setIndex((prev) => (prev + 1) % slides.length)
      }, durations);

   }

   const stopAutoPlay = () => {

       if(intervalRef.current) {

           clearInterval(intervalRef.current) ; 

           intervalRef.current = null ; 

       }

   }

   const passHandler = () => {

      setIndex((prev) => (prev + 1) % slides.length) ;

      startAutoPlay() ;

   }

   const nextHandler = () => {

        setIndex((prev) => (prev + 1) % slides.length) ;

      startAutoPlay() ;

   }


 return(

    <>
    
        <StoreNavbar />

        <div
        className="relative w-full h-screen overflow-hidden"
        onMouseEnter={ stopAutoPlay }
        onMouseLeave={startAutoPlay}
        >

        <AnimatePresence mode="wait">
        <motion.img  key={`img - ${index}`}
          initial={{ opacity: 0, y: 20 , scale : 1.03 }}
          animate={{ opacity: 1 , scale: 1 , y : 0 }}
          exit={{ opacity: 0, y: -20 , scale : 0.97 }}
          transition={{ duration: 1.1 , ease : "easeInOut" }}
        className = "absolute inset-0 w-full h-full object-cover" 
        src={slides[index].img} alt="mehro" />
      </AnimatePresence>

       

  
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

 
 <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6 pointer-events-none">
      <AnimatePresence mode="wait">
        <motion.h1
          key={`text-${index}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
className="text-white text-3xl md:text-5xl mt-64 font-bold leading-tight"
style={{ direction : "rtl" }}>
              {slides[index].text}
        </motion.h1>
      </AnimatePresence>



       <div className="mt-6 flex gap-2 pointer-events-auto">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setIndex(i);
                  startAutoPlay();
                }}
                aria-label={`go to slide ${i + 1}`}
                className={`w-3 mt-96 h-3 rounded-full ${i === index ? "bg-white" : "bg-white/40"}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div>

            

            <ProductCard />

            <TopSales />

      </div>



    
    </>

 )

}

export default StoreHome ;