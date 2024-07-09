// import css
import '../MoviesBox.css';

// import hooks
import { useFetch } from '../../hooks/useFetch';
import { useSearchParams } from 'react-router-dom';

// import components
import MovieCard from '../../components/MovieCard/MovieCard';

const searchMovies = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

const Search = () => {
    const [searchParams] = useSearchParams()
    const query = searchParams.get('q')
    const searchURL = `${searchMovies}?${apiKey}&query=${query}`
    const {movies, loading} = useFetch(searchURL)

  return (
    <div className='container'>
      <h2 className="title">Resultados da busca: <span className='query-text'>{query}</span></h2>
      <div className="movies-container">
        {loading && <p>Carregando...</p>}
        {!loading && movies.length > 0 && (
          movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie}/>
          ))
        )}
        {!loading && movies.length === 0 && (
          <p>Não há filmes para mostrar no momento!</p>
        )}
      </div>
    </div>
  )
}

export default Search