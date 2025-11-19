import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "../../my-app/src/output.css" ;
import 'bootstrap/dist/css/bootstrap.min.css';
// import Memo from "./memo";

// Tools Projects 
import Tools from "./ToolsProject/tools";
// import "bootstrap/dist/css/bootstrap.rtl.min.css" ;
// import { ThemeProvider } from "react-bootstrap";
// import ButtonClick from "./inc2";
// import About from "./about";


// store Shopping 

import StoreShop from "./StoreShop/storeShop.js" ;


// import Effect from "./effect";
// import Inc from "./inc";
// import Calculator from "./Calculator";
// import ToDo from "./todoList/todo";
// import Notif from "./notif";
// import IncProj from "./incProj";
// import Increase from "./increase";

// import RealProj from "./RealProject";
import "bootstrap/dist/css/bootstrap.rtl.min.css" ;
import { ThemeProvider } from "react-bootstrap";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <App />

  // <Increase />

  // <Notif />

  // <IncProj />

  // <Effect />

  // <Inc />

  // <About />

  // <ThemeProvider dir="rtl">

  //       <RealProj />

  // </ThemeProvider>
 
  // <ButtonClick />

  // <ToDo />

  // <Memo />

  //  <Calculator />


  // Tools Project 

//    <ThemeProvider dir="rtl">
//    <Tools />
//    </ThemeProvider>

  // Store Shopping 

   <ThemeProvider dir="rtl">
         <StoreShop />
   </ThemeProvider>


);
