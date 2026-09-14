import React, { useState } from 'react';
import { Search, Filter, Wrench, Clock, DollarSign, ArrowRight, Bookmark, ShieldAlert, Sparkles } from 'lucide-react';
import { REPAIR_GUIDES, REPAIR_CATEGORIES } from '../data/repairData';

export default function GuidesView({ 
  searchQuery, 
  setSearchQuery, 
  selectedCategory, 
  setSelectedCategory,
  onSelectGuide,
  savedGuideIds,
  onSaveGuide
}) {
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  const filteredGuides = REPAIR_GUIDES.filter((guide) => {
    const matchesSearch = searchQuery === '' || 
      guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guide.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guide.symptoms.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = selectedCategory === 'all' || guide.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'all' || guide.difficulty.toLowerCase() === selectedDifficulty.toLowerCase();

    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight flex items-center space-x-2">
            <span>FixMate Repair Library</span>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
              {filteredGuides.length} Guides
            </span>
          </h1>
          <p className="text-xs text-slate-400 mt-1">Browse verified DIY repair manuals, tools needed, cost estimates & safety protocols.</p>
        </div>

        {/* Filter Badges */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs text-slate-500 font-medium flex items-center space-x-1">
            <Filter className="w-3.5 h-3.5" />
            <span>Difficulty:</span>
          </span>
          {['all', 'Easy', 'Intermediate', 'Advanced'].map((diff) => (
            <button
              key={diff}
              onClick={() => setSelectedDifficulty(diff)}
              className={`px-3 py-1 rounded-xl text-xs font-semibold capitalize transition-all ${
                selectedDifficulty === diff
                  ? 'bg-cyan-500 text-slate-950 shadow-sm'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {diff}
            </button>
          ))}
        </div>
      </div>

      {/* Guides Grid */}
      {filteredGuides.length === 0 ? (
        <div className="text-center py-16 bg-slate-900/40 rounded-3xl border border-slate-800 space-y-3">
          <Wrench className="w-10 h-10 text-slate-600 mx-auto" />
          <h3 className="font-heading font-bold text-white text-base">No Matching Repair Guides Found</h3>
          <p className="text-xs text-slate-400">Try clearing your search query or switching categories.</p>
          <button 
            onClick={() => { setSearchQuery(''); setSelectedCategory('all'); setSelectedDifficulty('all'); }}
            className="px-4 py-2 rounded-xl bg-slate-800 text-xs font-semibold text-cyan-400 hover:bg-slate-700"
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGuides.map((guide) => {
            const isSaved = savedGuideIds.includes(guide.id);
            return (
              <div
                key={guide.id}
                className="glass-card rounded-3xl p-5 border border-slate-800 flex flex-col justify-between space-y-4 hover:border-cyan-500/40 transition-all duration-200 group"
              >
                <div className="space-y-3">
                  
                  {/* Top Badges */}
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-0.5 rounded-lg">
                      {guide.category}
                    </span>
                    <button
                      onClick={() => onSaveGuide(guide.id)}
                      className={`p-1.5 rounded-lg transition-colors ${
                        isSaved ? 'text-emerald-400 bg-emerald-500/20' : 'text-slate-500 hover:text-white bg-slate-900'
                      }`}
                      title={isSaved ? 'Bookmarked' : 'Bookmark Guide'}
                    >
                      <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-emerald-400' : ''}`} />
                    </button>
                  </div>

                  {/* Guide Title */}
                  <h3 
                    onClick={() => onSelectGuide(guide)}
                    className="font-heading font-bold text-base text-white group-hover:text-cyan-300 transition-colors cursor-pointer line-clamp-2"
                  >
                    {guide.title}
                  </h3>

                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {guide.summary}
                  </p>

                  {/* Symptoms Pills */}
                  <div className="flex flex-wrap gap-1 pt-1">
                    {guide.symptoms.slice(0, 3).map((sym, sIdx) => (
                      <span key={sIdx} className="text-[10px] bg-slate-950 text-slate-400 px-2 py-0.5 rounded border border-slate-800">
                        • {sym}
                      </span>
                    ))}
                  </div>

                  {/* High Risk Flag */}
                  {guide.safetyWarning && (
                    <div className="p-2 rounded-lg bg-rose-950/30 border border-rose-500/30 text-[11px] text-rose-300 flex items-center space-x-1.5 font-medium">
                      <ShieldAlert className="w-3.5 h-3.5 text-rose-400 flex-shrink-0" />
                      <span className="truncate">Safety Escorted Task</span>
                    </div>
                  )}

                </div>

                {/* Footer Specs & Action Button */}
                <div className="pt-4 border-t border-slate-800/80 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5 text-slate-500" />
                      <span>{guide.estimatedTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="font-bold text-slate-200">{guide.estimatedCostINR}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectGuide(guide)}
                    className="w-full py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-cyan-500 hover:text-slate-950 text-cyan-400 font-bold text-xs border border-slate-800 hover:border-cyan-500 transition-all flex items-center justify-center space-x-1.5"
                  >
                    <span>View Repair Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>
      )}

    </div>
  );
}
