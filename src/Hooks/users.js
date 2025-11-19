import { useEffect } from "react";
import Fetch from "./fetch";
import Loading from "./loading";

function Users() {
  const [clients, loading] = Fetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  useEffect( () => {

    console.log("users is renderd" , clients , loading) ;

  } , [])

  return (
    <>
      {loading == true ? (
         <Loading />
      ) : (
        clients &&
        clients.map((client) => (
          <div key={client.id}>
            <li>
              <h1>{client.id} </h1>-<h3>{client.name}</h3>
            </li>

            <hr />
          </div>
        ))
      )}
    </>
  );
}

export default Users;
