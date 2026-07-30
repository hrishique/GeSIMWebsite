import React, { useState } from 'react';
import { X, Search, Check, Smartphone, QrCode, ArrowRight, ShieldCheck } from 'lucide-react';

export default function InteractiveESimModal({ isOpen, onClose }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState({ name: 'United States', flag: '🇺🇸', code: 'US' });
  const [selectedTier, setSelectedTier] = useState({ data: '20GB', days: '30 days', price: 28.98, orig: 57.96 });
  const [step, setStep] = useState('select'); // 'select' | 'checkout' | 'success'

  if (!isOpen) return null;

  const countries = [
    { name: 'United States', flag: '🇺🇸', code: 'US' },
    { name: 'Singapore', flag: '🇸🇬', code: 'SG' },
    { name: 'United Kingdom', flag: '🇬🇧', code: 'UK' },
    { name: 'Japan', flag: '🇯🇵', code: 'JP' },
    { name: 'Germany', flag: '🇩🇪', code: 'DE' },
    { name: 'United Arab Emirates', flag: '🇦🇪', code: 'AE' },
    { name: 'France', flag: '🇫🇷', code: 'FR' },
    { name: 'Australia', flag: '🇦🇺', code: 'AU' },
    { name: 'Canada', flag: '🇨🇦', code: 'CA' },
    { name: 'Thailand', flag: '🇹🇭', code: 'TH' }
  ];

  const tiers = [
    { data: '5GB', days: '7 days', price: 9.99, orig: 19.99 },
    { data: '10GB', days: '15 days', price: 17.50, orig: 35.00 },
    { data: '20GB', days: '30 days', price: 28.98, orig: 57.96 },
    { data: '50GB', days: '30 days', price: 54.00, orig: 108.00 }
  ];

  const filteredCountries = countries.filter(c => 
    c.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handlePay = () => {
    setStep('checkout');
    setTimeout(() => {
      setStep('success');
    }, 2000);
  };

  const handleReset = () => {
    setStep('select');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 font-sans animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 md:p-8 shadow-2xl border border-slate-100 relative overflow-hidden text-left">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 border-none cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'select' && (
          <div className="space-y-6">
            <div>
              <span className="text-xs font-mono font-bold text-sky-500 uppercase">eSIM Configurator</span>
              <h2 className="text-2xl font-extrabold text-slate-900 mt-1">Get Global Data</h2>
              <p className="text-slate-500 text-xs mt-1">Instant mobile data across 190+ countries with no KYC paperwork.</p>
            </div>

            {/* Country Selector Search */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700">1. Select Region</label>
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search 190+ countries..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-sky-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-2 max-h-36 overflow-y-auto pt-1 pr-1">
                {filteredCountries.map((c) => (
                  <button
                    key={c.code}
                    onClick={() => setSelectedCountry(c)}
                    className={`flex items-center gap-2 p-2 rounded-xl border text-xs font-semibold cursor-pointer transition-all ${
                      selectedCountry.code === c.code
                        ? 'bg-sky-500 text-white border-sky-500 shadow-xs'
                        : 'bg-white text-slate-800 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <span>{c.flag}</span>
                    <span className="truncate">{c.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Data Plan Tier Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700">2. Select Data Plan</label>
              <div className="grid grid-cols-2 gap-2">
                {tiers.map((t) => (
                  <div
                    key={t.data}
                    onClick={() => setSelectedTier(t)}
                    className={`p-3 rounded-xl border cursor-pointer transition-all ${
                      selectedTier.data === t.data
                        ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                        : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-extrabold text-sm">{t.data}</span>
                      <span className="text-[10px] opacity-75">{t.days}</span>
                    </div>
                    <div className="mt-1 flex items-baseline gap-1.5">
                      <span className="text-xs font-bold">${t.price}</span>
                      <span className="text-[9px] opacity-60 line-through">${t.orig}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Summary & Action */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <div>
                <div className="text-[10px] text-slate-400 font-bold uppercase">Total Payable</div>
                <div className="text-xl font-extrabold text-slate-900">${selectedTier.price} <span className="text-xs text-sky-500 font-normal">USDC</span></div>
              </div>
              <button 
                onClick={handlePay}
                className="dark-pill-button text-xs py-3 px-6"
              >
                <span>Buy eSIM</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {step === 'checkout' && (
          <div className="py-12 text-center space-y-4">
            <div className="w-12 h-12 rounded-full border-4 border-sky-500 border-t-transparent animate-spin mx-auto" />
            <h3 className="text-xl font-extrabold text-slate-900">Provisioning eSIM...</h3>
            <p className="text-slate-500 text-xs">Verifying USDC smart contract transaction on-chain...</p>
          </div>
        )}

        {step === 'success' && (
          <div className="space-y-6 text-center py-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <Check className="w-8 h-8" />
            </div>

            <div>
              <h3 className="text-2xl font-extrabold text-slate-900">eSIM Ready!</h3>
              <p className="text-slate-500 text-xs mt-1">Scan QR code or tap Install on your phone.</p>
            </div>

            {/* QR Code Container */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 inline-block shadow-inner">
              <QrCode className="w-40 h-40 text-slate-900 mx-auto" />
              <div className="text-[10px] font-mono text-slate-500 mt-2">LPA:1$gesim.xyz$US-{selectedCountry.code}-20GB</div>
            </div>

            <div className="flex justify-center gap-3">
              <button 
                onClick={handleReset}
                className="white-pill-button text-xs py-2.5 px-6"
              >
                Done
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
