import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { isLogin } from "../../Login1";
import { useState } from "react";


function MyNavbar() {
  const [loginStatus , setLoginStatus] = useState(isLogin() ? "خروج" : "ورود") ;
   const closeHandler = () => {

    document.cookie = "username = Admin ; expires = Sun , 15 March 2025 12:00:00 UTC ; path=/" ;

   setLoginStatus("ورود") ;

   }

  const expand = "md";
  return (
    <Navbar
      style={{ backgroundColor: "rgb(186, 182, 253)" }}
      expand={expand}
      className="mb-3"
    >
      <Container>
        <Navbar.Brand
          style={{ fontFamily: "Lalezar", fontSize: "23px" }}
          href="#"
        >
          سایت رسمی W3ُSchool
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <NavLink to="/" className="nav-link">
                صفحه اصلی
              </NavLink>
              <NavLink to="/about" className="nav-link">
                در باره ما
              </NavLink>
              <NavLink to="/blog" className="nav-link">
                مقالات
              </NavLink>
              <NavLink to="/panel" className="nav-link">
                پنـــل
              </NavLink>

              {isLogin() ? 
               
               <NavLink to="/login" onClick={closeHandler} className="nav-link">{loginStatus}</NavLink>

                          : 

              <NavLink to="/login" className="nav-link">{loginStatus}</NavLink> 
                          
            }

             

            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
export default MyNavbar;
