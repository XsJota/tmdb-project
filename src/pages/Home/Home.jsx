// import custom hook
import { useFetch } from "../../hooks/useFetch"

// import css
import MovieCard from "../../components/MovieCard/MovieCard"

// import .env
const movieURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const Home = () => {
  const topMoviesURL = `${movieURL}top_rated?${apiKey}`
  const {movies: topMovies, loading} = useFetch(topMoviesURL);

  return (
    <div className='container'>
      <h2>Melhores filmes:</h2>
      <div className="movies-container">
        {loading && <p>Carregando...</p>}
        {topMovies.length > 0 ? (
          topMovies.map((movie) => (
            <MovieCard movie={movie}/>
          ))
        ) : (<p>Não há filmes para mostrar no momento!</p>)}
      </div>
    </div>
  )
}

export default Home