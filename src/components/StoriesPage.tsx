import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { STAR_STORIES, StarStory } from '../data/storiesData';

interface StoriesPageProps {
  onBackToHome: () => void;
  onOpenStory: (story: StarStory) => void;
}

export const StoriesPage: React.FC<StoriesPageProps> = ({ onBackToHome, onOpenStory }) => {
  return (
    <section className="min-h-screen bg-ink pb-24 pt-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <button
          type="button"
          onClick={onBackToHome}
          className="mb-10 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-mist transition-colors hover:text-champagne-soft"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back home
        </button>

        <div className="max-w-2xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-forest-bright">
            Blog
          </p>
          <h1 className="mt-4 font-display text-[clamp(2.25rem,5vw,3.75rem)] font-medium leading-none text-paper">
            Stories
          </h1>
          <p className="mt-5 text-base font-light leading-relaxed text-mist">
            The stars we helped reach the sky — journeys from first meeting to stages, studios, and
            careers that now light the way for others.
          </p>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {STAR_STORIES.map((story, idx) => (
            <motion.button
              key={story.id}
              type="button"
              onClick={() => onOpenStory(story)}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
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
              <h2 className="mt-2 font-display text-xl text-paper transition-colors group-hover:text-champagne-soft sm:text-2xl">
                {story.title}
              </h2>
              <p className="mt-2 line-clamp-2 text-sm font-light text-mist">{story.excerpt}</p>
              <p className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-champagne">
                Read more
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
              </p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};
