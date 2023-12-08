import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movie from "./Containers/Movie/Movie";
import Home from "./Containers/Home/Home";
import Header from "./Components/Header/Header";
import ScrollToTop from "./Components/ScrollToTop";
import Actor from "./Containers/Actor/Actor";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop></ScrollToTop>
      <div className="app-container">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/movie/:id" element={<Movie></Movie>}></Route>
          <Route path="/actor/:id" element={<Actor></Actor>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
