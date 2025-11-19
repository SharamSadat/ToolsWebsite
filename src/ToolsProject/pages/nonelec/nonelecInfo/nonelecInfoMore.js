import { Col, Container, Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState} from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import ToolsNavbar from "../../../component/navbar/navbar";
import { useLanguage } from "../../../component/navbar/localizaion";
import { useDarkMode } from "../../../component/navbar/darkMode";
import ToolsFooter from "../../../component/footer/toolsFooter";

function NonElecInfoMore(props) {

  const {t} = useLanguage() ;
  const { darkMode } = useDarkMode();

  const navigate = useNavigate() ;

     const { id } = useParams() ;  // گرفتن id از URL
       const [item, setItem] = useState(null);
  
         useEffect(() => {
  
               const stored = JSON.parse(localStorage.getItem("items")) || [];
         const found = stored.find((i) => i.id === parseInt(id)); // پیدا کردن آیتم بر اساس id
      
         setItem(found);
  
         }
  
      , [id]);

  // تابع ویرایش
  const handleEdit = () => {
       navigate(`/edit/${id}`);
  };

 const handleDelete = () => {
    const stored = JSON.parse(localStorage.getItem("items")) || [];
    const filtered = stored.filter((i) => i.id !== parseInt(id));
    localStorage.setItem("items", JSON.stringify(filtered));
       
   <p>{t.Deleted}</p>

   navigate("/nonelectric")
    
   // برگشت به صفحه اصلی
  };

  // ازسال به طرف سبد خرید

    const addToBusket = () => {

      const basket = JSON.parse(localStorage.getItem("basket")) || [] ;

      basket.push(item) ;

      localStorage.setItem("basket" , JSON.stringify(basket)) ;

      Swal.fire({
       title : "موفق آمیز" , 
       text : "آیتم در سبد خرید اضافه شد " , 
       timer : 2000 , 
       confirmButtonText : "تایید👌"
        
      })
  }

         if (!item) {
    return <p>{t.notExists}</p>;
  }

  return (
    <>
    <ToolsNavbar />
      <Container className="mt-20">
        <Row>
          <Col md={5}>
            <motion.div 
              initial={{opacity : 0 , y : 20}} 
              animate = {{opacity : 1 , y : 0}} 
              className={`mt-24 ml-4 shadow-xl rounded-3xl p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
            >
              
              <h1 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-800'}`}>{t.toolName}: {item.title}</h1>
              <h3 className={`text-lg mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{t.cost} : {item.price} {t.afghani}</h3>
              <h4 className={`mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{t.company} : {item.company}</h4>

              <div className="flex flex-col gap-3">
              <button 
                onClick={addToBusket} 
                className={`py-2 rounded-lg ${darkMode ? 'bg-green-700 hover:bg-green-600 text-white' : 'bg-green-600 text-white hover:bg-green-700'}`}
              >
                {t.buy}
              </button>
              
              <button 
                onClick={handleEdit} 
                className={`py-2 rounded-lg ${darkMode ? 'bg-yellow-600 hover:bg-yellow-500 text-white' : 'bg-yellow-500 text-white hover:bg-yellow-600'}`}
              >
                {t.Edits}
              </button>

              <button 
                onClick={handleDelete} 
                className={`py-2 rounded-lg ${darkMode ? 'bg-red-700 hover:bg-red-600 text-white' : 'bg-red-600 text-white hover:bg-red-700'}`}
              >
                {t.Deletes}
              </button>
              </div>
            </motion.div>
          </Col>

          <Col md={7}>
            <p className={`leading-relaxed mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {t.paragraph}
            </p>
          </Col>
        </Row>

      </Container>

      <ToolsFooter />
    </>
  );
}

export default NonElecInfoMore;