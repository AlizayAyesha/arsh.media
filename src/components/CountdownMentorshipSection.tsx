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
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(197,160,89,0.1),transparent_60%)] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="border border-champagne/35 bg-ink-elevated px-6 py-14 text-center sm:px-14 sm:py-20"
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.36em] text-champagne">
            National convening
          </p>
          <h2 className="mt-5 font-display text-[clamp(1.85rem,4.5vw,3.25rem)] font-medium leading-tight text-paper">
            Arsh National Media &amp; AI Summit 2026
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm font-light leading-relaxed text-mist">
            The year’s defining assembly of media directors, policymakers, and young leaders —
            Jinnah Convention Centre, Islamabad · 18 September 2026
          </p>

          <div className="mx-auto mt-14 grid max-w-2xl grid-cols-4 gap-3 sm:gap-8">
            {units.map((unit) => (
              <div key={unit.label}>
                <p className="font-display text-3xl text-champagne-soft sm:text-5xl">
                  {String(unit.value).padStart(2, '0')}
                </p>
                <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.24em] text-mist">
                  {unit.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 flex w-full flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <button
              onClick={() => onOpenRsvpModal?.(UPCOMING_EVENTS[0])}
              className="group inline-flex w-full items-center justify-center gap-2.5 bg-champagne px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-on-accent transition-colors hover:bg-[#e8d9b5] sm:w-auto"
            >
              Secure official seat
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => onNavigateToAllEvents?.()}
              className="inline-flex w-full items-center justify-center gap-2 border border-line px-8 py-4 text-[11px] font-medium uppercase tracking-[0.2em] text-mist transition-colors hover:border-champagne/40 hover:text-champagne-soft sm:w-auto"
            >
              Full event calendar
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
