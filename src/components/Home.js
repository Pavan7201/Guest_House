import React, { useEffect, useState, useRef } from "react";
import "../css/Home.css";
import { Link, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faMoon,
  faHome,
  faInfoCircle,
  faConciergeBell,
  faBed,
  faImages,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);
  const [isHeaderVisible, setHeaderVisible] = useState(true);
  const navbarRef = useRef(null);

  useEffect(() => {
    scroll.scrollTo("home", { duration: 0 });

    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.68) {
        setHeaderVisible(false); 
      } else {
        setHeaderVisible(true); 
      }
    };

    const handleMouseMove = (event) => {
      if (event.clientY <= 90) {
        setHeaderVisible(true); 
      } else {
        if (window.scrollY > window.innerHeight * 0.8) {
          setHeaderVisible(false); 
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };
    window.addEventListener("resize", handleResize);

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.body.classList.add("dark-mode");
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div>
      <header
        className={`header ${
          isHeaderVisible ? "header-visible" : "header-hidden"
        }`}
      >
        <nav ref={navbarRef}>
          <div className="logo">
            <a href="https://wa.link/at5ion">
              <span>Kingsukh</span>
              <span>Guest House</span>
            </a>
          </div>
          {!isMobile && (
            <div className="nav_links">
              <ul>
                <li className="home">
                  <Link to="home" smooth={true} duration={500}>
                    <FontAwesomeIcon icon={faHome} className="icon" />
                    <span className="link-text">Home</span>
                  </Link>
                </li>
                <li className="home">
                  <Link to="about" smooth={true} duration={500}>
                    <FontAwesomeIcon icon={faInfoCircle} className="icon" />
                    <span className="link-text">About</span>
                  </Link>
                </li>
                <li className="home">
                  <Link to="services" smooth={true} duration={500}>
                    <FontAwesomeIcon icon={faConciergeBell} className="icon" />
                    <span className="link-text">Services</span>
                  </Link>
                </li>
                <li className="home">
                  <Link to="rooms" smooth={true} duration={500}>
                    <FontAwesomeIcon icon={faBed} className="icon" />
                    <span className="link-text">Rooms</span>
                  </Link>
                </li>
                <li className="home">
                  <Link to="gallery" smooth={true} duration={500}>
                    <FontAwesomeIcon icon={faImages} className="icon" />
                    <span className="link-text">Gallery</span>
                  </Link>
                </li>
                <li className="home">
                  <Link to="contact" smooth={true} duration={500}>
                    <FontAwesomeIcon icon={faEnvelope} className="icon" />
                    <span className="link-text">Contact</span>
                  </Link>
                </li>
              </ul>
            </div>
          )}

          <div className="nav_btn">
            <div className="toggle-container" onClick={toggleDarkMode}>
              <div className="toggle-switch">
                <div
                  className={`slider ${isDarkMode ? "dark" : "light"}`}
                ></div>
              </div>
              {isDarkMode ? (
                <FontAwesomeIcon icon={faSun} className="icon sun-icon" />
              ) : (
                <FontAwesomeIcon icon={faMoon} className="icon moon-icon" />
              )}
            </div>
            <a href="https://wa.link/at5ion">
              <button>BOOK NOW</button>
            </a>
          </div>
        </nav>
      </header>

      <div className="section1_container" id="home">
        <p className="text-animation">Simple - Unique - Friendly</p>
        <h1 className="home-text-animation">
          Make Yourself At Home
          <br />
          In Our <span>Guest House.</span>
        </h1>
      </div>

      {isMobile && (
        <footer className="footer-icons">
          <Link to="home" smooth={true} duration={500} className="footer-link">
            <FontAwesomeIcon icon={faHome} className="icon" />
            <span className="icon-name">Home</span>
          </Link>
          <Link to="about" smooth={true} duration={500} className="footer-link">
            <FontAwesomeIcon icon={faInfoCircle} className="icon" />
            <span className="icon-name">About</span>
          </Link>
          <Link
            to="services"
            smooth={true}
            duration={500}
            className="footer-link"
          >
            <FontAwesomeIcon icon={faConciergeBell} className="icon" />
            <span className="icon-name">Services</span>
          </Link>
          <Link to="rooms" smooth={true} duration={500} className="footer-link">
            <FontAwesomeIcon icon={faBed} className="icon" />
            <span className="icon-name">Rooms</span>
          </Link>
          <Link
            to="gallery"
            smooth={true}
            duration={500}
            className="footer-link"
          >
            <FontAwesomeIcon icon={faImages} className="icon" />
            <span className="icon-name">Gallery</span>
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="footer-link"
          >
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <span className="icon-name">Contact</span>
          </Link>
        </footer>
      )}
    </div>
  );
};

export default Home;
