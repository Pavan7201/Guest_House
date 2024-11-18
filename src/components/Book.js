import React from "react";
import "../css/Book.css";
import smallRoom from "../assets/small.jpg";
import largeRoom from "../assets/large.jpg";

const Book = ({ isOpen, closeBook }) => {
  if (!isOpen) return null;

  const roomData = [
    {
      id: 1,
      imageUrl: smallRoom,
      heading: "King-Sized Comfort",
      description: "Comfortable room with king-sized bed",
      price: "₹ 1200 per night",
    },
    {
      id: 2,
      imageUrl: largeRoom,
      heading: "Ocean View Room",
      description: "Cozy room with double bed and ocean view",
      price: "₹ 1000 per night",
    },
    {
      id: 3,
      imageUrl: smallRoom,
      heading: "City View Suite",
      description: "Spacious suite with balcony and city view",
      price: "₹ 1100 per night",
    },
    {
      id: 4,
      imageUrl: largeRoom,
      heading: "Budget-Friendly Room",
      description: "Budget-friendly room with basic amenities",
      price: "₹ 1300 per night",
    },
    {
      id: 5,
      imageUrl: smallRoom,
      heading: "Luxury Room",
      description: "Luxury room with premium features",
      price: "₹ 1000 per night",
    },
  ];

  return (
    <div className="modal-overlay">
      <div className={`modal-content ${isOpen ? "show" : ""}`}>
        <button onClick={closeBook} className="close-btn">
          ×
        </button>
        <h2>Welcome to Our Booking Section</h2>
        <div className="room-container">
          {roomData.map(({ id, imageUrl, heading, description, price }) => (
            <div key={id} className="room-card">
              <div className="room-item">
                <img src={imageUrl} alt={`Room ${id}`} className="room-image" />
                <div className="room-info">
                  <h3>{heading}</h3>
                  <p>{description}</p>
                  <p className="room-price">{price}</p>
                  <button className="book-btn">BOOK NOW</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Book;
