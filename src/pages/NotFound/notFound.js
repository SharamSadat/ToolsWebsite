
import { Link } from "react-router-dom";
import "./notFound.css" ;
import { Navbar } from "react-bootstrap";

function NotFound() {

    return(

         <>

        <Navbar />

        <div className="notFound">
       <h1>Page Is Not Found !</h1>
       <button><Link to="/">برگشت به صفحه اصلی</Link></button>
       </div>
    
    </>

)

}

export default NotFound ;