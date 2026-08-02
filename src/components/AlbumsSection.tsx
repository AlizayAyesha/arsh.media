import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { EVENT_ALBUMS } from '../data/albumsData';

interface AlbumsSectionProps {
  onOpenAlbumsPage?: () => void;
}

export const AlbumsSection: React.FC<AlbumsSectionProps> = ({ onOpenAlbumsPage }) => {
  const [activeAlbumIndex, setActiveAlbumIndex] = useState(0);
  const preview = EVENT_ALBUMS;

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveAlbumIndex((prev) => (prev + 1) % preview.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [preview.length]);

  const currentAlbum = preview[activeAlbumIndex];

  return (
    <section id="albums" className="relative overflow-hidden bg-ink-elevated py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-forest-bright">
              Archive
            </p>
            <h2 className="mt-4 font-display text-[clamp(2.25rem,5vw,3.75rem)] font-medium leading-none text-paper">
              Event Albums
            </h2>
            <p className="mt-5 max-w-lg text-base font-light leading-relaxed text-mist">
              Moments from national summits, broadcast conclaves, and creator galas.
            </p>
          </div>
          {onOpenAlbumsPage && (
            <button
              type="button"
              onClick={onOpenAlbumsPage}
              className="group inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-champagne transition-colors hover:text-champagne-soft"
            >
              View all albums
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          )}
        </div>

        <button
          type="button"
          onClick={onOpenAlbumsPage}
          className="relative mt-12 block w-full overflow-hidden text-left"
        >
          <div className="relative aspect-[16/10] w-full sm:aspect-[21/9]">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentAlbum.id}
                src={currentAlbum.coverImage}
                alt={currentAlbum.eventName}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9 }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-media via-media/50 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
              <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#c5a059]">
                {currentAlbum.category} · {currentAlbum.photos.length} photos
              </p>
              <h3 className="mt-2 font-display text-2xl text-[#f4f0e8] sm:text-4xl">
                {currentAlbum.eventName}
              </h3>
              <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-[#c5cdc8]">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 text-[#c5a059]" />
                  {currentAlbum.date}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-[#6a9a7c]" />
                  {currentAlbum.location}
                </span>
              </div>
            </div>
          </div>
        </button>

        <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
          {preview.map((album, idx) => (
            <button
              key={album.id}
              onClick={() => setActiveAlbumIndex(idx)}
              className={`relative h-20 w-28 shrink-0 overflow-hidden sm:h-24 sm:w-36 ${
                activeAlbumIndex === idx ? 'ring-1 ring-champagne' : 'opacity-50 hover:opacity-80'
              }`}
            >
              <img src={album.coverImage} alt="" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
