import React, { useState } from 'react';
import { ArrowRight, ArrowUp, ArrowDown, Shield, Globe, Lock, CreditCard, Gem, Briefcase, Rocket } from 'lucide-react';
import { SiApple, SiBitcoin } from 'react-icons/si';
import InteractiveESimModal from './InteractiveESimModal';

export default function BentoGrid({ openDownloadModal }) {
  const [eSimModalOpen, setESimModalOpen] = useState(false);

  const benefits = [
    {
      title: 'Invest in SpaceX & global markets',
      desc: 'Access tokenized stocks like SpaceX, Tesla and hundreds of global equities.',
      icon: Rocket
    },
    {
      title: 'Access the open internet',
      desc: "Use Google, YouTube and your favourite apps even in countries where they're restricted.",
      icon: Globe
    },
    {
      title: 'Spend globally',
      desc: 'Add your virtual card to Apple Wallet or Google Wallet and pay almost anywhere.',
      icon: CreditCard
    },
    {
      title: 'Browse privately',
      desc: 'Protect your browsing from ISP tracking and insecure public Wi-Fi.',
      icon: Lock
    },
    {
      title: 'Book cheaper flights & hotels',
      desc: 'Compare prices across countries and pay local rates before you book.',
      icon: Briefcase
    },
    {
      title: 'Unlock cheaper subscriptions',
      desc: 'Save up to 90% on Netflix, YouTube Premium, Canva, X Premium and more with regional pricing.',
      icon: Gem
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-slate-100 text-left">
      <div className="max-width-container">

        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <span className="text-xs font-mono font-bold text-sky-500 uppercase">Features</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-1">
              Everything you need, wherever you go
            </h2>
          </div>
          <div className="w-10 h-10 rounded-full border border-slate-900 flex items-center justify-center text-slate-900 shrink-0">
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>

        {/* Native 5 Bento Tiles Grid */}
        <div className="grid md:grid-cols-12 gap-6 items-stretch mb-20">

          {/* Tile 1: Global eSIM */}
          <div className="md:col-span-5 rounded-[18px] bg-[#f7f9fb] border border-[#f1f1f1] p-8 flex flex-col justify-end relative overflow-hidden min-h-[560px]">
            <img src="/assets/features/GlobalesimMap.png" alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.35] pointer-events-none z-0" />
            <img src="/assets/features/GlobalesimPhone.png" alt="" className="absolute left-[39%] top-[4%] w-[68%] h-[93%] object-contain object-top pointer-events-none z-[1] drop-shadow-lg" />
            <div className="absolute inset-x-0 bottom-0 h-[39%] bg-gradient-to-b from-[rgba(247,249,251,0)] to-[#f7f9fb] to-[40.756%] z-[5] pointer-events-none" />
            <div className="relative z-10 space-y-3">
              <span className="text-xs font-mono font-bold uppercase text-sky-500">Telecom Layer</span>
              <h3 className="text-2xl font-extrabold text-slate-900">Global eSIM</h3>
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                Stay connected with instant mobile data across 190+ countries
              </p>
              <div className="pt-2">
                <button onClick={() => setESimModalOpen(true)} className="dark-pill-button text-xs py-2.5 px-6">
                  Download Now
                </button>
              </div>
            </div>
          </div>

          {/* Right Column (4 Cards) */}
          <div className="md:col-span-7 grid sm:grid-cols-2 gap-6">

            {/* Tile 2: Browse Securely */}
            <div className="rounded-[18px] bg-[#f7f9fb] border border-[#f1f1f1] p-8 relative overflow-hidden flex flex-col justify-between min-h-[280px]">
              <div className="absolute inset-0 z-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 50% 30%, rgba(147,197,253,0.55), rgba(196,181,253,0.42) 45%, transparent 70%)' }} />
              <div className="absolute left-1/2 top-[30%] -translate-x-1/2 -translate-y-1/2 z-[1] pointer-events-none">
                {[190, 250, 310, 370, 430].map((size, i) => (
                  <div
                    key={size}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                    style={{ width: size, height: size, boxShadow: `inset 0 0 0 0.5px rgba(255,255,255,${0.35 - i * 0.06})` }}
                  />
                ))}
              </div>
              <div className="relative z-10 flex justify-center pt-4">
                <Shield className="w-10 h-10 text-white/90" strokeWidth={1.2} />
              </div>
              <div className="relative z-10 space-y-1">
                <h4 className="text-xl font-bold text-slate-900">Browse Securely</h4>
                <p className="text-slate-500 text-sm leading-relaxed">Protect every connection with secure built-in VPN access</p>
              </div>
            </div>

            {/* Tile 3: Virtual Numbers */}
            <div className="rounded-[18px] bg-[#f7f9fb] border border-[#f1f1f1] p-8 relative overflow-hidden flex flex-col justify-between min-h-[280px]">
              <img src="/assets/features/VirtualNumbersPhone.png" alt="" className="absolute -top-[10%] right-[-15%] w-[70%] h-auto object-contain opacity-90 pointer-events-none z-0" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#f7f9fb] z-[1] pointer-events-none" />
              <div className="relative z-10 space-y-1.5">
                {[
                  { icon: '🇺🇸', label: '+1 2031233131' },
                  { icon: '🇦🇪', label: '+971 565558466' },
                ].map((row, i) => (
                  <div key={i} className="flex items-center justify-between bg-white rounded-xl px-3 py-2 shadow-xs border border-slate-100 text-xs">
                    <span className="font-medium text-slate-800">{row.icon} {row.label}</span>
                    <span className="text-emerald-500 font-semibold text-[10px] uppercase">Active</span>
                  </div>
                ))}
              </div>
              <div className="relative z-10 space-y-1 mt-6">
                <h4 className="text-xl font-bold text-slate-900">Virtual Numbers</h4>
                <p className="text-slate-500 text-sm leading-relaxed">Call, receive OTPs and verify accounts from anywhere</p>
              </div>
            </div>

            {/* Tile 4: Invest Privately */}
            <div className="rounded-[18px] bg-[#f7f9fb] border border-[#f1f1f1] p-8 relative overflow-hidden flex flex-col justify-between min-h-[280px]">
              <img src="/assets/invest/InvestGrid.svg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none z-0" />
              <svg className="absolute bottom-[110px] left-0 w-full h-[100px] z-[1] pointer-events-none" viewBox="0 0 400 100" preserveAspectRatio="none">
                <defs>
                  <filter id="investChartGlow" x="-20%" y="-50%" width="140%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <linearGradient id="investChartFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,72 C30,68 45,50 70,55 C95,60 105,72 130,68 C155,64 165,42 190,45 C215,48 220,62 245,58 C270,54 280,30 305,28 C330,26 345,40 370,32 C385,27 395,20 400,18 L400,100 L0,100 Z"
                  fill="url(#investChartFill)"
                  stroke="none"
                />
                <path
                  d="M0,72 C30,68 45,50 70,55 C95,60 105,72 130,68 C155,64 165,42 190,45 C215,48 220,62 245,58 C270,54 280,30 305,28 C330,26 345,40 370,32 C385,27 395,20 400,18"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  filter="url(#investChartGlow)"
                />
              </svg>
              <div className="relative z-10 flex gap-2 flex-nowrap overflow-hidden -mx-8 px-8">
                {[
                  { symbol: 'SPCX', price: '$156.58', change: '+$28.40 (15.46%)', up: true, icon: <img src="/assets/features/SpcxIcon.png" alt="" className="w-[18px] h-[18px] rounded-full object-cover" /> },
                  { symbol: 'BTC', price: '$59,715.87', change: '$12.37 (0.35%)', up: false, icon: <SiBitcoin className="w-[18px] h-[18px] text-[#f7931a]" /> },
                  { symbol: 'GOLD', price: '$4,024.87', change: '+$31.88 (5.08%)', up: true, icon: <img src="/assets/features/GoldIcon.png" alt="" className="w-[18px] h-[18px] rounded-full object-cover" /> },
                  { symbol: 'AAPL', price: '$297.14', change: '$0.87 (0.29%)', up: false, icon: <SiApple className="w-[18px] h-[18px] text-slate-900" /> },
                ].map((t) => (
                  <div key={t.symbol} className="bg-white border border-[#f1f1f1] rounded-xl p-3 w-[119px] shrink-0">
                    <div className="flex items-center gap-1.5 mb-2">
                      {t.icon}
                      <span className="text-sm font-bold text-slate-900">{t.symbol}</span>
                    </div>
                    <div className="text-xs font-semibold text-slate-900">{t.price}</div>
                    <div className={`flex items-center gap-0.5 text-[10px] font-semibold ${t.up ? 'text-[#7ed321]' : 'text-[#f74346]'}`}>
                      {t.up ? <ArrowUp className="w-2.5 h-2.5" /> : <ArrowDown className="w-2.5 h-2.5" />}
                      {t.change}
                    </div>
                  </div>
                ))}
              </div>
              <div className="relative z-10 space-y-1 mt-6">
                <h4 className="text-xl font-bold text-slate-900">Invest Privately</h4>
                <p className="text-slate-500 text-sm leading-relaxed">Trade stocks, crypto, commodities and stablecoins securely</p>
              </div>
            </div>

            {/* Tile 5: Spend Freely */}
            <div className="rounded-[18px] bg-white border border-[#f1f1f1] p-8 relative overflow-hidden flex flex-col justify-between min-h-[280px]">
              <div className="relative z-0 mx-4 mt-2 rounded-2xl overflow-hidden shadow-lg" style={{ aspectRatio: '386/227' }}>
                <img src="/assets/features/SpendCard.png" alt="" className="w-full h-full object-cover pointer-events-none" />
              </div>
              <div className="relative z-10 space-y-1 mt-6">
                <h4 className="text-xl font-bold text-slate-900">Spend Freely</h4>
                <p className="text-slate-500 text-sm leading-relaxed">Off-ramp, pay globally, and manage your money effortlessly</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* eSIM Configurator Modal */}
      <InteractiveESimModal
        isOpen={eSimModalOpen}
        onClose={() => setESimModalOpen(false)}
      />
    </section>
  );
}
