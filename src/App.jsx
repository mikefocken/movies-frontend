import "./App.css";
import Header from "./Componets/Header/Header";
import MovieList from "./Componets/MovieList/MovieList";
import MovieInfo from "./Componets/MovieInfo/MovieInfo";

function App() {
  const selectedMovie = {
    title: "Forrest Gump",
    runningTime: 142,
    genre: "Romantic Drama",
  };

  return (
    <div className="App">
      <Header />
      <MovieList />
      <MovieInfo movieobj={selectedMovie} />
    </div>
  );
}

export default App;
