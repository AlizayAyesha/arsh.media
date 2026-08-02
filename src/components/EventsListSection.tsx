import React, { useState } from 'react';
import { UPCOMING_EVENTS, UpcomingEvent } from '../data/eventsData';
import { Calendar, MapPin, ArrowRight, ArrowLeft } from 'lucide-react';

interface EventsListSectionProps {
  onOpenRsvpModal: (event: UpcomingEvent) => void;
  onOpenSpeakerModal: (event: UpcomingEvent) => void;
  onBackToHome?: () => void;
  isStandalonePage?: boolean;
}

export const EventsListSection: React.FC<EventsListSectionProps> = ({
  onOpenRsvpModal,
  onOpenSpeakerModal,
  onBackToHome,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedCity, setSelectedCity] = useState<string>('All');

  const categories = [
    'All',
    'Annual Summit',
    'AI & Broadcast Conclave',
    'Creator & Royalty Awards',
    'FinTech & Security Symposium',
  ];
  const cities = ['All', 'Islamabad', 'Lahore', 'Karachi', 'Dubai'];

  const filteredEvents = UPCOMING_EVENTS.filter((ev) => {
    const matchesCategory = selectedCategory === 'All' || ev.category === selectedCategory;
    const matchesCity = selectedCity === 'All' || ev.city === selectedCity;
    return matchesCategory && matchesCity;
  });

  return (
    <section id="all-events" className="relative min-h-screen bg-ink pb-24 pt-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {onBackToHome && (
          <button
            onClick={onBackToHome}
            className="mb-10 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-mist transition-colors hover:text-champagne-soft"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back home
          </button>
        )}

        <div className="max-w-2xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-forest-bright">
            Calendar
          </p>
          <h2 className="mt-4 font-display text-[clamp(2.25rem,5vw,3.75rem)] font-medium leading-none text-paper">
            Upcoming Events
          </h2>
          <p className="mt-5 text-base font-light leading-relaxed text-mist">
            Summits, conclaves, and galas across Pakistan and the GCC.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-y border-line py-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] transition-colors ${
                  selectedCategory === cat
                    ? 'bg-champagne text-on-accent'
                    : 'border border-line text-mist hover:border-champagne/40 hover:text-paper'
                }`}
              >
                {cat === 'All' ? 'All' : cat.split(' ')[0]}
              </button>
            ))}
          </div>
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="border border-line bg-ink px-3 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-mist focus:border-champagne/50 focus:outline-none"
          >
            {cities.map((city) => (
              <option key={city} value={city}>
                {city === 'All' ? 'All cities' : city}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
          {filteredEvents.map((event) => {
            const percentageBooked = Math.round(
              ((event.totalSeats - event.seatsRemaining) / event.totalSeats) * 100
            );

            return (
              <article key={event.id} className="group flex flex-col">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={event.coverImage}
                    alt={event.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-media/80 via-transparent to-transparent" />
                  <p className="absolute bottom-4 left-4 text-[10px] font-medium uppercase tracking-[0.24em] text-[#e8d9b5]">
                    {event.badge}
                  </p>
                </div>

                <div className="flex flex-1 flex-col border border-t-0 border-line bg-ink-elevated p-6 sm:p-7">
                  <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-forest-bright">
                    {event.category}
                  </p>
                  <h3 className="mt-2 font-display text-2xl leading-snug text-paper">
                    {event.title}
                  </h3>
                  <p className="mt-2 text-sm font-light text-mist">{event.subtitle}</p>

                  <div className="mt-5 flex flex-wrap gap-4 text-xs text-mist">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-champagne" />
                      {event.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-forest-bright" />
                      {event.city}
                    </span>
                  </div>

                  <div className="mt-5">
                    <div className="mb-1.5 flex justify-between text-[10px] uppercase tracking-[0.16em] text-mist">
                      <span>Capacity</span>
                      <span>{event.seatsRemaining} seats left</span>
                    </div>
                    <div className="h-px w-full bg-ink-soft">
                      <div
                        className="h-px bg-champagne"
                        style={{ width: `${percentageBooked}%` }}
                      />
                    </div>
                  </div>

                  <div className="mt-auto flex items-center justify-between gap-3 border-t border-line pt-5 mt-6">
                    <button
                      onClick={() => onOpenSpeakerModal(event)}
                      className="flex items-center gap-2 text-left"
                    >
                      <div className="flex -space-x-2">
                        {event.guestsAndSpeakers.slice(0, 3).map((sp) => (
                          <img
                            key={sp.id}
                            src={sp.imageUrl}
                            alt=""
                            className="h-7 w-7 rounded-full border border-ink object-cover"
                          />
                        ))}
                      </div>
                      <span className="text-[11px] text-mist hover:text-champagne-soft">
                        {event.guestsAndSpeakers.length} speakers
                      </span>
                    </button>

                    <button
                      onClick={() => onOpenRsvpModal(event)}
                      className="group/btn inline-flex items-center gap-2 bg-champagne px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-on-accent transition-colors hover:bg-champagne-soft"
                    >
                      RSVP
                      <ArrowRight className="h-3 w-3 transition-transform group-hover/btn:translate-x-0.5" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {filteredEvents.length === 0 && (
          <p className="py-20 text-center text-sm text-mist">No events match these filters.</p>
        )}
      </div>
    </section>
  );
};
