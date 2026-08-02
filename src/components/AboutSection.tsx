import React from 'react';
import { motion } from 'motion/react';

export const AboutSection: React.FC = () => {
  const stats = [
    { value: '15M+', label: 'Audience reach' },
    { value: '10K+', label: 'Leaders mentored' },
    { value: '100+', label: 'National events' },
    { value: '50+', label: 'Dignitaries hosted' },
  ];

  const pillars = [
    {
      title: 'National convening',
      text: 'Summits and assemblies that place youth, media, and policy in the same room — with protocol that earns trust.',
    },
    {
      title: 'Mentorship at scale',
      text: 'Direct guidance that turns potential into public work: stages booked, studios launched, careers secured.',
    },
    {
      title: 'Institutional platforms',
      text: 'Eight ecosystems built to carry broadcast, creation, and civic infrastructure beyond a single event.',
    },
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
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80"
                alt="Arshman Ali Khan"
                className="aspect-[4/5] w-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-media via-transparent to-transparent opacity-85" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#c5a059]">
                  Founder &amp; Chairman · Arsh Media
                </p>
                <p className="mt-1 font-display text-2xl text-[#f4f0e8] sm:text-3xl">
                  Arshman Ali Khan
                </p>
                <p className="mt-1 text-xs text-[#c5cdc8]">
                  Event architect · Mentor · Institutional builder
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
              The mandate
            </p>
            <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.25rem)] font-medium leading-[1.12] text-balance text-paper">
              Building rooms where the nation meets its next chapter.
            </h2>
            <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-mist sm:text-lg">
              Arshman Ali Khan leads Arsh Events &amp; Experiences — producing high-stakes national
              summits and mentorship programs that have guided thousands of creators, producers, and
              young leaders across Pakistan and the GCC. His work sits at the intersection of
              public presence, media power, and institutional delivery.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-8 border-y border-line py-10 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl text-champagne-soft sm:text-4xl">{stat.value}</p>
                  <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.18em] text-mist">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 grid gap-8 sm:grid-cols-3">
              {pillars.map((p) => (
                <div key={p.title} className="border-t border-champagne/30 pt-4">
                  <p className="text-sm font-medium text-paper">{p.title}</p>
                  <p className="mt-2 text-sm font-light leading-relaxed text-mist">{p.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
