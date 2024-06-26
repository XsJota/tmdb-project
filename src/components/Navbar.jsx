// import css
import { Link } from "react-router-dom";
import "./Navbar.css";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";



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