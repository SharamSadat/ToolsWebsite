import MyNavbar from "../../components/navbar/Navbar";
import Teacher from "./teacher";
import { useState } from "react";
import { Datas } from "./data";

function TeachInfo(){

    const [lists, setLists] = useState(Datas);

    return(

        <>

        <MyNavbar />
        
        <div className="all">
          {lists.map((list) => (
            <Teacher {...list} />
          ))}
        </div>
        </>

    )
    
    }
  
export default TeachInfo ;