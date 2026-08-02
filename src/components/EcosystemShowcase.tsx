import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ARSH_ECOSYSTEMS, EcosystemPlatform } from '../data/ecosystemsData';
import { ArrowUpRight, X } from 'lucide-react';

interface EcosystemShowcaseProps {
  selectedEcosystemId?: string | null;
  onSelectEcosystem?: (id: string | null) => void;
}

export const EcosystemShowcase: React.FC<EcosystemShowcaseProps> = ({
  selectedEcosystemId,
  onSelectEcosystem,
}) => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeModalEco, setActiveModalEco] = useState<EcosystemPlatform | null>(
    selectedEcosystemId
      ? ARSH_ECOSYSTEMS.find((e) => e.id === selectedEcosystemId) || null
      : null
  );

  const ecosystems = ARSH_ECOSYSTEMS;

  useEffect(() => {
    if (selectedEcosystemId) {
      const idx = ecosystems.findIndex((e) => e.id === selectedEcosystemId);
      if (idx >= 0) {
        setActiveTab(idx);
        setActiveModalEco(ecosystems[idx]);
      }
    }
  }, [selectedEcosystemId, ecosystems]);

  useEffect(() => {
    if (activeModalEco) return;
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % ecosystems.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [activeModalEco, ecosystems.length]);

  const handleOpenModal = (eco: EcosystemPlatform) => {
    setActiveModalEco(eco);
    if (onSelectEcosystem) onSelectEcosystem(eco.id);
  };

  const handleCloseModal = () => {
    setActiveModalEco(null);
    if (onSelectEcosystem) onSelectEcosystem(null);
  };

  const currentEco = ecosystems[activeTab];

  return (
    <section id="ecosystem-showcase" className="relative bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-forest-bright">
            Institutional architecture
          </p>
          <h2 className="mt-4 font-display text-[clamp(2.25rem,5vw,3.75rem)] font-medium leading-none text-paper">
            Eight ecosystems
          </h2>
          <p className="mt-5 max-w-lg text-base font-light leading-relaxed text-mist">
            Sovereign platforms that extend the mandate — media, AI, creation, and civic
            infrastructure beyond a single summit.
          </p>
        </div>

        {/* Ecosystem index */}
        <div className="mt-12 flex gap-2 overflow-x-auto pb-2 scrollbar-none">
          {ecosystems.map((eco, idx) => (
            <button
              key={eco.id}
              onClick={() => setActiveTab(idx)}
              className={`shrink-0 border px-4 py-2.5 text-[11px] font-medium uppercase tracking-[0.16em] transition-colors ${
                activeTab === idx
                  ? 'border-champagne bg-champagne/10 text-champagne-soft'
                  : 'border-line text-mist hover:border-champagne/40 hover:text-paper'
              }`}
            >
              <span className="mr-2 font-display text-sm normal-case tracking-normal opacity-70">
                {eco.number}
              </span>
              {eco.name.replace('Arsh ', '')}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.button
            key={currentEco.id}
            type="button"
            onClick={() => handleOpenModal(currentEco)}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.45 }}
            className="group mt-8 w-full border border-line bg-ink-elevated p-8 text-left transition-colors hover:border-champagne/45 sm:p-12"
          >
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="font-display text-5xl text-champagne/40 sm:text-6xl">{currentEco.number}</p>
                <h3 className="mt-2 font-display text-3xl text-paper sm:text-4xl">{currentEco.name}</h3>
                <p className="mt-2 text-sm text-forest-bright">{currentEco.tagline}</p>
              </div>
              <span className="self-start text-[10px] font-medium uppercase tracking-[0.22em] text-mist">
                {currentEco.badge}
              </span>
            </div>

            <p className="mt-8 max-w-3xl text-base font-light leading-relaxed text-mist">
              {currentEco.description}
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {currentEco.keyFeatures.slice(0, 4).map((feat) => (
                <div key={feat.title} className="border-t border-line pt-4">
                  <p className="text-sm font-medium text-paper">{feat.title}</p>
                  <p className="mt-1 text-sm font-light text-mist">{feat.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-champagne transition-colors group-hover:text-champagne-soft">
              View full specification
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </motion.button>
        </AnimatePresence>

        {activeModalEco && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-ink/92 p-4 backdrop-blur-md sm:p-8"
            onClick={handleCloseModal}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative w-full max-w-3xl border border-line bg-ink-elevated"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between border-b border-line px-6 py-5 sm:px-8">
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-forest-bright">
                    Platform {activeModalEco.number}
                  </p>
                  <h3 className="mt-1 font-display text-2xl text-paper sm:text-3xl">
                    {activeModalEco.name}
                  </h3>
                </div>
                <button
                  onClick={handleCloseModal}
                  className="border border-line p-2 text-mist transition-colors hover:border-champagne/40 hover:text-paper"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="max-h-[70vh] space-y-8 overflow-y-auto px-6 py-6 sm:px-8 sm:py-8">
                <p className="text-base font-light leading-relaxed text-mist">
                  {activeModalEco.description}
                </p>

                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-champagne">
                    Capabilities
                  </p>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    {activeModalEco.keyFeatures.map((feat) => (
                      <div key={feat.title} className="border-t border-line pt-3">
                        <p className="text-sm font-medium text-paper">{feat.title}</p>
                        <p className="mt-1 text-sm font-light text-mist">{feat.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-champagne">
                      Stack
                    </p>
                    <p className="mt-3 text-sm font-light leading-relaxed text-mist">
                      {activeModalEco.techStack.join(' · ')}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-champagne">
                      Integration
                    </p>
                    <p className="mt-3 text-sm font-light leading-relaxed text-mist">
                      {activeModalEco.integrationText}
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-line px-6 py-4 sm:px-8">
                <button
                  onClick={handleCloseModal}
                  className="bg-champagne px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-on-accent transition-colors hover:bg-champagne-soft"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};
