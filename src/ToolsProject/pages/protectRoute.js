import { Navigate } from "react-router-dom";


function ProtectRoute({children}) {

const isLoginIn = localStorage.getItem("isLoginIn") ;

if(!isLoginIn) {

     return <Navigate to="/login-page" replace />

}

    return children ;

}

export default ProtectRoute ;