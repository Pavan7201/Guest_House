import React, { useEffect, useState } from "react";
import "../css/About.css";
import about_image from "../assets/out.jpg";
import Book from "./Book";

const About = () => {
  const [isBookOpen, setIsBookOpen] = useState(false);

  useEffect(() => {
    const imgElement = document.querySelector(".about__image img");
    const description = document.querySelector(".section3__description");
    const header = document.querySelector(".section3__header");
    const address = document.querySelectorAll(".address");
    const button = document.querySelector(".about__btn");

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animation = "fadeInLeft 2.5s ease-out forwards";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    if (imgElement) observer.observe(imgElement);

    const fadeInObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animation = "fadeInUp 2.5s ease-out forwards";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (header) fadeInObserver.observe(header);
    if (description) fadeInObserver.observe(description);
    address.forEach((addr) => fadeInObserver.observe(addr));
    if (button) fadeInObserver.observe(button);

    return () => {
      observer.disconnect();
      fadeInObserver.disconnect();
    };
  }, []);

  const handleBookNowClick = () => {
    setIsBookOpen(true);
  };

  const closeBook = () => {
    setIsBookOpen(false);
  };

  return (
    <>
      <div className="section3__subheader">
        <div className="line"></div>
        <h1>ABOUT US</h1>
        <div className="line"></div>
      </div>

      <section className="section3_container about_container">
        <div className="about__image">
          <img src={about_image} alt="about" />
        </div>
        <div className="about__content">
          <h2 className="section3__header">The Best Holidays Start Here!</h2>
          <p className="section3__description">
            Embark on a tranquil journey at our Kingsukh Guest House, enveloped
            by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill,
            Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the
            captivating Panchat Dam. Revel in the embrace of comfort, relish
            delightful meals, and unwind in our verdant garden oasis. Your ideal
            retreat beckons, promising a harmonious blend of nature's beauty and
            heartfelt hospitality. Explore the hidden gems of Purulia, creating
            memories that linger long after your stay.
          </p>
          <p className="address">
            <a href="https://maps.app.goo.gl/7wYUEB4tvR7NMHbcA">
              Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal
              723156
            </a>
          </p>
          <p className="address">
            <a href="tel:+919007062180">Contact us: +91 9007062180</a>
          </p>
          <div className="about__btn">
            <button onClick={handleBookNowClick}>BOOK NOW</button>
          </div>
        </div>
        {isBookOpen && <Book isOpen={isBookOpen} closeBook={closeBook} />}
      </section>
    </>
  );
};

export default About;
