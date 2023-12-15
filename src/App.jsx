import "./App.css";
import Header from "./Componets/Header/Header";
import MovieList from "./Componets/MovieList/MovieList";
import MovieInfo from "./Componets/MovieInfo/MovieInfo";
import NewMovieForm from "./Componets/NewMovieForm/NewMovieForm";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

// Put any other imports below so that CSS from your
// components takes precedence over default styles.

function App() {
  const [movies, setMovies] = useState([]);

  const [activeIndex, setActiveIndex] = useState(-1);

  const fetchMovies = async () => {
    try {
      const response = await axios.get("http://localhost:5122/api/Movies");
      // console.log(response);
      setMovies(response.data);
    } catch (error) {
      console.warn("Error in fetchMovies request:", error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const selectedMovie = movies[activeIndex];

  return (
    <div className="App">
      <Header />

      <div className="flex-container">
        <MovieList
          movies={movies}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
        <MovieInfo movieObj={selectedMovie} />
        <NewMovieForm onNewMovie={fetchMovies} />
      </div>
    </div>
  );
}

export default App;
