import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movie from "./Components/Movie/Movie";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/movie/:id" element={<Movie></Movie>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
