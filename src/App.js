import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import Bookings from "./components/Bookings";
import About from "./components/About";
import Rooms from "./components/Rooms";
import Services from "./components/Services";
import Count from "./components/Count";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Map from "./components/Map";
import Footer from "./components/footer";
import "../src/App.css";

function App() {
  return (
    <Router>
      <div id="home">
        <Home />
      </div>
      <Bookings />
      <div id="about">
        <About />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="rooms">
        <Rooms />
      </div>
      <Count />
      <div id="gallery">
        <Gallery />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Map />
      <Footer />
    </Router>
  );
}

export default App;
