import { useParams } from "react-router-dom";
import axios from "axios";
import "./Artical.css";
import { Row, Container, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { BiTimeFive } from "react-icons/bi";
import MyNavBar from "../../components/navbar/Navbar";

function Artical(props) {
  const articalID = useParams().articalId;

  const [loading, setLoading] = useState(true);

  const [infos, setInfos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/articles")
      .then((response) => setInfos(response.data));
    setLoading(false);
  }, []);

  // اگر در حالت بارگزاری بود

  if (loading) {
    return <div>Loading...</div>;
  }

  const getInfo =
    infos.length > 0 ? infos.find((info) => info.id == articalID) : null;

  return (
    <>
      <MyNavBar />
      <Container>
        <Row>
          <Col>
            {
              <div className="details">
                <img className="imgs" src={getInfo.image} />
                <h4 className="title">عنوان :{getInfo.title}</h4>
                <div style={{ marginRight: "10px" }}>
                  <h6>نویسنده : {getInfo.writter}</h6>
                  <h6>
                    <span style={{ marginRight: "-10px", marginLeft: "3px" }}>
                      <BiTimeFive />
                    </span>
                    مدت زمان مطالعه : {getInfo.readingTime}دقیقه
                  </h6>

                  <h6>دسته بندی : {getInfo.category}</h6>
                </div>

                <Link className="delete" to="/delete-artical">
                  حذف پست
                </Link>

                <Link className="edit" to="/edit-artical">
                  ویرایش پست
                </Link>
              </div>
            }
          </Col>

          <Col>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی
              نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم
              متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
              طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
              صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی
              با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
              است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی
              نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
              <br />
              <br />
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی
              نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم
              متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
              طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
              صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی
              با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
              است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی
              نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
              <br />
              <br />
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی
              نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم
              متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
              طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
              صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی
              با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
              است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی
              نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم
              متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
              طراحان گرافیک است
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Artical;
