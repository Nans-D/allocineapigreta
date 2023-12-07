import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Movie.css";

const Movie = () => {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=4d12b2b226af3e650897e7b25db29466&language=fr-FR`
      );

      const responseApi = await response.json();
      setData(responseApi);
      console.log(responseApi);
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <div className="movie-container">
        <span>title</span>
        <div className="movie-links">
          <ul>
            <li>
              <a href="">Fiche</a>
            </li>
            <li>
              <a href="">Casting</a>
            </li>
            <li>
              <a href="">Films Similaires</a>
            </li>
          </ul>
        </div>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`}
            alt=""
          />
          <div className="movie-description">
            <span>Date de sortie</span>
            <span>Casting</span>
            <span>
              Synopsis : Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
