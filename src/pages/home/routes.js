import NotFound from "../NotFound/notFound";
import About from "../about/About";
import Blog from "../blog/Blog";
import Course from "../course/Course";
import Login from "../login/Login";
import Panel from "../panel/Panel";
import Setting from "../setting";
import Home from "./Home";
import PrivateRoute from "../../components/PrivateRoute";

const routes = [
    {path : "/" , element : <Home />} ,
    {path : "/about" , element : <About />} ,
    {path : "/blog" , element : <Blog /> , children : [ 

        {path : "Php" , element : <h2>آموزش دوره PHP</h2>} ,
        {path : "JS" , element : <h2>آموزش دوره JavaScript</h2>} ,
        {path : "react" , element : <h2>آموزش دوره React</h2>} ,

    ] 
} ,
    {path : "/panel" , element : <PrivateRoute> <Panel /> </PrivateRoute> },
    {path : "/setting" , element : <PrivateRoute> <Setting /> </PrivateRoute> },
    {path : "/login" , element : <Login /> },
    {path : "*" , element : <NotFound /> },
    {path : "/course/:id" , element : <Course /> },

]

export default routes ;