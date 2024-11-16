import '../styles/NewsSection.css';
import blogImage from '../assets/blogImage.png';
import blogImage2 from '../assets/blogImage2.png';
import blogImage3 from '../assets/blogImage3.png';

const NewsSection = () => (
    <section id="news" className="news-section">
        <div className="news-header">
            <h2 className="news-title">Product in the news</h2>
            <button className="browse-news-button">Browse all news</button>
        </div>

        <div className="news-cards">
            <div className="news-card">
                <div className="news-image">
                    <img src={blogImage} alt="News 1" />
                </div>
                <h3 className="news-card-title">Product Mail is taking on Gmail by betting on privacy</h3>
                <p className="news-card-description">
                    Product Mail is challenging Gmail by focusing on enhanced privacy and data protection,
                    offering users a secure alternative for email communications.</p>
                <div className="news-card-footer">
                    <span className="news-date">February 8, 2023</span>
                    <a href="#" className="read-more">Read more →</a>
                </div>
            </div>

            <div className="news-card">
                <div className="news-image">
                    <img src={blogImage2} alt="News 2" />
                </div>
                <h3 className="news-card-title">Wants You To Sign Out Of Google Workspace Forever</h3>
                <p className="news-card-description">
                    Encouraging a shift from Google Workspace, this article highlights the benefits of
                    independent email solutions designed for privacy and collaboration.</p>
                <div className="news-card-footer">
                    <span className="news-date">February 8, 2023</span>
                    <a href="#" className="read-more">Read more →</a>
                </div>
            </div>

            <div className="news-card">
                <div className="news-image">
                    <img src={blogImage3} alt="News 3" />
                </div>
                <h3 className="news-card-title">The Ultimate Guide to the Best Email Encryption Services for 2023</h3>
                <p className="news-card-description">
                    Explore the top email encryption services of 2023, ensuring secure communication and
                    safeguarding sensitive information from unauthorized access.
                </p>
                <div className="news-card-footer">
                    <span className="news-date">February 8, 2023</span>
                    <a href="#" className="read-more">Read more →</a>
                </div>
            </div>
        </div>
    </section>
);

export default NewsSection;
