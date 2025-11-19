import "./list.css" ;

function List({name , age , work}) {

return(

<>

     <div className = "container">

       <p>{name}</p>
       <p>{age}</p>
       <p>{work}</p>

     </div>

</>


)

}

export default List ;