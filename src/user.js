import "./user.css" ;

function User({name = "Sharam" , age = 27 , height = 180}) {

return (

<div className="container">

      <p>name : {name}</p>
      <p>age : {age}</p>
      <p>height : {height}</p>

</div>

) ;

}

export default User ;