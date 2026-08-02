import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { UpcomingEvent, UPCOMING_EVENTS } from '../data/eventsData';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onOpenSpeakerModal: (event: UpcomingEvent) => void;
  onOpenRsvpModal: (event: UpcomingEvent) => void;
  onExploreEcosystems: () => void;
  onOpenMedia?: () => void;
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
        <div className="absolute inset-0 bg-gradient-to-t from-media via-media/85 to-media/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-media/90 via-media/50 to-transparent" />
        <div className="grain absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-28 sm:px-8 lg:px-10 lg:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="text-[10px] font-medium uppercase tracking-[0.4em] text-[#c5a059] sm:text-[11px]">
            Official portfolio · Islamabad · GCC
          </p>

          <p className="mt-5 font-display text-[clamp(3.75rem,13vw,8rem)] font-medium leading-[0.82] tracking-[0.06em] text-[#f4f0e8]">
            ARSH
          </p>
          <p className="mt-4 font-display text-lg tracking-[0.12em] text-[#e8d9b5] sm:text-xl">
            Arshman Ali Khan
          </p>
          <p className="mt-2 max-w-[18rem] text-[10px] font-medium uppercase leading-relaxed tracking-[0.22em] text-[#6a9a7c] sm:max-w-none sm:text-[11px] sm:tracking-[0.36em]">
            Events · Experiences · National Platforms
          </p>

          <div className="mt-8 h-px w-20 bg-[#c5a059]/60" />

          <p className="mt-8 max-w-xl text-base font-light leading-relaxed text-[#c5cdc8] sm:text-lg">
            Convening leaders, producers, and the next generation — building stages that move policy,
            culture, and careers across Pakistan and the region.
          </p>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentEvent.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.55 }}
              className="mt-8 border-l border-[#c5a059]/45 pl-4"
            >
              <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#c5a059]">
                Upcoming · {currentEvent.date} · {currentEvent.city}
              </p>
              <h1 className="mt-2 font-display text-[clamp(1.35rem,3vw,1.85rem)] font-medium leading-snug text-[#f4f0e8]">
                {currentEvent.title}
              </h1>
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex w-full flex-col gap-3 sm:flex-row sm:items-center">
            <button
              onClick={() => onOpenRsvpModal(currentEvent)}
              className="group inline-flex w-full items-center justify-center gap-2.5 bg-champagne px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-on-accent transition-colors hover:bg-[#e8d9b5] sm:w-auto"
            >
              Official RSVP
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={onExploreEcosystems}
              className="inline-flex w-full items-center justify-center gap-2 border border-[#c5a059]/40 bg-transparent px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-[#e8d9b5] transition-colors hover:border-[#c5a059] hover:bg-[#c5a059]/10 sm:w-auto"
            >
              Institutional Ecosystems
            </button>
          </div>
        </motion.div>

        <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/10 pt-6">
          <div className="flex items-center gap-2">
            {events.map((ev, idx) => (
              <button
                key={ev.id}
                aria-label={`Show ${ev.title}`}
                onClick={() => setCurrentSlide(idx)}
                className={`h-px transition-all duration-500 ${
                  currentSlide === idx ? 'w-10 bg-[#c5a059]' : 'w-5 bg-white/25 hover:bg-white/45'
                }`}
              />
            ))}
          </div>
          <span className="font-display text-sm italic text-white/50">
            {String(currentSlide + 1).padStart(2, '0')} / {String(events.length).padStart(2, '0')}
          </span>
          <div className="hidden h-3 w-px bg-white/15 sm:block" />
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/45">
            15M+ reach · 10K+ mentored · 100+ national events
          </p>
        </div>
      </div>
    </section>
  );
};
