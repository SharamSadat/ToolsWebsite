
import "./artical-item.css";
import Card from "react-bootstrap/Card";
import { BiTimeFive } from "react-icons/bi";
import { TiArrowLeftThick } from "react-icons/ti";
import { Link } from "react-router-dom";

function ArticalItem(props) {

  

  return (
    <Card>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title className="py-2 font-bold lalezar">
          {props.title}
        </Card.Title>
        <Card.Text className="font-bold">{props.desc}</Card.Text>
        <span className="read-more">
          <button>
            <Link
              to={`/artical/${props.id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              ادامه مقاله
              <TiArrowLeftThick size="25px" />
            </Link>
          </button>
        </span>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between align-items-center py-3">
        <span>نویسنده : {props.writter}</span>
        <span>
          <BiTimeFive /> {props.readingTime} دقیقه
        </span>
      </Card.Footer>
    </Card>
  );
}

export default ArticalItem;
