import "./InTheaters.css";
import CardMovie from "../CardMovie/CardMovie";
import { useState, useEffect } from "react";
const InTheaters = () => {
  const [data, setData] = useState([]);

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
        {data.map((item, index) => {
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
    </div>
  );
};

export default InTheaters;
