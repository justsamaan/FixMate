import React from 'react';
import { 
  Wrench, 
  Camera, 
  BookOpen, 
  Calendar, 
  ShoppingBag, 
  Bookmark, 
  ShieldAlert,
  Sparkles
} from 'lucide-react';

export default function Navbar({ 
  activeTab, 
  setActiveTab, 
  savedCount, 
  onOpenDiagnosis, 
  onOpenPdfHandbook,
  onOpenPricing
}) {
  const navItems = [
    { id: 'guides', label: 'Repair Guides', icon: Wrench },
    { id: 'diagnose', label: 'AI Visual Diagnose', icon: Camera, badge: 'New' },
    { id: 'handbook', label: 'PDF Handbook', icon: BookOpen, highlight: true },
    { id: 'dashboard', label: 'Maintenance Hub', icon: Calendar, badge: savedCount > 0 ? `${savedCount}` : null },
    { id: 'pricing', label: 'Pricing & Store', icon: ShoppingBag }
  ];

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div 
          onClick={() => setActiveTab('home')} 
          className="flex items-center space-x-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-emerald-500 to-teal-400 p-0.5 shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-200">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <Wrench className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform duration-200" />
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-1.5">
              <span className="font-heading font-extrabold text-xl text-white tracking-tight">Fix<span className="text-cyan-400">Mate</span></span>
              <span className="text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-1.5 py-0.5 rounded-full uppercase tracking-wider">
                v1.0 Pro
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-medium hidden sm:block">The Everyday DIY & Repair Assistant</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  if (item.id === 'diagnose') {
                    onOpenDiagnosis();
                  } else if (item.id === 'handbook') {
                    onOpenPdfHandbook();
                  } else {
                    setActiveTab(item.id);
                  }
                }}
                className={`relative px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
                  isActive
                    ? 'bg-slate-800 text-cyan-400 shadow-sm border border-slate-700/60'
                    : item.highlight
                    ? 'text-amber-300 hover:bg-amber-500/10 border border-amber-500/20'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : item.highlight ? 'text-amber-400' : 'text-slate-400'}`} />
                <span>{item.label}</span>
                {item.badge && (
                  <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded-full ${
                    item.id === 'diagnose' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'bg-emerald-500/20 text-emerald-300'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Action CTAs */}
        <div className="flex items-center space-x-3">
          <button
            onClick={onOpenDiagnosis}
            className="hidden sm:flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/60 text-slate-200 text-xs font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Camera className="w-4 h-4 text-cyan-400" />
            <span>Diagnose Photo</span>
          </button>

          <button
            onClick={onOpenPricing}
            className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 text-slate-950 font-bold text-xs shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/30 hover:opacity-95 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Sparkles className="w-4 h-4 fill-slate-950" />
            <span>Get Handbook</span>
          </button>
        </div>

      </div>
    </header>
  );
}
