import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            {/* Brand */}
            <Link to="/" className="navbar-brand">
                <div className="navbar-logo-mark" />
                <span className="navbar-brand-name">Acme</span>
            </Link>

            {/* Nav links */}
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/features">Features</Link></li>
            </ul>

            {/* CTA buttons */}
            <div className="navbar-actions">
                <Link to="/login" className="navbar-btn-outline">Login</Link>
                <Link to="/signup" className="navbar-btn-solid">Sign Up</Link>
            </div>
        </nav>
    );
};

export default Navbar;