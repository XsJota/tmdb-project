// import icons
import { FaStar } from "react-icons/fa"

// import Link
import { Link } from "react-router-dom"

const image = import.meta.env.VITE_IMG

const MovieCard = ({movie, showLink = true}) => {
  return (
    <div className="movie-card">
        <h2>{movie.title}</h2>
        <img src={`${image}${movie.poster_path}`} alt={movie.title} />
        <p><FaStar /> {movie.vote_average}</p>
        {showLink && <Link to={`/movies/${movie.id}`}>Detalhes</Link>}
    </div>
  )
}

export default MovieCard