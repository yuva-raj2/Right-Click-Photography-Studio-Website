import React from 'react';
import './Testimonials.css';

// 🆕 NEW: Testimonials data array (easy to update/add)
const testimonialsData = [
  {
    id: 1,
    name: "Priya & Arjun",
    event: "Wedding Photography",
    text: "Our wedding photos were breathtaking! The team captured every emotion perfectly. From the mehendi to the reception, not a single moment was missed. Highly recommended! 💍✨",
    rating: 5,
    avatar: "/assets/Love-Commitment-Photography-Album/Marriage-Album-Pic-3.jpg", // 🔁 Add real client photo or use placeholder
    location: "Coimbatore"
  },
  {
    id: 2,
    name: "Ananya K.",
    event: "Newborn Photoshoot",
    text: "So patient and gentle with our newborn! The photos are precious memories we'll cherish forever. The editing was magical and delivery was faster than promised. 👶💕",
    rating: 5,
    avatar: "/assets/Love-Commitment-Photography-Album/Marriage-Album-Pic-5.jpg",
    location: "Tiruppur"
  },
  {
    id: 3,
    name: "Rahul Events Co.",
    event: "Corporate Event Coverage",
    text: "Professional, punctual, and incredible attention to detail. Our clients loved the gallery! Will definitely book for our next conference. 🎉📸",
    rating: 5,
    avatar: "/assets/Love-Commitment-Photography-Album/Marriage-Album-Pic-6.jpg",
    location: "Coimbatore"
  },
  {
    id: 4,
    name: "Meera & Vikram",
    event: "Couple Pre-Wedding",
    text: "They made us feel so comfortable in front of the camera! The outdoor shoot at sunset was pure magic. Can't wait to see our wedding photos! 🌅💑",
    rating: 5,
    avatar: "/assets/Love-Commitment-Photography-Album/Marriage-Album-Pic-1.jpg",
    location: "Ooty"
  }
];

// 🆕 NEW: Star Rating Component (reusable + accessible)
const StarRating = ({ rating, showLabel = true }) => {
  const stars = Array(5).fill(0).map((_, i) => (
    <span 
      key={i} 
      className={i < rating ? "star filled" : "star"}
      aria-hidden="true"
    >
      {i < rating ? "★" : "☆"}
    </span>
  ));
  
  return (
    <div className="star-rating" role="img" aria-label={`Rating: ${rating} out of 5 stars`}>
      {stars}
      {showLabel && <span className="rating-label">({rating}.0)</span>}
    </div>
  );
};

// 🆕 NEW: WhatsApp handler (centralized)
const handleWhatsAppClick = (message) => {
  const phoneNumber = "919876543210"; // 🔁 REPLACE WITH CLIENT'S ACTUAL NUMBER
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  
  // Optional: Track click for analytics
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'testimonial_whatsapp_click', {
      event_category: 'conversion',
      event_label: 'testimonials_section'
    });
  }
};

function Testimonials() {
  // 🆕 NEW: Schema markup for SEO (Google Rich Results)
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Right Click Photography Studio",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "200+"
    },
    "review": testimonialsData.map(t => ({
      "@type": "Review",
      "author": { "@type": "Person", "name": t.name },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": t.rating,
        "bestRating": "5"
      },
      "reviewBody": t.text,
      "itemReviewed": { "@type": "PhotographyStudio", "name": "Right Click Photography Studio" }
    }))
  };

  return (
    <section 
      className="testimonials-section" 
      aria-label="Client testimonials and reviews"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      {/* 🆕 NEW: JSON-LD Schema for SEO */}
      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </script>
      
      <div className="testimonials-container">
        {/* Header */}
        <div className="testimonials-header">
          <h2 className="section-title">💬 What Our Clients Say</h2>
          <p className="section-subtitle">
            Real stories from happy families & businesses across Tamil Nadu
          </p>
          
          {/* 🆕 NEW: Aggregate rating badge */}
          <div className="aggregate-rating">
            <StarRating rating={5} showLabel={false} />
            <span className="rating-count">4.9/5 from 200+ reviews</span>
            <a 
              href="https://g.page/rightclickphotography/review" 
              target="_blank" 
              rel="noopener noreferrer"
              className="write-review-link"
            >
              Write a review →
            </a>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonial-grid">
          {testimonialsData.map((testimonial, index) => (
            <article 
              key={testimonial.id} 
              className="testimonial-card"
              itemScope
              itemType="https://schema.org/Review"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Schema meta tags */}
              <meta itemProp="author" content={testimonial.name} />
              <meta itemProp="reviewRating" content={testimonial.rating} />
              <meta itemProp="bestRating" content="5" />
              
              {/* Avatar + Info */}
              <div className="testimonial-author">
                {testimonial.avatar ? (
                  <img 
                    src={testimonial.avatar} 
                    alt={`${testimonial.name}'s photo`} 
                    className="author-avatar"
                    loading="lazy"
                    width="60"
                    height="60"
                  />
                ) : (
                  <div className="author-avatar placeholder">
                    {testimonial.name.charAt(0)}
                  </div>
                )}
                <div className="author-info">
                  <strong className="author-name" itemProp="name">{testimonial.name}</strong>
                  <span className="author-event" itemProp="itemReviewed">{testimonial.event}</span>
                  <span className="author-location">📍 {testimonial.location}</span>
                </div>
              </div>

              {/* Rating */}
              <div className="testimonial-rating">
                <StarRating rating={testimonial.rating} />
              </div>

              {/* Review Text */}
              <p className="testimonial-text" itemProp="reviewBody">
                "{testimonial.text}"
              </p>

              {/* 🆕 NEW: Inline CTA - Contextual booking */}
              <button
                className="testimonial-cta"
                onClick={() => handleWhatsAppClick(
                  `Hi! I saw ${testimonial.name}'s ${testimonial.event} review and would like to book a similar session.`
                )}
                aria-label={`Book a ${testimonial.event} like ${testimonial.name}`}
              >
                Book Similar Shoot 💬
              </button>
            </article>
          ))}
        </div>

        {/* 🆕 NEW: Bottom CTA Section */}
        <div className="testimonials-cta">
          <div className="cta-content">
            <h3>Ready to Create Your Memories?</h3>
            <p>Join 200+ happy clients who trusted us with their special moments.</p>
          </div>
          <div className="cta-buttons">
            <button 
              className="cta-primary"
              onClick={() => handleWhatsAppClick("Hi! I'd like to book a photoshoot. Please share your packages and availability.")}
            >
              💬 Book via WhatsApp
            </button>
            <a 
              href="#booking" 
              className="cta-secondary"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View Packages →
            </a>
          </div>
        </div>
      </div>

      {/* 🆕 NEW: Floating WhatsApp Button (persistent) */}
    </section>
  );
}

export default Testimonials;