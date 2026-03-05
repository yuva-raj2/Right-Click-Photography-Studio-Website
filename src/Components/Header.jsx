import React from "react";
import "./Header.css";

import BabyPhotography from "../assets/babyphotography.jpg";
import BirthdayCelebration from "../assets/birthdaycelebration.webp";
import Bridal from "../assets/Bridal.jfif";
import ConcertEvent from "../assets/ConcertEvent.jpg";
import CouplePhotoshoot from "../assets/CouplePhotoshoot.webp";
import WeddingCelebration from "../assets/WeddingCelebration.jfif";
import WeddingPhotography from "../assets/WeddingPhotography.jfif";

function Header() {

  const scrollToGallery = () => {
    document.getElementById("portfolio").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* HERO SECTION 1 */}

      <section className="hero-1">

        <div className="hero-overlay"></div>

        <div className="hero-content">

          <h1 className="hero-title">
            ELEGANCE. EMOTION. EXCELLENCE.
          </h1>

          <h2 className="hero-subtitle">
            LUXURY PHOTOGRAPHY
          </h2>

          <p className="hero-location">
            INDIA
          </p>

          <div className="hero-badges">

            <div className="badge">
              <h3>Trusted</h3>
              <p>200+ Clients</p>
            </div>

            <div className="badge">
              <h3>5+ Years</h3>
              <p>Storytelling</p>
            </div>

            <div className="badge">
              <h3>Premium</h3>
              <p>Photography</p>
            </div>

          </div>

        </div>

      </section>



      {/* HERO SECTION 2 */}

      <section className="hero-2">

        <div className="hero-2-overlay"></div>

        <div className="hero-2-content">

          <h1 className="hero-2-title">
            PHOTOGRAPHY
          </h1>

          <p className="hero-2-subtitle">
            Capturing moments that last forever
          </p>

          <button
            className="hero-2-button"
            onClick={scrollToGallery}
          >
            View Portfolio
          </button>

        </div>

      </section>



      {/* PORTFOLIO */}

   <section id="portfolio" className="portfolio-section">

  <div className="portfolio-grid">

    <div className="portfolio-item">
      <img src={BabyPhotography} alt="Baby Photography"/>
      <div className="portfolio-overlay">
        <h3>Baby Photography</h3>
        <p>Portrait</p>
      </div>
    </div>

    <div className="portfolio-item">
      <img src={BirthdayCelebration} alt="Birthday Celebration"/>
      <div className="portfolio-overlay">
        <h3>Birthday Celebration</h3>
        <p>Event</p>
      </div>
    </div>

    <div className="portfolio-item">
      <img src={Bridal} alt="Bridal"/>
      <div className="portfolio-overlay">
        <h3>Bridal</h3>
        <p>Wedding</p>
      </div>
    </div>

    <div className="portfolio-item">
      <img src={ConcertEvent} alt="Concert Event"/>
      <div className="portfolio-overlay">
        <h3>Concert Event</h3>
        <p>Stage Photography</p>
      </div>
    </div>

    <div className="portfolio-item">
      <img src={CouplePhotoshoot} alt="Couple Photoshoot"/>
      <div className="portfolio-overlay">
        <h3>Couple Photoshoot</h3>
        <p>Romantic</p>
      </div>
    </div>

    <div className="portfolio-item">
      <img src={WeddingCelebration} alt="Wedding Celebration"/>
      <div className="portfolio-overlay">
        <h3>Wedding Celebration</h3>
        <p>Wedding</p>
      </div>
    </div>

    <div className="portfolio-item">
      <img src={WeddingPhotography} alt="Wedding Photography"/>
      <div className="portfolio-overlay">
        <h3>Wedding Photography</h3>
        <p>Ceremony</p>
      </div>
    </div>

  </div>

</section>
    </>
  );
}

export default Header;