import React from 'react';
import { Search, Camera, BookOpen, ShieldCheck, Sparkles, ArrowRight, Wrench, Droplets, Hammer, DoorClosed, Paintbrush } from 'lucide-react';
import { REPAIR_CATEGORIES } from '../data/repairData';

export default function Hero({ 
  searchQuery, 
  setSearchQuery, 
  selectedCategory, 
  setSelectedCategory,
  onOpenDiagnosis,
  onOpenPdfHandbook,
  onOpenPricing
}) {
  const popularSearches = ['Dripping faucet', 'Running toilet', 'Stripped screw', 'Sticking door', 'Drywall patch', 'AC drain line'];

  return (
    <div className="relative overflow-hidden bg-slate-950 pt-10 pb-16 border-b border-slate-800/80">
      
      {/* Glow backgrounds */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-cyan-500/10 via-emerald-500/5 to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tagline Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span className="text-xs font-semibold text-slate-200">The Everyday DIY Repair Manual</span>
            <span className="text-cyan-400 font-bold text-xs">· 50+ Guides</span>
          </div>
        </div>

        {/* Headline */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-8">
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
            Tell us what's wrong.<br />
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
              We'll help you fix it.
            </span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Diagnose household issues instantly, follow step-by-step visual guides, know required tools & costs, and know exactly <span className="text-amber-300 font-semibold underline decoration-amber-500/40">when to call a professional</span>.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-6">
          <div className="relative flex items-center glass-panel rounded-2xl p-2 border border-slate-700/80 shadow-2xl focus-within:border-cyan-500/60 focus-within:ring-2 focus-within:ring-cyan-500/20 transition-all">
            <Search className="w-5 h-5 text-slate-400 ml-3 flex-shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search problem (e.g. leaking sink, wobbly chair, running toilet)..."
              className="w-full bg-transparent px-3 py-2 text-sm text-white placeholder-slate-400 focus:outline-none"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="text-xs text-slate-400 hover:text-white px-2 py-1 bg-slate-800 rounded-lg mr-1"
              >
                Clear
              </button>
            )}
            <button
              onClick={onOpenDiagnosis}
              className="flex items-center space-x-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-bold text-xs shadow-lg hover:brightness-110 transition-all flex-shrink-0"
            >
              <Camera className="w-4 h-4" />
              <span className="hidden sm:inline">Photo Diagnose</span>
            </button>
          </div>

          {/* Quick Filter Tag Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 mt-3 text-xs text-slate-400">
            <span className="text-slate-500 font-medium">Popular:</span>
            {popularSearches.map((term) => (
              <button
                key={term}
                onClick={() => setSearchQuery(term)}
                className="px-2.5 py-1 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-cyan-400 transition-colors"
              >
                {term}
              </button>
            ))}
          </div>
        </div>

        {/* Category Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 max-w-4xl mx-auto pt-4">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`p-3 rounded-xl border text-left transition-all ${
              selectedCategory === 'all'
                ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-300 shadow-md shadow-cyan-500/10'
                : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-800/60'
            }`}
          >
            <div className="font-heading font-bold text-xs mb-0.5">All Categories</div>
            <div className="text-[11px] text-slate-400">50+ Total Guides</div>
          </button>

          {REPAIR_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  isSelected
                    ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300 shadow-md shadow-emerald-500/10'
                    : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-800/60'
                }`}
              >
                <div className="font-heading font-bold text-xs mb-0.5 truncate">{cat.name}</div>
                <div className="text-[11px] text-slate-400">{cat.count} Fix Guides</div>
              </button>
            );
          })}
        </div>

        {/* Featured Callout Banner for PDF & Visual AI */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          
          {/* Card 1: AI Visual Diagnose */}
          <div 
            onClick={onOpenDiagnosis}
            className="glass-card rounded-2xl p-5 border border-cyan-500/20 cursor-pointer hover:border-cyan-500/50 transition-all group flex items-start space-x-4"
          >
            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <Camera className="w-6 h-6 text-cyan-400" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <h3 className="font-heading font-bold text-white text-sm">📷 Take a Photo to Diagnose</h3>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300">AI Bounding Box</span>
              </div>
              <p className="text-xs text-slate-400">Upload household issue photos to auto-detect problems, get estimated costs & matching guides.</p>
            </div>
          </div>

          {/* Card 2: PDF Handbook */}
          <div 
            onClick={onOpenPdfHandbook}
            className="glass-card rounded-2xl p-5 border border-amber-500/20 cursor-pointer hover:border-amber-500/50 transition-all group flex items-start space-x-4"
          >
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <BookOpen className="w-6 h-6 text-amber-400" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <h3 className="font-heading font-bold text-white text-sm">📘 Home Fix Handbook Vol 1</h3>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300">PDF Export</span>
              </div>
              <p className="text-xs text-slate-400">Download the complete 50-fix visual handbook, printable checklists & emergency flowcharts.</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
