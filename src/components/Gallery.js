import React, { useEffect, useRef } from "react";
import "../css/Gallery.css";
import OutImage from "../assets/out.jpg";
import AyodhyaImage from "../assets/ayodhya.webp";
import Largeroom from "../assets/large.jpg";
import Palash from "../assets/palash.webp";
import SmallRoom from "../assets/small.jpg";
import Baranti from "../assets/baranti.webp";
import Recep from "../assets/recep.jpg";
import Flowers from "../assets/flower.jpg";
import Room from "../assets/room1.jpg";
import Dam from "../assets/mithonDam.webp";

const Gallery = () => {
  const galleryRef = useRef(null);
  const imageRefs = useRef([]);

  const images = [
    { src: OutImage, alt: "out" },
    { src: AyodhyaImage, alt: "Ayodhya" },
    { src: Largeroom, alt: "Large room" },
    { src: Palash, alt: "Palash" },
    { src: SmallRoom, alt: "Small room" },
    { src: Baranti, alt: "Baranti" },
    { src: Recep, alt: "Recep" },
    { src: Flowers, alt: "Flowers" },
    { src: Room, alt: "Room" },
    { src: Dam, alt: "Dam" },
  ];

  useEffect(() => {
    const galleryObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    const currentGalleryRef = galleryRef.current;
    const currentImageRefs = imageRefs.current;

    if (currentGalleryRef) {
      galleryObserver.observe(currentGalleryRef);
    }

    currentImageRefs.forEach((image, index) => {
      if (image) {
        image.classList.add(`delay-${index}`);
        galleryObserver.observe(image);
      }
    });

    return () => {
      if (currentGalleryRef) galleryObserver.unobserve(currentGalleryRef);
      currentImageRefs.forEach((image) => {
        if (image) galleryObserver.unobserve(image);
      });
    };
  }, []);

  return (
    <section id="gallery" ref={galleryRef} className="fadeInUp">
      <div className="section7__subheader">
        <div className="line"></div>
        <h1>GALLERY</h1>
        <div className="line"></div>
      </div>
      <br />
      <div className="container11">
        {images.map((image, index) => (
          <div
            className={`box11 ${String.fromCharCode(97 + index)} fadeIn`}
            key={index}
            ref={(el) => (imageRefs.current[index] = el)}
          >
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
