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
      <div className="flex-container">
        <MovieList />
        <MovieInfo movieobj={selectedMovie} />
      </div>
    </div>
  );
}

export default App;
