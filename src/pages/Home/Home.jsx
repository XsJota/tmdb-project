// import custom hook
import { useFetch } from "../../hooks/useFetch"

//import css
import "../MoviesBox.css"

// import components
import MovieCard from "../../components/MovieCard/MovieCard"

// import .env
const movieURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const Home = () => {
  const topMoviesURL = `${movieURL}top_rated?${apiKey}`
  const {movies: topMovies, loading} = useFetch(topMoviesURL);

  return (
    <div className='container'>
      <h2 className="title">Melhores filmes:</h2>
      <div className="movies-container">
        {loading && <p>Carregando...</p>}
        {!loading && topMovies.length > 0 && (
          topMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie}/>
          ))
        )}
        {!loading && topMovies.length === 0 && (
          <p>Não há filmes para mostrar no momento!</p>
        )}
      </div>
    </div>
  )
}

export default Home