import React from 'react';
import { motion } from 'motion/react';

export const AboutSection: React.FC = () => {
  const stats = [
    { value: '15M+', label: 'Audience reach' },
    { value: '10K+', label: 'People mentored' },
    { value: '100+', label: 'Events produced' },
    { value: '50+', label: 'Dignitaries hosted' },
  ];

  return (
    <section id="about" className="relative overflow-hidden bg-ink-elevated py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,107,84,0.18),transparent_55%)] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="relative lg:col-span-5"
          >
            <div className="relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80"
                alt="Arsh — Founder of Arsh Media"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-media via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#c5a059]">
                  Founder &amp; Chairman
                </p>
                <p className="mt-1 font-display text-2xl text-[#f4f0e8] sm:text-3xl">
                  Arshman Ali Khan
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-forest-bright">
              About Arsh
            </p>
            <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.25rem)] font-medium leading-[1.15] text-balance text-paper">
              Event organizer. Mentor. Builder of rooms that change careers.
            </h2>
            <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-mist sm:text-lg">
              Arshman Ali Khan produces high-impact summits and experiences across Pakistan and the
              GCC — and personally mentors thousands of creators, producers, and young leaders to
              find their stage, grow their audience, and achieve what they once thought was out of
              reach.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-line pt-10 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl text-champagne-soft sm:text-4xl">{stat.value}</p>
                  <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.18em] text-mist">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              <div className="border-l border-champagne/40 pl-5">
                <p className="text-sm font-medium text-paper">Mentorship that sticks</p>
                <p className="mt-2 text-sm font-light leading-relaxed text-mist">
                  One-to-one guidance and cohorts that turn ambition into published work, booked
                  stages, and sustainable careers.
                </p>
              </div>
              <div className="border-l border-forest/50 pl-5">
                <p className="text-sm font-medium text-paper">Events with presence</p>
                <p className="mt-2 text-sm font-light leading-relaxed text-mist">
                  Summits, galas, and broadcasts designed so every guest leaves with clarity,
                  connections, and momentum.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
