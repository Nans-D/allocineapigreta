import "./Home.css";
import InTheaters from "../InTheaters/InTheaters";
import PopularsMovies from "../PopularsMovies/PopularsMovies";

const Home = () => {
  return (
    <div>
      <div className="in-theaters-app">
        <InTheaters></InTheaters>
      </div>
      <div className="in-theaters-app">
        <PopularsMovies></PopularsMovies>
      </div>
    </div>
  );
};

export default Home;
