import '../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
    <footer className="footer">
        <div className="footer-top">
            {/* Brand and Newsletter */}
            <div className="footer-brand">
                <h2 className="footer-logo">
                    Nexoria
                </h2>
                <div className="newsletter-box">
                    <p>Subscribe to our newsletter</p>
                    <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                    <input
                        type="email"
                        id="newsletter-email"
                        name="email"
                        placeholder="Enter your email"
                        className="newsletter-input"
                        autoComplete="email"
                    />
                    <button className="newsletter-button">Subscribe</button>
                </div>

            </div>

            {/* Main Pages */}
            <div className="footer-links">
                <h3>Pages</h3>
                <div className="footer-links-columns">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Blog</li>
                        <li>Pricing</li>
                    </ul>
                    <ul>
                        <li>Features</li>
                        <li>Careers</li>
                        <li>Request a demo</li>
                        <li>Login</li>
                        <li>Sign Up</li>
                    </ul>
                </div>
            </div>

            {/* Utility Pages */}
            <div className="footer-utility-links">
                <h3>Utility Pages</h3>
                <ul>
                    <li>Style guide</li>
                    <li>Password protected</li>
                    <li>404 Not found</li>
                    <li>Licenses</li>
                    <li>Changelog</li>
                </ul>
            </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
            <p>Copyright © Product | Designed by Webocean LTD</p>
            <div className="social-icons">
                <FontAwesomeIcon icon={faFacebookF}/>
                <FontAwesomeIcon icon={faTwitter}/>
                <FontAwesomeIcon icon={faLinkedinIn}/>
                <FontAwesomeIcon icon={faInstagram}/>
            </div>
        </div>
    </footer>
);

export default Footer;
