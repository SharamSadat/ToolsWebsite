import ToolsNavbar from "../../../component/navbar/navbar";
import ToolsFooter from "../../../component/footer/toolsFooter";
import NonElecInfoMore from "./nonelecInfoMore";
import { useDarkMode } from "../../../component/navbar/darkMode";

function NonElecInfo() {
  const { darkMode } = useDarkMode();

  let MoreElec = [
        {
            
              id : 1 ,
            image : "../../../assets/Capture.JPG" ,
            title : "اره برقی" ,
            price : "200$" , 
            company : "Toyota" , 

        }
  ]

return(

   <>

   <ToolsNavbar />
   

        {

          MoreElec.map(more => (<NonElecInfoMore key={more.id} {...more} />)) 

        }


<ToolsFooter />

</>

)

}

export default NonElecInfo ;