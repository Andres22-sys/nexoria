import '../styles/AppsSection.css';
import appImg2 from '../assets/appImg2.png';  // Mobile app image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faFilePdf } from '@fortawesome/free-solid-svg-icons';

const AppsSection = () => (
    <section id="apps" className="apps">
        <div className="container">
            {/* Section Title */}
            <h2 className="apps-title">Essential apps that protect your data</h2>
            {/* Large card with title, description, button, and embedded message list */}
            <div className="app-card large-card">
                <div className="card-content">
                    <h3 className="card-title">End-to-end encrypted inbox and messages</h3>
                    <p className="card-description">
                        Securely exchange messages with full encryption to protect your privacy.
                    </p>
                    <div>
                        <button className="learn-more-button">Learn More</button>
                    </div>
                </div>
                <div className="message-list">
                    <h4 className="message-title">Invitation to present at Besides</h4>
                    <ul className="messages">
                        <li className="message-item">
                            <span>R. Baynham</span>
                            <span>Feb 8, 2023</span>
                        </li>
                        <li className="message-item">
                            <span>Cooper Kristin</span>
                            <span>Feb 8, 2023</span>
                        </li>
                        <li className="message-item">
                            <span>Cooper Kristin</span>
                            <span>Feb 8, 2023</span>
                        </li>
                        <li className="message-item">
                            <span>R. Baynham</span>
                            <span>Feb 8, 2023</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Grid container for the two smaller cards */}
            <div className="small-cards-grid">
                {/* Small card for mobile applications */}
                <div className="app-card mobile-card">
                    <img src={appImg2} alt="Mobile App" className="app-image" />
                    <h3 className="card-title">Mobile applications</h3>
                    <p className="card-description">
                        Access your tools on the go with a streamlined mobile experience.
                    </p>
                </div>

                {/* Small card with file preview table */}
                <div className="app-card file-card">
                    <h3 className="card-title">Upload, share, and preview any file</h3>
                    <p className="card-description">
                        Easily manage and preview files with convenient sharing options.
                    </p>
                    <div className="file-table">
                        <table>
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Size</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Q1 overview</td>
                                <td><FontAwesomeIcon icon={faFileAlt} /> Files</td>
                                <td>10.5 GB</td>
                            </tr>
                            <tr>
                                <td>Team review</td>
                                <td><FontAwesomeIcon icon={faFilePdf} /> Docx</td>
                                <td>5.5 GB</td>
                            </tr>
                            <tr>
                                <td>Fetch table.py</td>
                                <td><FontAwesomeIcon icon={faFileAlt} /> Code</td>
                                <td>7.5 GB</td>
                            </tr>
                            <tr>
                                <td>Cap table.xls</td>
                                <td><FontAwesomeIcon icon={faFilePdf} /> XLS</td>
                                <td>2.0 GB</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default AppsSection;
