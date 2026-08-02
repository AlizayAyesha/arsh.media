import React, { useState, useEffect } from 'react';
import { ArshLogo } from './ArshLogo';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { ARSH_ECOSYSTEMS } from '../data/ecosystemsData';
import { useTheme } from '../context/ThemeContext';
import type { AppView } from '../types';

interface NavbarProps {
  currentView: AppView;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onSelectEcosystem: (id: string) => void;
  onSwitchView: (view: AppView) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  onSelectEcosystem,
  onSwitchView,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    if (id === 'albums-page') {
      onSwitchView('albums');
      setMobileMenuOpen(false);
      return;
    }
    if (id === 'funder') {
      onSwitchView('funder');
      setMobileMenuOpen(false);
      return;
    }
    if (id === 'media' || id === 'media-page') {
      onSwitchView('media');
      setMobileMenuOpen(false);
      return;
    }
    if (id === 'stories' || id === 'stories-page') {
      onSwitchView('stories');
      setMobileMenuOpen(false);
      return;
    }
    if (currentView !== 'home') {
      onSwitchView('home');
      setTimeout(() => onNavigate(id), 100);
    } else {
      onNavigate(id);
    }
    setMobileMenuOpen(false);
  };

  const overHeroMedia = !scrolled && currentView === 'home' && !mobileMenuOpen;
  const logoMode = overHeroMedia ? 'dark' : theme;
  const solidNav =
    scrolled || mobileMenuOpen || currentView !== 'home';

  const navClass = (active: boolean) =>
    `text-[11px] font-medium uppercase tracking-[0.22em] transition-colors ${
      active
        ? 'text-champagne'
        : overHeroMedia
          ? 'text-white/75 hover:text-[#e8d9b5]'
          : 'text-mist hover:text-champagne-soft'
    }`;

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        solidNav
          ? 'border-b border-line bg-ink/90 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8 lg:px-10">
        <button
          type="button"
          onClick={() => {
            onSwitchView('home');
            handleLinkClick('hero');
          }}
          className="cursor-pointer"
          aria-label="Arsh home"
        >
          <ArshLogo variant="compact" forceMode={logoMode} />
        </button>

        <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
          <button onClick={() => handleLinkClick('about')} className={navClass(false)}>
            About
          </button>
          <button
            onClick={() => onSwitchView('stories')}
            className={navClass(currentView === 'stories' || currentView === 'story')}
          >
            Stories
          </button>
          <button
            onClick={() => onSwitchView('albums')}
            className={navClass(currentView === 'albums')}
          >
            Albums
          </button>
          <button
            onClick={() => onSwitchView('media')}
            className={navClass(currentView === 'media')}
          >
            Media
          </button>
          <button
            onClick={() => onSwitchView('events')}
            className={navClass(currentView === 'events')}
          >
            Events
          </button>
          <button
            onClick={() => handleLinkClick('ecosystem-showcase')}
            className={navClass(false)}
          >
            Ecosystems
          </button>
          <button
            onClick={() => onSwitchView('funder')}
            className={navClass(currentView === 'funder')}
          >
            Fund
          </button>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            className={`border p-2 transition-colors ${
              overHeroMedia
                ? 'border-white/25 text-[#e8d9b5] hover:border-[#c5a059]/60 hover:bg-black/30'
                : 'border-line text-champagne-soft hover:border-champagne/50 hover:bg-ink-soft/60'
            }`}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <button
            onClick={() => onSwitchView('events')}
            className="hidden bg-champagne px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-on-accent transition-colors hover:bg-[#e8d9b5] sm:inline-flex"
          >
            Official RSVP
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`border p-2 lg:hidden ${
              overHeroMedia
                ? 'border-white/25 text-[#e8d9b5]'
                : 'border-line text-champagne-soft'
            }`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-line bg-ink px-5 py-6 lg:hidden">
          <div className="flex flex-col gap-1">
            {[
              { label: 'About', id: 'about' },
              { label: 'Stories', id: 'stories-page' },
              { label: 'Albums', id: 'albums-page' },
              { label: 'Media', id: 'media' },
              { label: 'Events & RSVP', id: 'events' },
              { label: 'Ecosystems', id: 'ecosystem-showcase' },
              { label: 'Become a Funder', id: 'funder' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  if (item.id === 'events') {
                    onSwitchView('events');
                    setMobileMenuOpen(false);
                  } else {
                    handleLinkClick(item.id);
                  }
                }}
                className={`border-b border-ink-soft py-3 text-left text-sm font-medium tracking-wide ${
                  (item.id === 'albums-page' && currentView === 'albums') ||
                  (item.id === 'media' && currentView === 'media') ||
                  (item.id === 'stories-page' &&
                    (currentView === 'stories' || currentView === 'story')) ||
                  (item.id === 'funder' && currentView === 'funder') ||
                  (item.id === 'events' && currentView === 'events')
                    ? 'text-champagne'
                    : 'text-paper'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="mt-6">
            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.28em] text-mist">
              Ecosystems
            </p>
            <div className="grid grid-cols-2 gap-2">
              {ARSH_ECOSYSTEMS.map((eco) => (
                <button
                  key={eco.id}
                  onClick={() => {
                    onSwitchView('home');
                    onSelectEcosystem(eco.id);
                    handleLinkClick('ecosystem-showcase');
                  }}
                  className="border border-line bg-ink-elevated px-3 py-2.5 text-left text-xs text-mist transition-colors hover:border-champagne/40 hover:text-champagne-soft"
                >
                  <span className="mr-1.5 font-display text-champagne">{eco.number}</span>
                  {eco.name.replace('Arsh ', '')}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
