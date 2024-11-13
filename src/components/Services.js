import React, { useEffect } from "react";
import "../css/Services.css";

const Services = () => {
  useEffect(() => {
    const subheader = document.querySelector(".section5__subheader");
    const header = document.querySelector(".section5__header");
    const listItems = document.querySelectorAll(".service__list li");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === subheader) {
              entry.target.style.animation = "fadeInUp 1.5s ease-out forwards";
            } else if (entry.target === header) {
              entry.target.style.animation = "fadeInUp 1.5s ease-out forwards";
            } else if (entry.target.classList.contains("service__list-item")) {
              entry.target.style.animation = entry.target.dataset.animation;
            }
          }
        });
      },
      { threshold: 1 }
    );

    observer.observe(subheader);
    observer.observe(header);

    listItems.forEach((item, index) => {
      item.classList.add("service__list-item");
      item.dataset.animation =
        index % 2 === 0
          ? `fadeInLeft 2.5s ease-out forwards ${index * 0.2}s`
          : `fadeInRight 2.5s ease-out forwards ${index * 0.2}s`;

      observer.observe(item);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="service" id="service">
      <div className="section5__container service__container">
        <div className="service__content">
          <div className="section5__subheader">
            <div className="line left-line"></div>
            <h1>SERVICES</h1>
            <div className="line right-line"></div>
          </div>
          <h2 className="section5__header">Strive Only For The Best.</h2>
          <ul className="service__list">
            <li>
              <span>
                <i className="ri-shield-star-line"></i>
              </span>
              High Class Security
            </li>
            <li>
              <span>
                <i className="ri-24-hours-line"></i>
              </span>
              24 Hours Room Service
            </li>
            <li>
              <span>
                <i className="ri-restaurant-2-fill"></i>
              </span>
              Restaurant
            </li>
            <li>
              <span>
                <i className="ri-map-2-line"></i>
              </span>
              Tourist Guide Support
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
