import "./InTheaters.css";
import CardMovie from "../CardMovie/CardMovie";
import { useState, useEffect } from "react";
const InTheaters = () => {
  const moviesPerPage = 6;
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = data.slice(indexOfFirstMovie, indexOfLastMovie);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=4d12b2b226af3e650897e7b25db29466&language=fr-FR&page=1"
      );
      const responseApi = await response.json();
      setData(responseApi.results);
    };
    fetchData();
  }, []);

  return (
    <div className="in-theaters-container">
      <p className="in-theaters-title">In Theaters</p>
      <div className="in-theaters-cards">
        {currentMovies.map((item, index) => {
          return (
            <div className="in-theaters-card-item" key={index}>
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

export default InTheaters;
