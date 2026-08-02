import React from 'react';
import { motion } from 'motion/react';

const CREDENTIALS = [
  { label: 'National summits', detail: 'Islamabad · Lahore · Karachi' },
  { label: 'Regional presence', detail: 'Pakistan · GCC corridor' },
  { label: 'Institutional partners', detail: 'Venues · councils · media' },
  { label: 'Youth mandate', detail: '10,000+ mentored leaders' },
];

export const AuthorityStrip: React.FC = () => {
  return (
    <section className="border-y border-line bg-ink py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-6"
        >
          {CREDENTIALS.map((item) => (
            <div key={item.label} className="border-l border-champagne/35 pl-4">
              <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-champagne">
                {item.label}
              </p>
              <p className="mt-2 font-display text-lg text-paper sm:text-xl">{item.detail}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
