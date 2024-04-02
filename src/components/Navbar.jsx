import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className="navbar">
        <h1 className="navbar__title">MyWebsite</h1>
        <nav className="nav">
            <Link className="nav__link" to="/">Home</Link>
            <Link className="nav__link" to="/about">About</Link>
            <Link className="nav__link" to="/contact">Contact</Link>
        </nav>
    </div>
  )
}

export default Navbar
