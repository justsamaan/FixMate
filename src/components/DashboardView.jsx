import React, { useState } from 'react';
import { 
  Bookmark, 
  Calendar, 
  ShoppingBag, 
  CheckSquare, 
  Square, 
  Printer, 
  Plus, 
  Trash2, 
  Wrench, 
  Sun, 
  Flame, 
  Wind, 
  Snowflake,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { REPAIR_GUIDES, SEASONAL_MAINTENANCE_TASKS } from '../data/repairData';

export default function DashboardView({ savedGuideIds, onSaveGuide, onSelectGuide }) {
  const [seasonalTasks, setSeasonalTasks] = useState(SEASONAL_MAINTENANCE_TASKS);
  const [inventoryList, setInventoryList] = useState([
    { id: 1, name: 'HVAC Air Filter Size', value: '16 x 25 x 1 Inch (MERV 8)' },
    { id: 2, name: 'Kitchen Paint Color', value: 'Asian Paints Apex Royale #E2D9C8' },
    { id: 3, name: 'Washing Machine Model', value: 'LG Front Load 8kg (WM3400CW)' }
  ]);
  const [newItemName, setNewItemName] = useState('');
  const [newItemVal, setNewItemVal] = useState('');

  const savedGuides = REPAIR_GUIDES.filter(g => savedGuideIds.includes(g.id));

  // Consolidate required tools & materials from saved guides
  const consolidatedTools = [];
  savedGuides.forEach(g => {
    g.tools.forEach(t => {
      if (!consolidatedTools.some(item => item.name === t.name)) {
        consolidatedTools.push({ ...t, sourceGuide: g.title });
      }
    });
  });

  const toggleSeasonalTask = (seasonIndex, taskId) => {
    setSeasonalTasks(prev => prev.map((s, idx) => {
      if (idx !== seasonIndex) return s;
      return {
        ...s,
        tasks: s.tasks.map(t => t.id === taskId ? { ...t, status: t.status === 'Completed' ? 'Pending' : 'Completed' } : t)
      };
    }));
  };

  const addInventoryItem = (e) => {
    e.preventDefault();
    if (newItemName && newItemVal) {
      setInventoryList([...inventoryList, { id: Date.now(), name: newItemName, value: newItemVal }]);
      setNewItemName('');
      setNewItemVal('');
    }
  };

  const removeInventoryItem = (id) => {
    setInventoryList(inventoryList.filter(item => item.id !== id));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      
      {/* Header */}
      <div className="border-b border-slate-800 pb-6">
        <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight flex items-center space-x-2">
          <Calendar className="w-7 h-7 text-cyan-400" />
          <span>Household Maintenance Hub</span>
        </h1>
        <p className="text-xs text-slate-400 mt-1">Manage saved repairs, seasonal preventive maintenance, consolidated shopping lists & home equipment specs.</p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column (8 cols): Saved Repairs & Seasonal Calendar */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* SECTION 1: Saved Repairs */}
          <div className="glass-panel rounded-3xl p-6 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-heading font-bold text-lg text-white flex items-center space-x-2">
                <Bookmark className="w-5 h-5 text-emerald-400" />
                <span>My Saved Repairs ({savedGuides.length})</span>
              </h2>
            </div>

            {savedGuides.length === 0 ? (
              <div className="text-center py-8 bg-slate-950/60 rounded-2xl border border-slate-800 text-slate-400 text-xs">
                No saved repair guides yet. Click the bookmark icon on any repair guide to track it here!
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {savedGuides.map(guide => (
                  <div 
                    key={guide.id} 
                    className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between space-y-3"
                  >
                    <div>
                      <span className="text-[10px] font-bold text-cyan-400 uppercase">{guide.category}</span>
                      <h3 
                        onClick={() => onSelectGuide(guide)}
                        className="font-heading font-bold text-sm text-white hover:text-cyan-300 cursor-pointer line-clamp-1 mt-0.5"
                      >
                        {guide.title}
                      </h3>
                      <p className="text-xs text-slate-400 line-clamp-2 mt-1">{guide.summary}</p>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-xs">
                      <span className="text-emerald-400 font-bold">{guide.estimatedCostINR}</span>
                      <button
                        onClick={() => onSelectGuide(guide)}
                        className="text-cyan-400 hover:underline text-xs font-semibold flex items-center space-x-1"
                      >
                        <span>Open Guide</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* SECTION 2: Seasonal Maintenance Calendar */}
          <div className="glass-panel rounded-3xl p-6 border border-slate-800 space-y-6">
            <h2 className="font-heading font-bold text-lg text-white flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-amber-400" />
              <span>4-Season Preventative Maintenance Calendar</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {seasonalTasks.map((sGroup, sIdx) => {
                const IconComponent = 
                  sGroup.season === 'Spring' ? Sun :
                  sGroup.season === 'Summer' ? Flame :
                  sGroup.season === 'Autumn' ? Wind : Snowflake;

                return (
                  <div key={sGroup.season} className="bg-slate-900/80 rounded-2xl p-5 border border-slate-800 space-y-3">
                    <div className="flex items-center space-x-2 border-b border-slate-800 pb-2">
                      <IconComponent className="w-4 h-4 text-amber-400" />
                      <h3 className="font-heading font-bold text-sm text-white uppercase tracking-wider">{sGroup.season} Maintenance</h3>
                    </div>

                    <div className="space-y-2">
                      {sGroup.tasks.map(task => {
                        const isDone = task.status === 'Completed';
                        return (
                          <div 
                            key={task.id}
                            onClick={() => toggleSeasonalTask(sIdx, task.id)}
                            className="flex items-center justify-between p-2 rounded-xl bg-slate-950/60 border border-slate-800 text-xs cursor-pointer hover:border-slate-700"
                          >
                            <div className="flex items-center space-x-2">
                              {isDone ? (
                                <CheckSquare className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                              ) : (
                                <Square className="w-4 h-4 text-slate-500 flex-shrink-0" />
                              )}
                              <span className={isDone ? 'text-slate-500 line-through' : 'text-slate-200'}>{task.title}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Right Column (4 cols): Consolidated Shopping List & Home Inventory */}
        <div className="lg:col-span-4 space-y-8">
          
          {/* SECTION 3: Shopping List Generator */}
          <div className="glass-panel rounded-3xl p-6 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-heading font-bold text-base text-white flex items-center space-x-2">
                <ShoppingBag className="w-4 h-4 text-cyan-400" />
                <span>Consolidated Shopping List</span>
              </h3>
              <button 
                onClick={() => window.print()}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white text-xs"
                title="Print Shopping List"
              >
                <Printer className="w-4 h-4" />
              </button>
            </div>

            {consolidatedTools.length === 0 ? (
              <p className="text-xs text-slate-400 leading-relaxed">
                Save repair guides to automatically aggregate required tools and supplies into a unified shopping checklist!
              </p>
            ) : (
              <div className="space-y-2 text-xs">
                {consolidatedTools.map((tool, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                    <div>
                      <span className="font-medium text-slate-200 block">{tool.name}</span>
                      <span className="text-[10px] text-slate-500">{tool.sourceGuide}</span>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                      {tool.estCost}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* SECTION 4: Household Equipment Inventory */}
          <div className="glass-panel rounded-3xl p-6 border border-slate-800 space-y-4">
            <h3 className="font-heading font-bold text-base text-white flex items-center space-x-2">
              <Wrench className="w-4 h-4 text-amber-400" />
              <span>Household Equipment Inventory</span>
            </h3>

            <div className="space-y-2 text-xs">
              {inventoryList.map((item) => (
                <div key={item.id} className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-slate-300 block text-[11px]">{item.name}</span>
                    <span className="text-cyan-400 font-mono text-[11px]">{item.value}</span>
                  </div>
                  <button 
                    onClick={() => removeInventoryItem(item.id)}
                    className="text-slate-600 hover:text-rose-400 p-1"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>

            {/* Add New Inventory Item */}
            <form onSubmit={addInventoryItem} className="space-y-2 pt-2 border-t border-slate-800 text-xs">
              <input
                type="text"
                value={newItemName}
                onChange={(e) => setNewItemName(e.target.value)}
                placeholder="Item (e.g. Living Room Paint Code)"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-1.5 text-white text-xs focus:outline-none focus:border-amber-500"
              />
              <input
                type="text"
                value={newItemVal}
                onChange={(e) => setNewItemVal(e.target.value)}
                placeholder="Spec / Serial (e.g. #F4E2D5 or Filter 12x12)"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-1.5 text-white text-xs focus:outline-none focus:border-amber-500"
              />
              <button
                type="submit"
                className="w-full py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs flex items-center justify-center space-x-1"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Inventory Spec</span>
              </button>
            </form>
          </div>

        </div>

      </div>

    </div>
  );
}
