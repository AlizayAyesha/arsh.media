import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Calendar, MapPin, X, ChevronLeft, ChevronRight, Images } from 'lucide-react';
import { EVENT_ALBUMS, EventAlbum } from '../data/albumsData';

interface AlbumsPageProps {
  onBackToHome: () => void;
}

export const AlbumsPage: React.FC<AlbumsPageProps> = ({ onBackToHome }) => {
  const [activeAlbum, setActiveAlbum] = useState<EventAlbum | null>(null);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    if (!lightboxOpen || !activeAlbum) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxOpen(false);
      if (e.key === 'ArrowRight') {
        setPhotoIndex((i) => (i + 1) % activeAlbum.photos.length);
      }
      if (e.key === 'ArrowLeft') {
        setPhotoIndex((i) => (i - 1 + activeAlbum.photos.length) % activeAlbum.photos.length);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxOpen, activeAlbum]);

  const openAlbum = (album: EventAlbum) => {
    setActiveAlbum(album);
    setPhotoIndex(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section className="relative min-h-screen bg-ink pb-24 pt-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <button
          onClick={() => {
            if (activeAlbum) {
              setActiveAlbum(null);
              setLightboxOpen(false);
            } else {
              onBackToHome();
            }
          }}
          className="mb-10 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-mist transition-colors hover:text-champagne-soft"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          {activeAlbum ? 'All albums' : 'Back home'}
        </button>

        {!activeAlbum ? (
          <>
            <div className="max-w-2xl">
              <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-forest-bright">
                Archive
              </p>
              <h1 className="mt-4 font-display text-[clamp(2.25rem,5vw,3.75rem)] font-medium leading-none text-paper">
                Event Albums
              </h1>
              <p className="mt-5 text-base font-light leading-relaxed text-mist">
                Picture albums from every summit, gala, and fellowship we’ve produced. Open an event
                to browse the full set.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {EVENT_ALBUMS.map((album, idx) => (
                <motion.button
                  key={album.id}
                  type="button"
                  onClick={() => openAlbum(album)}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="group text-left"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={album.coverImage}
                      alt={album.eventName}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-media/85 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-[#e8d9b5]">
                      <Images className="h-3 w-3" />
                      {album.photos.length} photos
                    </span>
                  </div>
                  <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.22em] text-forest-bright">
                    {album.category}
                  </p>
                  <h2 className="mt-1 font-display text-xl text-paper group-hover:text-champagne-soft sm:text-2xl">
                    {album.eventName}
                  </h2>
                  <div className="mt-2 flex flex-wrap gap-3 text-xs text-mist">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-3 w-3 text-champagne" />
                      {album.date}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-forest-bright" />
                      {album.location}
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="max-w-3xl">
              <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-forest-bright">
                {activeAlbum.category}
              </p>
              <h1 className="mt-3 font-display text-[clamp(1.75rem,4vw,3rem)] font-medium leading-tight text-paper">
                {activeAlbum.eventName}
              </h1>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-mist">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 text-champagne" />
                  {activeAlbum.date}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-forest-bright" />
                  {activeAlbum.location}
                </span>
              </div>
              <p className="mt-5 max-w-xl text-base font-light leading-relaxed text-mist">
                {activeAlbum.description}
              </p>
            </div>

            <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
              {activeAlbum.photos.map((photo, index) => (
                <button
                  key={photo.id}
                  type="button"
                  onClick={() => openLightbox(index)}
                  className="mb-4 block w-full break-inside-avoid overflow-hidden"
                >
                  <img
                    src={photo.url}
                    alt={photo.caption}
                    className="w-full object-cover transition-opacity hover:opacity-90"
                  />
                  <span className="mt-2 block text-left text-xs text-mist">{photo.caption}</span>
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      <AnimatePresence>
        {lightboxOpen && activeAlbum && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-media/94 p-4 backdrop-blur-md"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              type="button"
              onClick={() => setLightboxOpen(false)}
              className="absolute right-5 top-5 border border-white/20 p-2 text-[#e8d9b5]"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setPhotoIndex(
                  (i) => (i - 1 + activeAlbum.photos.length) % activeAlbum.photos.length
                );
              }}
              className="absolute left-3 border border-white/20 p-2 text-[#e8d9b5] sm:left-6"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setPhotoIndex((i) => (i + 1) % activeAlbum.photos.length);
              }}
              className="absolute right-3 border border-white/20 p-2 text-[#e8d9b5] sm:right-6"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <div
              className="relative max-h-[85vh] w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={activeAlbum.photos[photoIndex].url}
                alt={activeAlbum.photos[photoIndex].caption}
                className="mx-auto max-h-[75vh] w-auto object-contain"
              />
              <p className="mt-4 text-center text-sm text-[#e8d9b5]">
                {activeAlbum.photos[photoIndex].caption}
                <span className="ml-3 text-[#c5cdc8]/70">
                  {photoIndex + 1} / {activeAlbum.photos.length}
                </span>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
