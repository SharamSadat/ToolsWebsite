import "./Box.css" ;

function Box({id , name , age ,  work}) {


return (

<>

<div className = "container">


<h2>ID : {id}</h2>
<h2>Name : {name}</h2>
<h2>Age : {age}</h2>
<h2>Work : {work}</h2>


</div>

</>

)


}

export default Box ;