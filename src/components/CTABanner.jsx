import React from 'react';

export default function CTABanner({ openDownloadModal }) {
  return (
    <section className="py-16 bg-white">
      <div className="max-width-container">
        
        {/* Sky Blue Banner Box */}
        <div className="sky-gradient-card p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl text-left">
          
          <div className="space-y-4 max-w-xl">
            <span className="px-3.5 py-1 rounded-full bg-white/20 text-white font-mono text-xs font-bold uppercase tracking-wider">
              GET CONNECTED TODAY
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Your private network starts here...
            </h2>
            <p className="text-white/80 text-base leading-relaxed">
              Download the GeSIM app to activate instant mobile data, virtual numbers, and borderless wealth management in 60 seconds.
            </p>
          </div>

          {/* Badges */}
          <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
            <button 
              onClick={openDownloadModal}
              className="px-6 py-3.5 rounded-2xl bg-white text-slate-900 font-extrabold text-xs flex items-center gap-3 shadow-md hover:bg-slate-50 transition-colors border-none cursor-pointer"
            >
              <span className="text-lg">📱</span>
              <div className="text-left">
                <div className="text-[9px] text-slate-400 uppercase tracking-wider">Seeker</div>
                <div className="text-xs font-extrabold">SOLANA MOBILE</div>
              </div>
            </button>

            <button 
              onClick={openDownloadModal}
              className="px-6 py-3.5 rounded-2xl bg-white text-slate-900 font-extrabold text-xs flex items-center gap-3 shadow-md hover:bg-slate-50 transition-colors border-none cursor-pointer"
            >
              <span className="text-lg">🍎</span>
              <div className="text-left">
                <div className="text-[9px] text-slate-400 uppercase tracking-wider">Download on the</div>
                <div className="text-xs font-extrabold">App Store</div>
              </div>
            </button>

            <button 
              onClick={openDownloadModal}
              className="px-6 py-3.5 rounded-2xl bg-white text-slate-900 font-extrabold text-xs flex items-center gap-3 shadow-md hover:bg-slate-50 transition-colors border-none cursor-pointer"
            >
              <span className="text-lg">🤖</span>
              <div className="text-left">
                <div className="text-[9px] text-slate-400 uppercase tracking-wider">GET IT ON</div>
                <div className="text-xs font-extrabold">Google Play</div>
              </div>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
