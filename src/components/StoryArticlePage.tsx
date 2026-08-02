import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { StarStory, STAR_STORIES } from '../data/storiesData';

interface StoryArticlePageProps {
  story: StarStory;
  onBack: () => void;
  onOpenStory: (story: StarStory) => void;
}

export const StoryArticlePage: React.FC<StoryArticlePageProps> = ({
  story,
  onBack,
  onOpenStory,
}) => {
  const others = STAR_STORIES.filter((s) => s.id !== story.id).slice(0, 3);

  return (
    <article className="min-h-screen bg-ink pb-24 pt-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8 lg:px-10">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-mist transition-colors hover:text-champagne-soft"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to stories
        </button>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-10"
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-forest-bright">
            {story.publishedAt} · {story.readMinutes} min read
          </p>
          <h1 className="mt-4 font-display text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.12] text-paper">
            {story.title}
          </h1>
          <p className="mt-5 text-sm text-mist">
            {story.starName} · {story.starRole} · {story.city}
          </p>

          <div className="relative mt-10 aspect-[21/10] overflow-hidden sm:aspect-[21/9]">
            <img src={story.coverImage} alt="" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-media/40 to-transparent" />
          </div>

          <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.2em] text-champagne">
            {story.outcome}
          </p>

          <div className="mt-10 space-y-6">
            {story.body.map((para) => (
              <p
                key={para.slice(0, 28)}
                className="text-base font-light leading-relaxed text-mist sm:text-lg"
              >
                {para}
              </p>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-2 border-t border-line pt-8">
            {story.tags.map((tag) => (
              <span
                key={tag}
                className="border border-line px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-mist"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {others.length > 0 && (
          <div className="mt-20 border-t border-line pt-14">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-champagne">
              More stories
            </p>
            <div className="mt-8 space-y-8">
              {others.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => onOpenStory(s)}
                  className="group block w-full text-left"
                >
                  <p className="text-[10px] uppercase tracking-[0.18em] text-mist">{s.publishedAt}</p>
                  <h2 className="mt-1 font-display text-xl text-paper transition-colors group-hover:text-champagne-soft sm:text-2xl">
                    {s.title}
                  </h2>
                  <p className="mt-1 text-sm text-mist">
                    {s.starName} · {s.city}
                  </p>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
};
