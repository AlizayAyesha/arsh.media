import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, Send } from 'lucide-react';
import { FUNDING_INITIATIVES, FUNDING_TIERS } from '../data/albumsData';

interface FunderPageProps {
  onBackToHome: () => void;
}

export const FunderPage: React.FC<FunderPageProps> = ({ onBackToHome }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [initiative, setInitiative] = useState(FUNDING_INITIATIVES[0].title);
  const [tier, setTier] = useState(FUNDING_TIERS[0].id);
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const inputClass =
    'w-full border border-line bg-ink px-4 py-3 text-sm text-paper placeholder:text-mist/40 focus:border-champagne/60 focus:outline-none';

  const handleSubmit = (e: React.FormEvent) => {
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
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,107,84,0.12),transparent_55%)] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <button
          onClick={onBackToHome}
          className="mb-10 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-mist transition-colors hover:text-champagne-soft"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back home
        </button>

        <div className="max-w-2xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-forest-bright">
            Partnership
          </p>
          <h1 className="mt-4 font-display text-[clamp(2.25rem,5vw,3.75rem)] font-medium leading-none text-paper">
            Become a Funder
          </h1>
          <p className="mt-5 text-base font-light leading-relaxed text-mist">
            Back the initiatives that put stages, scholarships, and studios in front of the next
            generation of creators and organizers.
          </p>
        </div>

        {/* Initiatives */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {FUNDING_INITIATIVES.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="border-t border-line pt-6"
            >
              <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-champagne">
                {item.raisedLabel}
              </p>
              <h2 className="mt-2 font-display text-2xl text-paper">{item.title}</h2>
              <p className="mt-3 text-sm font-light leading-relaxed text-mist">{item.blurb}</p>
              <div className="mt-5">
                <div className="mb-1.5 flex justify-between text-[10px] uppercase tracking-[0.16em] text-mist">
                  <span>Goal {item.goal}</span>
                  <span>{item.progress}%</span>
                </div>
                <div className="h-px w-full bg-ink-soft">
                  <div className="h-px bg-champagne" style={{ width: `${item.progress}%` }} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tiers */}
        <div className="mt-20 border-t border-line pt-14">
          <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-champagne">
            Patron tiers
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {FUNDING_TIERS.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setTier(t.id)}
                className={`border p-6 text-left transition-colors ${
                  tier === t.id
                    ? 'border-champagne bg-ink-elevated'
                    : 'border-line hover:border-champagne/40'
                }`}
              >
                <p className="font-display text-xl text-paper">{t.label}</p>
                <p className="mt-2 text-sm text-champagne">{t.amount}</p>
                <p className="mt-3 text-sm font-light text-mist">{t.perks}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="mx-auto mt-20 max-w-2xl border-t border-line pt-14">
          <h2 className="font-display text-3xl text-paper">Pledge your support</h2>
          <p className="mt-3 text-sm font-light text-mist">
            Submit your interest — our secretariat will confirm transfer details and recognition.
          </p>

          {submitted ? (
            <div className="mt-10 border border-forest/40 bg-ink-elevated px-6 py-12 text-center">
              <CheckCircle2 className="mx-auto h-10 w-10 text-forest-bright" />
              <h3 className="mt-4 font-display text-2xl text-paper">Thank you, {name}</h3>
              <p className="mx-auto mt-3 max-w-md text-sm font-light text-mist">
                We’ve received your pledge for <strong className="text-paper">{initiative}</strong>.
                A confirmation will be sent to {email}.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setName('');
                  setEmail('');
                  setAmount('');
                  setMessage('');
                }}
                className="mt-8 border border-line px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-mist hover:border-champagne/40 hover:text-champagne-soft"
              >
                Submit another pledge
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-10 space-y-5">
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
                    placeholder="you@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-[10px] font-medium uppercase tracking-[0.22em] text-mist">
                  Organization (optional)
                </label>
                <input
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  className={inputClass}
                  placeholder="Company, foundation, or personal"
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-[10px] font-medium uppercase tracking-[0.22em] text-mist">
                    Initiative
                  </label>
                  <select
                    value={initiative}
                    onChange={(e) => setInitiative(e.target.value)}
                    className={inputClass}
                  >
                    {FUNDING_INITIATIVES.map((i) => (
                      <option key={i.id} value={i.title}>
                        {i.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-[10px] font-medium uppercase tracking-[0.22em] text-mist">
                    Amount (PKR)
                  </label>
                  <input
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className={inputClass}
                    placeholder="e.g. 100000"
                  />
                </div>
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
                  placeholder="Any note for our team…"
                />
              </div>

              <p className="text-xs text-mist">
                Selected tier:{' '}
                <span className="text-champagne">
                  {FUNDING_TIERS.find((t) => t.id === tier)?.label}
                </span>
              </p>

              <button
                type="submit"
                disabled={submitting}
                className="flex w-full items-center justify-center gap-2 bg-champagne py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-on-accent transition-colors hover:bg-[#e8d9b5] disabled:opacity-60"
              >
                <Send className="h-3.5 w-3.5" />
                {submitting ? 'Submitting…' : 'Submit funding pledge'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
