import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaLinkedin
} from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer" aria-label="Website footer">

      <div className="footer-container">

        {/* Studio Info */}
        <section className="footer-section">
          <h2 className="footer-logo">
            Right Click Photography Studio
          </h2>
          <p>
            Professional wedding, portrait, and event photography services in
            Coimbatore, Tamil Nadu. We capture timeless moments with cinematic storytelling.
          </p>
        </section>

        {/* Quick Links */}
        <nav className="footer-section" aria-label="Footer navigation">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/" aria-label="Go to home page">Home</a></li>
            <li><a href="/about" aria-label="Learn more about us">About</a></li>
            <li><a href="#portfolio" aria-label="View portfolio">Portfolio</a></li>
            <li><a href="/contact" aria-label="Contact us">Contact</a></li>
          </ul>
        </nav>

        {/* Contact */}
        <section className="footer-section">
          <h3>Contact Us</h3>

          <address>
            <p>📍 Coimbatore, Tamil Nadu, India</p>

            <p>
              📞{" "}
              <a href="tel:+919876543210" aria-label="Call Right Click Studio">
                +91 98765 43210
              </a>
            </p>

            <p>
              📧{" "}
              <a
                href="mailto:rightclickstudio@gmail.com"
                aria-label="Email Right Click Studio"
              >
                rightclickstudio@gmail.com
              </a>
            </p>
          </address>
        </section>

        {/* Social Media */}
        <section className="footer-section">
          <h3>Follow Us</h3>

          <div className="social-icons">
            <a
              href="#"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/tales_of_savio/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </section>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Right Click Photography Studio | Wedding &
        Event Photography in Coimbatore
      </div>

    </footer>
  );
}

export default Footer;