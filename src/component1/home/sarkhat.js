import "./sarkhat.css" ;

function Sarkhat({title , image , info}) {

return (

<>


<div className="cont">

<h3 className="h3">title : {title}</h3>

<img src= {image} alt="noFounded" />

<p className="info">info : {info}</p>

</div>

</>


)


}

export default Sarkhat ;