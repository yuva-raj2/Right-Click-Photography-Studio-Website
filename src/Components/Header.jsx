import React, { useState } from "react";
import "./Header.css";

// Existing imports
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
  
  // 🆕 NEW: Form states
  const [bookingForm, setBookingForm] = useState({
    name: "",
    phone: "",
    eventType: "wedding",
    preferredDate: "",
    message: ""
  });
  
  const [leadForm, setLeadForm] = useState({ email: "", phone: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const scrollToGallery = () => {
    document.getElementById("portfolio")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  // 🆕 NEW: WhatsApp booking handler
  const handleWhatsAppBooking = () => {
    const phoneNumber = "919486119593"; // 🔁 REPLACE WITH CLIENT'S NUMBER
    const message = encodeURIComponent(
      "Hi Right Click Photography! 👋\nI'd like to book a photoshoot.\n\n" +
      "Event Type: [Wedding/Baby/Event]\n" +
      "Preferred Date: [DD/MM/YYYY]\n" +
      "Location: [City]\n\n" +
      "Please share your availability & packages. Thank you! 📸"
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  // 🆕 NEW: Booking form handler
  const handleBookingSubmit = (e) => {
    e.preventDefault();
    // 🔁 Connect to backend/WhatsApp API later
    console.log("Booking request:", bookingForm);
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
    setBookingForm({ name: "", phone: "", eventType: "wedding", preferredDate: "", message: "" });
  };

  // 🆕 NEW: Lead magnet handler
  const handleLeadSubmit = (e) => {
    e.preventDefault();
    // 🔁 Connect to email marketing tool later
    console.log("Lead captured:", leadForm);
    alert("🎁 Guide sent! Check your WhatsApp/email.");
    setLeadForm({ email: "", phone: "" });
  };

  const videos = [
    { title: "Capturing Timeless Wedding Moments", thumb: video1, url: "https://player.vimeo.com/video/1151933761" },
    { title: "Elegance in Every Frame", thumb: video2, url: "https://player.vimeo.com/video/1151933761" },
    { title: "Love Stories Told Through Our Lens", thumb: video3, url: "https://player.vimeo.com/video/1151933761" },
    { title: "Tiny Moments, Big Memories", thumb: video4, url: "https://player.vimeo.com/video/1151933761" },
    { title: "Celebrating Joyful Moments", thumb: video5, url: "https://player.vimeo.com/video/1151933761" },
    { title: "Style Captured with creativity", thumb: video6, url: "https://player.vimeo.com/video/1151933761" },
    { title: "Energy of Live Events Captured", thumb: video7, url: "https://player.vimeo.com/video/1151933761" },
    { title: "Celebrating Life's Milestones with Style", thumb: video8, url: "https://player.vimeo.com/video/1151933761" },
    { title: "Stories from around the world", thumb: video9, url: "https://player.vimeo.com/video/1151933761" },
    { title: "Personality in Portraits", thumb: video10, url: "https://player.vimeo.com/video/1151933761" },
    { title: "Taste captured in stillness", thumb: video11, url: "https://player.vimeo.com/video/1151933761" },
    { title: "Joyful Celebration of Life's Milestones", thumb: video12, url: "https://player.vimeo.com/video/1151933761" }
  ];

  // 🆕 NEW: Testimonials data (replace with real client reviews)
  const testimonials = [
    {
      name: "Priya & Arjun",
      event: "Wedding",
      text: "Our wedding photos were breathtaking! The team captured every emotion perfectly. Highly recommended! 💍",
      rating: 5
    },
    {
      name: "Ananya K.",
      event: "Baby Photoshoot",
      text: "So patient with our newborn! The photos are precious memories we'll cherish forever. 👶✨",
      rating: 5
    },
    {
      name: "Rahul Events Co.",
      event: "Corporate Event",
      text: "Professional, punctual, and incredible attention to detail. Our clients loved the gallery! 🎉",
      rating: 5
    }
  ];

  // 🆕 NEW: Package data
  const packages = [
    {
      name: "🎁 Basic Shoot",
      price: "₹8,999",
      features: ["2-hour session", "50+ edited photos", "Digital delivery", "1 location"],
      cta: "Book Basic"
    },
    {
      name: "💍 Premium Wedding",
      price: "₹24,999",
      features: ["Full day coverage", "300+ edited photos", "Highlight reel", "Album included", "2 photographers"],
      cta: "Book Wedding",
      popular: true
    },
    {
      name: "👶 Baby Special",
      price: "₹5,499",
      features: ["Newborn session", "Props & costumes", "60+ edited photos", "Parent photos included"],
      cta: "Book Baby"
    }
  ];

  return (
    <>
      {/* 🆕 NEW: Floating WhatsApp Button (Fixed Bottom-Right) */}
      <button 
        className="whatsapp-float" 
        onClick={handleWhatsAppBooking}
        aria-label="Book via WhatsApp"
      >
        💬 Book via WhatsApp
      </button>

      {/* 🆕 NEW: AI Chatbot Button (Fixed Bottom-Left) */}
      <button 
        className="chatbot-float" 
        onClick={() => alert("🤖 AI Assistant: Hi! How can I help you today?\n\n• View packages\n• Check availability\n• Get pricing\n• See portfolio")}
        aria-label="Chat with AI Assistant"
      >
        🤖 Ask AI
      </button>

      {/* HERO SECTION 1 */}
      <section className="hero-1" role="banner" aria-label="Hero section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">ELEGANCE. EMOTION. EXCELLENCE.</h1>
          <h2 className="hero-subtitle">LUXURY PHOTOGRAPHY</h2>
          <p className="hero-location">INDIA</p>
          
          <div className="hero-badges">
            <div className="badge" itemScope itemType="https://schema.org/Offer">
              <h3 itemProp="name">Trusted</h3>
              <p itemProp="description">200+ Clients</p>
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
          <h1 className="hero-2-title">PHOTOGRAPHY</h1>
          <p className="hero-2-subtitle">Capturing moments that last forever</p>
          <button className="hero-2-button" onClick={scrollToGallery}>
            View Portfolio
          </button>
        </div>
      </section>

      {/* 🆕 NEW: Package Pricing Section */}
      <section className="packages-section" aria-label="Photography packages">
        <h2 className="section-title">✨ Choose Your Perfect Package</h2>
        <p className="section-subtitle">Transparent pricing • No hidden fees • 50% advance to book</p>
        
        <div className="packages-grid">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`package-card ${pkg.popular ? 'popular' : ''}`}
              itemScope 
              itemType="https://schema.org/Product"
            >
              {pkg.popular && <span className="popular-badge">MOST POPULAR</span>}
              <h3 itemProp="name">{pkg.name}</h3>
              <div className="package-price" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                <span itemProp="price">{pkg.price}</span>
                <span itemProp="priceCurrency" content="INR">INR</span>
              </div>
              <ul className="package-features">
                {pkg.features.map((feature, i) => (
                  <li key={i}>✅ {feature}</li>
                ))}
              </ul>
              <button 
                className="package-cta"
                onClick={handleWhatsAppBooking}
                itemProp="url"
              >
                {pkg.cta} →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* IMAGE PORTFOLIO */}
      <section id="portfolio" className="portfolio-section" aria-label="Portfolio gallery">
        <h2 className="section-title">📸 Our Work</h2>
        <div className="portfolio-grid">
          {[
            { src: BabyPhotography, alt: "Baby Photography", title: "Baby Photography", category: "Portrait" },
            { src: BirthdayCelebration, alt: "Birthday Celebration", title: "Birthday Celebration", category: "Event" },
            { src: Bridal, alt: "Bridal Photography", title: "Bridal", category: "Wedding" },
            { src: ConcertEvent, alt: "Concert Event", title: "Concert Event", category: "Stage" },
            { src: CouplePhotoshoot, alt: "Couple Photoshoot", title: "Couple Photoshoot", category: "Romantic" },
            { src: WeddingCelebration, alt: "Wedding Celebration", title: "Wedding Celebration", category: "Wedding" },
            { src: WeddingPhotography, alt: "Wedding Photography", title: "Wedding Photography", category: "Ceremony" }
          ].map((item, index) => (
            <div className="portfolio-item" key={index} itemScope itemType="https://schema.org/ImageObject">
              <img 
                src={item.src} 
                alt={item.alt} 
                itemProp="contentUrl"
                loading="lazy"
              />
              <div className="portfolio-overlay">
                <h3 itemProp="name">{item.title}</h3>
                <p itemProp="caption">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🆕 NEW: Testimonials Section */}
      <section className="testimonials-section" aria-label="Client testimonials">
        <h2 className="section-title">💬 What Our Clients Say</h2>
        <p className="section-subtitle">Real stories from happy families & businesses</p>
        
        <div className="testimonials-grid">
          {testimonials.map((review, index) => (
            <div 
              key={index} 
              className="testimonial-card"
              itemScope 
              itemType="https://schema.org/Review"
            >
              <div className="testimonial-rating" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                {'⭐'.repeat(review.rating)}
                <meta itemProp="ratingValue" content={review.rating} />
                <meta itemProp="bestRating" content="5" />
              </div>
              <p className="testimonial-text" itemProp="reviewBody">"{review.text}"</p>
              <div className="testimonial-author">
                <strong itemProp="author">{review.name}</strong>
                <span itemProp="itemReviewed">{review.event}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🆕 NEW: Consultation Booking Form */}
      <section className="booking-section" aria-label="Book a consultation">
        <div className="booking-container">
          <div className="booking-info">
            <h2 className="section-title">📅 Book Your Free Consultation</h2>
            <p className="section-subtitle">Let's discuss your vision! No obligation • 15-min call • Instant confirmation</p>
            <ul className="booking-benefits">
              <li>✨ Personalized package recommendations</li>
              <li>📍 Location & timing guidance</li>
              <li>💬 Answer all your photography questions</li>
              <li>🎁 Exclusive booking discount</li>
            </ul>
          </div>
          
          <form className="booking-form" onSubmit={handleBookingSubmit}>
            {formSubmitted && (
              <div className="form-success">✅ Thank you! We'll WhatsApp you within 2 hours.</div>
            )}
            
            <div className="form-group">
              <label htmlFor="name">Your Name *</label>
              <input
                id="name"
                type="text"
                required
                value={bookingForm.name}
                onChange={(e) => setBookingForm({...bookingForm, name: e.target.value})}
                placeholder="e.g., Priya Sharma"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">WhatsApp Number *</label>
              <input
                id="phone"
                type="tel"
                required
                value={bookingForm.phone}
                onChange={(e) => setBookingForm({...bookingForm, phone: e.target.value})}
                placeholder="+91 94861 19593"
                pattern="[0-9+\s\-]{10,15}"
              />
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="eventType">Event Type</label>
                <select
                  id="eventType"
                  value={bookingForm.eventType}
                  onChange={(e) => setBookingForm({...bookingForm, eventType: e.target.value})}
                >
                  <option value="wedding">💍 Wedding</option>
                  <option value="baby">👶 Baby/Newborn</option>
                  <option value="birthday">🎂 Birthday</option>
                  <option value="couple">💑 Couple Shoot</option>
                  <option value="event">🎉 Corporate Event</option>
                  <option value="other">✨ Other</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="preferredDate">Preferred Date</label>
                <input
                  id="preferredDate"
                  type="date"
                  value={bookingForm.preferredDate}
                  onChange={(e) => setBookingForm({...bookingForm, preferredDate: e.target.value})}
                />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Tell us about your vision (optional)</label>
              <textarea
                id="message"
                rows="3"
                value={bookingForm.message}
                onChange={(e) => setBookingForm({...bookingForm, message: e.target.value})}
                placeholder="e.g., Outdoor wedding in Coimbatore, 200 guests..."
              />
            </div>
            
            <button type="submit" className="booking-cta">
              Request Consultation →
            </button>
            <p className="form-note">🔒 Your info is secure. We never spam.</p>
          </form>
        </div>
      </section>

      {/* 🆕 NEW: Lead Magnet Section */}
      <section className="lead-magnet-section" aria-label="Free photography guide">
        <div className="lead-magnet-content">
          <div className="lead-magnet-text">
            <h3>🎁 Free Download: 10 Tips for Perfect Photos</h3>
            <p>Get our expert guide + exclusive 10% off your first booking!</p>
            <ul className="lead-benefits">
              <li>✨ Pose ideas for natural-looking photos</li>
              <li>👗 What to wear for your photoshoot</li>
              <li>⏰ Best time of day for golden-hour shots</li>
              <li>📱 How to prepare your phone for backup shots</li>
            </ul>
          </div>
          
          <form className="lead-form" onSubmit={handleLeadSubmit}>
            <div className="form-row">
              <input
                type="email"
                required
                placeholder="Your email"
                value={leadForm.email}
                onChange={(e) => setLeadForm({...leadForm, email: e.target.value})}
              />
              <input
                type="tel"
                required
                placeholder="WhatsApp number"
                value={leadForm.phone}
                onChange={(e) => setLeadForm({...leadForm, phone: e.target.value})}
                pattern="[0-9+\s\-]{10,15}"
              />
            </div>
            <button type="submit" className="lead-cta">Send Me the Guide 📩</button>
            <p className="lead-note">We respect your privacy. Unsubscribe anytime.</p>
          </form>
        </div>
      </section>

      {/* FILM SECTION */}
      <section className="film-section" aria-label="Cinematic films">
        <h1 className="hero-2-title hero-3">FILM</h1>
        <p className="hero-2-subtitle hero-3-2">Relive your memories with our cinematic storytelling</p>
        
        <div className="film-grid">
          {videos.map((video, index) => (
            <div
              className="film-card"
              key={index}
              onClick={() => setVideoUrl(video.url)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setVideoUrl(video.url)}
              aria-label={`Play: ${video.title}`}
            >
              <img src={video.thumb} alt={video.title} loading="lazy" />
              <div className="film-overlay">
                <div className="play-icon" aria-hidden="true">▶</div>
                <h3>{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VIDEO MODAL */}
      {videoUrl && (
        <div className="video-modal" role="dialog" aria-modal="true" aria-label="Video player">
          <div className="video-box">
            <button
              className="close-video"
              onClick={() => setVideoUrl(null)}
              aria-label="Close video"
            >
              ✕
            </button>
            <iframe
              src={`${videoUrl}?autoplay=1`}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Photography film"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;