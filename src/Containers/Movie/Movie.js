import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Movie.css";
import Card from "../../Components/Card/Card";

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
      console.log(responseApi.results);
    };
    similarMoviesFetch();
    castingFetch();
    movieFetch();
  }, [id]);

  return (
    <div>
      <div className="movie-container">
        <h1 className="movie-title">{movieData.original_title}</h1>
        <div>
          <ul className="movie-links">
            <li>
              <a href="">Fiche</a>
            </li>
            <li>
              <a href="#casting">Casting</a>
            </li>
            <li>
              <a href="">Films Similaires</a>
            </li>
          </ul>
        </div>
        <div className="movie-general-container">
          <img
            className="movie-image"
            src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`}
            alt=""
          />
          <div className="movie-description">
            <div>Date de sortie : {movieData.release_date}</div>
            <div>
              Casting :{" "}
              {castingData.map((item) => {
                return `${item.name}, `;
              })}
            </div>
            <div>
              <strong>Synopsis</strong>
              <div>{movieData.overview}</div>
            </div>
          </div>
        </div>
        <div className="casting-container">
          <h1 id="casting" className="casting-title">
            Casting
          </h1>
          <div className="casting-informations">
            {castingData.map((item) => {
              return (
                <div>
                  <img
                    src={`https://image.tmdb.org/t/p/w138_and_h175_face/${item.profile_path}`}
                    alt=""
                  />
                  <div className="casting-name">{item.name}</div>
                  <div className="casting-character">{item.character}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="similar-movies-container">
          <h1>Films Similaires</h1>
          <div className="similar-movies-cards">
            {similarMoviesData.map((item, index) => {
              return (
                <div key={index} className="similar-movies-item">
                  <Card
                    id={item.id}
                    img={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                    // title={item.original_title}
                  ></Card>
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
