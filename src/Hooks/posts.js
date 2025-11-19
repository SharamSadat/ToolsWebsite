import { useEffect } from "react";
import Fetch from "./fetch";
import Loading from "./loading";

function Posts() {

  const [info, loading] = Fetch("https://jsonplaceholder.typicode.com/posts");

  useEffect( () => {

      console.log("Posts Rendered" , info , loading ) ;

  } , [])

  return (
    <>
       {loading == true ? (
         <Loading />
      ) : (
        info &&
        info.map((post) => (
          <div key={post.id}>
            <li>
              <h1>{post.id}</h1> - <h3>{post.title}</h3>
            </li>

            <hr />
          </div>
        ))
      )} 
    </>
  );
}

export default Posts;
