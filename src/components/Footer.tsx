import React from 'react';
import { ArshLogo } from './ArshLogo';
import { MapPin, Mail, Phone, Send } from 'lucide-react';
import { ARSH_ECOSYSTEMS } from '../data/ecosystemsData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onSelectEcosystem: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onSelectEcosystem }) => {
  return (
    <footer className="border-t border-line bg-ink-elevated">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <button type="button" onClick={() => onNavigate('hero')} className="cursor-pointer">
              <ArshLogo variant="full" className="max-w-[160px] sm:max-w-[180px]" />
            </button>
            <p className="mt-5 max-w-sm text-sm font-light leading-relaxed text-mist">
              Premier Pakistani broadcasting, AI, and civic digital infrastructure — eight ecosystems
              across Islamabad, Lahore, Karachi, and the GCC.
            </p>
            <div className="mt-6 space-y-2.5 text-sm text-mist">
              <div className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-forest-bright" />
                <span>Arsh Media Towers, Blue Area, Islamabad</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-3.5 w-3.5 shrink-0 text-champagne" />
                <span>secretariat@arshmedia.pk</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-3.5 w-3.5 shrink-0 text-champagne" />
                <span>+92 (51) 8890-0000</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-champagne">
              Ecosystems
            </p>
            <div className="mt-4 grid grid-cols-1 gap-1 sm:grid-cols-2">
              {ARSH_ECOSYSTEMS.map((eco) => (
                <button
                  key={eco.id}
                  onClick={() => {
                    onSelectEcosystem(eco.id);
                    onNavigate('ecosystem-showcase');
                  }}
                  className="flex items-center gap-2 py-2 text-left text-sm text-mist transition-colors hover:text-champagne-soft"
                >
                  <span className="font-display text-champagne/70">{eco.number}</span>
                  <span className="truncate">{eco.name.replace('Arsh ', '')}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4">
            <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-champagne">
              Secretariat bulletins
            </p>
            <p className="mt-3 text-sm font-light text-mist">
              Invitations to summits and speaker announcements.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Subscribed to Arsh Media Secretariat Bulletins.');
              }}
              className="mt-5 flex gap-2"
            >
              <input
                type="email"
                required
                placeholder="name@organization.pk"
                className="flex-1 border border-line bg-ink px-3 py-2.5 text-sm text-paper placeholder:text-mist/40 focus:border-champagne/50 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-champagne px-4 py-2.5 text-on-accent transition-colors hover:bg-champagne-soft"
                aria-label="Subscribe"
              >
                <Send className="h-3.5 w-3.5" />
              </button>
            </form>

            <div className="mt-8 flex flex-wrap gap-4 text-sm text-mist">
              <button
                onClick={() => onNavigate('about')}
                className="transition-colors hover:text-champagne-soft"
              >
                About
              </button>
              <button
                onClick={() => onNavigate('stories-page')}
                className="transition-colors hover:text-champagne-soft"
              >
                Stories
              </button>
              <button
                onClick={() => onNavigate('all-events')}
                className="transition-colors hover:text-champagne-soft"
              >
                Events
              </button>
              <button
                onClick={() => onNavigate('albums-page')}
                className="transition-colors hover:text-champagne-soft"
              >
                Albums
              </button>
              <button
                onClick={() => onNavigate('media')}
                className="transition-colors hover:text-champagne-soft"
              >
                Media
              </button>
              <button
                onClick={() => onNavigate('funder')}
                className="transition-colors hover:text-champagne-soft"
              >
                Become a Funder
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-line pt-8 text-xs text-mist sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} Arsh Media. All ecosystems protected.
          </p>
          <div className="flex gap-5">
            <span className="cursor-pointer hover:text-champagne-soft">PEMRA Charter</span>
            <span className="cursor-pointer hover:text-champagne-soft">Privacy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
