import { useState } from "react";
import "./CardActor.css";
import { Link } from "react-router-dom";

const CardActor = (props) => {
  const [backCard, setBackCard] = useState(false);

  return (
    <div
      onMouseEnter={() => {
        setBackCard(true);
      }}
      onMouseLeave={() => {
        setBackCard(false);
      }}
    >
      <Link to={`/actor/${props.id}`} className="card-actor-link">
        <div className="card-actor-container">
          <div className="card-actor-image">
            <img src={props.img} alt="" />
            <div className={!backCard ? null : "white-card-actor"}></div>
          </div>
          <span className="card-actor-name">{props.name}</span>
          <span className="card-actor-character">{props.character}</span>
        </div>
      </Link>
    </div>
  );
};

export default CardActor;
