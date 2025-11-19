import { Link } from "react-router-dom";
import "./teacher.css" ;


function Teacher(props){

    return(
    
    <>

     <img className="imageSize" src={props.image} />
     
     <div className="setFont">
     <h3 style={{marginTop:"20px"}}>اسم استاد : {props.name}</h3>
     <h3>سن : {props.age}</h3>
     <h3 style={{marginBottom:"50px"}}> دوره آموزشی : {props.course}</h3>
     </div>

<div className="relation">

     <Link className="linkText" to={`./more/${props.id}`}>

         بیشتر بدانید ...

     </Link>

     </div>
   
    </>
    
    )
    
    }
    
    export default Teacher ;