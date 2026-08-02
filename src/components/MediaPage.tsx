import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Play, X, Send, CheckCircle2, Mic2 } from 'lucide-react';
import { MEDIA_ITEMS, BOOKING_TYPES, MediaItem, MediaKind } from '../data/mediaData';

interface MediaPageProps {
  onBackToHome: () => void;
}

const FILTERS: { id: 'all' | MediaKind; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'vlog', label: 'YouTube Vlogs' },
  { id: 'podcast', label: 'Podcasts' },
  { id: 'speech', label: 'Speeches' },
];

export const MediaPage: React.FC<MediaPageProps> = ({ onBackToHome }) => {
  const [filter, setFilter] = useState<'all' | MediaKind>('all');
  const [playing, setPlaying] = useState<MediaItem | null>(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [org, setOrg] = useState('');
  const [bookingType, setBookingType] = useState<string>(BOOKING_TYPES[0].id);
  const [topic, setTopic] = useState('');
  const [datePref, setDatePref] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const filtered =
    filter === 'all' ? MEDIA_ITEMS : MEDIA_ITEMS.filter((m) => m.kind === filter);

  const featured = filtered[0] ?? MEDIA_ITEMS[0];

  const inputClass =
    'w-full border border-line bg-ink px-4 py-3 text-sm text-paper placeholder:text-mist/40 focus:border-champagne/60 focus:outline-none';

  const kindLabel = (kind: MediaKind) =>
    kind === 'vlog' ? 'Vlog' : kind === 'podcast' ? 'Podcast' : 'Speech';

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <section className="relative min-h-screen bg-ink pb-24 pt-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <button
          onClick={onBackToHome}
          className="mb-10 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-mist transition-colors hover:text-champagne-soft"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back home
        </button>

        <div className="max-w-2xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-forest-bright">
            Media
          </p>
          <h1 className="mt-4 font-display text-[clamp(2.25rem,5vw,3.75rem)] font-medium leading-none text-paper">
            Vlogs, podcasts &amp; speeches
          </h1>
          <p className="mt-5 text-base font-light leading-relaxed text-mist">
            On-camera work, long-form conversations, and stage talks — plus a path to book Arsh for
            your channel, campus, or summit.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-10 flex flex-wrap gap-2 border-y border-line py-5">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              className={`px-4 py-2 text-[11px] font-medium uppercase tracking-[0.16em] transition-colors ${
                filter === f.id
                  ? 'bg-champagne text-on-accent'
                  : 'border border-line text-mist hover:border-champagne/40 hover:text-paper'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Featured */}
        <button
          type="button"
          onClick={() => setPlaying(featured)}
          className="group relative mt-10 block aspect-video w-full overflow-hidden text-left"
        >
          <img
            src={featured.thumbnailUrl}
            alt=""
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-media via-media/45 to-media/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full border border-[#c5a059]/50 bg-media/70 text-[#e8d9b5] backdrop-blur-sm transition-transform group-hover:scale-110">
              <Play className="h-6 w-6 fill-current pl-0.5" />
            </span>
          </div>
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
            <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#c5a059]">
              {kindLabel(featured.kind)} · {featured.duration} · {featured.venueOrShow}
            </p>
            <h2 className="mt-2 max-w-2xl font-display text-2xl text-[#f4f0e8] sm:text-4xl">
              {featured.title}
            </h2>
          </div>
        </button>

        {/* Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item, idx) => (
            <motion.button
              key={item.id}
              type="button"
              onClick={() => setPlaying(item)}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: idx * 0.04 }}
              className="group text-left"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={item.thumbnailUrl}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-media/25 transition-colors group-hover:bg-media/10" />
                <span className="absolute bottom-2 right-2 bg-media/80 px-2 py-0.5 text-[10px] font-medium text-[#e8d9b5]">
                  {item.duration}
                </span>
                <span className="absolute left-2 top-2 text-[10px] font-medium uppercase tracking-[0.16em] text-[#e8d9b5]">
                  {kindLabel(item.kind)}
                </span>
              </div>
              <p className="mt-3 text-[10px] uppercase tracking-[0.18em] text-mist">
                {item.publishedAt} · {item.venueOrShow}
              </p>
              <h3 className="mt-1 font-display text-lg text-paper transition-colors group-hover:text-champagne-soft sm:text-xl">
                {item.title}
              </h3>
              <p className="mt-1 line-clamp-2 text-sm font-light text-mist">{item.description}</p>
            </motion.button>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="py-16 text-center text-sm text-mist">No media in this category yet.</p>
        )}

        {/* Booking form */}
        <div id="book-arsh" className="mt-24 border-t border-line pt-16">
          <div className="mx-auto max-w-2xl">
            <div className="flex items-center gap-3">
              <Mic2 className="h-5 w-5 text-champagne" />
              <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-champagne">
                Bookings
              </p>
            </div>
            <h2 className="mt-4 font-display text-[clamp(1.75rem,4vw,2.75rem)] font-medium text-paper">
              Book a podcast or keynote
            </h2>
            <p className="mt-4 text-sm font-light leading-relaxed text-mist">
              Universities, YouTube channels, summits, and campus societies — tell us what you’re
              building and we’ll connect.
            </p>

            {submitted ? (
              <div className="mt-10 border border-forest/40 bg-ink-elevated px-6 py-12 text-center">
                <CheckCircle2 className="mx-auto h-10 w-10 text-forest-bright" />
                <h3 className="mt-4 font-display text-2xl text-paper">Request received</h3>
                <p className="mx-auto mt-3 max-w-md text-sm font-light text-mist">
                  Thank you, {name}. We’ll reply to {email} about your{' '}
                  {BOOKING_TYPES.find((t) => t.id === bookingType)?.label?.toLowerCase()} request.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setName('');
                    setEmail('');
                    setTopic('');
                    setMessage('');
                  }}
                  className="mt-8 border border-line px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-mist hover:border-champagne/40 hover:text-champagne-soft"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleBooking} className="mt-10 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-[10px] font-medium uppercase tracking-[0.22em] text-mist">
                      Full name *
                    </label>
                    <input
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={inputClass}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-[10px] font-medium uppercase tracking-[0.22em] text-mist">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={inputClass}
                      placeholder="you@org.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-[10px] font-medium uppercase tracking-[0.22em] text-mist">
                    Organization / channel / university
                  </label>
                  <input
                    value={org}
                    onChange={(e) => setOrg(e.target.value)}
                    className={inputClass}
                    placeholder="e.g. LUMS Media Society, Your YouTube channel"
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-[10px] font-medium uppercase tracking-[0.22em] text-mist">
                      Booking type
                    </label>
                    <select
                      value={bookingType}
                      onChange={(e) => setBookingType(e.target.value)}
                      className={inputClass}
                    >
                      {BOOKING_TYPES.map((t) => (
                        <option key={t.id} value={t.id}>
                          {t.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="mb-2 block text-[10px] font-medium uppercase tracking-[0.22em] text-mist">
                      Preferred date
                    </label>
                    <input
                      type="text"
                      value={datePref}
                      onChange={(e) => setDatePref(e.target.value)}
                      className={inputClass}
                      placeholder="e.g. April 2026 / flexible"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-[10px] font-medium uppercase tracking-[0.22em] text-mist">
                    Topic / theme
                  </label>
                  <input
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className={inputClass}
                    placeholder="What should the talk or episode cover?"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[10px] font-medium uppercase tracking-[0.22em] text-mist">
                    Message
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className={inputClass}
                    placeholder="Audience size, format (live / recorded), links…"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="flex w-full items-center justify-center gap-2 bg-champagne py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-on-accent transition-colors hover:bg-[#e8d9b5] disabled:opacity-60"
                >
                  <Send className="h-3.5 w-3.5" />
                  {submitting ? 'Sending…' : 'Request to connect'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Player lightbox */}
      <AnimatePresence>
        {playing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-media/92 p-4 backdrop-blur-md sm:p-8"
            onClick={() => setPlaying(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-3 flex items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[#c5a059]">
                    {kindLabel(playing.kind)} · {playing.venueOrShow}
                  </p>
                  <p className="mt-1 font-display text-xl text-[#f4f0e8]">{playing.title}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setPlaying(null)}
                  className="border border-white/20 p-2 text-[#e8d9b5]"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="aspect-video w-full overflow-hidden bg-black">
                {playing.youtubeId ? (
                  <iframe
                    title={playing.title}
                    src={`https://www.youtube.com/embed/${playing.youtubeId}?autoplay=1&rel=0`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full"
                  />
                ) : (
                  <div className="relative flex h-full w-full items-center justify-center">
                    <img
                      src={playing.thumbnailUrl}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover opacity-40"
                    />
                    <p className="relative z-10 max-w-sm px-6 text-center text-sm text-[#e8d9b5]">
                      Add the YouTube ID in{' '}
                      <span className="font-medium text-[#f4f0e8]">mediaData.ts</span> to play this
                      piece.
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
