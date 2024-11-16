// src/components/Features.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faTasks, faChartLine, faChartPie, faCalendarAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../styles/Features.css';

const Features = ( ) => (
    <section id="features" className="features">
        <div className="container">
            <div className="features-header"><h2 className="features-title">Powerful features to help you manage all
                your leads</h2> <p className="features-description">Explore the tools that streamline your workflow and
                maximize your efficiency.</p></div>
            <div className="features-grid">
                <div className="feature-item">
                    <FontAwesomeIcon icon={faUser} className="feature-icon"/>
                    <h3 className="feature-item-title">User Information</h3>
                    <p className="feature-item-description">Easily access and manage detailed user profiles and contact
                        information.</p>
                </div>
                <div className="feature-item">
                    <FontAwesomeIcon icon={faTasks} className="feature-icon"/>
                    <h3 className="feature-item-title">Deal Tracking</h3>
                    <p className="feature-item-description">Track deals at every stage to stay on top of potential
                        business opportunities.</p>
                </div>
                <div className="feature-item">
                    <FontAwesomeIcon icon={faChartLine} className="feature-icon"/>
                    <h3 className="feature-item-title">Pipeline Management</h3>
                    <p className="feature-item-description">Organize and visualize your sales pipeline for efficient
                        lead management.</p>
                </div>
                <div className="feature-item">
                    <FontAwesomeIcon icon={faChartPie} className="feature-icon"/>
                    <h3 className="feature-item-title">Reporting Dashboard</h3>
                    <p className="feature-item-description">Get real-time insights and metrics with customizable
                        reporting tools.</p>
                </div>
                <div className="feature-item">
                    <FontAwesomeIcon icon={faCalendarAlt} className="feature-icon"/>
                    <h3 className="feature-item-title">Meeting Scheduling</h3>
                    <p className="feature-item-description">Schedule and manage meetings seamlessly with integrated
                        calendar tools.</p>
                </div>
                <div className="feature-item">
                    <FontAwesomeIcon icon={faEnvelope} className="feature-icon"/>
                    <h3 className="feature-item-title">Email Tracking</h3>
                    <p className="feature-item-description">Monitor email engagement to optimize communication and
                        follow-up timing.</p>
                </div>
            </div>
        </div>
    </section>
);

export default Features;
