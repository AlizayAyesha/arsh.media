import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { STAR_STORIES, StarStory } from '../data/storiesData';

interface StoriesSectionProps {
  onOpenStory: (story: StarStory) => void;
  onReadMore: () => void;
}

export const StoriesSection: React.FC<StoriesSectionProps> = ({ onOpenStory, onReadMore }) => {
  const preview = STAR_STORIES.slice(0, 3);

  return (
    <section id="stories" className="relative overflow-hidden bg-ink py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(197,160,89,0.08),transparent_55%)] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-forest-bright">
              Impact chronicle
            </p>
            <h2 className="mt-4 font-display text-[clamp(2.25rem,5vw,3.75rem)] font-medium leading-none text-paper">
              Stories of ascent
            </h2>
            <p className="mt-5 max-w-lg text-base font-light leading-relaxed text-mist">
              Documented journeys of those who rose under this mandate — from first meeting to
              national stages and lasting institutions.
            </p>
          </div>

          <button
            type="button"
            onClick={onReadMore}
            className="group inline-flex items-center gap-2.5 bg-champagne px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-on-accent transition-colors hover:bg-[#e8d9b5]"
          >
            Read the archive
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {preview.map((story, idx) => (
            <motion.button
              key={story.id}
              type="button"
              onClick={() => onOpenStory(story)}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="group text-left"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={story.coverImage}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.2em] text-mist">
                {story.publishedAt} · {story.readMinutes} min
              </p>
              <h3 className="mt-2 font-display text-xl text-paper transition-colors group-hover:text-champagne-soft">
                {story.title}
              </h3>
              <p className="mt-2 line-clamp-2 text-sm font-light text-mist">{story.excerpt}</p>
              <p className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-champagne">
                Read story
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
              </p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};
