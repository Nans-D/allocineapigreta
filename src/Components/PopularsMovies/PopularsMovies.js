import "./PopularsMovies.css";
import CardMovie from "../CardMovie/CardMovie";
import { useEffect, useState } from "react";
const PopularsMovies = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 6;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=4d12b2b226af3e650897e7b25db29466&language=fr-FR&page=1"
      );
      const responseApi = await response.json();
      setData(responseApi.results);
      const test = responseApi.results;
      console.log(test);
    };
    fetchData();
  }, []);
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = data.slice(indexOfFirstMovie, indexOfLastMovie);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="populars-movies-container">
      <p className="populars-movies-title">Populars movies</p>
      <div className="populars-movies-cards">
        {currentMovies.map((item, index) => {
          return (
            <div className="populars-movies-card-item" key={index}>
              <CardMovie
                id={item.id}
                img={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${item.poster_path}`}
                title={item.original_title}
              ></CardMovie>
            </div>
          );
        })}
      </div>
      <div className="btn-paginate">
        <button onClick={() => paginate(1)}>1</button>
        <button onClick={() => paginate(2)}>2</button>
        <button onClick={() => paginate(3)}>3</button>
        <button onClick={() => paginate(4)}>4</button>
      </div>
    </div>
  );
};

export default PopularsMovies;
