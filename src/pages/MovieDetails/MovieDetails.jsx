// import css
import './MovieDetails.css'

// import hook
import { useFetch } from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'

// import components
import MovieCard from '../../components/MovieCard/MovieCard'

// import icons
import { BsFillFileEarmarkTextFill, BsGraphUp, BsHourglassSplit, BsWallet2 } from 'react-icons/bs'

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const MovieDetail = () => {
  const {id} = useParams();
  const movieURl = `${moviesURL}${id}?${apiKey}`
  const {movies, loading} = useFetch(movieURl)

  return (
    <div className='movies-details-page'>
      {loading && <p>Carregando...</p>}
      {!loading && movies && (
        <>
          <MovieCard movie={movies} showLink={false}/>
          <p className='tagline'>{movies.tagline}</p>
          <div className="info">
            <h2>
              <BsWallet2 /> Orçamento:
            </h2>
            <p>{movies.budget}</p>
          </div>
          <div className="info">
            <h2>
              <BsGraphUp /> Receita:
            </h2>
            <p>{movies.revenue}</p>
          </div>
          <div className="info">
            <h2>
              <BsHourglassSplit /> Duração:
            </h2>
            <p>{movies.runtime} minutos</p>
          </div>
          <div className="description">
            <h2>
              <BsFillFileEarmarkTextFill /> Descrição:
            </h2>
            <p>{movies.overview}</p>
          </div>
        </>
      )}
    </div>
  )
}

export default MovieDetail