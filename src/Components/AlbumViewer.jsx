import { useEffect, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import "./MyBookComponent.css";

function AlbumViewer({ album, onClose, onBookNow }) {
  const modalRef = useRef(null);
  const closeBtnRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  /* =========================
     ACCESSIBILITY: ESC + FOCUS TRAP
  ========================= */
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEsc);
    
    // Focus trap: keep focus within modal
    const previouslyFocused = document.activeElement;
    closeBtnRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", handleEsc);
      previouslyFocused?.focus?.();
    };
  }, [onClose]);

  /* =========================
     CLOSE ON OUTSIDE CLICK
  ========================= */
  const handleOverlayClick = (e) => {
    if (e.target === modalRef.current && !isFlipping) {
      onClose();
    }
  };

  /* =========================
     FLIPBOOK PAGE CHANGE
  ========================= */
  const handlePageChange = (e) => {
    setCurrentPage(e.data);
  };

  const handleFlipStart = () => setIsFlipping(true);
  const handleFlipEnd = () => setIsFlipping(false);

  return (
    <div
      className="modal-overlay"
      ref={modalRef}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label={`${album.name} photo album viewer`}
    >
      <div className="modal-content">
        {/* 🆕 NEW: Modal Header with Actions */}
        <div className="modal-header">
          <h3 className="modal-title">{album.name}</h3>
          <div className="modal-actions">
            <button
              className="modal-book-btn"
              onClick={onBookNow}
              aria-label={`Book a ${album.name} session via WhatsApp`}
            >
              💬 Book This Style
            </button>
            <button
              ref={closeBtnRef}
              className="close-btn"
              onClick={onClose}
              aria-label="Close album viewer"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Flipbook */}
        <HTMLFlipBook
          width={500}
          height={600}
          size="stretch"
          minWidth={280}
          maxWidth={900}
          minHeight={350}
          maxHeight={900}
          maxShadowOpacity={0.8}
          showCover={true}
          usePortrait={false}
          drawShadow={true}
          flippingTime={800}
          className="flip-book"
          onFlip={handlePageChange}
          onStartFlip={handleFlipStart}
          onStopFlip={handleFlipEnd}
        >
          {/* COVER PAGE */}
          <div className="page cover" data-density="hard">
            <div className="cover-inner">
              <h1>{album.name}</h1>
              <p className="cover-subtitle">Professional Photography Album</p>
              <div className="cover-price">{album.priceHint}</div>
              <button
                className="cover-cta"
                onClick={onBookNow}
                aria-label={`Book ${album.name} session`}
              >
                💬 Book Similar Shoot
              </button>
            </div>
          </div>

          {/* IMAGE PAGES */}
          {album.photos.map((photo, index) => (
            <div 
              key={`${album.id}-page-${index}`} 
              className="page image-page"
              data-density="soft"
            >
              <div className="page-inner">
                <img
                  src={photo}
                  alt={`${album.name} - Photo ${index + 1} of ${album.photos.length}`}
                  loading="lazy"
                  decoding="async"
                  width="500"
                  height="600"
                  onError={(e) => {
                    e.target.src = "/assets/fallback-photo.jpg";
                    e.target.alt = "Photo preview";
                  }}
                />
                <div className="photo-counter">
                  {index + 1} / {album.photos.length}
                </div>
              </div>
            </div>
          ))}

          {/* END PAGE with CTA */}
          <div className="page end-page" data-density="hard">
            <div className="end-inner">
              <h3>✨ Loved This Album?</h3>
              <p>Let's create something beautiful for you.</p>
              <button
                className="end-cta"
                onClick={onBookNow}
                aria-label="Book a photoshoot via WhatsApp"
              >
                💬 Get Your Quote on WhatsApp
              </button>
              <p className="end-note">📍 Serving Coimbatore & Tamil Nadu</p>
            </div>
          </div>
        </HTMLFlipBook>

        {/* 🆕 NEW: Page Navigation Controls */}
        <div className="flipbook-controls">
          <button 
            className="control-btn prev"
            disabled={currentPage === 0}
            aria-label="Previous page"
          >
            ← Prev
          </button>
          <span className="page-indicator">
            Page {currentPage + 1} of {album.photos.length + 2}
          </span>
          <button 
            className="control-btn next"
            disabled={currentPage >= album.photos.length + 1}
            aria-label="Next page"
          >
            Next →
          </button>
        </div>

        {/* 🆕 NEW: Mobile Sticky CTA */}
        <div className="mobile-cta-bar">
          <button
            className="mobile-book-btn"
            onClick={onBookNow}
            aria-label="Book this photoshoot style via WhatsApp"
          >
            💬 Book This Style - {album.priceHint}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AlbumViewer;