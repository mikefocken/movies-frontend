import "./App.css";
import Header from "./Componets/Header/Header";
import MovieList from "./Componets/MovieList/MovieList";
import MovieInfo from "./Componets/MovieInfo/MovieInfo";
import NewMovieForm from "./Componets/NewMovieForm/NewMovieForm";
import React, { useState, useEffect } from "react";
import initData from "./data/data";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(initData);
  }, []);

  const handleNewMovie = (newMovie) => {
    const updatedMovies = [...movies, newMovie];
    setMovies(updatedMovies);
  };

  const selectedMovie = {
    title: "Forrest Gump",
    runningTime: 142,
    genre: "Romantic Drama",
  };

  return (
    <div className="App">
      <Header />
      <div className="flex-container">
        <MovieList movies={movies} />
        <MovieInfo movieobj={selectedMovie} />
        <NewMovieForm onNewMovie={handleNewMovie} />
      </div>
    </div>
  );
}

export default App;
