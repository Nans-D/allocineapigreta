import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Movie.css";

const Movie = () => {
  const [movieData, setMovieData] = useState({});
  const [castingData, setCastingData] = useState([]);
  const { id } = useParams();

  if (castingData.length > 0) {
    castingData.length = 10;
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
      console.log(responseApi.cast);
    };
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
        <div>
          <h1 id="casting" className="casting-title">
            Casting
          </h1>
          <div className="casting-images">
            {castingData.map((item) => {
              return (
                <img
                  src={`https://image.tmdb.org/t/p/w138_and_h175_face/${item.profile_path}`}
                  alt=""
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
