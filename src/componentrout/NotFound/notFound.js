import Navbar from "../navbar";
import { Link } from "react-router-dom";
import "./notFound.css" ;

function NotFound() {

    return(

         <>

        <Navbar />

        <div className="notFound">
       <h1>Page Is Not Found !</h1>
       <button><Link to="/">Go To Home</Link></button>
       </div>
    
    </>

)

}

export default NotFound ;