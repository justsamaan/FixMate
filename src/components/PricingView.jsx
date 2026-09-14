import React from 'react';
import { CheckCircle2, Sparkles, ShieldCheck, HelpCircle, ArrowRight, Zap } from 'lucide-react';
import { PRICING_TIERS } from '../data/repairData';

export default function PricingView({ onSelectTier }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Commercial Pricing & Digital Assets</span>
        </div>
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
          One-Time Assets for Your Home.<br />
          <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
            Save Thousands on Professional Bills.
          </span>
        </h1>
        <p className="text-sm text-slate-300 max-w-2xl mx-auto">
          Get lifetime digital access to verified step-by-step repair handbooks, AI visual diagnostics, seasonal calendars, and printable shopping lists.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {PRICING_TIERS.map((tier) => (
          <div
            key={tier.id}
            className={`relative rounded-3xl p-8 flex flex-col justify-between space-y-6 transition-all ${
              tier.popular
                ? 'bg-slate-900/90 border-2 border-cyan-400 shadow-2xl shadow-cyan-500/20 scale-105'
                : 'bg-slate-900/60 border border-slate-800 hover:border-slate-700'
            }`}
          >
            {tier.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-extrabold text-xs uppercase tracking-wider shadow-md">
                ⭐ Most Popular Choice
              </div>
            )}

            <div className="space-y-4">
              <div>
                <h3 className="font-heading font-extrabold text-xl text-white">{tier.name}</h3>
                <p className="text-xs text-slate-400 mt-1">{tier.tagline}</p>
              </div>

              <div className="py-2 border-y border-slate-800/80">
                <div className="flex items-baseline space-x-2">
                  <span className="font-heading font-black text-4xl text-white">{tier.priceINR}</span>
                  <span className="text-xs text-slate-400">({tier.priceUSD})</span>
                </div>
                <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-wider">{tier.type}</span>
              </div>

              <ul className="space-y-2.5 text-xs text-slate-300">
                {tier.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => onSelectTier(tier)}
              className={`w-full py-3 px-4 rounded-xl font-extrabold text-xs shadow-lg transition-all flex items-center justify-center space-x-2 ${
                tier.popular
                  ? 'bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 text-slate-950 hover:brightness-110'
                  : 'bg-slate-800 text-slate-200 hover:text-white border border-slate-700 hover:bg-slate-700'
              }`}
            >
              <span>Unlock {tier.name}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      {/* FAQ Accordion Section */}
      <div className="max-w-3xl mx-auto glass-panel rounded-3xl p-8 border border-slate-800 space-y-6">
        <h2 className="font-heading font-bold text-xl text-white text-center flex items-center justify-center space-x-2">
          <HelpCircle className="w-5 h-5 text-amber-400" />
          <span>Frequently Asked Questions</span>
        </h2>

        <div className="space-y-4 text-xs">
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
            <h4 className="font-bold text-white text-sm">Is this a recurring monthly subscription?</h4>
            <p className="text-slate-400 leading-relaxed">No. All FixMate handbook packages are one-time lifetime digital asset purchases. Pay once and keep forever.</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
            <h4 className="font-bold text-white text-sm">How does the PDF Handbook export work?</h4>
            <p className="text-slate-400 leading-relaxed">The PDF generator formats all 50+ repair guides into a clean, printable handbook layout. You can print physical copies or save it to your phone/tablet for offline household emergencies.</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
            <h4 className="font-bold text-white text-sm">What happens if a task is too dangerous to do myself?</h4>
            <p className="text-slate-400 leading-relaxed">FixMate includes strict Safety Escalation Gates. If a repair involves gas, main voltage, or structural risks, FixMate alerts you and provides 1-click booking to request quotes from licensed emergency plumbers or electricians.</p>
          </div>
        </div>
      </div>

    </div>
  );
}
