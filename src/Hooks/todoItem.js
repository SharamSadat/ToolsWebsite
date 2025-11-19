import "./todoItem.css" ;

function TodoItem(props) {

return(

<>

<div className="todoitem">

 <p className="name">{props.title}</p>
 
 <button className="Btn-delete" onClick={props.onRemove}>Delete Todo</button>

 </div>

</>

)

}

export default TodoItem ;