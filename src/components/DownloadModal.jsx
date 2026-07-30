import React, { useState } from 'react';
import { X, Apple, Play, QrCode, Download, ShieldCheck, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function DownloadModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const triggerDownloadAction = () => {
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 }
    });
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
      <div className="w-full max-w-lg p-8 bg-white border border-slate-200 relative shadow-2xl rounded-3xl animate-in zoom-in-95 text-left">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 border-none cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-2 mb-6">
          <span className="px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-mono font-bold uppercase tracking-wider">
            Version v0.6 Released
          </span>
          <h3 className="text-2xl font-bold text-slate-900">Download GeSIM App</h3>
          <p className="text-slate-500 text-sm">
            Scan QR code on your smartphone or choose your operating system below.
          </p>
        </div>

        {/* QR Code Container */}
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col items-center justify-center text-center mb-6">
          <div className="w-36 h-36 bg-white p-3 rounded-xl flex items-center justify-center shadow border border-slate-200 mb-3">
            <div className="w-full h-full border-2 border-slate-900 flex flex-col items-center justify-center text-slate-900 font-bold font-mono text-[10px] text-center leading-tight">
              <QrCode className="w-16 h-16 text-slate-900 mb-1" />
              <span>SCAN TO INSTALL</span>
            </div>
          </div>
          <span className="text-xs text-sky-600 font-mono font-bold flex items-center gap-1">
            <ShieldCheck className="w-4 h-4 text-emerald-600" /> Instant eSIM & Web3 Wallet
          </span>
        </div>

        {/* Platform Buttons */}
        <div className="space-y-3">
          <button 
            onClick={triggerDownloadAction}
            className="w-full p-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-semibold flex items-center justify-between border-none cursor-pointer transition-all"
          >
            <div className="flex items-center gap-3">
              <Apple className="w-6 h-6 fill-current" />
              <div className="text-left">
                <div className="text-xs text-slate-400">Download on the</div>
                <div className="text-sm font-bold">Apple App Store</div>
              </div>
            </div>
            <Download className="w-4 h-4 text-sky-400" />
          </button>

          <button 
            onClick={triggerDownloadAction}
            className="w-full p-4 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold flex items-center justify-between border border-slate-200 cursor-pointer transition-all"
          >
            <div className="flex items-center gap-3">
              <Play className="w-6 h-6 text-emerald-600 fill-emerald-600" />
              <div className="text-left">
                <div className="text-xs text-slate-500">Get it on</div>
                <div className="text-sm font-bold">Google Play Store</div>
              </div>
            </div>
            <Download className="w-4 h-4 text-slate-700" />
          </button>
        </div>

        {/* Notification Toast */}
        {copied && (
          <div className="mt-4 p-3 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-semibold text-center flex items-center justify-center gap-2 animate-in fade-in">
            <Check className="w-4 h-4 text-emerald-600" /> Direct download package initiated!
          </div>
        )}

      </div>
    </div>
  );
}
