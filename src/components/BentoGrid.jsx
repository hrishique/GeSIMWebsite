import React, { useState } from 'react';
import { ArrowRight, Shield, Globe, Lock, CreditCard, Gem, Briefcase, Rocket } from 'lucide-react';
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
              <div className="absolute inset-0 z-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 50% 30%, rgba(147,197,253,0.35), rgba(196,181,253,0.25) 45%, transparent 70%)' }} />
              <div className="relative z-10 flex justify-center pt-4">
                <div className="w-16 h-16 rounded-2xl bg-white/60 backdrop-blur-sm flex items-center justify-center shadow-sm">
                  <Shield className="w-7 h-7 text-sky-400" strokeWidth={1.5} />
                </div>
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
              <img src="/assets/invest/InvestGrid.svg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none z-0" />
              <svg className="absolute bottom-0 left-0 w-full h-[45%] z-[1] pointer-events-none" viewBox="0 0 400 100" preserveAspectRatio="none">
                <polyline points="0,60 40,45 80,65 120,35 160,55 200,25 240,50 280,20 320,40 360,15 400,30" fill="none" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="relative z-10 flex gap-4 text-xs">
                <div>
                  <div className="font-bold text-slate-900">SPCX</div>
                  <div className="text-slate-700">$156.58</div>
                  <div className="text-emerald-500">+$28.40 (15.46%)</div>
                </div>
                <div>
                  <div className="font-bold text-slate-900">BTC</div>
                  <div className="text-slate-700">$59,715.87</div>
                  <div className="text-red-500">-$12.37 (0.35%)</div>
                </div>
                <div>
                  <div className="font-bold text-slate-900">GOLD</div>
                  <div className="text-slate-700">$4,024.87</div>
                  <div className="text-emerald-500">+$31.88 (5.08%)</div>
                </div>
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
