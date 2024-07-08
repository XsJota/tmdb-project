// import css
import "./Navbar.css";

// import icons
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

// import LInk
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav id="nav">
        <h2>
            <Link to='/'><BiCameraMovie /> Film</Link>
        </h2>
        <form>
            <input type="text" placeholder="Busque um filme" />
            <button>
                <BiSearchAlt2 />
            </button>
        </form>
    </nav>
  )
}

export default Navbar