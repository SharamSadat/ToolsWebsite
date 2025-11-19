import { useEffect, useState } from "react";
import Connect from "./connect";
import swal from "sweetalert";
import Swal from "sweetalert2";
import "./todo.css";

function Todo() {
  useEffect(() => {
    console.log("todo component mount");
  }, []);

  // const [classes, setClasses] = useState(["add" , "delete"]);

  const [Works, setWorks] = useState([
    {
      id: 1,
      title: "Studing",
    },
  ]);

  const [newWorks, setNewWorks] = useState("");

  const clickHandler = (e) => {
    if (newWorks !== "") {
      setWorks([...Works, { id: Works.length + 1, title: newWorks }]);

      Swal.fire({
        title: "Success✔",
        text: "Works is Added Successfully",
        icon: "success",
        confirmButtonText: "OK",
        
      });
    } else {
      Swal.fire({
        title: "Error🧭",
        text: "Please Enter a Work For doing that at Today",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
    setNewWorks("");
  };

  const deleteTodo = (todoID) => {
    let newTodos = Works.filter((work) => work.id !== todoID);

    setWorks(newTodos);
    
    // setClasses("delete");
  };

  return (
    <>
      <div className="text-center mt-12 mb-8">
        <h1 className="font-bold text-3xl mb-8 text-yellow-500">
          ToDo Lists ( لیست کار های امروز )
        </h1>

        <hr />

        <input
          type="text"
          onChange={(e) => setNewWorks(e.target.value)}
          placeholder="Enter your Work"
          className="border-2 border-gray-500 mt-8 w-96 font-bold pl-4"
        />
        <button
          onClick={clickHandler}
          className="w-32 bg-green-600 border-2 border-green-400 rounded-2xl"
        >
          ADD
        </button>
      </div>

      <div className={`font-bold relative left-[430px]`}>
        {Works.map((work) => (
          <Connect
            key={work.id}
            {...work}
            onRemove={() => deleteTodo(work.id)}
          /> 
        ))}

      </div>
    </>
  );
}

export default Todo;
