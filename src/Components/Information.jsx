import React from "react";
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
      "Right Click Photography Studio is a professional photography studio based in Coimbatore, Tamil Nadu, dedicated to capturing life’s most meaningful moments.",
      "We specialize in wedding photography, portrait sessions, event coverage, lifestyle shoots, and commercial photography with a strong focus on storytelling."
    ]
  },
  {
    id: "vision",
    title: "Creative Photography & Visual Storytelling",
    text: [
      "Photography is more than just images — it is about storytelling through emotion and light.",
      "Our photographers craft powerful visual narratives that highlight personality, atmosphere, and authentic moments."
    ]
  },
  {
    id: "delivery",
    title: "Fast Delivery with Premium Quality Editing",
    text: [
      "We understand that every captured moment matters.",
      "Our efficient workflow ensures quick turnaround time while maintaining high-quality editing standards."
    ]
  },
  {
    id: "candid",
    title: "Candid Photography That Captures Real Emotions",
    text: [
      "We specialize in natural and candid photography that reflects genuine emotions.",
      "Our team blends seamlessly into events to capture authentic, unscripted moments."
    ]
  }
];

function Information() {
  return (
    <section
      className="info-section"
      aria-label="About photography services"
    >

      <div className="info-container">

        {/* LEFT IMAGE */}
        <div className="info-image">
          <img
            src="/assets/Bharatanatyam/Bharatanatyam-Girl.jpg"
            alt="Bharatanatyam dance photography performance captured by Right Click Studio"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="info-content">

          {contentData.map((item) => (
            <article className="info-card" key={item.id}>
              <h2>{item.title}</h2>

              {item.text.map((para, i) => (
                <p key={`${item.id}-${i}`}>{para}</p>
              ))}

            </article>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Information;