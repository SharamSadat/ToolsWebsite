import { BrowserRouter , Route, Routes } from "react-router-dom";
import StoreHome from "./components/storeHome";
import CreateStore from "./components/create";

function StoreShop() {

return(

   <>
   
      <BrowserRouter>
      
         <Routes>

            <Route path="/" element={<StoreHome />} />
            <Route path="create-page" element={<CreateStore />} />


         </Routes>

      </BrowserRouter> 
   
   </>

)

}

export default StoreShop;