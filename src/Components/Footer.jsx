import React, { useState } from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaLinkedin,
  FaWhatsapp,
  FaArrowUp,
  FaCheckCircle
} from "react-icons/fa";
import "./Footer.css";

// 🆕 NEW: Service areas for local SEO
const serviceAreas = [
  "Coimbatore", "Tiruppur", "Erode", "Ooty", 
  "Pollachi", "Metupalayam", "Tamil Nadu"
];

// 🆕 NEW: Trust badges
const trustBadges = [
  { icon: "⭐", text: "Google Rated 4.9★" },
  { icon: "✅", text: "Verified Business" },
  { icon: "🔒", text: "Secure Payments" },
  { icon: "💯", text: "100% Satisfaction" }
];

// 🆕 NEW: WhatsApp handler (centralized)
const handleWhatsAppClick = (message, source) => {
  const phoneNumber = "919876543210"; // 🔁 REPLACE WITH CLIENT'S ACTUAL NUMBER
  const encodedMessage = encodeURIComponent(
    `${message}\n\n[Source: Footer - ${source}]`
  );
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  
  // Optional: Google Analytics tracking
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'footer_whatsapp_click', {
      event_category: 'conversion',
      event_label: source
    });
  }
};

function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // 🆕 NEW: Newsletter signup handler
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    
    // 🔁 Connect to email service (Mailchimp, ConvertKit, etc.)
    console.log("Newsletter signup:", email);
    setSubscribed(true);
    setEmail("");
    
    // Optional: Track conversion
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'newsletter_signup', {
        event_category: 'lead',
        event_label: 'footer'
      });
    }
    
    // Reset success message after 3 seconds
    setTimeout(() => setSubscribed(false), 3000);
  };

  // 🆕 NEW: Back-to-top scroll handler
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 🆕 NEW: Show/hide back-to-top button on scroll
  React.useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 🆕 NEW: Schema markup for LocalBusiness SEO
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "PhotographyStudio",
    "name": "Right Click Photography Studio",
    "image": "https://rightclickphotography-studio.vercel.app/assets/logo.jpg",
    "telephone": "+91-98765-43210",
    "email": "rightclickstudio@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Coimbatore",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "11.0168",
      "longitude": "76.9558"
    },
    "areaServed": serviceAreas,
    "priceRange": "₹₹",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "09:00",
      "closes": "20:00"
    },
    "sameAs": [
      "https://www.instagram.com/tales_of_savio/",
      "https://www.facebook.com/",
      "https://www.youtube.com/",
      "https://www.linkedin.com/"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "200+"
    }
  };

  return (
    <footer 
      className="footer" 
      aria-label="Website footer with contact and booking information"
      itemScope
      itemType="https://schema.org/PhotographyStudio"
    >
      {/* 🆕 NEW: JSON-LD Schema for SEO */}
      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </script>

      <div className="footer-container">
        
        {/* Studio Info + Trust Badges */}
        <section className="footer-section footer-brand">
          <h2 className="footer-logo" itemProp="name">
            Right Click Photography Studio
          </h2>
          <p itemProp="description">
            Professional wedding, portrait, and event photography services in
            Coimbatore, Tamil Nadu. We capture timeless moments with cinematic storytelling.
          </p>
          
          {/* 🆕 NEW: Trust Badges */}
          <div className="trust-badges" aria-label="Trust certifications">
            {trustBadges.map((badge, index) => (
              <div key={index} className="trust-badge">
                <span className="trust-icon" aria-hidden="true">{badge.icon}</span>
                <span className="trust-text">{badge.text}</span>
              </div>
            ))}
          </div>

          {/* 🆕 NEW: Service Areas */}
          <div className="service-areas">
            <h4>📍 Serving</h4>
            <div className="areas-list">
              {serviceAreas.map((area) => (
                <span key={area} className="area-tag" itemProp="areaServed">
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* 🆕 NEW: Prominent WhatsApp CTA */}
          <button
            className="footer-whatsapp-cta"
            onClick={() => handleWhatsAppClick(
              "Hi! I visited your website and would like to discuss a photoshoot. Please share your packages.",
              "Footer Main CTA"
            )}
            aria-label="Book a photoshoot via WhatsApp"
          >
            <FaWhatsapp className="whatsapp-icon" />
            <span>💬 Book via WhatsApp</span>
            <span className="cta-subtext">🚀 Quick Response • Free Consultation</span>
          </button>
        </section>

        {/* Quick Links */}
        <nav className="footer-section" aria-label="Footer navigation">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/" aria-label="Go to home page">Home</a></li>
            <li><a href="/about" aria-label="Learn more about us">About</a></li>
            <li><a href="#portfolio" aria-label="View portfolio">Portfolio</a></li>
            <li><a href="#albums" aria-label="Browse photography albums">Albums</a></li>
            <li><a href="#testimonials" aria-label="Read client reviews">Testimonials</a></li>
            <li><a href="/contact" aria-label="Contact us">Contact</a></li>
            <li><a href="/privacy" aria-label="Privacy policy">Privacy Policy</a></li>
          </ul>
        </nav>

        {/* Contact + Booking */}
        <section className="footer-section">
          <h3>Contact Us</h3>
          <address itemProp="address" itemType="https://schema.org/PostalAddress">
            <p>
              <span aria-hidden="true">📍</span>
              <span itemProp="addressLocality">Coimbatore</span>, 
              <span itemProp="addressRegion"> Tamil Nadu</span>, 
              <span itemProp="addressCountry">India</span>
            </p>
            <p>
              <span aria-hidden="true">📞</span>
              <a 
                href="tel:+919876543210" 
                aria-label="Call Right Click Studio at +91 98765 43210"
                itemProp="telephone"
              >
                +91 98765 43210
              </a>
            </p>
            <p>
              <span aria-hidden="true">📧</span>
              <a
                href="mailto:rightclickstudio@gmail.com"
                aria-label="Email Right Click Studio"
                itemProp="email"
              >
                rightclickstudio@gmail.com
              </a>
            </p>
          </address>

          {/* 🆕 NEW: Free Consultation Mini-Form */}
          <div className="consultation-box">
            <h4>✨ Free 15-Min Consultation</h4>
            <p>Get personalized package recommendations</p>
            <button
              className="consultation-btn"
              onClick={() => handleWhatsAppClick(
                "Hi! I'd like to schedule a free 15-min consultation to discuss my photoshoot needs.",
                "Footer Consultation"
              )}
            >
              📅 Book Free Call →
            </button>
          </div>
        </section>

        {/* Social + Newsletter */}
        <section className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a
              href="#"
              aria-label="Follow us on Facebook"
              rel="noopener noreferrer"
            >
              <FaFacebookF aria-hidden="true" />
            </a>
            <a
              href="https://www.instagram.com/tales_of_savio/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
            >
              <FaInstagram aria-hidden="true" />
            </a>
            <a
              href="#"
              aria-label="Subscribe on YouTube"
              rel="noopener noreferrer"
            >
              <FaYoutube aria-hidden="true" />
            </a>
            <a
              href="#"
              aria-label="Connect on LinkedIn"
              rel="noopener noreferrer"
            >
              <FaLinkedin aria-hidden="true" />
            </a>
          </div>

          {/* 🆕 NEW: Newsletter Signup 
          <div className="newsletter-box">
            <h4>🎁 Free Photography Guide</h4>
            <p>10 tips for perfect photos + exclusive offers</p>
            
            {subscribed ? (
              <div className="signup-success">
                <FaCheckCircle className="success-icon" />
                <span>Thanks! Check your inbox 📩</span>
              </div>
            ) : (
              <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-label="Email address for newsletter"
                />
                <button type="submit" className="newsletter-btn">
                  Get Guide →
                </button>
              </form>
            )}
            <p className="newsletter-note">🔒 We respect your privacy. Unsubscribe anytime.</p>
          </div>*/}
        </section>
      </div>

      {/* 🆕 NEW: Bottom Bar with Legal + Back to Top */}
      <div className="footer-bottom">
        <div className="bottom-content">
          <p>
            © {new Date().getFullYear()} Right Click Photography Studio | 
            Wedding & Event Photography in Coimbatore
          </p>
          <div className="bottom-links">
            <a href="/privacy">Privacy Policy</a>
            <span aria-hidden="true">•</span>
            <a href="/terms">Terms of Service</a>
            <span aria-hidden="true">•</span>
            <a href="/sitemap.xml">Sitemap</a>
          </div>
        </div>
        
        {/* 🆕 NEW: Back to Top Button */}
        {showBackToTop && (
          <button
            className="back-to-top"
            onClick={scrollToTop}
            aria-label="Scroll back to top of page"
          >
            <FaArrowUp aria-hidden="true" />
            <span className="back-to-top-text">Top</span>
          </button>
        )}
      </div>

      {/* 🆕 NEW: Mobile Sticky CTA Bar (only visible on small screens) */}
      <div className="mobile-footer-cta">
        <button
          className="mobile-whatsapp-btn"
          onClick={() => handleWhatsAppClick(
            "Hi! I'd like to book a photoshoot. Please share your packages and availability.",
            "Mobile Footer Sticky"
          )}
          aria-label="Book now via WhatsApp"
        >
          <FaWhatsapp className="whatsapp-icon" />
          <span>Book Now • Free Consultation</span>
        </button>
      </div>
    </footer>
  );
}

export default Footer;