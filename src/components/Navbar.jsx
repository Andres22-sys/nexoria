import { useState } from 'react';
import '../styles/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
            <div className="container">
                {/* Hamburger icon for mobile */}
                <div className="hamburger-icon" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
                </div>

                {/* Navbar brand logo */}
                <h1 className="navbar-logo">Nexoria</h1>

                {/* Navigation links */}
                <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#apps">Apps</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                    <li><a href="#join">Join Community</a></li>
                    <li><a href="#news">News</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
