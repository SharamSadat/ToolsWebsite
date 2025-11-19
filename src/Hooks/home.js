import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1
        style={{
          fontSize: "50px",
          fontWeight: "bold",
          fontFamily: "sans-serif",
        }}
      >
        Home Page
      </h1>
      <ul style={{ fontWeight: "bold", fontSize: "25px" }}>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </>
  );
}

export default Home;
