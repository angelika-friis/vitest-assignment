import { useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import AddMovie from "../../components/AddMovie/AddMovie";

const MovieContainer = ({ token }) => {
    const [movieList, setMovieList] = useState([]);

    return (
        <>
            {token &&
                <div>
                    <h1>Lägg till ny film</h1>
                    <AddMovie movieList={movieList} setMovieList={setMovieList} token={token} />
                    <h1>Lista med filmer</h1>
                    <MovieList movieList={movieList} setMovieList={setMovieList} token={token} />
                </div>}
        </>
    )
}

export default MovieContainer;