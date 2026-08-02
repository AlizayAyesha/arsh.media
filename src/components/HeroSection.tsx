import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { UpcomingEvent, UPCOMING_EVENTS } from '../data/eventsData';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onOpenSpeakerModal: (event: UpcomingEvent) => void;
  onOpenRsvpModal: (event: UpcomingEvent) => void;
  onExploreEcosystems: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenRsvpModal,
  onExploreEcosystems,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const events = UPCOMING_EVENTS;
  const currentEvent = events[currentSlide];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % events.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [events.length]);

  return (
    <section
      id="hero"
      className="hero-on-media relative flex min-h-[100svh] flex-col justify-end overflow-hidden"
    >
      {/* Full-bleed event imagery — overlays stay dark in both themes */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentEvent.id}
            src={currentEvent.coverImage}
            alt=""
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-media via-media/80 to-media/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-media/85 via-media/45 to-transparent" />
        <div className="grain absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-28 sm:px-8 lg:px-10 lg:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          {/* Brand — hero-level signal */}
          <p className="font-display text-[clamp(3.5rem,12vw,7.5rem)] font-medium leading-[0.85] tracking-[0.08em] text-champagne-soft">
            ARSH
          </p>
          <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.42em] text-forest-bright sm:text-xs">
            Events &amp; Experiences
          </p>

          <div className="mt-10 h-px w-16 bg-champagne/50" />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentEvent.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.55 }}
              className="mt-8"
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-mist">
                {currentEvent.date} · {currentEvent.city}
              </p>
              <h1 className="mt-3 font-display text-[clamp(1.75rem,4vw,2.75rem)] font-medium leading-[1.15] text-balance text-paper">
                {currentEvent.title}
              </h1>
              <p className="mt-4 max-w-xl text-base font-light leading-relaxed text-mist sm:text-lg">
                {currentEvent.subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              onClick={() => onOpenRsvpModal(currentEvent)}
              className="group inline-flex items-center justify-center gap-2.5 bg-champagne px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-on-accent transition-colors hover:bg-[#e8d9b5]"
            >
              Reserve Your Seat
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={onExploreEcosystems}
              className="inline-flex items-center justify-center gap-2 border border-champagne/35 bg-transparent px-7 py-3.5 text-xs font-medium uppercase tracking-[0.18em] text-champagne-soft transition-colors hover:border-champagne hover:bg-champagne/10"
            >
              Explore Ecosystems
            </button>
          </div>
        </motion.div>

        {/* Slide markers — quiet, not pills */}
        <div className="mt-14 flex items-center gap-6">
          <div className="flex items-center gap-2">
            {events.map((ev, idx) => (
              <button
                key={ev.id}
                aria-label={`Show ${ev.title}`}
                onClick={() => setCurrentSlide(idx)}
                className={`h-px transition-all duration-500 ${
                  currentSlide === idx
                    ? 'w-10 bg-champagne'
                    : 'w-5 bg-mist/30 hover:bg-mist/55'
                }`}
              />
            ))}
          </div>
          <span className="font-display text-sm italic text-mist/70">
            {String(currentSlide + 1).padStart(2, '0')} / {String(events.length).padStart(2, '0')}
          </span>
        </div>
      </div>
    </section>
  );
};
