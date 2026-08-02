import React from 'react';
import { PARTNERS } from '../data/partnersData';

export const PartnersSection: React.FC = () => {
  // Duplicate for seamless infinite loop
  const track = [...PARTNERS, ...PARTNERS];

  return (
    <section id="partners" className="overflow-hidden border-y border-line bg-ink-elevated py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <p className="text-center text-[11px] font-medium uppercase tracking-[0.32em] text-mist">
          Institutions &amp; stages of trust
        </p>
      </div>

      <div className="relative mt-10">
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-ink-elevated to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-ink-elevated to-transparent sm:w-28" />

        <div className="partners-marquee flex w-max">
          {track.map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="mx-4 flex h-24 w-48 shrink-0 items-center justify-center border border-line bg-ink px-5 sm:mx-5 sm:h-28 sm:w-56"
              title={partner.name}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="partner-logo h-12 w-full object-contain opacity-80 transition-opacity duration-300 hover:opacity-100 sm:h-14"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
