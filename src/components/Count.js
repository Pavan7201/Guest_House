import React, { useState, useEffect, useRef } from "react";
import { FaCalendarCheck, FaSmile } from "react-icons/fa";
import "../css/Count.css";

const Count = () => {
  const [bookingsCount, setBookingsCount] = useState(0);
  const [customersCount, setCustomersCount] = useState(0);
  const sectionRef = useRef(null);
  const [hasStartedCounting, setHasStartedCounting] = useState(false);

  useEffect(() => {
    const bookingsTarget = 100;
    const customersTarget = 150;

    const handleCount = () => {
      const incrementBookings = setInterval(() => {
        setBookingsCount((prevCount) => {
          if (prevCount < bookingsTarget) return prevCount + 1;
          clearInterval(incrementBookings);
          return bookingsTarget;
        });
      }, 10);

      const incrementCustomers = setInterval(() => {
        setCustomersCount((prevCount) => {
          if (prevCount < customersTarget) return prevCount + 1;
          clearInterval(incrementCustomers);
          return customersTarget;
        });
      }, 10);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStartedCounting) {
          setHasStartedCounting(true);
          handleCount();
        }
      },
      {
        root: null,
        rootMargin: "0px 0px -10% 0px",
        threshold: 1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasStartedCounting]);

  return (
    <section ref={sectionRef} className="section6__container banner__container">
      <div className="banner__content">
        <div
          className={`banner__card ${hasStartedCounting ? "animate-left" : ""}`}
        >
          <div>
            <div className="count">
              <h1>{hasStartedCounting ? `${bookingsCount}+` : ""}</h1>
              <FaCalendarCheck className="icon animate" />
            </div>
            <p>Bookings Completed</p>
          </div>
        </div>
        <div
          className={`banner__card ${
            hasStartedCounting ? "animate-right" : ""
          }`}
        >
          <div>
            <div className="count">
              <h1>{hasStartedCounting ? `${customersCount}+` : ""}</h1>
              <FaSmile className="icon animate" />
            </div>
            <p>Happy Customers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Count;
