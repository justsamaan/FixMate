import React, { useState } from 'react';
import { 
  X, 
  CheckSquare, 
  Square, 
  AlertTriangle, 
  ShieldAlert, 
  Clock, 
  DollarSign, 
  Wrench, 
  Bookmark, 
  Share2, 
  ExternalLink,
  PhoneCall,
  CheckCircle2
} from 'lucide-react';

export default function GuideModal({ guide, isOpen, onClose, onSaveGuide, isSaved, onRequestProQuote }) {
  const [completedSteps, setCompletedSteps] = useState({});
  const [checkedTools, setCheckedTools] = useState({});

  if (!isOpen || !guide) return null;

  const toggleStep = (index) => {
    setCompletedSteps(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const toggleTool = (index) => {
    setCheckedTools(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const completedStepCount = Object.values(completedSteps).filter(Boolean).length;
  const progressPercent = Math.round((completedStepCount / guide.steps.length) * 100);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl glass-panel rounded-3xl border border-slate-700/80 shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center space-x-3">
            <span className="px-2.5 py-1 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-bold uppercase tracking-wider">
              {guide.category}
            </span>
            <span className={`px-2.5 py-1 rounded-lg text-xs font-bold ${
              guide.difficulty === 'Easy' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' :
              guide.difficulty === 'Intermediate' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' :
              'bg-rose-500/20 text-rose-300 border border-rose-500/30'
            }`}>
              {guide.difficulty} Difficulty
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => onSaveGuide(guide.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center space-x-1.5 transition-all ${
                isSaved
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                  : 'bg-slate-800 text-slate-300 hover:text-white border border-slate-700'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-emerald-400 text-emerald-400' : ''}`} />
              <span>{isSaved ? 'Saved to Hub' : 'Save Guide'}</span>
            </button>
            <button 
              onClick={onClose}
              className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-grow">
          
          {/* Title & Overview */}
          <div className="space-y-2">
            <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight leading-snug">
              {guide.title}
            </h1>
            <p className="text-sm text-slate-300 leading-relaxed">{guide.summary}</p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-900/80 rounded-2xl p-3.5 border border-slate-800/80 text-xs">
            <div className="flex items-center space-x-2.5">
              <Clock className="w-4 h-4 text-cyan-400" />
              <div>
                <span className="text-slate-500 block text-[10px]">Estimated Time</span>
                <span className="font-bold text-slate-200">{guide.estimatedTime}</span>
              </div>
            </div>

            <div className="flex items-center space-x-2.5">
              <DollarSign className="w-4 h-4 text-emerald-400" />
              <div>
                <span className="text-slate-500 block text-[10px]">Est. Cost (DIY)</span>
                <span className="font-bold text-slate-200">{guide.estimatedCostINR}</span>
              </div>
            </div>

            <div className="flex items-center space-x-2.5">
              <Wrench className="w-4 h-4 text-amber-400" />
              <div>
                <span className="text-slate-500 block text-[10px]">Tools Needed</span>
                <span className="font-bold text-slate-200">{guide.tools.length} Items</span>
              </div>
            </div>

            <div className="flex items-center space-x-2.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <div>
                <span className="text-slate-500 block text-[10px]">Progress</span>
                <span className="font-bold text-cyan-400">{progressPercent}% Completed</span>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-cyan-500 to-emerald-400 h-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          {/* CRITICAL SAFETY WARNING GATE (If applicable) */}
          {guide.safetyWarning && (
            <div className="bg-rose-950/40 border-2 border-rose-500/50 rounded-2xl p-5 shadow-xl space-y-3">
              <div className="flex items-center space-x-2 text-rose-400 font-extrabold text-sm uppercase tracking-wide">
                <ShieldAlert className="w-5 h-5 text-rose-400 animate-bounce" />
                <span>⚠️ MANDATORY SAFETY ESCALATION TRIGGER</span>
              </div>
              <p className="text-xs text-rose-200/90 leading-relaxed font-medium">
                {guide.safetyWarning.message}
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onRequestProQuote(guide)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-amber-600 text-white font-extrabold text-xs shadow-lg hover:brightness-110 transition-all flex items-center justify-center space-x-2"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>{guide.safetyWarning.proCallToAction}</span>
                </button>
              </div>
            </div>
          )}

          {/* Required Tools & Materials Section */}
          <div className="bg-slate-900/60 rounded-2xl p-5 border border-slate-800 space-y-3">
            <h3 className="font-heading font-bold text-white text-sm flex items-center space-x-2">
              <Wrench className="w-4 h-4 text-cyan-400" />
              <span>Required Tools & Materials Checklist</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {guide.tools.map((tool, idx) => (
                <div 
                  key={idx}
                  onClick={() => toggleTool(idx)}
                  className={`p-2.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                    checkedTools[idx] 
                      ? 'bg-slate-800/80 border-emerald-500/40 text-slate-400 line-through' 
                      : 'bg-slate-950/60 border-slate-800 text-slate-200 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    {checkedTools[idx] ? (
                      <CheckSquare className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    ) : (
                      <Square className="w-4 h-4 text-slate-500 flex-shrink-0" />
                    )}
                    <span className="font-medium">{tool.name}</span>
                  </div>
                  <span className="text-[10px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                    {tool.estCost}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Step-by-step Instructions */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-white text-base">Step-by-Step Instructions</h3>

            <div className="space-y-4">
              {guide.steps.map((step, idx) => {
                const isDone = !!completedSteps[idx];
                return (
                  <div 
                    key={idx}
                    className={`rounded-2xl p-5 border transition-all ${
                      isDone 
                        ? 'bg-slate-900/40 border-emerald-500/30' 
                        : 'bg-slate-900/80 border-slate-800'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3.5">
                        <button 
                          onClick={() => toggleStep(idx)}
                          className="mt-0.5 text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          {isDone ? (
                            <CheckSquare className="w-5 h-5 text-emerald-400" />
                          ) : (
                            <Square className="w-5 h-5 text-slate-500" />
                          )}
                        </button>
                        <div>
                          <h4 className={`font-heading font-bold text-sm ${isDone ? 'text-slate-400 line-through' : 'text-white'}`}>
                            Step {step.stepNumber}: {step.title}
                          </h4>
                          <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                            {step.description}
                          </p>

                          {step.tip && (
                            <div className="mt-3 p-3 rounded-xl bg-cyan-950/30 border border-cyan-500/20 text-cyan-200 text-xs flex items-start space-x-2">
                              <span className="font-bold text-cyan-400 text-[11px] uppercase tracking-wider flex-shrink-0">PRO TIP:</span>
                              <span>{step.tip}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Safety Check Notice */}
          <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/30 text-amber-200 text-xs flex items-start space-x-2.5">
            <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-bold text-amber-300">Safety & Standard Protocol Check</span>
              <p className="text-[11px] text-amber-200/80">
                Always test shut-off valves before disconnecting water pipes. Wear safety glasses when hammering, drilling, or scraping plaster.
              </p>
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between flex-shrink-0">
          <div className="text-xs text-slate-400">
            <span>{completedStepCount} of {guide.steps.length} steps completed</span>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => onSaveGuide(guide.id)}
              className="px-4 py-2 rounded-xl bg-slate-800 text-slate-200 hover:text-white font-semibold text-xs border border-slate-700"
            >
              {isSaved ? 'Remove Bookmark' : 'Bookmark Guide'}
            </button>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs shadow-md hover:bg-cyan-400"
            >
              Done
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
