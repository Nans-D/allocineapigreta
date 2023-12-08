import { useState } from "react";
import "./CardMovie.css";
import { Link } from "react-router-dom";

const CardMovie = (props) => {
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
      <Link to={`/movie/${props.id}`}>
        <div className="card-movie-container">
          <div className="card-movie-image-container">
            <img className="card-movie-image" src={props.img} alt="" />
            <div className={!backCard ? null : "white-card-movie"}>
              {!backCard ? null : (
                <span className="white-card-movie-title">{props.title}</span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardMovie;
