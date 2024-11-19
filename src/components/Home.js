// Home.js
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
import Book from "./Book";

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark" ? true : false
  );
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);
  const [isHeaderVisible, setHeaderVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [isBookOpen, setIsBookOpen] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    scroll.scrollTo("home", { duration: 0 });
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }

    const handleScroll = () => {
      setHeaderVisible(window.scrollY <= window.innerHeight * 0.68);
      const sections = [
        "home",
        "about",
        "services",
        "rooms",
        "gallery",
        "contact",
      ];
      let currentSection = "home";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const sectionTop = rect.top;
          const sectionBottom = rect.bottom;
          const viewportHeight = window.innerHeight;

          if (
            sectionTop <= viewportHeight * 0.6 &&
            sectionBottom >= viewportHeight * 0.4
          ) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    const handleMouseMove = (event) => {
      if (event.clientY <= 90 || window.scrollY <= window.innerHeight * 0.8) {
        setHeaderVisible(true);
      } else {
        setHeaderVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  });

  const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  const handleBookNowClick = () => {
    setIsBookOpen(true);
  };

  const closeBook = () => {
    setIsBookOpen(false);
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
            <a href="#home" onClick={() => window.location.reload()}>
              <span>Kingsukh</span>
              <span>Guest House</span>
            </a>
          </div>
          {!isMobile && (
            <div className="nav_links">
              <ul>
                {[
                  { name: "Home", to: "home" },
                  { name: "About", to: "about" },
                  { name: "Services", to: "services" },
                  { name: "Rooms", to: "rooms" },
                  { name: "Gallery", to: "gallery" },
                  { name: "Contact", to: "contact" },
                ].map(({ name, to }) => (
                  <li
                    key={name}
                    className={activeSection === to ? "active-link" : ""}
                  >
                    <Link to={to} smooth={true} duration={500}>
                      <span className="link-text">{name}</span>
                    </Link>
                  </li>
                ))}
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
              <FontAwesomeIcon
                icon={isDarkMode ? faSun : faMoon}
                className="icon"
              />
            </div>
            <button onClick={handleBookNowClick}>BOOK NOW</button>
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
          {[
            { name: "Home", icon: faHome, to: "home" },
            { name: "About", icon: faInfoCircle, to: "about" },
            { name: "Services", icon: faConciergeBell, to: "services" },
            { name: "Rooms", icon: faBed, to: "rooms" },
            { name: "Gallery", icon: faImages, to: "gallery" },
            { name: "Contact", icon: faEnvelope, to: "contact" },
          ].map(({ name, icon, to }) => (
            <Link
              key={name}
              to={to}
              smooth={true}
              duration={500}
              className={`footer-link ${
                activeSection === to ? "active-link" : ""
              }`}
            >
              <FontAwesomeIcon icon={icon} className="icon" />
              <span className="icon-name">{name}</span>
            </Link>
          ))}
        </footer>
      )}
      <Book isOpen={isBookOpen} closeBook={closeBook} />
    </div>
  );
};

export default Home;
