import { useState, useCallback, useMemo } from "react";
import AlbumViewer from "./AlbumViewer";
import "./MyBookComponent.css";

// 🆕 NEW: Album data with pricing hints + CTAs
const albums = [
  {
    id: 1,
    name: "Childhood Photography",
    folder: "Child-Photography-Album",
    prefix: "Child-Photo",
    count: 6,
    priceHint: "From ₹5,499",
    ctaMessage: "Hi! I loved your Childhood Photography style. Can we book a session for my child?",
    tags: ["Portrait", "Candid", "Studio"]
  },
  {
    id: 2,
    name: "Baby Photography",
    folder: "Baby-Photography-album",
    prefix: "Baby-Photos-Page",
    count: 6,
    priceHint: "From ₹6,999",
    ctaMessage: "Hi! I saw your Baby Photography album and would like to book a newborn session.",
    tags: ["Newborn", "Milestone", "Family"]
  },
  {
    id: 3,
    name: "Playful Childhood Photography",
    folder: "Playful-Childhood",
    prefix: "ChildHoodPhoto",
    count: 6,
    priceHint: "From ₹5,999",
    ctaMessage: "Hi! I loved the playful style in your Childhood album. Can we discuss a shoot?",
    tags: ["Outdoor", "Fun", "Natural Light"]
  },
  {
    id: 4,
    name: "Teenage Photography",
    folder: "Ambitious-Photos-Teen",
    prefix: "Teenage-Ambitious-Photos",
    count: 6,
    priceHint: "From ₹7,499",
    ctaMessage: "Hi! I'm interested in a teenage portrait session like your Ambitious Photos album.",
    tags: ["Portrait", "Graduation", "Creative"]
  },
  {
    id: 6,
    name: "Wedding & Marriage Photography",
    folder: "Love-Commitment-Photography-Album",
    prefix: "Marriage-Album-Pic",
    count: 6,
    priceHint: "From ₹24,999",
    ctaMessage: "Hi! I loved your Wedding Photography style. Can we discuss packages for my wedding?",
    tags: ["Candid", "Traditional", "Cinematic"],
    popular: true
  },
  {
    id: 7,
    name: "Family Photoshoot",
    folder: "Family-Photoshoot-Album",
    prefix: "Family-Photo-Shoot-Picture",
    count: 6,
    priceHint: "From ₹8,999",
    ctaMessage: "Hi! I'd like to book a family photoshoot like your Family Album.",
    tags: ["Group", "Outdoor", "Generations"]
  },
  {
    id: 8,
    name: "Senior Portrait Photography",
    folder: "Wisdom-Years-Album",
    prefix: "Wisdom-Years-Album-Photo",
    count: 6,
    priceHint: "From ₹6,499",
    ctaMessage: "Hi! I'm interested in a senior portrait session like your Wisdom Years album.",
    tags: ["Portrait", "Legacy", "Black & White"]
  }
];

// 🆕 NEW: WhatsApp handler (centralized + trackable)
const handleWhatsAppBooking = (message, albumName) => {
  const phoneNumber = "919876543210"; // 🔁 REPLACE WITH CLIENT'S ACTUAL NUMBER
  const encodedMessage = encodeURIComponent(
    `${message}\n\n[Source: Album Gallery - ${albumName}]`
  );
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  
  // Optional: Google Analytics tracking
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'album_whatsapp_click', {
      event_category: 'conversion',
      event_label: albumName,
      value: 1
    });
  }
};

function MyBookComponent() {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [loadingAlbum, setLoadingAlbum] = useState(null);

  /* =========================
     BUILD PHOTOS (memoized)
  ========================= */
  const buildPhotos = useCallback((album) => {
    return Array.from({ length: album.count }, (_, i) =>
      `/assets/${album.folder}/${album.prefix}-${i + 1}.jpg`
    );
  }, []);

  /* =========================
     OPEN ALBUM with loading state
  ========================= */
  const openAlbum = useCallback((album) => {
    setLoadingAlbum(album.id);
    
    // Preload cover image for smoother transition
    const cover = `/assets/${album.folder}/${album.prefix}-1.jpg`;
    const img = new Image();
    img.src = cover;
    img.onload = () => {
      setSelectedAlbum({
        ...album,
        cover,
        photos: buildPhotos(album)
      });
      setLoadingAlbum(null);
    };
    img.onerror = () => {
      // Fallback if image fails
      setSelectedAlbum({
        ...album,
        cover: "/assets/fallback-album.jpg",
        photos: buildPhotos(album)
      });
      setLoadingAlbum(null);
    };
  }, [buildPhotos]);

  /* =========================
     SCHEMA MARKUP for SEO
  ========================= */
  const schemaMarkup = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Right Click Photography Studio - Portfolio Albums",
    "description": "Professional photography albums: wedding, baby, family, portrait sessions in Coimbatore",
    "image": albums.map(album => ({
      "@type": "ImageObject",
      "name": album.name,
      "contentUrl": `/assets/${album.folder}/${album.prefix}-1.jpg`,
      "thumbnailUrl": `/assets/${album.folder}/${album.prefix}-1.jpg`,
      "description": `${album.name} portfolio by Right Click Photography Studio`
    })),
    "provider": {
      "@type": "PhotographyStudio",
      "name": "Right Click Photography Studio",
      "areaServed": "Coimbatore, Tamil Nadu"
    }
  }), []);

  return (
    <section
      className="album-section"
      aria-label="Photography portfolio albums"
      itemScope
      itemType="https://schema.org/ImageGallery"
    >
      {/* 🆕 NEW: JSON-LD Schema for SEO */}
      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </script>

      {/* SEO Title + Intro */}
      <div className="album-header">
        <h1 className="album-title">
          Professional Photography Albums
        </h1>
        <p className="album-subtitle">
          Wedding • Baby • Family • Portrait • Events in Coimbatore
        </p>
        
        {/* 🆕 NEW: Quick filter tags */}
        <div className="album-filters" role="tablist" aria-label="Filter albums by category">
          {["All", "Wedding", "Baby", "Family", "Portrait"].map((tag) => (
            <button
              key={tag}
              className={`filter-tag ${tag === "All" ? "active" : ""}`}
              role="tab"
              aria-selected={tag === "All"}
              onClick={() => {/* Add filter logic later */}}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="album-container">
        {albums.map((album) => {
          const cover = `/assets/${album.folder}/${album.prefix}-1.jpg`;
          const isLoading = loadingAlbum === album.id;

          return (
            <article
              key={album.id}
              className={`album-card ${album.popular ? 'popular' : ''}`}
              role="button"
              tabIndex={0}
              aria-label={`View ${album.name} album - ${album.priceHint}`}
              onClick={() => !isLoading && openAlbum(album)}
              onKeyDown={(e) => {
                if (!isLoading && (e.key === "Enter" || e.key === " ")) {
                  e.preventDefault();
                  openAlbum(album);
                }
              }}
            >
              {/* 🆕 NEW: Popular badge */}
              {album.popular && (
                <span className="popular-badge" aria-label="Most popular package">
                  ⭐ MOST BOOKED
                </span>
              )}

              {/* Image with loading state */}
              <div className="album-image-wrapper">
                {isLoading ? (
                  <div className="album-loading">
                    <div className="loading-spinner" aria-label="Loading album"></div>
                  </div>
                ) : (
                  <img
                    src={cover}
                    alt={`${album.name} photography album cover`}
                    loading="lazy"
                    decoding="async"
                    width="300"
                    height="220"
                    onError={(e) => {
                      e.target.src = "/assets/fallback-album.jpg";
                      e.target.alt = "Photography album preview";
                    }}
                  />
                )}
                
                {/* 🆕 NEW: Hover overlay with quick actions */}
                <div className="album-overlay">
                  <button
                    className="overlay-btn view-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      openAlbum(album);
                    }}
                    aria-label={`View ${album.name} album`}
                  >
                    👁️ View Album
                  </button>
                  <button
                    className="overlay-btn book-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleWhatsAppBooking(album.ctaMessage, album.name);
                    }}
                    aria-label={`Book a ${album.name} session via WhatsApp`}
                  >
                    💬 Book Now
                  </button>
                </div>
              </div>

              {/* Album Info */}
              <div className="album-info">
                <h2>{album.name}</h2>
                
                {/* 🆕 NEW: Tags */}
                <div className="album-tags">
                  {album.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                
                {/* 🆕 NEW: Price hint + CTA */}
                <div className="album-cta-row">
                  <span className="price-hint">{album.priceHint}</span>
                  <button
                    className="quick-book-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleWhatsAppBooking(album.ctaMessage, album.name);
                    }}
                    aria-label={`Get quote for ${album.name}`}
                  >
                    Get Quote →
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* 🆕 NEW: Bottom CTA Section */}
      <div className="album-section-cta">
        <div className="cta-content">
          <h3>✨ Love a Style? Let's Create Yours</h3>
          <p>Get a personalized quote + free consultation for your dream photoshoot.</p>
        </div>
        <div className="cta-buttons">
          <button 
            className="cta-whatsapp"
            onClick={() => handleWhatsAppBooking(
              "Hi! I browsed your portfolio and would like to discuss a photoshoot. Please share available packages.",
              "Gallery Bottom CTA"
            )}
          >
            💬 Chat on WhatsApp
          </button>
          <a 
            href="#booking" 
            className="cta-link"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View All Packages →
          </a>
        </div>
      </div>

      {/* Album Viewer Modal */}
      {selectedAlbum && (
        <AlbumViewer
          album={selectedAlbum}
          onClose={() => setSelectedAlbum(null)}
          onBookNow={() => handleWhatsAppBooking(
            selectedAlbum.ctaMessage,
            selectedAlbum.name
          )}
        />
      )}
    </section>
  );
}

export default MyBookComponent;