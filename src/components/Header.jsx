// src/components/Header.jsx
import '../styles/Header.css'
import heroImage from '../assets/hero.png'

const Header = () => (
    <header className="header">
        <div className="container">
            <h1 className="header-title">A CRM dashboard for engineering teams</h1>
            <p className="header-subtitle">Manage all your leads efficiently and securely.</p>
            <img className="header-image" src={heroImage} alt="Dashboard Screenshot" />
        </div>
    </header>
);

export default Header;
