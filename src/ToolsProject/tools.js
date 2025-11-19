import { BrowserRouter, Routes, Route } from "react-router-dom";
import ToolsHome from "./pages/Home/home";
import Electric from "./pages/electric/Electric";
import NonElectric from "./pages/nonelec/nonElectric";
import ElecInfoMore from "./pages/electric/elecInfo/elecInfoMore";
import Login from "./pages/login/Login";
import SignUp from "./pages/login/signup";
import CreatePage from "./pages/createPage/create";
import { useEffect, useState } from "react";
import Edit from "./pages/Home/edit";
import ProtectRoute from "./pages/protectRoute";

// Sub Routing

import BuyBasket from "./pages/subPages/basket/buyBasket.js" ;
import Portfolio from "./pages/Portfolio/portfolio.js";
import AllProj from "./pages/Portfolio/Allproj.js";
import Gleaning from "./pages/Portfolio/gleaning.js";
import Reference from "./pages/Portfolio/reference.js"; 
import SKP from "./pages/Portfolio/partsPort/skp.js";
import Todo from "./pages/Portfolio/partsPort/todo.js";
import Game from "./pages/Portfolio/partsPort/Game.js";
import Modeling from "./pages/Portfolio/partsPort/modeling.js";
import Unique from "./pages/Portfolio/partsPort/unique.js";
import Order from "./pages/subPages/basket/orders.js";
import AboutUs from "./pages/aboutMe/aboutme.js";
import { LanguageProvider } from "./component/navbar/localizaion.js";
import TopSales from "./pages/topsales/Topsales.js";
import NonElecInfoMore from "./pages/nonelec/nonelecInfo/nonelecInfoMore.js";
import { DarkModeProvider } from "./component/navbar/darkMode.js";

// Global Styles
import './tools.css';


function Tools() {

    const [items , setItems] = useState([])

    const addItem = (newItem) => {

        setItems([...items , newItem])
         
    }

     useEffect (() => {

        const storedItems = localStorage.getItem("items")
        
        if(storedItems) {

                setItems(JSON.parse(storedItems))

        }

     }   , [] )

return(

 <>

    
      <BrowserRouter>

      <LanguageProvider>
      <DarkModeProvider>
         <Routes>

             <Route path="/" element={ <ProtectRoute><ToolsHome setItems={setItems} items={items} /></ProtectRoute> } />
             <Route path="/elec-info-more/:id" element={<ProtectRoute><ElecInfoMore /> </ProtectRoute>} />
             <Route path="/nonelecinfoMore/:id" element={<ProtectRoute><NonElecInfoMore /></ProtectRoute>} />
             <Route path="/electric" element={<ProtectRoute><Electric /></ProtectRoute>} />
             <Route path="/topSales" element={<ProtectRoute><TopSales /></ProtectRoute>} />
             <Route path="/nonelectric" element={<ProtectRoute><NonElectric /></ProtectRoute>} />
            <Route path="/order" element={<ProtectRoute><Order /></ProtectRoute>} />
            <Route path="/about_us" element={<ProtectRoute><AboutUs /></ProtectRoute>} />
             <Route path="/login-page" element={<Login />} />
             <Route path="/signup" element={<SignUp />} />
             <Route path="/create-page" element={<ProtectRoute><CreatePage setItems={setItems} /></ProtectRoute>} />
             <Route path="/edit/:id" element={<ProtectRoute><Edit items={items} setItems={setItems} /></ProtectRoute>} />


             {/* sub Routing */}

             <Route path="/buy-basket" element={<ProtectRoute><BuyBasket /></ProtectRoute>} />
             <Route path="/port" element={<ProtectRoute><Portfolio /></ProtectRoute>} />

             {/* Sub Routing Portfolio  */}
             <Route path="/port/AllProj" element={<ProtectRoute><AllProj /></ProtectRoute>} />
             <Route path="/port/gleaning" element={<ProtectRoute><Gleaning /></ProtectRoute>} />
             <Route path="/port/reference" element={<ProtectRoute><Reference /></ProtectRoute>} />
             <Route path="/port/Allproj/skq" element={<ProtectRoute><SKP /></ProtectRoute>} />
             <Route path="/Allproj/Todo" element={<ProtectRoute><Todo /></ProtectRoute>} />
             <Route path="/Allproj/game" element={<ProtectRoute><Game /></ProtectRoute>} />
             <Route path="/Allproj/modeling" element={<ProtectRoute><Modeling /></ProtectRoute>} />
             <Route path="/Allproj/news" element={<ProtectRoute><Unique /></ProtectRoute>} />
           



            
    
      </Routes>
      </DarkModeProvider>
      </LanguageProvider>
      
      </BrowserRouter> 
             
 
 </>


)

}

export default Tools ;