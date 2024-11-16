import '../styles/Testimonials.css';
import cameron from '/src/assets/cameron.png';
import jenny from '/src/assets/jenny.png';
import howard from '/src/assets/howard.png';

const Testimonials = () => (
    <section id="testimonials" className="testimonials">
        <div className="container">
            <h2 className="testimonials-title">What our clients say</h2>
            <p className="testimonials-description">
                Hear from our satisfied clients who have improved their workflows with our CRM dashboard.
            </p>
            <div className="testimonials-grid">
                <div className="testimonial">
                    <div className="testimonial-header">
                        <img src={cameron} alt="Cameron Williamson" className="profile-pic"/>
                        <div className="testimonial-info">
                            <h3 className="client-name">Cameron Williamson</h3>
                            <p className="client-role">Web Designer</p>
                        </div>
                    </div>
                    <p className="testimonial-quote">&#34;This dashboard has streamlined our processes
                        immensely!&#34;</p>
                </div>

                <div className="testimonial">
                    <div className="testimonial-header">
                        <img src={howard} alt="Esther Howard" className="profile-pic"/>
                        <div className="testimonial-info">
                            <h3 className="client-name">Esther Howard</h3>
                            <p className="client-role">Web Developer</p>
                        </div>
                    </div>
                    <p className="testimonial-quote">&#34;A game changer for managing leads and client data!&#34;</p>
                </div>

                <div className="testimonial">
                    <div className="testimonial-header">
                        <img src={jenny} alt="Jenny Wilson" className="profile-pic"/>
                        <div className="testimonial-info">
                            <h3 className="client-name">Jenny Wilson</h3>
                            <p className="client-role">UI/UX Designer</p>
                        </div>
                    </div>
                    <p className="testimonial-quote">&#34;Our productivity has significantly increased thanks to this
                        tool!&#34;</p>
                </div>
            </div>
            <div className="testimonial-navigation">
                <button className="nav-button">←</button>
                <button className="nav-button">→</button>
            </div>
        </div>
    </section>
);

export default Testimonials;
