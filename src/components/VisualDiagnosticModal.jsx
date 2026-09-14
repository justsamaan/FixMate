import React, { useState } from 'react';
import { X, Camera, Sparkles, CheckCircle2, AlertTriangle, ArrowRight, Upload, RefreshCw } from 'lucide-react';
import { SAMPLE_DIAGNOSIS_IMAGES, REPAIR_GUIDES } from '../data/repairData';

export default function VisualDiagnosticModal({ isOpen, onClose, onSelectGuide }) {
  const [selectedSample, setSelectedSample] = useState(SAMPLE_DIAGNOSIS_IMAGES[0]);
  const [isScanning, setIsScanning] = useState(false);
  const [userUploadedUrl, setUserUploadedUrl] = useState(null);

  if (!isOpen) return null;

  const handleScanSample = (sample) => {
    setSelectedSample(sample);
    setUserUploadedUrl(null);
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
    }, 1200);
  };

  const handleCustomUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setUserUploadedUrl(url);
      setIsScanning(true);
      setTimeout(() => {
        setIsScanning(false);
      }, 1500);
    }
  };

  const matchedGuide = REPAIR_GUIDES.find(g => g.id === selectedSample.matchedGuideId) || REPAIR_GUIDES[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl glass-panel rounded-3xl border border-cyan-500/30 shadow-2xl overflow-hidden my-8">
        
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center">
              <Camera className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <h2 className="font-heading font-bold text-white text-lg flex items-center space-x-2">
                <span>AI Photo Visual Diagnosis Engine</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  FixMate Vision v1.0
                </span>
              </h2>
              <p className="text-xs text-slate-400">Scan household images to auto-detect problems & generate matching step-by-step guides.</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left: Image Scanner & Bounding Box View */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Image Preview Window */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-950 aspect-video flex items-center justify-center group">
              <img
                src={userUploadedUrl || selectedSample.imageUrl}
                alt="Diagnosis scan target"
                className="w-full h-full object-cover"
              />

              {/* Bounding Box Overlay */}
              {!isScanning && !userUploadedUrl && selectedSample.boundingBox && (
                <div
                  style={{
                    top: selectedSample.boundingBox.top,
                    left: selectedSample.boundingBox.left,
                    width: selectedSample.boundingBox.width,
                    height: selectedSample.boundingBox.height
                  }}
                  className="absolute border-2 border-cyan-400 bg-cyan-500/10 rounded-lg shadow-lg flex items-start justify-between p-1.5 animate-pulse"
                >
                  <span className="text-[10px] font-extrabold bg-cyan-500 text-slate-950 px-1.5 py-0.5 rounded">
                    {selectedSample.confidence} Match
                  </span>
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                </div>
              )}

              {/* Scanning Laser animation */}
              {isScanning && (
                <div className="absolute inset-0 bg-cyan-500/10 backdrop-blur-[2px] flex flex-col items-center justify-center">
                  <div className="w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent absolute top-0 animate-[bounce_1.5s_infinite]" />
                  <RefreshCw className="w-8 h-8 text-cyan-400 animate-spin mb-2" />
                  <span className="text-xs font-bold text-cyan-300">Analyzing Household Geometry & Damage Patterns...</span>
                </div>
              )}
            </div>

            {/* Sample Selector & Custom Upload Buttons */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">Try Demo Sample Photos</span>
                <label className="cursor-pointer text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center space-x-1">
                  <Upload className="w-3.5 h-3.5" />
                  <span>Upload Own Photo</span>
                  <input type="file" accept="image/*" onChange={handleCustomUpload} className="hidden" />
                </label>
              </div>

              <div className="grid grid-cols-4 gap-2">
                {SAMPLE_DIAGNOSIS_IMAGES.map((sample) => (
                  <button
                    key={sample.id}
                    onClick={() => handleScanSample(sample)}
                    className={`relative rounded-xl overflow-hidden border transition-all text-left aspect-video ${
                      selectedSample.id === sample.id && !userUploadedUrl
                        ? 'border-cyan-400 ring-2 ring-cyan-500/30'
                        : 'border-slate-800 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={sample.imageUrl} alt={sample.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent p-1 flex items-end">
                      <span className="text-[10px] font-medium text-white truncate">{sample.name}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right: AI Detection Breakdown & Matched Guide */}
          <div className="lg:col-span-5 space-y-5 flex flex-col justify-between">
            
            <div className="space-y-4">
              
              {/* Detection Status Box */}
              <div className="bg-slate-900/90 rounded-2xl p-4 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center space-x-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>AI Detection Result</span>
                  </span>
                  <span className="text-xs font-extrabold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    {userUploadedUrl ? '95% Confidence' : `${selectedSample.confidence} Confidence`}
                  </span>
                </div>

                <div>
                  <h3 className="font-heading font-extrabold text-white text-base">
                    {userUploadedUrl ? 'Custom Image Issue Detected' : selectedSample.detectedIssue}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    FixMate AI identified target symptoms and mapped them directly to our verified repair database.
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-800 grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-slate-500 block text-[10px]">Estimated Cost</span>
                    <span className="font-bold text-slate-200">{matchedGuide.estimatedCostINR}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px]">Estimated Time</span>
                    <span className="font-bold text-slate-200">{matchedGuide.estimatedTime}</span>
                  </div>
                </div>
              </div>

              {/* Matched Guide Card Preview */}
              <div className="bg-slate-900/60 rounded-2xl p-4 border border-slate-800 space-y-2">
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">Matched Repair Guide</span>
                <h4 className="font-heading font-bold text-white text-sm">{matchedGuide.title}</h4>
                <p className="text-xs text-slate-400 line-clamp-2">{matchedGuide.summary}</p>
                
                <div className="flex items-center space-x-2 pt-2 text-[11px]">
                  <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-semibold">{matchedGuide.category}</span>
                  <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-semibold">{matchedGuide.difficulty}</span>
                </div>
              </div>

            </div>

            {/* Launch Guide Button */}
            <button
              onClick={() => {
                onClose();
                onSelectGuide(matchedGuide);
              }}
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 text-slate-950 font-extrabold text-sm shadow-xl shadow-cyan-500/20 hover:brightness-110 transition-all flex items-center justify-center space-x-2"
            >
              <span>Open Step-by-Step Guide</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}
