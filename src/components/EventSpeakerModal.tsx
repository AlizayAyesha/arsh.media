import React from 'react';
import { UpcomingEvent, SpeakerOrGuest } from '../data/eventsData';
import { X, Calendar, MapPin } from 'lucide-react';

interface EventSpeakerModalProps {
  event: UpcomingEvent | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenRsvp: (event: UpcomingEvent) => void;
}

export const EventSpeakerModal: React.FC<EventSpeakerModalProps> = ({
  event,
  isOpen,
  onClose,
  onOpenRsvp,
}) => {
  if (!isOpen || !event) return null;

  const badgeTone = (titleBadge: SpeakerOrGuest['titleBadge']) => {
    if (titleBadge === 'Chief Guest of Honor' || titleBadge === 'Ministerial Guest') {
      return 'text-champagne';
    }
    if (titleBadge === 'Keynote Speaker') return 'text-forest-bright';
    return 'text-mist';
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-ink/90 p-4 backdrop-blur-md sm:p-6">
      <div className="relative flex max-h-[90vh] w-full max-w-3xl flex-col border border-line bg-ink-elevated">
        <div className="flex items-start justify-between border-b border-line px-6 py-5">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-champagne">
              Speakers &amp; guests
            </p>
            <h3 className="mt-1 font-display text-xl text-paper line-clamp-1 sm:text-2xl">
              {event.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="border border-line p-2 text-mist hover:border-champagne/40 hover:text-paper"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="space-y-8 overflow-y-auto p-6">
          <div className="flex flex-wrap items-center gap-5 text-xs text-mist">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 text-champagne" />
              {event.date} · {event.time}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-forest-bright" />
              {event.venue}, {event.city}
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {event.guestsAndSpeakers.map((speaker) => (
              <div key={speaker.id} className="border-t border-line pt-5">
                <div className="flex gap-4">
                  <img
                    src={speaker.imageUrl}
                    alt={speaker.name}
                    className="h-14 w-14 shrink-0 object-cover"
                  />
                  <div>
                    <p className={`text-[10px] font-medium uppercase tracking-[0.18em] ${badgeTone(speaker.titleBadge)}`}>
                      {speaker.titleBadge}
                    </p>
                    <h5 className="mt-1 font-display text-lg text-paper">{speaker.name}</h5>
                    <p className="text-xs text-mist">{speaker.role}</p>
                    <p className="text-xs text-forest-bright">{speaker.organization}</p>
                  </div>
                </div>
                <p className="mt-3 text-sm font-light leading-relaxed text-mist">{speaker.bio}</p>
                {speaker.topic && (
                  <p className="mt-3 border-l border-champagne/40 pl-3 text-sm italic text-champagne-soft">
                    “{speaker.topic}”
                  </p>
                )}
              </div>
            ))}
          </div>

          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-champagne">
              Highlights
            </p>
            <ul className="mt-3 space-y-2">
              {event.highlights.map((item) => (
                <li key={item} className="text-sm font-light text-mist before:mr-2 before:text-champagne before:content-['—']">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-line px-6 py-4 sm:flex-row sm:justify-end">
          <button
            onClick={onClose}
            className="border border-line px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.16em] text-mist hover:border-champagne/40 hover:text-paper"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenRsvp(event);
            }}
            className="bg-champagne px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-on-accent hover:bg-champagne-soft"
          >
            RSVP for this event
          </button>
        </div>
      </div>
    </div>
  );
};
