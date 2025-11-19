import "./item.css" ;

function Item({name , icon , info}) {

return (

    <>
    
    <div className="header">

    <h1>{name}</h1>

<img className="shadow" src = {icon} alt="notFounded" />

<p>{info}</p>
    
</div>
    
    </>

)


}

export default Item ;