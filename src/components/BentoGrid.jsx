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

        {/* Section Header matching Figma Image 1 */}
        <div className="mb-8 sm:mb-12 text-left">
          <span className="hidden sm:block text-xs font-mono font-bold text-sky-500 uppercase tracking-wider mb-2">Features</span>
          <h2 className="text-[32px] sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            <span>Everything you need, </span>
            <span className="inline-flex items-center gap-2.5 whitespace-nowrap">
              <span>wherever you go</span>
              <img 
                src="/assets/mobile/bento/Arrow.svg" 
                alt="Arrow" 
                className="inline-block sm:hidden w-[40px] h-auto object-contain align-middle" 
              />
              <img 
                src="/assets/features/Arrow.svg" 
                alt="Arrow" 
                className="hidden sm:inline-block w-[50px] lg:w-[59px] h-auto object-contain align-middle" 
              />
            </span>
          </h2>
        </div>

        {/* Mobile-Only Bento Stack */}
        <div className="lg:hidden flex flex-col gap-4 mb-20">
          <img src="/assets/mobile/bento/ESimCard.webp" alt="Global eSIM: instant mobile data across 190+ countries" className="w-full aspect-[354/582] object-cover rounded-[18px]" />
          <img src="/assets/mobile/bento/BrowseSecurely.webp" alt="Browse Securely: secure built-in VPN access" className="w-full aspect-[354/283] object-cover rounded-[18px]" />
          <img src="/assets/mobile/bento/InvestPrivately.webp" alt="Invest Privately: trade stocks, crypto, commodities and stablecoins" className="w-full aspect-[354/283] object-cover rounded-[18px]" />
          <img src="/assets/mobile/bento/VirtualNumbers.webp" alt="Virtual Numbers: call, receive OTPs and verify accounts from anywhere" className="w-full aspect-[354/344] object-cover rounded-[18px]" />
          <img src="/assets/mobile/bento/SpendFreely.webp" alt="Spend Freely: off-ramp, pay globally, and manage your money" className="w-full aspect-[354/221] object-cover rounded-[18px]" />
        </div>

        {/* Native 5 Bento Tiles Grid */}
        <div className="hidden lg:grid grid-cols-3 gap-6 mb-20">

          {/* Column 1: Tile 1 (Global eSIM) */}
          <div className="md:col-span-1 rounded-[18px] bg-[#f7f9fb] border border-[#f1f1f1] p-8 flex flex-col justify-end relative overflow-hidden min-h-[560px] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:scale-[1.01] cursor-default">
            <img src="/assets/features/GlobalesimMap.webp" alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.35] pointer-events-none z-0" />
            <img src="/assets/features/GlobalesimPhone.webp" alt="" className="absolute left-[39%] top-[4%] w-[68%] h-[93%] object-contain object-top pointer-events-none z-[1] drop-shadow-lg" />
            <div className="absolute inset-x-0 bottom-0 h-[39%] bg-gradient-to-b from-[rgba(247,249,251,0)] to-[#f7f9fb] to-[40.756%] z-[5] pointer-events-none" />
            <div className="relative z-10 space-y-3">
              <span className="text-xs font-mono font-bold uppercase text-sky-500">Telecom Layer</span>
              <h3 className="text-2xl font-extrabold font-heading text-slate-900">Global eSIM</h3>
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

          {/* Column 2: Browse Securely + Invest Privately */}
          <div className="md:col-span-1 flex flex-col gap-6">

            {/* Tile 2: Browse Securely */}
            <div className="w-full rounded-[18px] bg-[#f7f9fb] border border-[#f1f1f1] p-8 relative overflow-hidden flex flex-col justify-between aspect-[426/340] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:scale-[1.01] cursor-default">
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
                <h4 className="text-2xl font-extrabold font-heading text-slate-900">Browse Securely</h4>
                <p className="text-slate-500 text-sm leading-relaxed">Protect every connection with secure built-in VPN access</p>
              </div>
            </div>

            {/* Tile 4: Invest Privately */}
            <div className="flex-1 rounded-[18px] bg-[#f7f9fb] border border-[#f1f1f1] p-8 relative overflow-hidden flex flex-col justify-between transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:scale-[1.01] cursor-default">
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
                <h4 className="text-2xl font-extrabold font-heading text-slate-900">Invest Privately</h4>
                <p className="text-slate-500 text-sm leading-relaxed">Trade stocks, crypto, commodities and stablecoins securely</p>
              </div>
            </div>

          </div>

          {/* Column 3: Virtual Numbers + Spend Freely */}
          <div className="md:col-span-1 flex flex-col gap-6">

            {/* Tile 3: Virtual Numbers (flattened, no animation needed) */}
            <div className="self-start rounded-[18px] border border-[#f1f1f1] overflow-hidden aspect-[426/414] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:scale-[1.01] cursor-default">
              <img
                src="/assets/features/VNCard.webp"
                alt="Virtual Numbers: call, receive OTPs and verify accounts from anywhere"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Tile 5: Spend Freely (flattened, no animation needed) */}
            <div className="self-start rounded-[18px] border border-[#f1f1f1] overflow-hidden aspect-[426/266] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:scale-[1.01] cursor-default">
              <img
                src="/assets/features/SpendCardFull.webp"
                alt="Spend Freely: off-ramp, pay globally, and manage your money effortlessly"
                className="w-full h-full object-cover"
              />
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
