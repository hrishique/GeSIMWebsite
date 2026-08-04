import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InteractiveESimModal from './InteractiveESimModal';

export default function BentoGrid() {
  const navigate = useNavigate();
  const [eSimModalOpen, setESimModalOpen] = useState(false);

  return (
    <section className="py-24 bg-white text-left">
      <div className="max-width-container">

        {/* Section Header matching Figma Image 1 */}
        <div className="mb-8 sm:mb-12 text-left">
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
          <img src="/assets/mobile/bento/ESimCard.webp" alt="Global eSIM: instant mobile data across 190+ countries" className="w-full h-auto object-contain rounded-[18px]" />
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
              <h3 className="text-2xl font-extrabold font-heading text-slate-900">Global eSIM</h3>
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                Stay connected with instant mobile data across 190+ countries
              </p>
              <div className="pt-2">
                <button onClick={() => { navigate('/get-access'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="dark-pill-button text-xs py-2.5 px-6">
                  Get Access
                </button>
              </div>
            </div>
          </div>

          {/* Column 2: Browse Securely + Invest Privately */}
          <div className="md:col-span-1 flex flex-col gap-6">

            {/* Tile 2: Browse Securely — Figma-exported asset */}
            <div className="w-full rounded-[18px] border border-[#f1f1f1] overflow-hidden aspect-[1278/1020] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:scale-[1.01] cursor-default">
              <img
                src="/assets/features/BrowseSecurely.webp"
                alt="Browse Securely: secure built-in VPN access"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Tile 4: Invest Privately — Figma-exported asset */}
            <div className="w-full rounded-[18px] border border-[#f1f1f1] overflow-hidden aspect-[1278/1020] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:scale-[1.01] cursor-default">
              <img
                src="/assets/features/InvestPrivately.webp"
                alt="Invest Privately: trade stocks, crypto, commodities and stablecoins securely"
                className="w-full h-full object-cover"
              />
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
