import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import ArticalItem from "../../components/artical/artical-item";
import MyNavbar from "../../components/navbar/Navbar";
import "./Home.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [articals, setArticals] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/articles")
      .then((response) => setArticals(response.data));
  }, []);

  return (
    <>
      <MyNavbar />
      <Container>
        <h1
          style={{
            marginTop: "15px",
            fontWeight: "bold",
            fontFamily: "initial",
            fontSize: "45px",
          }}
        >
          لیست مقالات
        </h1>

        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 d-flex row-cols-xl-4 gy-4 py-3">
          {articals.map((artical) => (
            <Col key={artical.id}>
              <ArticalItem {...artical} />
            </Col>
          ))}
        </Row>
      </Container>

    </>
  );
}

export default Home;
