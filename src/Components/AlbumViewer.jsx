import { useEffect, useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import "./MyBookComponent.css";

function AlbumViewer({ album, onClose }) {
  const modalRef = useRef(null);
  const closeBtnRef = useRef(null);

  /* =========================
     ACCESSIBILITY: ESC + FOCUS
  ========================= */
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEsc);

    // Focus on open
    closeBtnRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  /* =========================
     CLOSE ON OUTSIDE CLICK
  ========================= */
  const handleOverlayClick = (e) => {
    if (e.target === modalRef.current) {
      onClose();
    }
  };

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

        <button
          ref={closeBtnRef}
          className="close-btn"
          onClick={onClose}
          aria-label="Close album viewer"
        >
          ✖ Close
        </button>

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
        >
          {/* COVER */}
          <div className="page cover">
            <div className="cover-inner">
              <h1>{album.name}</h1>
              <p>Professional Photography Album</p>
            </div>
          </div>

          {/* IMAGES */}
          {album.photos.map((photo, index) => (
            <div key={`${photo}-${index}`} className="page image-page">
              <div className="page-inner">
                <img
                  src={photo}
                  alt={`${album.name} photo ${index + 1}`}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.target.src = "/fallback.jpg"; // optional fallback
                  }}
                />
              </div>
            </div>
          ))}

          {/* END PAGE */}
          <div className="page end-page">
            <p>✨ End of Album</p>
          </div>

        </HTMLFlipBook>
      </div>
    </div>
  );
}

export default AlbumViewer;