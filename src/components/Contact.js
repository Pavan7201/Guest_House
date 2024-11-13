import React, { useEffect } from "react";
import "../css/Contact.css";
import Location from "../images/location.png";
import Mail from "../images/mail.png";
import Phone from "../images/call.png";
import Facebook from "../images/1.png";
import Instagram from "../images/3.png";
import Twitter from "../images/2.png";
import LinkedIn from "../images/5.png";

const Contact = () => {
  useEffect(() => {
    const contactInfo = document.querySelector(".contactInfo");
    const contactForm = document.querySelector(".contactForm");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animateLeft");
            contactForm.classList.add("animateRight");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.8,
      }
    );

    observer.observe(contactInfo);
  }, []);

  return (
    <section id="contact" className="section8">
      <div className="container">
        <div className="contactInfo">
          <div>
            <h2>Contact Info</h2>
            <ul className="info">
              <li>
                <span>
                  <img src={Location} alt="Location" />
                </span>
                <span>
                  Beside Barshal Water Tank,
                  <br />
                  Manpur, Barhanti,
                  <br />
                  West Bengal 723156
                </span>
              </li>
              <li>
                <span>
                  <img src={Mail} alt="Email" />
                </span>
                <span>
                  <a href="mailto:kkghosh0099@gmail.com">
                    kkghosh0099@gmail.com
                  </a>
                </span>
              </li>
              <li>
                <span>
                  <img src={Phone} alt="Phone" />
                </span>
                <span>
                  <a href="tel:+919007062180">+91 9007062180</a>
                </span>
              </li>
            </ul>
          </div>
          <ul className="sci">
            <li>
              <a href="/">
                <img src={Facebook} alt="Facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/kingsukhguesthouse/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Instagram} alt="Instagram" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={Twitter} alt="Twitter" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={LinkedIn} alt="LinkedIn" />
              </a>
            </li>
          </ul>
        </div>
        <div className="contactForm">
          <h2>Send a Message</h2>
          <div className="formBox">
            <div className="inputBox w50">
              <input type="text" required />
              <span>First Name</span>
            </div>
            <div className="inputBox w50">
              <input type="text" required />
              <span>Last Name</span>
            </div>
            <div className="inputBox w50">
              <input type="email" required />
              <span>Email Address</span>
            </div>
            <div className="inputBox w50">
              <input
                type="tel"
                pattern="[0-9]{10}"
                maxLength={10}
                title="Please enter 10 digit number"
                required
              />
              <span>Mobile Number</span>
            </div>
            <div className="inputBox w100">
              <textarea required></textarea>
              <span>Write your message here...</span>
            </div>
            <div className="inputBox w100">
              <input type="submit" value="Send" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
