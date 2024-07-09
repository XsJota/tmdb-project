// import css
import "./Navbar.css";

// import icons
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

// import Link
import { Link, useNavigate } from "react-router-dom";

// import hook
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`);
    setSearch('');
  }
  return (
    <nav id="nav">
        <h2>
            <Link to='/'><BiCameraMovie /> Film</Link>
        </h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Busque um filme" onChange={(e) => setSearch(e.target.value)} />
            <button>
                <BiSearchAlt2 />
            </button>
        </form>
    </nav>
  )
}

export default Navbar