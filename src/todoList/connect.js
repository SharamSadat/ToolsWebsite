import { useEffect } from "react";

function Connect(props) {
  useEffect(() => {
    console.log("todoItem component mount", props.id);

    return () => {
      console.log("todoItem compponent amount", props.id);
    };
  }, []);

  return (
    <>
      <div className="flex pl-4 w-32">
        <h1>{props.id}-</h1>
        <p className="w-12">{props.title}</p>
        <button onClick={props.onRemove} className="pl-[330px] pb-4">
          DeleteBtn
        </button>
      </div>
    </>
  );
}

export default Connect;
