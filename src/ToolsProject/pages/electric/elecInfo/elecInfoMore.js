import capcha from "../../../assets/1747659393191.jpg" ;
import ToolsNavbar from "../../../component/navbar/navbar";
import ToolsFooter from "../../../component/footer/toolsFooter";
import MoreElecTools from "./elecInfo";
import { useDarkMode } from "../../../component/navbar/darkMode";

function ElecInfoMore() {
  const { darkMode } = useDarkMode();

  let MoreElec = [
        {
              
              id : 1 ,
            image : capcha ,
            title : "اره برقی" ,
            price : "200$" , 
            company : "Toyota" , 

        }
  ]

return(

   <>

   <ToolsNavbar />
   

        {

          MoreElec.map(more => (<MoreElecTools key={more.id} {...more} />)) 

        }


<ToolsFooter />

   </>

)

}
export default ElecInfoMore ;