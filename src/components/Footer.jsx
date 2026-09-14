import React from 'react';
import { Wrench, ShieldAlert, Heart, BookOpen, ExternalLink } from 'lucide-react';

export default function Footer({ onOpenPdfHandbook, onOpenPricing, setActiveTab }) {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 pt-12 pb-8 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800/60">
          
          {/* Brand Col */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center">
                <Wrench className="w-4 h-4 text-cyan-400" />
              </div>
              <span className="font-heading font-extrabold text-lg text-white">Fix<span className="text-cyan-400">Mate</span></span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              The everyday interactive DIY assistant and visual home repair manual. Diagnose household issues, follow safe step-by-step guides, and download complete repair handbooks.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm tracking-wide mb-3 uppercase text-xs text-cyan-400">Fix Categories</h4>
            <ul className="space-y-2 text-xs">
              <li><button onClick={() => setActiveTab('guides')} className="hover:text-white transition-colors">🚰 Plumbing & Water Pipes</button></li>
              <li><button onClick={() => setActiveTab('guides')} className="hover:text-white transition-colors">🪚 Furniture & Carpentry</button></li>
              <li><button onClick={() => setActiveTab('guides')} className="hover:text-white transition-colors">🚪 Doors, Windows & Drafts</button></li>
              <li><button onClick={() => setActiveTab('guides')} className="hover:text-white transition-colors">🧱 Walls, Drywall & Tile Grout</button></li>
              <li><button onClick={() => setActiveTab('guides')} className="hover:text-white transition-colors">🧹 Appliances & HVAC Filters</button></li>
            </ul>
          </div>

          {/* Digital Products */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm tracking-wide mb-3 uppercase text-xs text-amber-400">Digital Handbooks</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={onOpenPdfHandbook} className="text-amber-300 hover:underline flex items-center space-x-1.5 font-medium">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Home Fix Handbook Vol 1 (PDF)</span>
                </button>
              </li>
              <li><button onClick={onOpenPricing} className="hover:text-white transition-colors">Starter Edition (50 Fixes)</button></li>
              <li><button onClick={onOpenPricing} className="hover:text-white transition-colors">Complete Edition (150+ Fixes)</button></li>
              <li><button onClick={onOpenPricing} className="hover:text-white transition-colors">Seasonal Maintenance Checklists</button></li>
            </ul>
          </div>

          {/* Safety Disclaimer */}
          <div className="bg-amber-950/20 border border-amber-500/20 rounded-xl p-4 space-y-2">
            <div className="flex items-center space-x-2 text-amber-400 font-bold text-xs">
              <ShieldAlert className="w-4 h-4 flex-shrink-0 text-amber-400" />
              <span>Safety First Disclaimer</span>
            </div>
            <p className="text-[11px] text-amber-200/80 leading-relaxed">
              FixMate provides educational guidance for low-risk household tasks. For gas lines, high-voltage electrical panels, or load-bearing structures, always call a licensed professional.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 space-y-3 sm:space-y-0">
          <p>© {new Date().getFullYear()} FixMate Project (Base UP). All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <button onClick={onOpenPdfHandbook} className="hover:text-slate-300 transition-colors">PDF Export</button>
            <button onClick={onOpenPricing} className="hover:text-slate-300 transition-colors">Pricing</button>
            <button onClick={() => setActiveTab('dashboard')} className="hover:text-slate-300 transition-colors">Household Hub</button>
          </div>
        </div>

      </div>
    </footer>
  );
}
