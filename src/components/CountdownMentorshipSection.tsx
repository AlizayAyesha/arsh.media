import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { UPCOMING_EVENTS, UpcomingEvent } from '../data/eventsData';

interface CountdownMentorshipSectionProps {
  onOpenRsvpModal?: (event: UpcomingEvent) => void;
  onNavigateToAllEvents?: () => void;
}

export const CountdownMentorshipSection: React.FC<CountdownMentorshipSectionProps> = ({
  onOpenRsvpModal,
  onNavigateToAllEvents,
}) => {
  const [timeLeft, setTimeLeft] = useState({ days: 48, hours: 18, mins: 42, secs: 25 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.secs > 0) return { ...prev, secs: prev.secs - 1 };
        if (prev.mins > 0) return { ...prev, mins: prev.mins - 1, secs: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, mins: 59, secs: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, mins: 59, secs: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.mins },
    { label: 'Seconds', value: timeLeft.secs },
  ];

  return (
    <section id="summit" className="relative bg-ink py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(197,160,89,0.08),transparent_60%)] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="border border-line bg-ink-elevated px-6 py-12 text-center sm:px-12 sm:py-16"
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-champagne">
            Flagship summit
          </p>
          <h2 className="mt-4 font-display text-[clamp(1.75rem,4vw,3rem)] font-medium text-paper">
            Arsh National Media &amp; AI Summit 2026
          </h2>
          <p className="mt-3 text-sm font-light text-mist">
            September 18, 2026 · Jinnah Convention Centre, Islamabad
          </p>

          <div className="mx-auto mt-12 grid max-w-2xl grid-cols-4 gap-3 sm:gap-6">
            {units.map((unit) => (
              <div key={unit.label}>
                <p className="font-display text-3xl text-champagne-soft sm:text-5xl">
                  {String(unit.value).padStart(2, '0')}
                </p>
                <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.22em] text-mist">
                  {unit.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              onClick={() => onOpenRsvpModal?.(UPCOMING_EVENTS[0])}
              className="group inline-flex items-center gap-2.5 bg-champagne px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-on-accent transition-colors hover:bg-[#e8d9b5]"
            >
              Reserve Summit Seat
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => onNavigateToAllEvents?.()}
              className="inline-flex items-center gap-2 border border-line px-7 py-3.5 text-[11px] font-medium uppercase tracking-[0.18em] text-mist transition-colors hover:border-champagne/40 hover:text-champagne-soft"
            >
              View All Events
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
