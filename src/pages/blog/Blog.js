
import MyNavbar from "../../components/navbar/Navbar" ;
import { Link, Outlet } from "react-router-dom";
import "./Blog.css";

function Blog(){
    return(
        <>

        <div className="div">
        <MyNavbar />
        <h1>صفحه مقالات</h1>
        <hr />

        <div className="artical">
        <Link to="/blog/php">PHP Artical</Link>
        <Link to="/blog/JS">JS Artical</Link>
        <Link to="/blog/react">React Artical</Link>
        </div>

        <hr />

             <Outlet />

        </div>
        </>
    )
}
export default Blog