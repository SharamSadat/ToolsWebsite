import React from "react";
import Button from "./button";

import "./card.css" ;


function Card({Name , pic = "./img/zara.png"}) {

    return (
 
    <div className="col">
 
 <div className="card">
 
     <img className = "img-card" src={pic}/>
 
     <div className="card-body">
 
        <h5 className="card-title">{Name}</h5>
 
           <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione esse cum quidem, eos excepturi distinctio. Dolores omnis asperiores ex ratione praesentium. Placeat ex fuga quaerat, et saepe iste tenetur architecto!</p> 
             
             <Button />
     </div>
 
 </div>
 
 </div>
 
    ) ;
 
 }


// class Card extends React.Component {

// render() {

//    return (
 
//       <div className="col">
   
//    <div className="card">
   
//        <img className = "img-card" src={this.pic}/>
   
//        <div className="card-body">
   
//           <h5 className="card-title">{this.Name}</h5>
   
//              <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione esse cum quidem, eos excepturi distinctio. Dolores omnis asperiores ex ratione praesentium. Placeat ex fuga quaerat, et saepe iste tenetur architecto!</p> 
               
//                <Button />
//        </div>
   
//    </div>
   
//    </div>
   
//       ) ;
   

// }


// }

 export default Card 