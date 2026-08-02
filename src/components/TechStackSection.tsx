import React, { useState } from 'react';
import { TECH_STACK_CATEGORIES } from '../data/ecosystemsData';
import { 
  Code2, 
  Cpu, 
  Database, 
  Globe, 
  Server, 
  ShieldCheck, 
  Terminal, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export const TechStackSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('ALL');

  const categories = [
    { id: 'ALL', label: 'All Tech Domains' },
    ...TECH_STACK_CATEGORIES.map((cat) => ({ id: cat.id, label: cat.name })),
  ];

  const filteredCategories = 
    activeTab === 'ALL'
      ? TECH_STACK_CATEGORIES
      : TECH_STACK_CATEGORIES.filter((cat) => cat.id === activeTab);

  return (
    <section id="tech-stack" className="relative bg-[#000000] py-20 text-white border-t border-[#D4AF37]/30">
      {/* Subtle Bottom Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/5 via-[#000000] to-[#000000] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37] bg-[#D4AF37]/15 px-4 py-1 text-xs font-bold uppercase tracking-widest text-[#FAE3A1] mb-4">
            <Code2 className="h-3.5 w-3.5" />
            <span>ENTERPRISE TECHNOLOGY STACK &amp; SPECIFICATIONS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-serif">
            Powered by <span className="text-[#00AB68]">Sovereign AI</span> &amp; Modern Frameworks
          </h2>

          <p className="mt-4 text-sm sm:text-base text-gray-300">
            Arsh Media relies on battle-tested open-source libraries, distributed Pakistani edge nodes, and high-security enterprise clouds.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`rounded-xl px-4 py-2.5 text-xs font-bold transition-all ${
                activeTab === cat.id
                  ? 'bg-gradient-to-r from-[#D4AF37] via-[#FAE3A1] to-[#D4AF37] text-black shadow-lg shadow-[#D4AF37]/25 font-extrabold'
                  : 'border border-gray-800 bg-[#0A0E11] text-gray-400 hover:border-[#D4AF37]/40 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Tech Stack Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="rounded-3xl border-2 border-[#D4AF37]/30 bg-gradient-to-b from-[#11161B] to-[#0A0E11] p-6 shadow-xl hover:border-[#D4AF37] transition-all"
            >
              <div className="flex items-center justify-between border-b border-[#D4AF37]/20 pb-4 mb-5">
                <h3 className="text-lg font-bold text-white font-serif">
                  {category.name}
                </h3>
                <span className="rounded-full bg-[#00AB68]/20 border border-[#00AB68] px-2.5 py-0.5 text-[10px] font-bold text-[#00AB68] uppercase">
                  {category.items.length} TECHNOLOGIES
                </span>
              </div>

              <div className="space-y-4">
                {category.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="group rounded-2xl border border-gray-800 bg-[#000000] p-4 hover:border-[#00AB68]/50 transition-all"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-bold text-[#FAE3A1] group-hover:text-[#00AB68] transition-colors">
                        {item.name}
                      </span>
                      <span className="rounded bg-[#D4AF37]/15 px-2 py-0.5 text-[10px] font-mono font-bold text-[#D4AF37]">
                        {item.tier}
                      </span>
                    </div>

                    <p className="text-xs text-gray-300 leading-relaxed">
                      {item.purpose}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* SECURITY & SOVEREIGNTY ASSURANCE BANNER */}
        <div className="mt-16 rounded-3xl border-2 border-[#00AB68]/40 bg-gradient-to-r from-[#000000] via-[#08130f] to-[#000000] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#00AB68]/20 border border-[#00AB68] text-[#00AB68]">
              <ShieldCheck className="h-7 w-7" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white font-serif">
                Sovereign Data Residence &amp; PEMRA / PTA Compliance
              </h4>
              <p className="text-xs sm:text-sm text-gray-300 mt-1 max-w-2xl">
                All citizen, journalist, and ministerial data processed across the 8 Ecosystems remains within sovereign Pakistan data centers with ISO 27001 &amp; zero-trust encryption.
              </p>
            </div>
          </div>

          <div className="shrink-0">
            <span className="inline-flex items-center gap-2 rounded-xl border border-[#D4AF37] bg-[#D4AF37]/15 px-5 py-3 text-xs font-bold text-[#FAE3A1]">
              <Sparkles className="h-4 w-4" />
              <span>100% AUDITED &amp; COMPLIANT</span>
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
