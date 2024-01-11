import { useEffect, useState } from "react";
import "./Actor.css";
import { useParams } from "react-router-dom";
import CardMovie from "../../Components/CardMovie/CardMovie";

const Actor = () => {
  const [actorMovies, setActorMovies] = useState([]);
  const [actor, setActor] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 12;
  const { id } = useParams();

  useEffect(() => {
    const ActorMovieFetch = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=4d12b2b226af3e650897e7b25db29466&language=fr-FR`
      );
      const responseApi = await response.json();
      setActorMovies(responseApi.cast);
    };
    ActorMovieFetch();

    const ActorFetch = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/person/${id}?api_key=4d12b2b226af3e650897e7b25db29466&language=fr-FR`
      );
      const responseApi = await response.json();
      setActor(responseApi);
    };
    ActorFetch();
  }, [id]);
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = actorMovies.slice(indexOfFirstMovie, indexOfLastMovie);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="actor-container">
      <div className="actor-description">
        <div>
          <img
            className="actor-image"
            src={`https://image.tmdb.org/t/p/w138_and_h175_face/${actor.profile_path}`}
            alt=""
          />
        </div>
        <div className="actor-birthday">
          <div className="actor-birthday-title">Date de naissance</div>
          <div className="actor-birthday-date">{actor.birthday}</div>
        </div>
        <div>A joué dans {actorMovies.length} films</div>
      </div>
      <div className="actor-cards-container">
        <div className="actor-card-items">
          {currentMovies.map((item) => {
            return (
              <CardMovie
                id={item.id}
                img={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${item.poster_path}`}
                title={item.original_title}
              ></CardMovie>
            );
          })}
        </div>
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
export default Actor;
