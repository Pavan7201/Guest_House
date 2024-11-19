import React, { useEffect, useState } from "react";
import "../css/footer.css";
import Facebook from "../assets/facebook.png";
import Instagram from "../assets/instagram.png";
import Youtube from "../assets/youtube.png";
import Twitter from "../assets/twitter.png";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const pageHeight = document.documentElement.scrollHeight;

    if (scrollPosition >= pageHeight - 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer className="footer">
      <div className="section__container footer__container">
        <div className="footer__col">
          <div className="logo">
            <a href="/home">
              <h4>Kingsukh Guest House</h4>
            </a>
          </div>
          <p className="section__description">
            Discover a world of comfort, luxury, and adventure as you explore
            our curated selection of hotels, making every moment of your getaway
            truly extraordinary.
          </p>
        </div>
        <div className="footer__col">
          <h4>QUICK LINKS</h4>
          <ul className="footer__links">
            <li>
              <a href="/">Browse Destinations</a>
            </li>
            <li>
              <a href="/">Special Offers &amp; Packages</a>
            </li>
            <li>
              <a href="/">Room Types &amp; Amenities</a>
            </li>
            <li>
              <a href="/">Customer Reviews &amp; Ratings</a>
            </li>
            <li>
              <a href="/">Travel Tips &amp; Guides</a>
            </li>
          </ul>
        </div>
        <div className="footer__col">
          <h4>OUR SERVICES</h4>
          <ul className="footer__links">
            <li>
              <a href="/">Concierge Assistance</a>
            </li>
            <li>
              <a href="/">Flexible Booking Options</a>
            </li>
            <li>
              <a href="/">Airport Transfers</a>
            </li>
            <li>
              <a href="/">Wellness &amp; Recreation</a>
            </li>
          </ul>
        </div>
        <div className="footer__col">
          <h4>CONTACT US</h4>
          <ul className="footer__links">
            <li>
              <a href="https://maps.app.goo.gl/7wYUEB4tvR7NMHbcA">
                Address: Beside Barshal Water Tank, Manpur, Barhanti, West
                Bengal 723156
              </a>
            </li>
            <li>
              <a href="mailto:kkghosh0099@gmail.com">kkghosh0099@gmail.com</a>
            </li>
            <li>
              <a href="tel:+919007062180">+91 9007062180</a>
            </li>
          </ul>
          <div className="footer__socials">
            <a href="/">
              <img src={Facebook} alt="facebook" />
            </a>
            <a
              href="https://www.instagram.com/kingsukhguesthouse/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Instagram} alt="instagram" />
            </a>
            <a href="/">
              <img src={Youtube} alt="youtube" />
            </a>
            <a href="/">
              <img src={Twitter} alt="twitter" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer__bar">
        Copyright © 2024 Kingsukh Guest House. All rights reserved.
      </div>
      {isVisible && (
        <div className="back-to-top" onClick={scrollToTop}>
          <i className="fas fa-arrow-up"></i>
        </div>
      )}
    </footer>
  );
};

export default Footer;
