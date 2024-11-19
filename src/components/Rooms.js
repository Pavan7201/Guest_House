import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import smallRoom from "../assets/small.jpg";
import largeRoom from "../assets/large.jpg";
import "../css/Rooms.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Rooms = () => {
  const sliderRef = useRef(null);
  const [expandedDescriptions, setExpandedDescriptions] = useState({});
  const [activeSlide, setActiveSlide] = useState(2);

  const toggleDescription = (id) => {
    setExpandedDescriptions((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const resetDescriptions = (index) => {
    setActiveSlide(index);

    setExpandedDescriptions((prevState) => {
      const newDescriptions = { ...prevState };

      Object.keys(newDescriptions).forEach((key) => {
        if (parseInt(key) !== rooms[index].id) {
          newDescriptions[key] = false;
        }
      });

      return newDescriptions;
    });
  };

  useEffect(() => {
    const subheader = document.querySelector(".section4__subheader");
    const header = document.querySelector(".section4__header");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animation = "fadeInUp 1.5s ease-out forwards";
          }
        });
      },
      { threshold: 1 }
    );

    observer.observe(subheader);
    observer.observe(header);

    return () => observer.disconnect();
  }, []);

  const rooms = [
    {
      id: 1,
      image: smallRoom,
      title: "Cozy Haven Room",
      description:
        "Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation.",
      price: "₹ 1000/night",
      link: "https://wa.link/at5ion",
      offer: 20,
    },
    {
      id: 2,
      image: largeRoom,
      title: "Spacious Serenity Suite",
      description:
        "Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance.",
      price: "₹ 1500/night",
      link: "https://wa.link/at5ion",
      offer: 0,
    },
    {
      id: 3,
      image: smallRoom,
      title: "Cozy Haven Room",
      description:
        "Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation.",
      price: "₹ 1000/night",
      link: "https://wa.link/at5ion",
      offer: 20,
    },
    {
      id: 4,
      image: largeRoom,
      title: "Spacious Serenity Suite",
      description:
        "Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance.",
      price: "₹ 1500/night",
      link: "https://wa.link/at5ion",
      offer: 0,
    },
    {
      id: 5,
      image: smallRoom,
      title: "Cozy Haven Room",
      description:
        "Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation.",
      price: "₹ 1000/night",
      link: "https://wa.link/at5ion",
      offer: 20,
    },
  ];

  const settings = {
    dots: rooms.length > 3,
    infinite: rooms.length > 1,
    speed: 500,
    slidesToShow: Math.min(rooms.length, 3),
    slidesToScroll: 1,
    centerMode: rooms.length >= 3,
    centerPadding: "0",
    focusOnSelect: true,
    initialSlide: Math.min(activeSlide, rooms.length - 1),
    afterChange: resetDescriptions,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(rooms.length, 3),
          centerMode: true,
          centerPadding: "0",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: Math.min(rooms.length, 2),
          centerMode: true,
          centerPadding: "0",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: Math.min(rooms.length, 1),
          centerMode: true,
          centerPadding: "0",
        },
      },
    ],
  };

  return (
    <section className="section4__container room__container" id="rooms">
      <div className="section4__subheader">
        <div className="line left-line"></div>
        <h1>OUR LIVING ROOM</h1>
        <div className="line right-line"></div>
      </div>
      <h3 className="section4__header">
        The Most Memorable Rest Time Starts Here.
      </h3>
      <Slider ref={sliderRef} className="custom-slider" {...settings}>
        {rooms.map((room) => (
          <div className="room__card" key={room.id}>
            <div className="room__card__image">
              {room.offer > 0 && (
                <div className="offer-tag">
                  <span>-{room.offer}%</span>
                </div>
              )}
              <div className="room__card__icons">
                <span>
                  <i className="ri-heart-fill"></i>
                </span>
                <span>
                  <i className="ri-paint-fill"></i>
                </span>
                <span>
                  <i className="ri-shield-star-line"></i>
                </span>
              </div>
              <img src={room.image} alt={room.title} />
            </div>
            <div className="room__card__details">
              <h3>{room.title}</h3>
              <p className={expandedDescriptions[room.id] ? "show-full" : ""}>
                {expandedDescriptions[room.id]
                  ? room.description
                  : `${room.description.slice(0, 50)}... `}
                <span
                  className="toggle-text"
                  onClick={() => toggleDescription(room.id)}
                >
                  {expandedDescriptions[room.id] ? " Show less" : " Show more"}
                </span>
              </p>
              <h5>
                <span>{room.price}</span>
              </h5>
              <a href={room.link}>
                <button className="btn">BOOK NOW</button>
              </a>
            </div>
          </div>
        ))}
      </Slider>
      {rooms.length > 2 && (
        <div className="carousel-controls">
          <button onClick={() => sliderRef.current.slickPrev()}>
            <FaArrowLeft />
          </button>
          <button onClick={() => sliderRef.current.slickNext()}>
            <FaArrowRight />
          </button>
        </div>
      )}
    </section>
  );
};

export default Rooms;
