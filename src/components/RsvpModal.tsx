import React, { useState } from 'react';
import { UpcomingEvent } from '../data/eventsData';
import { X, Calendar, MapPin, CheckCircle2, Download } from 'lucide-react';

interface RsvpModalProps {
  event: UpcomingEvent | null;
  isOpen: boolean;
  onClose: () => void;
}

export const RsvpModal: React.FC<RsvpModalProps> = ({ event, isOpen, onClose }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [phone, setPhone] = useState('');
  const [ticketTier, setTicketTier] = useState<
    'VIP Delegation' | 'Enterprise Delegate' | 'Media Pass'
  >('VIP Delegation');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketID, setTicketID] = useState('AM-2026-VIP-0892');

  if (!isOpen || !event) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomTicketNum = Math.floor(1000 + Math.random() * 9000);
    const prefix =
      ticketTier === 'VIP Delegation' ? 'VIP' : ticketTier === 'Media Pass' ? 'MED' : 'DEL';
    setTicketID(`AM-2026-${prefix}-${randomTicketNum}`);
    setIsSubmitted(true);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setFullName('');
    setEmail('');
    setOrganization('');
    setPhone('');
    onClose();
  };

  const inputClass =
    'w-full border border-line bg-ink px-4 py-2.5 text-sm text-paper placeholder:text-mist/40 focus:border-champagne/50 focus:outline-none';

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-ink/90 p-4 backdrop-blur-md sm:p-6">
      <div className="relative w-full max-w-lg border border-line bg-ink-elevated">
        <div className="flex items-start justify-between border-b border-line px-6 py-5">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-champagne">
              RSVP
            </p>
            <h3 className="mt-1 font-display text-xl text-paper line-clamp-1">{event.title}</h3>
          </div>
          <button
            onClick={handleResetAndClose}
            className="border border-line p-2 text-mist hover:border-champagne/40 hover:text-paper"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-5 p-6">
            <div className="flex flex-wrap gap-4 text-xs text-mist">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-champagne" />
                {event.date}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-forest-bright" />
                {event.city}
              </span>
            </div>

            <div>
              <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.22em] text-mist">
                Access tier
              </p>
              <div className="grid grid-cols-3 gap-2">
                {(['VIP Delegation', 'Enterprise Delegate', 'Media Pass'] as const).map((tier) => (
                  <button
                    type="button"
                    key={tier}
                    onClick={() => setTicketTier(tier)}
                    className={`border p-2.5 text-left text-[11px] transition-colors ${
                      ticketTier === tier
                        ? 'border-champagne bg-champagne/10 text-champagne-soft'
                        : 'border-line text-mist hover:border-champagne/35'
                    }`}
                  >
                    {tier}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Full name *"
                className={inputClass}
              />
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email *"
                  className={inputClass}
                />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone"
                  className={inputClass}
                />
              </div>
              <input
                type="text"
                required
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                placeholder="Organization *"
                className={inputClass}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-champagne py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-on-accent transition-colors hover:bg-champagne-soft"
            >
              Confirm RSVP
            </button>
          </form>
        ) : (
          <div className="space-y-6 p-6 text-center sm:p-8">
            <CheckCircle2 className="mx-auto h-10 w-10 text-forest-bright" />
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-champagne">
                Seat reserved
              </p>
              <h4 className="mt-2 font-display text-2xl text-paper">Confirmed, {fullName}</h4>
              <p className="mt-2 text-sm font-light text-mist">
                Pass details sent to {email}
              </p>
            </div>

            <div className="border border-dashed border-champagne/40 bg-ink p-5 text-left">
              <p className="text-[10px] uppercase tracking-[0.2em] text-champagne">{ticketID}</p>
              <p className="mt-1 font-display text-lg text-paper">{event.title}</p>
              <p className="mt-3 text-xs text-mist">
                {fullName} · {organization} · {ticketTier}
              </p>
              <p className="mt-1 text-xs text-mist">
                {event.venue}, {event.city}
              </p>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row">
              <button
                onClick={() => alert('Calendar (.ics) invite downloaded.')}
                className="flex flex-1 items-center justify-center gap-2 border border-line py-3 text-[11px] font-medium uppercase tracking-[0.16em] text-mist hover:border-champagne/40 hover:text-champagne-soft"
              >
                <Download className="h-3.5 w-3.5" />
                Save calendar
              </button>
              <button
                onClick={handleResetAndClose}
                className="flex-1 bg-champagne py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-on-accent hover:bg-champagne-soft"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
