import "./PopularsMovies.css";
import Card from "../Card/Card";
import { useEffect, useState } from "react";
const PopularsMovies = () => {
  const [data, setData] = useState([]);

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

  return (
    <div className="populars-movies-container">
      <p className="populars-movies-title">Populars movies</p>
      <div className="populars-movies-cards">
        {data.map((item, index) => {
          return (
            <div className="populars-movies-card-item" key={index}>
              <Card
                id={item.id}
                img={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${item.poster_path}`}
                // title={item.original_title}
              ></Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularsMovies;
