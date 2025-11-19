import { useState } from "react";
import "./todo.css";
import TodoItem from "./todoItem";

function ToDo() {
  const [newtodos, setNewTodos] = useState("");
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "milad",
    },

    {
      id: 2,
      title: "Sharam",
    },

    {
      id: 3,
      title: "Omid",
    },
  ]);

  const saveHandler = () => {

    <h1>{setTodos([...todos, { id: todos.length + 1, title: newtodos }])}</h1>;
    setNewTodos("") ;
  };


  const deleteTodo = (todoId) => {

    let newTodo = todos.filter(todo => todo.id !== todoId ) 

    setTodos(newTodo) ;

  }

  return (
    <>
      <div className="container">
        <h1>Todo Lists</h1>
        <hr />

        <div className="addtodo">
          <input type="text" onChange={(e) => setNewTodos(e.target.value)} />

          <button onClick={saveHandler}>Add Todo</button>
        </div>

<ul>

        {todos.map((todo) => (
          <>
          <TodoItem key={todos.id} {...todo} onRemove = { () => deleteTodo(todo.id)} />
          <h2 style={{fontWeight:"bold"}}><li>{todo.id} - {todo.title}</li></h2>
          </>
        ))}
        

</ul>
      </div>
    </>
  );
}

export default ToDo;
