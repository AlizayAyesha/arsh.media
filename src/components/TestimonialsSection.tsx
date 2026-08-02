import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, X, Quote, Star } from 'lucide-react';
import {
  VIDEO_TESTIMONIALS,
  WRITTEN_REVIEWS,
  VideoTestimonial,
} from '../data/testimonialsData';

interface TestimonialsSectionProps {
  onExplorePlatforms?: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  onExplorePlatforms,
}) => {
  const [activeVideo, setActiveVideo] = useState<VideoTestimonial>(VIDEO_TESTIMONIALS[0]);
  const [playing, setPlaying] = useState(false);

  const openVideo = (video: VideoTestimonial) => {
    setActiveVideo(video);
    setPlaying(true);
  };

  const closePlayer = () => setPlaying(false);

  return (
    <section id="testimonials" className="relative overflow-hidden bg-ink py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(197,160,89,0.08),transparent_55%)] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-forest-bright">
            Voices from the room
          </p>
          <h2 className="mt-4 font-display text-[clamp(2.25rem,5vw,3.75rem)] font-medium leading-none text-paper">
            Testimonials
          </h2>
          <p className="mt-5 max-w-lg text-base font-light leading-relaxed text-mist">
            Creators, producers, and mentees who built careers, stages, and audiences under Arsh’s
            guidance.
          </p>
        </div>

        {/* Featured video + playlist */}
        <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-8"
          >
            <button
              type="button"
              onClick={() => openVideo(activeVideo)}
              className="group relative block aspect-video w-full overflow-hidden text-left"
            >
              <img
                src={activeVideo.thumbnailUrl}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-media via-media/40 to-media/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full border border-[#c5a059]/50 bg-media/70 text-[#e8d9b5] backdrop-blur-sm transition-transform group-hover:scale-110">
                  <Play className="h-6 w-6 fill-current pl-0.5" />
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#c5a059]">
                  Video story · {activeVideo.city}
                </p>
                <p className="mt-2 font-display text-2xl text-[#f4f0e8] sm:text-3xl">
                  {activeVideo.name}
                </p>
                <p className="mt-1 text-sm text-[#c5cdc8]">{activeVideo.role}</p>
                <p className="mt-3 max-w-xl text-sm font-light italic leading-relaxed text-[#e8d9b5]/90">
                  “{activeVideo.quote}”
                </p>
              </div>
            </button>
          </motion.div>

          <div className="flex flex-col gap-3 lg:col-span-4">
            {VIDEO_TESTIMONIALS.map((video) => {
              const isActive = video.id === activeVideo.id;
              return (
                <button
                  key={video.id}
                  type="button"
                  onClick={() => {
                    setActiveVideo(video);
                    setPlaying(false);
                  }}
                  onDoubleClick={() => openVideo(video)}
                  className={`flex gap-4 border p-3 text-left transition-colors ${
                    isActive
                      ? 'border-champagne bg-ink-elevated'
                      : 'border-line hover:border-champagne/40'
                  }`}
                >
                  <div className="relative h-20 w-28 shrink-0 overflow-hidden">
                    <img
                      src={video.thumbnailUrl}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                    <span className="absolute inset-0 flex items-center justify-center bg-media/35">
                      <Play className="h-4 w-4 fill-[#e8d9b5] text-[#e8d9b5]" />
                    </span>
                  </div>
                  <div className="min-w-0 py-0.5">
                    <p className="truncate text-sm font-medium text-paper">{video.name}</p>
                    <p className="mt-0.5 truncate text-xs text-mist">{video.role}</p>
                    <p className="mt-2 text-[11px] text-champagne">{video.outcome}</p>
                  </div>
                </button>
              );
            })}
            <p className="pt-1 text-[11px] text-mist">
              Click to preview · double-click or tap the main frame to play
            </p>
          </div>
        </div>

        {/* Written reviews */}
        <div className="mt-20 border-t border-line pt-16">
          <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-champagne">
            Written reviews
          </p>

          <div className="mt-10 grid gap-10 md:grid-cols-2">
            {WRITTEN_REVIEWS.map((review, idx) => (
              <motion.blockquote
                key={review.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: idx * 0.06 }}
                className="border-l border-champagne/40 pl-6"
              >
                <Quote className="h-5 w-5 text-champagne/50" />
                <p className="mt-4 font-display text-xl font-normal leading-relaxed text-paper sm:text-2xl">
                  {review.quote}
                </p>
                <div className="mt-5 flex items-center gap-1">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-champagne text-champagne" />
                  ))}
                </div>
                <footer className="mt-4">
                  <cite className="not-italic text-sm font-medium text-paper">{review.name}</cite>
                  <p className="mt-0.5 text-xs text-mist">
                    {review.role} · {review.city}
                  </p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-forest-bright">
                    {review.eventOrProgram}
                  </p>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>

        {onExplorePlatforms && (
          <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-line pt-10 sm:flex-row sm:items-center">
            <p className="max-w-md text-sm font-light text-mist">
              Ready to join a cohort? Applications open on the ecosystem platforms.
            </p>
            <button
              type="button"
              onClick={onExplorePlatforms}
              className="bg-champagne px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-on-accent transition-colors hover:bg-[#e8d9b5]"
            >
              Explore platforms
            </button>
          </div>
        )}
      </div>

      {/* Video lightbox */}
      <AnimatePresence>
        {playing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-media/92 p-4 backdrop-blur-md sm:p-8"
            onClick={closePlayer}
          >
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-3 flex items-start justify-between gap-4">
                <div>
                  <p className="font-display text-xl text-[#f4f0e8]">{activeVideo.name}</p>
                  <p className="text-sm text-[#c5cdc8]">{activeVideo.role}</p>
                </div>
                <button
                  type="button"
                  onClick={closePlayer}
                  className="border border-white/20 p-2 text-[#e8d9b5] hover:border-[#c5a059]/50"
                  aria-label="Close video"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="aspect-video w-full overflow-hidden bg-black">
                {activeVideo.youtubeId ? (
                  <iframe
                    title={`${activeVideo.name} testimonial`}
                    src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full"
                  />
                ) : (
                  <div className="relative flex h-full w-full items-center justify-center">
                    <img
                      src={activeVideo.thumbnailUrl}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover opacity-40"
                    />
                    <p className="relative z-10 max-w-sm px-6 text-center text-sm text-[#e8d9b5]">
                      Add this mentee’s YouTube ID in{' '}
                      <span className="font-medium text-[#f4f0e8]">testimonialsData.ts</span> to
                      unlock the video.
                    </p>
                  </div>
                )}
              </div>
              <p className="mt-3 text-sm italic text-[#e8d9b5]/80">“{activeVideo.quote}”</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
