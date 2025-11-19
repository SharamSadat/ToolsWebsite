import { useRoutes } from "react-router-dom";
import routes from "./pages/home/routes";


function Mainporj() {

  let Routes = useRoutes(routes) ;

  return Routes;
}

export default Mainporj;
