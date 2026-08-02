import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';
import { MEDIA_ITEMS } from '../data/mediaData';

interface MediaPreviewSectionProps {
  onOpenMediaPage: () => void;
}

export const MediaPreviewSection: React.FC<MediaPreviewSectionProps> = ({ onOpenMediaPage }) => {
  const preview = MEDIA_ITEMS.slice(0, 3);

  return (
    <section id="media-preview" className="relative bg-ink-elevated py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-forest-bright">
              Record of the work
            </p>
            <h2 className="mt-4 font-display text-[clamp(2.25rem,5vw,3.75rem)] font-medium leading-none text-paper">
              Media &amp; addresses
            </h2>
            <p className="mt-5 max-w-lg text-base font-light leading-relaxed text-mist">
              Keynotes, podcasts, and field vlogs — the public record of presence. Book Arsh for
              your university, channel, or national forum.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenMediaPage}
            className="group inline-flex w-full items-center justify-center gap-2 border border-champagne/40 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-champagne transition-colors hover:bg-champagne/10 hover:text-champagne-soft sm:w-auto sm:border-0 sm:px-0 sm:py-0 sm:justify-start"
          >
            View full archive
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {preview.map((item, idx) => (
            <motion.button
              key={item.id}
              type="button"
              onClick={onOpenMediaPage}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="group text-left"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={item.thumbnailUrl}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-media/30 opacity-0 transition-opacity group-hover:opacity-100">
                  <Play className="h-8 w-8 fill-[#e8d9b5] text-[#e8d9b5]" />
                </div>
              </div>
              <p className="mt-3 text-[10px] uppercase tracking-[0.18em] text-mist">
                {item.kind} · {item.duration}
              </p>
              <h3 className="mt-1 font-display text-lg text-paper group-hover:text-champagne-soft">
                {item.title}
              </h3>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};
