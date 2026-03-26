import { useState, useCallback } from "react";
import AlbumViewer from "./AlbumViewer";
import "./MyBookComponent.css";

const albums = [
  {
    id: 1,
    name: "Childhood Photography",
    folder: "Child-Photography-Album",
    prefix: "Child-Photo",
    count: 6
  },
  {
    id: 2,
    name: "Baby Photography",
    folder: "Baby-Photography-album",
    prefix: "Baby-Photos-Page",
    count: 6
  },
  {
    id: 3,
    name: "Playful Childhood Photography",
    folder: "Playful-Childhood",
    prefix: "ChildHoodPhoto",
    count: 6
  },
  {
    id: 4,
    name: "Teenage Photography",
    folder: "Ambitious-Photos-Teen",
    prefix: "Teenage-Ambitious-Photos",
    count: 6
  },
  {
    id: 6,
    name: "Wedding & Marriage Photography",
    folder: "Love-Commitment-Photography-Album",
    prefix: "Marriage-Album-Pic",
    count: 6
  },
  {
    id: 7,
    name: "Family Photoshoot",
    folder: "Family-Photoshoot-Album",
    prefix: "Family-Photo-Shoot-Picture",
    count: 6
  },
  {
    id: 8,
    name: "Senior Portrait Photography",
    folder: "Wisdom-Years-Album",
    prefix: "Wisdom-Years-Album-Photo",
    count: 6
  }
];

function MyBookComponent() {
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  /* =========================
     BUILD PHOTOS
  ========================= */
  const buildPhotos = useCallback((album) => {
    return Array.from({ length: album.count }, (_, i) =>
      `/assets/${album.folder}/${album.prefix}-${i + 1}.png`
    );
  }, []);

  /* =========================
     OPEN ALBUM (single source)
  ========================= */
  const openAlbum = (album) => {
    const cover = `/assets/${album.folder}/${album.prefix}-1.png`;

    setSelectedAlbum({
      ...album,
      cover,
      photos: buildPhotos(album)
    });
  };

  return (
    <section
      className="album-section"
      aria-label="Photography albums gallery"
    >

      {/* SEO Title */}
      <h1 className="album-title">
        Professional Photography Albums – Wedding, Baby, Family & Portrait
      </h1>

      <div className="album-container">

        {albums.map((album) => {
          const cover = `/assets/${album.folder}/${album.prefix}-1.png`;

          return (
            <article
              key={album.id}
              className="album-card"
              role="button"
              tabIndex={0}
              aria-label={`Open ${album.name} album`}
              onClick={() => openAlbum(album)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openAlbum(album);
                }
              }}
            >
              <img
                src={cover}
                alt={`${album.name} photography album cover`}
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  e.target.src = "/assets/fallback.jpg";
                }}
              />

              <h2>{album.name}</h2>
            </article>
          );
        })}

      </div>

      {selectedAlbum && (
        <AlbumViewer
          album={selectedAlbum}
          onClose={() => setSelectedAlbum(null)}
        />
      )}

    </section>
  );
}

export default MyBookComponent;