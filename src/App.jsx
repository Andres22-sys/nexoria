import Header from './components/Header';
import Features from './components/Features';
import AppsSection from './components/AppSection.jsx';
import TransparencySection from './components/TransperacySection.jsx';
import Testimonials from './components/Testimonials';
import JoinCommunity from './components/JoinCommunity';
import NewsSection from './components/NewsSection';
import Footer from './components/Footer';
import Navbar from "./components/Navbar.jsx";
import "./App.css";

const App = () => (
    <div className="App">
        <Navbar/>
        <Header />
        <Features />
        <AppsSection />
        <TransparencySection />
        <Testimonials />
        <JoinCommunity />
        <NewsSection />
        <Footer />
    </div>
);

export default App;
