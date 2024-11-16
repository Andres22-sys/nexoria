import '../styles/TransparencySection.css';
import transparencyImg from '../assets/transparentsecImg.png';
import productUi from '../assets/productUi.png'

const TransparencySection = () => (
    <section className="transparency-section">
        <div className="container transparency-container">
            <div className="top-section">
                {/* Main content card */}
                <div className="main-card">
                    <h2 className="section-title">Transparent, audited, &amp; open source</h2>
                    <p className="section-description">
                        Built with transparency in mind, our platform is fully audited and open source, ensuring
                        security and trust.
                    </p>

                    {/* Button Container */}
                    <div className="button-container">
                        <button className="feature-button">Browse all features</button>
                    </div>
                </div>

                {/* Code snippet card */}
                <div className="code-snippets">
                    <img src={transparencyImg} alt="Code snippet" className="code-snippet-image"/>
                </div>
            </div>

            {/* Bottom section with two smaller cards */}
            <div className="bottom-section">
                <div className="bottom-card">
                    <h3 className="card-title">Product Mail</h3>
                    <p className="card-description">
                        Effortlessly manage your email communications with secure, organized, and easy-to-use
                        mail features.
                    </p>
                    <div className="emailCard-content">
                        {/* Mockup of an email message */}
                        <div className="email-mockup">
                            <p className="email-header">New Message</p>
                            <p className="email-context"><strong>To:</strong>&nbsp;&nbsp;&nbsp;&nbsp; Sajib H.</p>
                            <p className="email-context"><strong>Subject:</strong>&nbsp;&nbsp;&nbsp;&nbsp; Dacilisis
                                tellus tinc</p>
                            <p className="email-context">
                                <strong>From:</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; adclisis@email.com
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bottom-card">
                    <h3 className="card-title">Product UI</h3>
                    <p className="card-description">
                        Experience a streamlined, user-friendly interface designed to enhance productivity and simplify
                        workflows.
                    </p>
                    <div className="emailCard-content">
                        {/* Replace the UI mockup rows with an image */}
                        <img src={productUi} alt="UI Mockup" className="ui-mockup-image"/>
                    </div>
                </div>

            </div>
        </div>
    </section>
);

export default TransparencySection;
