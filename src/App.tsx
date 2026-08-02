import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { StoriesSection } from './components/StoriesSection';
import { StoriesPage } from './components/StoriesPage';
import { StoryArticlePage } from './components/StoryArticlePage';
import { PartnersSection } from './components/PartnersSection';
import { EcosystemShowcase } from './components/EcosystemShowcase';
import { AlbumsSection } from './components/AlbumsSection';
import { AlbumsPage } from './components/AlbumsPage';
import { FunderPage } from './components/FunderPage';
import { MediaPage } from './components/MediaPage';
import { MediaPreviewSection } from './components/MediaPreviewSection';
import { EventsListSection } from './components/EventsListSection';
import { CountdownMentorshipSection } from './components/CountdownMentorshipSection';
import { Footer } from './components/Footer';
import { EventSpeakerModal } from './components/EventSpeakerModal';
import { RsvpModal } from './components/RsvpModal';
import { UpcomingEvent } from './data/eventsData';
import { StarStory } from './data/storiesData';
import type { AppView } from './types';

export type { AppView };

export default function App() {
  const [currentView, setCurrentView] = useState<AppView>('home');
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [selectedEcosystemId, setSelectedEcosystemId] = useState<string | null>(null);
  const [activeStory, setActiveStory] = useState<StarStory | null>(null);

  const [selectedEventForSpeakers, setSelectedEventForSpeakers] = useState<UpcomingEvent | null>(null);
  const [isSpeakerModalOpen, setIsSpeakerModalOpen] = useState(false);

  const [selectedEventForRsvp, setSelectedEventForRsvp] = useState<UpcomingEvent | null>(null);
  const [isRsvpModalOpen, setIsRsvpModalOpen] = useState(false);

  const switchView = (view: AppView) => {
    setCurrentView(view);
    if (view !== 'story') setActiveStory(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openStory = (story: StarStory) => {
    setActiveStory(story);
    setCurrentView('story');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const backToStories = () => {
    setActiveStory(null);
    setCurrentView('stories');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'all-events') {
      switchView('events');
      return;
    }
    if (sectionId === 'albums-page') {
      switchView('albums');
      return;
    }
    if (sectionId === 'funder' || sectionId === 'become-funder') {
      switchView('funder');
      return;
    }
    if (sectionId === 'media' || sectionId === 'media-page') {
      switchView('media');
      return;
    }
    if (sectionId === 'stories' || sectionId === 'stories-page') {
      switchView('stories');
      return;
    }
    if (currentView !== 'home') {
      setCurrentView('home');
    }
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  const handleOpenSpeakerModal = (event: UpcomingEvent) => {
    setSelectedEventForSpeakers(event);
    setIsSpeakerModalOpen(true);
  };

  const handleOpenRsvpModal = (event: UpcomingEvent) => {
    setSelectedEventForRsvp(event);
    setIsRsvpModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-ink text-paper font-sans">
      <Navbar
        currentView={currentView}
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onSelectEcosystem={(id) => setSelectedEcosystemId(id)}
        onSwitchView={switchView}
      />

      <main>
        {currentView === 'events' ? (
          <EventsListSection
            isStandalonePage={true}
            onBackToHome={() => switchView('home')}
            onOpenRsvpModal={handleOpenRsvpModal}
            onOpenSpeakerModal={handleOpenSpeakerModal}
          />
        ) : currentView === 'albums' ? (
          <AlbumsPage onBackToHome={() => switchView('home')} />
        ) : currentView === 'funder' ? (
          <FunderPage onBackToHome={() => switchView('home')} />
        ) : currentView === 'media' ? (
          <MediaPage onBackToHome={() => switchView('home')} />
        ) : currentView === 'stories' ? (
          <StoriesPage
            onBackToHome={() => switchView('home')}
            onOpenStory={openStory}
          />
        ) : currentView === 'story' && activeStory ? (
          <StoryArticlePage
            story={activeStory}
            onBack={backToStories}
            onOpenStory={openStory}
          />
        ) : (
          <>
            <HeroSection
              onOpenSpeakerModal={handleOpenSpeakerModal}
              onOpenRsvpModal={handleOpenRsvpModal}
              onExploreEcosystems={() => handleNavigate('ecosystem-showcase')}
            />

            <AboutSection />

            <StoriesSection
              onOpenStory={openStory}
              onReadMore={() => switchView('stories')}
            />

            <PartnersSection />

            <MediaPreviewSection onOpenMediaPage={() => switchView('media')} />

            <EcosystemShowcase
              selectedEcosystemId={selectedEcosystemId}
              onSelectEcosystem={(id) => setSelectedEcosystemId(id)}
            />

            <AlbumsSection onOpenAlbumsPage={() => switchView('albums')} />

            <CountdownMentorshipSection
              onOpenRsvpModal={handleOpenRsvpModal}
              onNavigateToAllEvents={() => switchView('events')}
            />
          </>
        )}
      </main>

      <Footer
        onNavigate={(sectionId) => {
          if (sectionId === 'all-events') {
            switchView('events');
          } else if (sectionId === 'albums-page') {
            switchView('albums');
          } else if (sectionId === 'funder' || sectionId === 'become-funder') {
            switchView('funder');
          } else if (sectionId === 'media' || sectionId === 'media-page') {
            switchView('media');
          } else if (sectionId === 'stories' || sectionId === 'stories-page') {
            switchView('stories');
          } else {
            handleNavigate(sectionId);
          }
        }}
        onSelectEcosystem={(id) => {
          setSelectedEcosystemId(id);
          setCurrentView('home');
          handleNavigate('ecosystem-showcase');
        }}
      />

      <EventSpeakerModal
        event={selectedEventForSpeakers}
        isOpen={isSpeakerModalOpen}
        onClose={() => setIsSpeakerModalOpen(false)}
        onOpenRsvp={(ev) => handleOpenRsvpModal(ev)}
      />

      <RsvpModal
        event={selectedEventForRsvp}
        isOpen={isRsvpModalOpen}
        onClose={() => setIsRsvpModalOpen(false)}
      />
    </div>
  );
}
