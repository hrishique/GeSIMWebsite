import React from 'react';
import { Rocket, Globe, CreditCard, Lock } from 'lucide-react';

export default function MarqueeTicker() {
  const items = [
    {
      title: 'Invest in SpaceX & Global Markets',
      desc: 'Access tokenized stocks like SpaceX, Tesla and hundreds of global equities.',
      icon: Rocket
    },
    {
      title: 'Access the Open Internet',
      desc: "Use Google, YouTube and your favorite apps even in restricted regions.",
      icon: Globe
    },
    {
      title: 'Spend Globally',
      desc: 'Add your virtual card to Apple Wallet or Google Wallet and pay anywhere.',
      icon: CreditCard
    },
    {
      title: 'Browse Privately',
      desc: 'Protect your internet browsing from ISP tracking and public Wi-Fi risks.',
      icon: Lock
    }
  ];

  return (
    <div className="py-6 bg-slate-50 border-y border-slate-200 overflow-hidden relative">
      <div className="animate-marquee-slow gap-8">
        {[...items, ...items, ...items, ...items].map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div 
              key={index}
              className="flex items-center gap-4 px-6 py-3.5 rounded-2xl bg-white border border-slate-200/80 shrink-0 shadow-xs hover:border-slate-300 transition-colors"
            >
              <div className="p-2.5 rounded-xl bg-slate-100 text-slate-800">
                <IconComponent className="w-4 h-4" />
              </div>
              <div className="text-left font-sans">
                <span className="font-extrabold text-xs text-slate-900 block">{item.title}</span>
                <span className="text-[11px] text-slate-500 block max-w-xs leading-snug">{item.desc}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
