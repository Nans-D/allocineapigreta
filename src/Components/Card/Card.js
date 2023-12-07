import "./Card.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div>
      <Link to={`/movie/${props.id}`}>
        <div className="card-container">
          <img className="card-image" src={props.img} alt="" />
          <span>{props.title}</span>
        </div>
      </Link>
    </div>
  );
};

export default Card;
