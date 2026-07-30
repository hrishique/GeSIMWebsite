import React, { useState } from 'react';
import { Eye, EyeOff, Copy, Check, Lock, Unlock, ShieldAlert, CreditCard } from 'lucide-react';

export default function VirtualCardManager() {
  const [flipped, setFlipped] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isFrozen, setIsFrozen] = useState(false);
  const [spendLimit, setSpendLimit] = useState(2500);

  const cardNumber = showDetails ? '4829 •••• 1092 6213' : '•••• •••• •••• 6213';
  const cvc = showDetails ? '849' : '•••';

  const handleCopy = () => {
    navigator.clipboard.writeText('482910926213');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-6 md:p-8 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-6 text-left max-w-md w-full font-sans">
      
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-purple-100 text-purple-700">
            <CreditCard className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-extrabold text-slate-900 text-base">Virtual Visa Card</h4>
            <span className="text-[10px] text-slate-500 font-mono">GeSIM Anonymous Spend</span>
          </div>
        </div>

        <button 
          onClick={() => setIsFrozen(!isFrozen)}
          className={`px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 border cursor-pointer transition-colors ${
            isFrozen
              ? 'bg-red-50 text-red-600 border-red-200'
              : 'bg-emerald-50 text-emerald-600 border-emerald-200'
          }`}
        >
          {isFrozen ? <Lock className="w-3.5 h-3.5" /> : <Unlock className="w-3.5 h-3.5" />}
          <span>{isFrozen ? 'Frozen' : 'Active'}</span>
        </button>
      </div>

      {/* 3D Card Render Box */}
      <div className="perspective-1000 flex justify-center py-2">
        <div 
          onClick={() => setFlipped(!flipped)}
          className={`w-72 h-44 rounded-2xl p-5 flex flex-col justify-between shadow-xl cursor-pointer transition-transform duration-500 transform-style-3d relative ${
            flipped ? 'rotate-y-180 bg-slate-900 text-white' : 'bg-gradient-to-tr from-purple-900 via-indigo-900 to-slate-900 text-white'
          }`}
        >
          {!flipped ? (
            /* Front of Card */
            <>
              <div className="flex justify-between items-center">
                <span className="font-extrabold text-sm tracking-wider">GeSIM</span>
                <span className="text-[10px] font-mono opacity-75">VISA DEBIT</span>
              </div>

              <div className="space-y-1">
                <div className="font-mono text-base font-extrabold tracking-widest">{cardNumber}</div>
                <div className="flex justify-between text-[9px] font-mono opacity-80 pt-1">
                  <span>EXP: 09/28</span>
                  <span>CVC: {cvc}</span>
                </div>
              </div>

              <div className="flex justify-between items-center text-[10px] font-mono">
                <span className="uppercase font-bold tracking-wider">BRADLEY S.</span>
                <span className="font-extrabold text-sm italic">VISA</span>
              </div>
            </>
          ) : (
            /* Back of Card */
            <div className="flex flex-col justify-between h-full pt-2">
              <div className="w-full h-8 bg-slate-800 -mx-5 px-5" />
              <div className="flex items-center justify-end gap-2 pr-2">
                <span className="text-[9px] font-mono opacity-75">CVV</span>
                <div className="bg-white text-slate-900 px-3 py-1 font-mono text-xs font-bold rounded">
                  {cvc}
                </div>
              </div>
              <div className="text-[8px] opacity-60 text-center font-mono">
                Click card to flip back to front
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Control Actions */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center justify-between text-xs">
          <button 
            onClick={() => setShowDetails(!showDetails)}
            className="flex items-center gap-1.5 font-bold text-slate-700 hover:text-slate-900 border-none bg-transparent cursor-pointer"
          >
            {showDetails ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            <span>{showDetails ? 'Hide Numbers' : 'Reveal Numbers'}</span>
          </button>

          <button 
            onClick={handleCopy}
            className="flex items-center gap-1.5 font-bold text-sky-600 hover:text-sky-700 border-none bg-transparent cursor-pointer"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Copied!' : 'Copy Card'}</span>
          </button>
        </div>

        {/* Spend Limit Slider */}
        <div className="space-y-1.5 pt-2 border-t border-slate-200/80">
          <div className="flex justify-between text-[11px] font-bold text-slate-700">
            <span>Monthly Spend Limit</span>
            <span className="font-mono text-slate-900">${spendLimit} / $5,000</span>
          </div>
          <input 
            type="range" 
            min="500" 
            max="5000" 
            step="250"
            value={spendLimit}
            onChange={(e) => setSpendLimit(Number(e.target.value))}
            className="w-full accent-purple-600 cursor-pointer"
          />
        </div>
      </div>

    </div>
  );
}
