import './App.css';
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Slider from "./components/Slider";
import AboutUs from "./components/AboutUs";
import SearchBar from "./components/SearchBar";
import Info from "./components/Info";
import NewsSection from "./components/NewsSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
        <Header />
        <Welcome />
        <Slider />
        <AboutUs />
        <SearchBar/>
        <Info />
        <NewsSection />
        <Footer />
    </div>
  );
}

export default App;
