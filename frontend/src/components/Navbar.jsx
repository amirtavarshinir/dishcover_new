import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import "./home.css";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#1a1a1a" }}>
      <div className="container">
        <Link className="navbar-brand" to="/">Dishcover 🥘</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/login">Login/Register</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/upload">Upload Recipes</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/explore">Explore Recipes</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
