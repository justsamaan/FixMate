import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Sparkles, CreditCard, Lock } from 'lucide-react';
import { PRICING_TIERS } from '../data/repairData';

export default function CheckoutModal({ isOpen, onClose, selectedTier, onUnlockSuccess }) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen || !selectedTier) return null;

  const handlePay = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      onUnlockSuccess(selectedTier);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-md glass-panel rounded-3xl border border-cyan-500/40 shadow-2xl overflow-hidden my-8 p-6 space-y-5">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <h3 className="font-heading font-extrabold text-white text-base">Unlock {selectedTier.name}</h3>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-heading font-bold text-xl text-white">License Activated!</h4>
            <p className="text-xs text-slate-300">
              You now have full unlocked access to <strong>{selectedTier.name}</strong> features and the PDF Handbook Generator!
            </p>
            <button
              onClick={() => {
                setIsSuccess(false);
                onClose();
              }}
              className="w-full py-2.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs"
            >
              Start Using FixMate Pro
            </button>
          </div>
        ) : (
          <form onSubmit={handlePay} className="space-y-4 text-xs">
            
            {/* Price Box */}
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-slate-400 uppercase block font-bold">Selected Edition</span>
                <span className="font-heading font-bold text-white text-sm">{selectedTier.name}</span>
              </div>
              <div className="text-right">
                <span className="font-heading font-extrabold text-2xl text-cyan-400">{selectedTier.priceINR}</span>
                <span className="text-[10px] text-slate-400 block">{selectedTier.priceUSD}</span>
              </div>
            </div>

            {/* Features Included */}
            <div className="space-y-1.5 bg-slate-950/60 p-3 rounded-xl border border-slate-800">
              <span className="text-[10px] font-bold text-slate-400 uppercase">Includes:</span>
              <ul className="space-y-1 text-slate-300 text-[11px]">
                {selectedTier.features.map((f, i) => (
                  <li key={i} className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Payment Details Simulation */}
            <div className="space-y-2 pt-2 border-t border-slate-800">
              <label className="text-slate-300 font-medium block">Card / UPI Details (Demo)</label>
              <div className="relative">
                <CreditCard className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                <input
                  type="text"
                  required
                  defaultValue="4532 •••• •••• 8821"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-white focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>

            <div className="flex items-center space-x-2 text-[10px] text-slate-400">
              <Lock className="w-3.5 h-3.5 text-emerald-400" />
              <span>256-Bit SSL Encrypted Instant Unlock</span>
            </div>

            <button
              type="submit"
              disabled={isProcessing}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 text-slate-950 font-extrabold text-xs shadow-lg hover:brightness-110 transition-all flex items-center justify-center space-x-2"
            >
              <span>{isProcessing ? 'Processing Order...' : `Pay ${selectedTier.priceINR} & Activate`}</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
}
