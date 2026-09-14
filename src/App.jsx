import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GuidesView from './components/GuidesView';
import DashboardView from './components/DashboardView';
import PricingView from './components/PricingView';
import Footer from './components/Footer';
import VisualDiagnosticModal from './components/VisualDiagnosticModal';
import GuideModal from './components/GuideModal';
import PdfHandbookModal from './components/PdfHandbookModal';
import ProQuoteModal from './components/ProQuoteModal';
import CheckoutModal from './components/CheckoutModal';
import { PRICING_TIERS } from './data/repairData';

export default function App() {
  const [activeTab, setActiveTab] = useState('home'); // 'home', 'guides', 'dashboard', 'pricing'
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [savedGuideIds, setSavedGuideIds] = useState(['plumb-01', 'carp-01']);

  // Modals state
  const [isDiagnosisOpen, setIsDiagnosisOpen] = useState(false);
  const [isPdfHandbookOpen, setIsPdfHandbookOpen] = useState(false);
  const [selectedGuideForModal, setSelectedGuideForModal] = useState(null);
  const [proQuoteTargetGuide, setProQuoteTargetGuide] = useState(null);
  const [checkoutTier, setCheckoutTier] = useState(null);

  const toggleSaveGuide = (guideId) => {
    setSavedGuideIds((prev) =>
      prev.includes(guideId) ? prev.filter((id) => id !== guideId) : [...prev, guideId]
    );
  };

  const handleOpenProQuote = (guide) => {
    setProQuoteTargetGuide(guide);
  };

  const handleSelectTierForCheckout = (tier) => {
    setCheckoutTier(tier);
  };

  const handleUnlockSuccess = (tier) => {
    // Activate unlocked features or open handbook automatically
    setTimeout(() => {
      setIsPdfHandbookOpen(true);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-slate-950">
      
      {/* Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        savedCount={savedGuideIds.length}
        onOpenDiagnosis={() => setIsDiagnosisOpen(true)}
        onOpenPdfHandbook={() => setIsPdfHandbookOpen(true)}
        onOpenPricing={() => {
          setActiveTab('pricing');
        }}
      />

      {/* Main Body Routing */}
      <main className="flex-grow">
        {activeTab === 'home' && (
          <>
            <Hero
              searchQuery={searchQuery}
              setSearchQuery={(q) => {
                setSearchQuery(q);
                setActiveTab('guides');
              }}
              selectedCategory={selectedCategory}
              setSelectedCategory={(cat) => {
                setSelectedCategory(cat);
                setActiveTab('guides');
              }}
              onOpenDiagnosis={() => setIsDiagnosisOpen(true)}
              onOpenPdfHandbook={() => setIsPdfHandbookOpen(true)}
              onOpenPricing={() => setActiveTab('pricing')}
            />
            <GuidesView
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              onSelectGuide={(g) => setSelectedGuideForModal(g)}
              savedGuideIds={savedGuideIds}
              onSaveGuide={toggleSaveGuide}
            />
          </>
        )}

        {activeTab === 'guides' && (
          <GuidesView
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            onSelectGuide={(g) => setSelectedGuideForModal(g)}
            savedGuideIds={savedGuideIds}
            onSaveGuide={toggleSaveGuide}
          />
        )}

        {activeTab === 'dashboard' && (
          <DashboardView
            savedGuideIds={savedGuideIds}
            onSaveGuide={toggleSaveGuide}
            onSelectGuide={(g) => setSelectedGuideForModal(g)}
          />
        )}

        {activeTab === 'pricing' && (
          <PricingView
            onSelectTier={(tier) => handleSelectTierForCheckout(tier)}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onOpenPdfHandbook={() => setIsPdfHandbookOpen(true)}
        onOpenPricing={() => setActiveTab('pricing')}
        setActiveTab={setActiveTab}
      />

      {/* MODALS */}
      <VisualDiagnosticModal
        isOpen={isDiagnosisOpen}
        onClose={() => setIsDiagnosisOpen(false)}
        onSelectGuide={(g) => setSelectedGuideForModal(g)}
      />

      <GuideModal
        guide={selectedGuideForModal}
        isOpen={!!selectedGuideForModal}
        onClose={() => setSelectedGuideForModal(null)}
        onSaveGuide={toggleSaveGuide}
        isSaved={selectedGuideForModal ? savedGuideIds.includes(selectedGuideForModal.id) : false}
        onRequestProQuote={handleOpenProQuote}
      />

      <PdfHandbookModal
        isOpen={isPdfHandbookOpen}
        onClose={() => setIsPdfHandbookOpen(false)}
      />

      <ProQuoteModal
        isOpen={!!proQuoteTargetGuide}
        onClose={() => setProQuoteTargetGuide(null)}
        targetGuide={proQuoteTargetGuide}
      />

      <CheckoutModal
        isOpen={!!checkoutTier}
        onClose={() => setCheckoutTier(null)}
        selectedTier={checkoutTier}
        onUnlockSuccess={handleUnlockSuccess}
      />

    </div>
  );
}
