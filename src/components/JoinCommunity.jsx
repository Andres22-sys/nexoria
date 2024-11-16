import '../styles/JoinCommunity.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

const JoinCommunity = () => (
    <section id="join" className="join-community">
        <div className="container">
            <div className="community-content">
                <FontAwesomeIcon icon={faDiscord} className="discord-icon"/>
                <h2 className="community-title">Join the community</h2>
                <p className="community-description">
                    Join our 400,000+ person community and contribute to a more private and decentralized internet.
                    Start for free.
                </p>
                <button className="join-button">Join Discord</button>
            </div>
        </div>
    </section>
);

export default JoinCommunity;
