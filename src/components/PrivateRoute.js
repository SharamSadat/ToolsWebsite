import { Navigate } from "react-router-dom";

import { isLogin } from "../Login1";

function PrivateRoute({children}) {

    return(


       <>

           { isLogin() ? children : <Navigate to="/login" /> };

       </>


    )

}

export default PrivateRoute ;