import React, { useState } from 'react';
import { ARCHITECTURE_LAYERS, REGIONAL_NODES } from '../data/ecosystemsData';
import { 
  Layers, 
  ShieldCheck, 
  Database, 
  Server, 
  Radio, 
  Globe, 
  CheckCircle2, 
  MapPin, 
  ArrowRight,
  Activity
} from 'lucide-react';

export const ArchitectureSection: React.FC = () => {
  const [activeLayerId, setActiveLayerId] = useState<string>(ARCHITECTURE_LAYERS[0].id);
  const currentLayer = ARCHITECTURE_LAYERS.find((l) => l.id === activeLayerId) || ARCHITECTURE_LAYERS[0];

  return (
    <section id="architecture" className="relative bg-[#000000] py-20 text-white border-t border-[#D4AF37]/30">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#00AB68]/10 via-[#000000] to-[#000000] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* 4 LAYERS SELECTOR & PREVIEW */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Layer Buttons */}
          <div className="lg:col-span-5 space-y-3">
            {ARCHITECTURE_LAYERS.map((layer) => {
              const isSelected = activeLayerId === layer.id;
              return (
                <button
                  key={layer.id}
                  onClick={() => setActiveLayerId(layer.id)}
                  className={`w-full text-left rounded-2xl border-2 p-5 transition-all ${
                    isSelected
                      ? 'border-[#D4AF37] bg-gradient-to-r from-[#D4AF37]/20 via-[#11161B] to-[#0A0E11] shadow-xl shadow-[#D4AF37]/10'
                      : 'border-gray-800 bg-[#0A0E11]/80 hover:border-[#D4AF37]/40'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#00AB68]">
                      LAYER {layer.number}
                    </span>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                        isSelected
                          ? 'bg-[#00AB68] text-black font-black'
                          : 'bg-black text-gray-400 border border-gray-800'
                      }`}
                    >
                      {layer.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mt-2">
                    {layer.title}
                  </h3>
                  <p className="text-xs text-gray-300 mt-1 line-clamp-2">
                    {layer.description}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Column: Layer Detail View */}
          <div className="lg:col-span-7 rounded-3xl border-2 border-[#D4AF37]/60 bg-gradient-to-b from-[#11161B] to-[#0A0E11] p-6 sm:p-8 shadow-2xl shadow-[#00AB68]/10">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#D4AF37]/20 pb-5 mb-6">
              <div>
                <span className="font-mono text-xs font-bold text-[#00AB68]">
                  LAYER {currentLayer.number} ARCHITECTURE SPECIFICATION
                </span>
                <h3 className="text-2xl font-bold text-white mt-1 font-serif">
                  {currentLayer.title}
                </h3>
              </div>
              <span className="rounded-xl border border-[#D4AF37] bg-[#D4AF37]/15 px-3 py-1.5 text-xs font-bold text-[#FAE3A1]">
                {currentLayer.badge}
              </span>
            </div>

            <p className="text-sm text-gray-200 leading-relaxed mb-6">
              {currentLayer.description}
            </p>

            {/* Subsystems List */}
            <div className="space-y-3 mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                Key Architectural Modules &amp; Subsystems
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentLayer.modules.map((mod, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 rounded-xl border border-gray-800 bg-[#000000] p-3 text-xs"
                  >
                    <CheckCircle2 className="h-4 w-4 text-[#00AB68] shrink-0" />
                    <span className="text-gray-200 font-medium">{mod}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Associated Technologies */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-2.5">
                Primary Core Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {currentLayer.techList.map((tech, idx) => (
                  <span
                    key={idx}
                    className="rounded-lg border border-[#D4AF37]/30 bg-[#000000] px-3 py-1.5 text-xs font-mono text-[#FAE3A1]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* REGIONAL NODES MAP / ROSTER */}
        <div className="rounded-3xl border-2 border-[#D4AF37]/40 bg-[#0A0E11] p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-[#D4AF37]/20 pb-5">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00AB68]">
                <Activity className="h-4 w-4" />
                <span>PAKISTAN &amp; GCC DISTRIBUTED NODES</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 font-serif">
                Regional Compute, Broadcast &amp; Studio Footprint
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#00AB68] animate-pulse" />
              <span className="text-xs font-mono font-bold text-[#FAE3A1]">
                100% NODES OPERATIONAL
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {REGIONAL_NODES.map((node) => (
              <div
                key={node.id}
                className="rounded-2xl border border-gray-800 bg-[#000000] p-4 hover:border-[#D4AF37]/60 transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-[#FAE3A1]">
                    {node.city}
                  </span>
                  <span className="rounded-md bg-[#00AB68]/20 px-2 py-0.5 text-[10px] font-bold text-[#00AB68] uppercase">
                    {node.type}
                  </span>
                </div>

                <div className="space-y-1 text-xs font-mono text-gray-400">
                  <div>CAPACITY: <span className="text-white">{node.capacity}</span></div>
                  <div>LATENCY: <span className="text-[#00AB68]">{node.latency}</span></div>
                  <div className="text-gray-300 pt-1 border-t border-gray-900 line-clamp-1">
                    {node.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
