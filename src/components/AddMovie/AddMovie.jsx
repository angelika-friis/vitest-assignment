import { useState } from "react";
import "./AddMovie.css";

const AddMovie = ({ movieList, setMovieList, token }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [productionYear, setProductionYear] = useState('');
    const [director, setDirector] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
    
        try {
            const response = await fetch(
                "https://tokenservice-jwt-2025.fly.dev/movies",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        title,
                        description,
                        productionYear,
                        director,
                    }),
                }
            );
    
            if (!response.ok) {
                throw new Error("Failed to add movie");
            }
    
            const newMovie = await response.json();
    
            setMovieList([...movieList, newMovie]);
            setTitle('');
            setDescription('');
            setProductionYear('');
            setDirector('');
        } catch (err) {
            setError(err.message || "problem adding movie");
        }
    }
    

    return (
        <form onSubmit={e => handleSubmit(e)}>
            <input type="text"
                required minLength="10"
                placeholder="titel"
                value={title}
                onChange={e => setTitle(e.target.value)} />
            <input
                type="text"
                required
                placeholder="beskrivning"
                minLength="30"
                value={description}
                onChange={e => setDescription(e.target.value)} />
            <input
                type="number"
                required min='1900'
                placeholder="produktions år"
                value={productionYear}
                onChange={e => setProductionYear(e.target.value)} />
            <input
                type="text"
                required
                minLength="10"
                placeholder="Regissör"
                value={director}
                onChange={e => setDirector(e.target.value)} />
            <input
                type="submit"
                value="Lägg till film" />
            {error && <p>{error}</p>}
        </form>
    )

}

export default AddMovie;