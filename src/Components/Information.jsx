import React, { useState, useEffect, useRef } from "react";
import "./Information.css";

/*
  IMPORTANT:
  Move image to:
  public/assets/Bharathanatyam-Pic.png
*/

const contentData = [
  {
    id: "trust",
    title: "Trusted Photography Services in Coimbatore",
    text: [
      "Right Click Photography Studio is a professional photography studio based in Coimbatore, Tamil Nadu, dedicated to capturing life's most meaningful moments.",
      "We specialize in wedding photography, portrait sessions, event coverage, lifestyle shoots, and commercial photography with a strong focus on storytelling."
    ],
    cta: "View Our Portfolio",
    ctaLink: "#portfolio"
  },
  {
    id: "vision",
    title: "Creative Photography & Visual Storytelling",
    text: [
      "Photography is more than just images — it is about storytelling through emotion and light.",
      "Our photographers craft powerful visual narratives that highlight personality, atmosphere, and authentic moments."
    ],
    cta: "See Storytelling Examples",
    ctaLink: "#film"
  },
  {
    id: "delivery",
    title: "Fast Delivery with Premium Quality Editing",
    text: [
      "We understand that every captured moment matters.",
      "Our efficient workflow ensures quick turnaround time while maintaining high-quality editing standards."
    ],
    cta: "Check Delivery Timeline",
    ctaAction: "whatsapp"
  },
  {
    id: "candid",
    title: "Candid Photography That Captures Real Emotions",
    text: [
      "We specialize in natural and candid photography that reflects genuine emotions.",
      "Our team blends seamlessly into events to capture authentic, unscripted moments."
    ],
    cta: "Book a Candid Session",
    ctaAction: "whatsapp"
  }
];

// 🆕 NEW: Stats data for "Why Choose Us"
const statsData = [
  { number: "200+", label: "Happy Clients", icon: "😊" },
  { number: "5+", label: "Years Experience", icon: "🏆" },
  { number: "500+", label: "Events Covered", icon: "🎉" },
  { number: "24h", label: "Quick Response", icon: "⚡" }
];

// 🆕 NEW: Trust badges
const trustBadges = [
  { name: "Google Rated 4.9★", icon: "⭐" },
  { name: "Verified Business", icon: "✅" },
  { name: "Secure Payments", icon: "🔒" },
  { name: "100% Satisfaction", icon: "💯" }
];

// 🆕 NEW: Mini portfolio preview items
const miniPortfolio = [
  { src: "/assets/Bharatanatyam/Bharatanatyam-Girl.jpg", alt: "Bharatanatyam Performance", category: "Cultural" },
  { src: "/assets/Love-Commitment-Photography-Album/Marriage-Album-Pic-1.jpg", alt: "Wedding Moment", category: "Wedding" },
  { src: "/assets/Baby-Photography-album/Baby-Photos-Page-2.jpg", alt: "Newborn Session", category: "Baby" }
];

function Information() {
  const [visibleStats, setVisibleStats] = useState([]);
  const statsRef = useRef(null);

  // 🆕 NEW: WhatsApp handler (reusable)
  const handleWhatsAppClick = (message) => {
    const phoneNumber = "919876543210"; // 🔁 REPLACE WITH CLIENT'S NUMBER
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  // 🆕 NEW: Scroll animation for stats counter
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Animate stats one by one
          statsData.forEach((_, index) => {
            setTimeout(() => {
              setVisibleStats(prev => [...prev, index]);
            }, index * 200);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // 🆕 NEW: Animated counter component
  const AnimatedCounter = ({ value, isVisible }) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      if (!isVisible) return;
      
      const target = parseInt(value.replace(/\D/g, '')) || 1;
      let start = 0;
      const duration = 1500;
      const increment = target / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }, [isVisible, value]);
    
    return <span>{value.replace(/\d+/, count)}</span>;
  };

  return (
    <section
      className="info-section"
      aria-label="About Right Click Photography Studio"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      {/* 🆕 NEW: Schema markup for local SEO */}
      <meta itemProp="name" content="Right Click Photography Studio" />
      <meta itemProp="image" content="/assets/Bharatanatyam/Bharatanatyam-Girl.jpg" />
      <meta itemProp="address" content="Coimbatore, Tamil Nadu, India" />
      <meta itemProp="telephone" content="+91-98765-43210" />
      <meta itemProp="priceRange" content="₹₹" />
      <meta itemProp="areaServed" content="Coimbatore, Tamil Nadu" />

      <div className="info-container">
        {/* LEFT IMAGE */}
        <div className="info-image">
          <img
            src="/assets/Bharatanatyam/Bharatanatyam-Girl.jpg"
            alt="Bharatanatyam dance photography performance captured by Right Click Studio"
            loading="lazy"
            decoding="async"
            width="400"
            height="500"
          />
          
          {/* 🆕 NEW: Quick action overlay on image */}
          <div className="image-actions">
            <button 
              className="action-btn whatsapp-btn"
              onClick={() => handleWhatsAppClick("Hi! I saw your Bharatanatyam photography and would like to book a session.")}
              aria-label="Book via WhatsApp"
            >
              💬 Quick Book
            </button>
            <button 
              className="action-btn gallery-btn"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              aria-label="View full gallery"
            >
              🖼️ View Gallery
            </button>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="info-content">
          {contentData.map((item, index) => (
            <article 
              className="info-card" 
              key={item.id}
              itemScope
              itemType="https://schema.org/Service"
            >
              <meta itemProp="serviceType" content={item.title} />
              <h2 itemProp="name">{item.title}</h2>

              {item.text.map((para, i) => (
                <p key={`${item.id}-${i}`} itemProp="description">{para}</p>
              ))}

              {/* 🆕 NEW: Contextual CTA button */}
              <div className="card-cta">
                {item.ctaAction === "whatsapp" ? (
                  <button
                    className="cta-button whatsapp-cta"
                    onClick={() => handleWhatsAppClick(`Hi! I'm interested in: ${item.title}`)}
                    itemProp="url"
                  >
                    {item.cta} →
                  </button>
                ) : (
                  <a
                    href={item.ctaLink || "#booking"}
                    className="cta-button link-cta"
                    itemProp="url"
                  >
                    {item.cta} →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* 🆕 NEW: Why Choose Us - Stats Section */}
      <div 
        className="stats-section" 
        ref={statsRef}
        aria-label="Why choose Right Click Photography"
      >
        <h3 className="stats-title">Why Clients Trust Us</h3>
        <div className="stats-grid">
          {statsData.map((stat, index) => (
            <div 
              key={index} 
              className={`stat-card ${visibleStats.includes(index) ? 'visible' : ''}`}
              itemScope
              itemType="https://schema.org/PropertyValue"
            >
              <span className="stat-icon" aria-hidden="true">{stat.icon}</span>
              <div className="stat-number" itemProp="value">
                <AnimatedCounter value={stat.number} isVisible={visibleStats.includes(index)} />
              </div>
              <div className="stat-label" itemProp="name">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 🆕 NEW: Trust Badges Section */}
      <div className="trust-section" aria-label="Trust certifications">
        <div className="trust-grid">
          {trustBadges.map((badge, index) => (
            <div key={index} className="trust-badge">
              <span className="trust-icon" aria-hidden="true">{badge.icon}</span>
              <span className="trust-text">{badge.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 🆕 NEW: Mini Portfolio Preview with Quick Book */}
      <div className="mini-portfolio-section" aria-label="Quick portfolio preview">
        <div className="mini-portfolio-header">
          <h3>✨ A Glimpse of Our Work</h3>
          <p>Love what you see? Let's create something beautiful together.</p>
        </div>
        
        <div className="mini-portfolio-grid">
          {miniPortfolio.map((item, index) => (
            <div key={index} className="mini-portfolio-item">
              <img 
                src={item.src} 
                alt={item.alt} 
                loading="lazy"
                width="300"
                height="200"
              />
              <div className="mini-overlay">
                <span className="mini-category">{item.category}</span>
                <button 
                  className="mini-book-btn"
                  onClick={() => handleWhatsAppClick(`Hi! I loved your ${item.category} photography. Can we discuss a similar shoot?`)}
                >
                  Book Similar →
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mini-portfolio-cta">
          <a href="#portfolio" className="view-all-link">View Full Portfolio 📸</a>
        </div>
      </div>
    </section>
  );
}

export default Information;