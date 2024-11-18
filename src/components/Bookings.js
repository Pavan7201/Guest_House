import React, { useState } from "react";
import "../css/Bookings.css";

const Bookings = () => {
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");

  const handleWhatsAppBooking = () => {
    const message = `Check-in: ${checkInDate}, Check-out: ${checkOutDate}`;
    const whatsappLink = `https://wa.link/at5ion?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <section className="section2__container booking__container">
      <div className="booking__form">
        <div className="input__group">
          <div className="checkIn">
            <label htmlFor="checkIn">Check-in</label>
            <input
              type="date"
              id="checkIn"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
            />
          </div>
          <div className="checkOut">
            <label htmlFor="checkOut">Check-out</label>
            <input
              type="date"
              id="checkOut"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
            />
          </div>
          <div className="input__btn">
            <button className="section2__btn">BOOK NOW</button>
            <button className="whatsapp__btn" onClick={handleWhatsAppBooking}>
              <i className="fa-brands fa-whatsapp"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bookings;
