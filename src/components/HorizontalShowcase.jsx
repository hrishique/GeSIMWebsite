import React, { useState } from 'react';
import { BarChart3, TrendingUp, Tag, ArrowRight } from 'lucide-react';

export default function HorizontalShowcase({ openDownloadModal }) {
  const [activeTab, setActiveTab] = useState(0);

  const cards = [
    {
      id: 'connect',
      tag: 'CONNECT',
      badgeIcon: BarChart3,
      headline: 'Connect without borders',
      description: 'Everything you need to stay connected globally, from instant everyday eSIM to private VPN and virtual numbers.',
      bgType: 'sky-blue',
      plans: [
        { flag: '🇺🇸', name: '20GB, 30 days', region: 'United States', orig: '$57.96', price: '$28.98' },
        { flag: '🇸🇬', name: '20GB, 30 days', region: 'Singapore', orig: '$52.80', price: '$26.40' },
        { flag: '🇬🇧', name: '20GB, 30 days', region: 'United Kingdom', orig: '$41.00', price: '$20.50' }
      ]
    },
    {
      id: 'invest',
      tag: 'INVEST',
      badgeIcon: TrendingUp,
      headline: 'Grow wealth, Keep privacy',
      description: 'Invest in stocks, cryptocurrencies, commodities, and stable assets through a privacy-first experience designed for modern finance.',
      bgType: 'light-green',
      assets: [
        { name: 'SNDK', price: '$2,266.92', change: '+$42.45 (12.47%)' },
        { name: 'BTC', price: '$59,715.87', change: '-$12.37 (0.35%)' },
        { name: 'GOLD', price: '$4,024.87', change: '+$31.88 (5.08%)' },
        { name: 'SpaceX', price: '$156.58', change: '+$28.40 (15.46%)' }
      ]
    },
    {
      id: 'spend',
      tag: 'SPEND',
      badgeIcon: Tag,
      headline: 'Spend like a local. Anywhere.',
      description: "Pay globally with your GeSIM Card, whether you're buying coffee around the corner or booking flights across continents.",
      bgType: 'purple-gradient'
    },
    {
      id: 'poster',
      tag: 'POSTER',
      headline: 'SPEND • CONNECT • INVEST',
      description: 'Unified global connectivity, private wealth management, and borderless digital payments.',
      bgType: 'poster-pills'
    }
  ];

  return (
    <section className="py-20 bg-white border-t border-slate-100 overflow-hidden text-left">
      <div className="max-width-container">
        
        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {cards.map((card, index) => (
            <button
              key={card.id}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all border cursor-pointer ${
                activeTab === index
                  ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                  : 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200'
              }`}
            >
              {card.tag}
            </button>
          ))}
        </div>

        {/* Active Tab Card */}
        <div className="max-w-5xl mx-auto">
          {cards.map((card, index) => {
            if (index !== activeTab) return null;
            const IconComp = card.badgeIcon;

            return (
              <div 
                key={card.id}
                className="grid md:grid-cols-12 gap-8 items-center rounded-3xl border border-slate-200/80 bg-slate-50 p-6 md:p-12 shadow-sm animate-in fade-in"
              >
                
                {/* Left Column Visual Box */}
                <div className="md:col-span-6 flex justify-center">
                  {card.bgType === 'sky-blue' && (
                    <div className="w-full h-[360px] rounded-2xl bg-[#00A3FF] p-6 flex flex-col justify-center items-center shadow-lg relative overflow-hidden text-slate-900">
                      <div className="w-72 bg-white rounded-2xl p-4 shadow-2xl space-y-3 font-sans">
                        <div className="flex items-center justify-between text-[10px] text-slate-400 font-bold uppercase border-b border-slate-100 pb-1">
                          <span>eSIM PLANS</span>
                          <span>Search country 🔍</span>
                        </div>
                        {card.plans.map((p, i) => (
                          <div key={i} className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs">
                            <div className="flex items-center gap-2.5">
                              <span className="text-xl">{p.flag}</span>
                              <div>
                                <div className="font-extrabold text-slate-900 text-[11px]">{p.name}</div>
                                <div className="text-[9px] text-slate-400 font-medium">{p.region}</div>
                              </div>
                            </div>
                            <div className="text-right flex flex-col items-end">
                              <span className="text-[9px] text-slate-400 line-through">{p.orig}</span>
                              <span className="text-xs font-extrabold text-slate-900 block">{p.price}</span>
                              <button className="px-3 py-1 rounded-lg bg-slate-900 text-white text-[9px] font-bold border-none mt-0.5 cursor-pointer">
                                Buy
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {card.bgType === 'light-green' && (
                    <div className="w-full h-[360px] rounded-2xl bg-emerald-50/90 border border-emerald-100 p-6 flex flex-col justify-center items-center relative overflow-hidden">
                      <div className="w-72 bg-white rounded-2xl p-5 shadow-2xl space-y-3 text-xs font-sans">
                        <div className="font-extrabold text-slate-900 border-b border-slate-100 pb-2">Money • Asset Portfolio</div>
                        <div className="grid grid-cols-2 gap-2">
                          {card.assets.map((ast, i) => (
                            <div key={i} className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                              <div className="font-extrabold text-slate-900 text-[11px]">{ast.name}</div>
                              <div className="text-[10px] text-slate-600 font-medium">{ast.price}</div>
                              <div className="text-[9px] text-emerald-600 font-bold">{ast.change}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {card.bgType === 'purple-gradient' && (
                    <div className="w-full h-[360px] rounded-2xl bg-gradient-to-tr from-purple-900 to-indigo-950 p-6 flex items-center justify-center relative overflow-hidden">
                      <div className="w-52 h-76 rounded-2xl bg-white/95 backdrop-blur-md p-5 flex flex-col justify-between shadow-2xl border border-white/50 transform -rotate-6">
                        <div className="flex justify-between items-center text-slate-900">
                          <span className="font-mono text-xs font-bold">•••• 6213</span>
                          <span className="text-xs font-extrabold">GeSIM</span>
                        </div>
                        <div className="text-left space-y-1">
                          <span className="text-[9px] uppercase tracking-wider text-slate-400 font-bold block">Virtual Visa Card</span>
                          <span className="text-base font-extrabold text-slate-900">VISA</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {card.bgType === 'poster-pills' && (
                    <div className="w-full h-[360px] rounded-2xl bg-slate-100 border border-slate-200 p-6 flex flex-wrap items-center justify-center gap-3">
                      <span className="px-6 py-3 rounded-full bg-[#00A3FF] text-white font-extrabold text-base shadow-md">
                        CONNECT
                      </span>
                      <span className="px-6 py-3 rounded-full bg-amber-500 text-white font-extrabold text-base shadow-md">
                        INVEST
                      </span>
                      <span className="px-6 py-3 rounded-full bg-purple-500 text-white font-extrabold text-base shadow-md">
                        SPEND
                      </span>
                    </div>
                  )}
                </div>

                {/* Right Column Info */}
                <div className="md:col-span-6 space-y-5 text-left">
                  {IconComp && (
                    <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-xs">
                      <IconComp className="w-5 h-5" />
                    </div>
                  )}

                  <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                    {card.headline}
                  </h3>

                  <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                    {card.description}
                  </p>

                  <div className="pt-2">
                    <button onClick={openDownloadModal} className="dark-pill-button text-sm px-7 py-3">
                      <span>Get Started</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
