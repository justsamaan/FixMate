import React, { useState } from 'react';
import { X, Printer, Download, BookOpen, CheckCircle2, ShieldAlert, Sparkles, FileText, ChevronRight } from 'lucide-react';
import { REPAIR_GUIDES, REPAIR_CATEGORIES } from '../data/repairData';

export default function PdfHandbookModal({ isOpen, onClose }) {
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState('all');

  if (!isOpen) return null;

  const filteredGuides = selectedCategoryFilter === 'all'
    ? REPAIR_GUIDES
    : REPAIR_GUIDES.filter(g => g.category === selectedCategoryFilter);

  const handlePrintPdf = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-5xl glass-panel rounded-3xl border border-amber-500/40 shadow-2xl overflow-hidden my-8 max-h-[92vh] flex flex-col">
        
        {/* Header (No Print) */}
        <div className="no-print px-6 py-4 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h2 className="font-heading font-extrabold text-white text-lg flex items-center space-x-2">
                <span>The Complete Home Fix Handbook</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  Volume 1 · Digital Edition
                </span>
              </h2>
              <p className="text-xs text-slate-400">Interactive visual handbook & PDF exporter for 50 practical household repairs.</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={handlePrintPdf}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-extrabold text-xs shadow-lg hover:brightness-110 transition-all flex items-center space-x-2"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Export PDF</span>
            </button>
            <button 
              onClick={onClose}
              className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Handbook Printable View */}
        <div className="p-8 overflow-y-auto space-y-12 flex-grow bg-slate-950 text-slate-100 print:bg-white print:text-black">
          
          {/* COVER PAGE */}
          <div className="border-4 border-amber-500/30 rounded-3xl p-10 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-center space-y-6 print:border-black print:bg-white page-break">
            <div className="inline-flex p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 mb-2">
              <BookOpen className="w-16 h-16" />
            </div>
            
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Official DIY Asset</span>
              <h1 className="font-heading font-black text-4xl sm:text-5xl text-white tracking-tight leading-tight print:text-black">
                The Complete Home Fix Handbook
              </h1>
              <p className="text-xl font-bold text-amber-400">Volume 1: 50 Practical Household Fixes</p>
            </div>

            <p className="text-sm text-slate-400 max-w-xl mx-auto leading-relaxed print:text-slate-700">
              A comprehensive visual guide covering plumbing, carpentry, doors, windows, drywall, tiling, and appliance maintenance. Know what you need, how to fix it, and when to call a professional.
            </p>

            <div className="pt-6 border-t border-slate-800 max-w-md mx-auto grid grid-cols-3 gap-4 text-xs">
              <div>
                <span className="text-slate-500 block text-[10px] uppercase">Categories</span>
                <span className="font-bold text-slate-200 print:text-black">5 Core Areas</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px] uppercase">Guides</span>
                <span className="font-bold text-slate-200 print:text-black">50 Practical Fixes</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px] uppercase">Publisher</span>
                <span className="font-bold text-amber-400">FixMate Press</span>
              </div>
            </div>
          </div>

          {/* TABLE OF CONTENTS */}
          <div className="bg-slate-900/60 rounded-2xl p-6 border border-slate-800 space-y-4 page-break print:bg-white print:border-gray-300">
            <h2 className="font-heading font-bold text-xl text-white print:text-black border-b border-slate-800 pb-3 flex items-center justify-between">
              <span>Table of Contents</span>
              <span className="text-xs font-normal text-slate-400">50 Repair Guides</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {REPAIR_CATEGORIES.map(cat => {
                const categoryGuides = REPAIR_GUIDES.filter(g => g.category === cat.id);
                return (
                  <div key={cat.id} className="space-y-2">
                    <h3 className="font-heading font-bold text-sm text-amber-400 uppercase tracking-wider">{cat.name}</h3>
                    <ul className="space-y-1 text-xs text-slate-300 print:text-slate-800">
                      {categoryGuides.map((g, idx) => (
                        <li key={g.id} className="flex items-center justify-between py-1 border-b border-slate-800/40">
                          <span className="truncate pr-2">{idx + 1}. {g.title}</span>
                          <span className="font-mono text-slate-500 text-[10px]">{g.difficulty}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          {/* GUIDES DISPLAY LIST */}
          <div className="space-y-10">
            <h2 className="font-heading font-bold text-2xl text-white print:text-black border-b border-slate-800 pb-3">
              Section 1: Detailed Repair Guides
            </h2>

            {filteredGuides.map((guide, gIdx) => (
              <div key={guide.id} className="bg-slate-900/80 rounded-2xl p-6 border border-slate-800 space-y-4 page-break print:bg-white print:border-gray-400">
                
                {/* Guide Title Header */}
                <div className="flex items-start justify-between border-b border-slate-800 pb-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">Guide #{gIdx + 1} · {guide.category}</span>
                    <h3 className="font-heading font-bold text-xl text-white print:text-black">{guide.title}</h3>
                  </div>
                  <div className="text-right text-xs">
                    <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-semibold">{guide.difficulty}</span>
                    <span className="block text-slate-400 text-[10px] mt-1">{guide.estimatedTime}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-300 print:text-slate-700 leading-relaxed">{guide.summary}</p>

                {/* Safety Warning in Handbook */}
                {guide.safetyWarning && (
                  <div className="p-3 rounded-xl bg-rose-950/40 border border-rose-500/40 text-rose-200 text-xs font-medium">
                    ⚠️ <strong>SAFETY GATE:</strong> {guide.safetyWarning.message}
                  </div>
                )}

                {/* Tools & Materials */}
                <div className="bg-slate-950/60 rounded-xl p-3 border border-slate-800 text-xs">
                  <span className="font-bold text-slate-200 block mb-1">Required Tools & Materials:</span>
                  <div className="flex flex-wrap gap-2 text-slate-400">
                    {guide.tools.map((t, tIdx) => (
                      <span key={tIdx} className="bg-slate-800 px-2 py-0.5 rounded text-[11px] text-slate-300">
                        {t.name} ({t.estCost})
                      </span>
                    ))}
                  </div>
                </div>

                {/* Steps */}
                <div className="space-y-3 pt-2">
                  <span className="font-bold text-xs text-slate-200 uppercase tracking-wider">Step-by-Step Procedure:</span>
                  {guide.steps.map((step, sIdx) => (
                    <div key={sIdx} className="pl-4 border-l-2 border-amber-500/40 space-y-1">
                      <h4 className="font-heading font-bold text-xs text-white print:text-black">
                        Step {step.stepNumber}: {step.title}
                      </h4>
                      <p className="text-xs text-slate-300 print:text-slate-700 leading-relaxed">{step.description}</p>
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}
