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
      price: 1200.0,
      offer: 20, 
    },
    {
      id: 2,
      imageUrl: largeRoom,
      heading: "Ocean View Room",
      description: "Cozy room with double bed and ocean view",
      price: 1000.0,
      offer: 0, 
    },
    {
      id: 3,
      imageUrl: smallRoom,
      heading: "City View Suite",
      description: "Spacious suite with balcony and city view",
      price: 1100.0,
      offer: 15, 
    },
    {
      id: 4,
      imageUrl: largeRoom,
      heading: "Budget-Friendly Room",
      description: "Budget-friendly room with basic amenities",
      price: 1300.0,
      offer: 0, 
    },
    {
      id: 5,
      imageUrl: smallRoom,
      heading: "Luxury Room",
      description: "Luxury room with premium features",
      price: 1000.0,
      offer: 10,
    },
  ];

  return (
    <div className="modal-overlay">
      <div className={`modal-content ${isOpen ? "show" : ""}`}>
        <button
          onClick={closeBook}
          className="close-btn"
          aria-label="Close booking modal"
        >
          ×
        </button>

        <h2>Welcome to Our Booking Section</h2>
        <div className="room-container">
          {roomData.map(
            ({ id, imageUrl, heading, description, price, offer }) => {
              const discountedPrice =
                offer > 0 ? (price - (price * offer) / 100).toFixed(2) : null;

              return (
                <div key={id} className="room-card">
                  <div className="room-item">
                    {offer > 0 && (
                      <div className="discount">
                        <div className="discount-text">
                          <span>{offer}% OFF</span>
                        </div>
                      </div>
                    )}
                    <img
                      src={imageUrl}
                      alt={`Room ${id}`}
                      className="room-image"
                    />
                    <div className="room-info">
                      <h3>{heading}</h3>
                      <p>{description}</p>
                      <p className="room-price">
                        {offer > 0 ? (
                          <>
                            <span className="original-price">
                              ₹{price.toFixed(2)}
                            </span>{" "}
                            ₹{discountedPrice}
                            {/* <p className="offer-tag">{offer}% OFF</p> */}
                          </>
                        ) : (
                          <>₹{price.toFixed(2)}</>
                        )}
                      </p>
                      <button className="book-btn">BOOK NOW</button>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Book;
