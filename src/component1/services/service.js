import Item from "./item";
import "./service.css" ;

function Service() {

    const khedamat = [

   {

    id : 1 ,  
    icon : "../../assets1/images/facebook.png" , 
    name : "FaceBook" ,
    info : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error deserunt ad corrupti maiores magni voluptatibus ipsa! Id, cupiditate dicta! Officiis veritatis voluptate quam veniam quae, harum expedita illum mollitia magni."


   } ,

   {

    id : 2 ,  
    icon : "../../assets1/images/youtube.png" , 
    name : "YouTube" ,
    info : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error deserunt ad corrupti maiores magni voluptatibus ipsa! Id, cupiditate dicta! Officiis veritatis voluptate quam veniam quae, harum expedita illum mollitia magni."


   } ,

   {

    id : 3 ,  
    icon : "../../assets1/images/youtube.png" , 
    name : "InstaGram" ,
    info : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error deserunt ad corrupti maiores magni voluptatibus ipsa! Id, cupiditate dicta! Officiis veritatis voluptate quam veniam quae, harum expedita illum mollitia magni."


   } ,

   {

    id : 4 ,  
    icon : "../../assets1/images/youtube.png" , 
    name : "TikTok" ,
    info : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error deserunt ad corrupti maiores magni voluptatibus ipsa! Id, cupiditate dicta! Officiis veritatis voluptate quam veniam quae, harum expedita illum mollitia magni."


   } ,

   {

    id : 5 ,  
    icon : "../../assets1/images/youtube.png" , 
    name : "SnapChat" ,
    info : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error deserunt ad corrupti maiores magni voluptatibus ipsa! Id, cupiditate dicta! Officiis veritatis voluptate quam veniam quae, harum expedita illum mollitia magni."


   } ,


    ]

    return (

<>

     <h1 id = "#services" className = "ser">Services</h1>

     {khedamat.map(kar => (<Item {...kar}/>))}

</>
    )


}

export default Service ;