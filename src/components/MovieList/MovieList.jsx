import { useEffect } from "react";
import "./MovieList.css";

const MovieList = ({ movieList, setMovieList, token }) => {

  useEffect(() => {
    token && fetchMovies();
  }, [token])

  const fetchMovies = async () => {
    const moviesRes = await fetch(
      "https://tokenservice-jwt-2025.fly.dev/movies",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!moviesRes.ok) {
      alert("Misslyckades att hämta filmer");
      return;
    }

    const moviesList = await moviesRes.json();
    setMovieList(moviesList);;
  }

  return (
    <ul>
      {movieList.length > 0 && movieList.map(movie => (
        <li key={movie.id}>
          <strong>Titel: </strong><p>{movie.title}</p>
          <strong>Beskrivning: </strong><p>{movie.description}</p>
          <strong>Produktions år: </strong><p>{movie.productionYear}</p>
          <strong>Regissör: </strong><p>{movie.director}</p>
        </li>
      ))}
    </ul>
  )
}

export default MovieList;