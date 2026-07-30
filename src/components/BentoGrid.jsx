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

          {/* Tile 1: Global eSIM (Tall Left Card) */}
          <div className="md:col-span-5 rounded-3xl bg-slate-50 border border-slate-200/80 p-8 flex flex-col justify-between relative overflow-hidden group">
            <div className="space-y-3 relative z-10">
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

            <div className="mt-8 p-4 rounded-2xl bg-white border border-slate-200 shadow-xs font-sans text-xs space-y-2">
              <div className="flex items-center justify-between py-1.5 border-b border-slate-100 font-bold text-slate-900">
                <span>🇺🇸 20GB, 30 days</span>
                <span>$28.98</span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-slate-100 text-slate-600">
                <span>🇸🇬 20GB, 30 days</span>
                <span>$26.40</span>
              </div>
              <div className="flex items-center justify-between py-1.5 text-slate-600">
                <span>🇬🇧 20GB, 30 days</span>
                <span>$20.50</span>
              </div>
            </div>
          </div>

          {/* Right Column (4 Cards) */}
          <div className="md:col-span-7 grid sm:grid-cols-2 gap-6">

            {/* Tile 2: Browse Securely */}
            <div className="rounded-3xl bg-sky-50/80 border border-sky-100 p-6 flex flex-col justify-between relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-white text-sky-500 flex items-center justify-center shadow-xs mb-6">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-1">Browse Securely</h4>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Protect every connection with secure built-in VPN access
                </p>
              </div>
            </div>

            {/* Tile 3: Virtual Numbers */}
            <div className="rounded-3xl bg-slate-50 border border-slate-200/80 p-6 flex flex-col justify-between">
              <div className="space-y-1.5 mb-4 text-[10px] font-mono text-slate-500">
                <div className="p-2 rounded-lg bg-white border border-slate-200 flex justify-between">
                  <span>🇺🇸 +1 2031233131</span>
                  <span className="text-emerald-600 font-bold">Active</span>
                </div>
                <div className="p-2 rounded-lg bg-white border border-slate-200 flex justify-between">
                  <span>🇦🇪 +971 565558466</span>
                  <span className="text-emerald-600 font-bold">Active</span>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-1">Virtual Numbers</h4>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Call, receive OTPs and verify accounts from anywhere
                </p>
              </div>
            </div>

            {/* Tile 4: Invest Privately */}
            <div className="rounded-3xl bg-slate-50 border border-slate-200/80 p-6 flex flex-col justify-between">
              <div className="space-y-1 mb-4 text-[10px] font-mono">
                <div className="flex justify-between font-bold text-slate-900">
                  <span>SPCX</span>
                  <span className="text-emerald-600">+$28.40 (15.46%)</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>AAPL</span>
                  <span>$297.14</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>BTC</span>
                  <span>$59,715.87</span>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-1">Invest Privately</h4>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Trade stocks, crypto, commodities and stablecoins securely
                </p>
              </div>
            </div>

            {/* Tile 5: Spend Freely */}
            <div className="rounded-3xl bg-slate-50 border border-slate-200/80 p-6 flex flex-col justify-between">
              <div className="w-full h-16 rounded-xl bg-gradient-to-r from-purple-200 to-pink-200 border border-purple-300 mb-4 p-2.5 flex items-center justify-between text-[10px] font-mono font-bold text-slate-900">
                <span>VISA</span>
                <span>GeSIM Card</span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-1">Spend Freely</h4>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Off-ramp, pay globally, and manage your money effortlessly
                </p>
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
