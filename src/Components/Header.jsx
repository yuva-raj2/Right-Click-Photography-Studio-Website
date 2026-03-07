import React, { useState } from "react";
import "./Header.css";

import BabyPhotography from "../assets/babyphotography.jpg";
import BirthdayCelebration from "../assets/birthdaycelebration.webp";
import Bridal from "../assets/Bridal.jfif";
import ConcertEvent from "../assets/ConcertEvent.jpg";
import CouplePhotoshoot from "../assets/CouplePhotoshoot.webp";
import WeddingCelebration from "../assets/WeddingCelebration.jfif";
import WeddingPhotography from "../assets/WeddingPhotography.jfif";

import video1 from "../assets/brahmin-wedding-photography.webp";
import video2 from "../assets/Bridal-film.jpeg";
import video3 from "../assets/Couple-shoot.jfif";
import video4 from "../assets/Newborn.jfif";
import video5 from "../assets/Birthday-Events.jpg";
import video6 from "../assets/Fashion-photography.jfif";
import video7 from "../assets/ConcertEvents-shoot.jpg";
import video8 from "../assets/Maternity.jfif";
import video9 from "../assets/Travel-shoot.jfif";
import video10 from "../assets/Portrait-Photography.jpg";
import video11 from "../assets/Food-photography.jfif";
import video12 from "../assets/Wedding-Reception.jfif";
function Header() {

  const [videoUrl, setVideoUrl] = useState(null);

  const scrollToGallery = () => {
    document.getElementById("portfolio").scrollIntoView({
      behavior: "smooth",
    });
  };

  const videos = [
    {
      title: "Capturing Timeless Wedding Moments",
      thumb: video1,
      url: "https://player.vimeo.com/video/1151933761"
    },
    {
      title: "Elegance in Every Frame",
      thumb: video2,
      url: "https://player.vimeo.com/video/1151933761"
    },
    {
      title: "Love Stories Told Through Our Lens",
      thumb: video3,
      url: "https://player.vimeo.com/video/1151933761"
    },
    {
      title: "Tiny Moments, Big Memories",
      thumb: video4,
      url: "https://player.vimeo.com/video/1151933761"
    },
    {
      title: "Celebrating Joyful Moments",
      thumb: video5,
      url: "https://player.vimeo.com/video/1151933761"
    },
    {
      title: "Style Captured with creativity",
      thumb: video6,
      url: "https://player.vimeo.com/video/1151933761"
    },
    {
      title: "Energy of Live Events Captured",
      thumb: video7,
      url: "https://player.vimeo.com/video/1151933761"
    },
    {
      title: "Celebrating Life's Milestones with Style",
      thumb: video8,
      url: "https://player.vimeo.com/video/1151933761"
    },
     {
      title: "Stories from around the world",
      thumb: video9,
      url: "https://player.vimeo.com/video/1151933761"
    },
    {
      title: "Personality in Portraits",
      thumb: video10,
      url: "https://player.vimeo.com/video/1151933761"
    },
    {
      title: "Taste captured in stillness",
      thumb: video11,
      url: "https://player.vimeo.com/video/1151933761"
    },
    {
      title: "Joyful Celebration of Life's Milestones",
      thumb: video12,
      url: "https://player.vimeo.com/video/1151933761"
    }
  ];

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

          <p className="hero-location">INDIA</p>

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



      {/* IMAGE PORTFOLIO */}

      <section id="portfolio" className="portfolio-section">

        <div className="portfolio-grid">

          <div className="portfolio-item">
            <img src={BabyPhotography} alt="Baby"/>
            <div className="portfolio-overlay">
              <h3>Baby Photography</h3>
              <p>Portrait</p>
            </div>
          </div>

          <div className="portfolio-item">
            <img src={BirthdayCelebration} alt="Birthday"/>
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
            <img src={ConcertEvent} alt="Concert"/>
            <div className="portfolio-overlay">
              <h3>Concert Event</h3>
              <p>Stage</p>
            </div>
          </div>

          <div className="portfolio-item">
            <img src={CouplePhotoshoot} alt="Couple"/>
            <div className="portfolio-overlay">
              <h3>Couple Photoshoot</h3>
              <p>Romantic</p>
            </div>
          </div>

          <div className="portfolio-item">
            <img src={WeddingCelebration} alt="Wedding"/>
            <div className="portfolio-overlay">
              <h3>Wedding Celebration</h3>
              <p>Wedding</p>
            </div>
          </div>

          <div className="portfolio-item">
            <img src={WeddingPhotography} alt="Wedding"/>
            <div className="portfolio-overlay">
              <h3>Wedding Photography</h3>
              <p>Ceremony</p>
            </div>
          </div>

        </div>

      </section>



      {/* FILM SECTION */}

      <section className="film-section">
<h1 className="hero-2-title hero-3">
          FILM
          </h1>

          <p className="hero-2-subtitle hero-3-2">
           Relieve your memories with our cinematic storytelling
          </p>
        <div className="film-grid">

          {videos.map((video, index) => (

            <div
              className="film-card"
              key={index}
              onClick={() => setVideoUrl(video.url)}
            >

              <img src={video.thumb} alt={video.title}/>

              <div className="film-overlay">

                <div className="play-icon">▶</div>

                <h3>{video.title}</h3>

              </div>

            </div>

          ))}

        </div>

      </section>



      {/* VIDEO MODAL */}

      {videoUrl && (

        <div className="video-modal">

          <div className="video-box">

            <button
              className="close-video"
              onClick={() => setVideoUrl(null)}
            >
              ✕
            </button>

            <iframe
              src={`${videoUrl}?autoplay=1`}
              allow="autoplay; fullscreen"
              allowFullScreen
              title="film"
            ></iframe>

          </div>

        </div>

      )}

    </>
  );
}

export default Header;