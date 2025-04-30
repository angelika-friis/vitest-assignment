import './App.css';
import MovieContainer from './containers/MoviesContainer/MoviesContainer';
import Login from './components/Login/Login';
import { useState } from "react";

function App() {
  const [token, setToken] = useState("");

  return (
    <>
      {!token && <Login token={token} setToken={setToken}/>}
      <MovieContainer token={token}/>
    </>
  )
}

export default App
