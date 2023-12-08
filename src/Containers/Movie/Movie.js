import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Movie.css";
import CardMovie from "../../Components/CardMovie/CardMovie";
import CardActor from "../../Components/CardActor/CardActor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";

const Movie = () => {
  const [movieData, setMovieData] = useState({});
  const [castingData, setCastingData] = useState([]);
  const [similarMoviesData, setSimilarMoviesData] = useState([]);
  const { id } = useParams();

  if (castingData.length > 0) {
    castingData.length = 12;
  }
  if (similarMoviesData.length > 0) {
    similarMoviesData.length = 5;
  }

  useEffect(() => {
    const movieFetch = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=4d12b2b226af3e650897e7b25db29466&language=fr-FR`
      );

      const responseApi = await response.json();
      setMovieData(responseApi);
    };

    const castingFetch = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=4d12b2b226af3e650897e7b25db29466&language=fr-FR`
      );
      const responseApi = await response.json();
      setCastingData(responseApi.cast);
    };

    const similarMoviesFetch = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/similar?api_key=4d12b2b226af3e650897e7b25db29466&language=fr-FR`
      );
      const responseApi = await response.json();
      setSimilarMoviesData(responseApi.results);
    };
    similarMoviesFetch();
    castingFetch();
    movieFetch();
  }, [id]);

  return (
    <div>
      <div className="movie-container">
        <h1 className="movie-title">{movieData.original_title}</h1>
        <div className="movie-links-container">
          <ul className="movie-links">
            <a href="#fiche">
              <li className="movie-links-child">
                <FontAwesomeIcon icon={faFilm} className="faFilm-icon" />
                Fiche
              </li>
            </a>
            <a href="#casting">
              <li className="movie-links-child">
                <FontAwesomeIcon
                  icon={faCircleUser}
                  className="faCircleUser-icon"
                />
                Casting
              </li>
            </a>
            <a href="#similar-movies">
              <li className="movie-links-child">
                <FontAwesomeIcon icon={faVideo} className="faMovie-icon" />
                Films Similaires
              </li>
            </a>
          </ul>
        </div>
        <div id="fiche" className="movie-general-container">
          <img
            className="movie-image"
            src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`}
            alt=""
          />
          <div className="movie-description">
            <div>Date de sortie : {movieData.release_date}</div>
            <div className="movie-description-casting">
              <div className="movie-description-casting-text">
                Casting :{" "}
                {castingData.map((item) => {
                  return `${item.name}, `;
                })}
              </div>
            </div>
            <div>
              <strong>Synopsis</strong>
              <div>{movieData.overview}</div>
            </div>
          </div>
        </div>
        {/* CASTING  */}
        <div className="casting-container">
          <h1 id="casting" className="casting-title">
            Casting
          </h1>
          <div className="casting-informations">
            {castingData.map((item) => {
              return (
                <div className="casting-cards">
                  <CardActor
                    id={item.id}
                    img={`https://image.tmdb.org/t/p/w138_and_h175_face/${item.profile_path}`}
                    name={item.name}
                    character={item.character}
                  ></CardActor>
                  {/* <img
                    src={`https://image.tmdb.org/t/p/w138_and_h175_face/${item.profile_path}`}
                    alt=""
                  />
                  <div className="casting-name">{item.name}</div>
                  <div className="casting-character">{item.character}</div> */}
                </div>
              );
            })}
          </div>
        </div>
        <div className="similar-movies-container">
          <h1 id="similar-movies">Films Similaires</h1>
          <div className="similar-movies-cards">
            {similarMoviesData.map((item, index) => {
              return (
                <div key={index}>
                  <CardMovie
                    className="similar-movies-item"
                    id={item.id}
                    img={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                    title={item.original_title}
                  ></CardMovie>
                  {/* <img
                    className="similar-movies-item"
                    src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                    alt=""
                  /> */}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
