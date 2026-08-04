import React from 'react';
import { Gem, Plane, ShieldCheck, CreditCard, TrendingUp } from 'lucide-react';

export default function BenefitsMarquee() {
  const cards = [
    {
      id: 'subscriptions',
      icon: Gem,
      heading: 'Unlock cheaper subscriptions',
      subtext: (
        <span>
          Save up to 90% on{' '}
          <img src="/assets/Page9/Page9NLogo.png" alt="Netflix" className="inline-block h-[20px] w-[20px] align-text-bottom mx-0.5 object-contain" />{' '}
          Netflix,{' '}
          <img src="/assets/Page9/Page9YLogo.png" alt="YouTube" className="inline-block h-[20px] w-[20px] align-text-bottom mx-0.5 object-contain" />{' '}
          YouTube Premium,{' '}
          <img src="/assets/Page9/Page9CLogo.png" alt="Canva" className="inline-block h-[20px] w-[20px] align-text-bottom mx-0.5 object-contain" />{' '}
          Canva,{' '}
          <img src="/assets/Page9/Page9XLoge.png" alt="X" className="inline-block h-[20px] w-[20px] align-text-bottom mx-0.5 object-contain" />{' '}
          X Premium and more with regional pricing
        </span>
      )
    },
    {
      id: 'travel',
      icon: Plane,
      heading: 'Book cheaper flights & hotels',
      subtext: 'Compare prices across countries and pay local rates before you book'
    },
    {
      id: 'privacy',
      icon: ShieldCheck,
      heading: 'Browse privately',
      subtext: 'Protect your browsing from ISP tracking and insecure public Wi-Fi.'
    },
    {
      id: 'spend',
      icon: CreditCard,
      heading: 'Spend globally',
      subtext: 'Add your virtual card to Apple Wallet or Google Wallet and pay almost anywhere.'
    },
    {
      id: 'invest',
      icon: TrendingUp,
      heading: 'Invest in SpaceX & global markets',
      subtext: (
        <span>
          Access tokenized stocks like SpaceX, Tesla and hundreds of global equities.{' '}
          <img src="/assets/Page9/Page9LogoGroup.png" alt="SpaceX, Nvidia, Tesla, Apple" className="inline-block h-[22px] object-contain align-text-bottom ml-0.5" />
        </span>
      )
    }
  ];

  // Double cards array for seamless 0% -> -50% infinite marquee loop
  const marqueeCards = [...cards, ...cards];

  return (
    <section className="w-full bg-[#F7F9FB] pt-16 pb-20 lg:py-24 overflow-hidden select-none flex flex-col gap-10 sm:gap-14 lg:gap-16 text-left items-start">
      
      {/* Section Heading Inset to Content Container */}
      <div className="max-width-container text-left w-full">
        <h2 className="text-[38px] sm:text-[48px] lg:text-[54px] font-extrabold text-[#09090B] tracking-[-1.5px] leading-[1.08] font-heading text-left w-full m-0">
          Benefits you can get
        </h2>
      </div>

      {/* Full-Bleed Infinite Horizontal Scroll Marquee Row (Pauses on Hover / Touch).
          overflow-x-hidden clips the huge horizontal marquee track but leaves vertical
          overflow visible so each card's border and shadow render fully at the bottom. */}
      <div className="w-full overflow-x-hidden py-2">
        <div className="flex items-stretch gap-6 lg:gap-8 w-max animate-benefits-marquee group">
          {marqueeCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div 
                key={`${card.id}-${index}`}
                className="w-[340px] sm:w-[500px] lg:w-[540px] h-[280px] sm:h-[270px] lg:h-[280px] bg-white border border-[#F1F1F1] rounded-[20px] p-5 sm:p-7 lg:p-8 flex flex-col justify-center flex-shrink-0 transition-transform duration-300 hover:scale-[1.02] cursor-pointer shadow-sm"
              >
                {/* Top Icon */}
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-[#282F34] flex items-center justify-center mb-3">
                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
                </div>

                {/* Content */}
                <div className="space-y-2.5">
                  <h3 className="text-[22px] sm:text-[26px] lg:text-[28px] font-heading font-semibold text-[#282F34] tracking-[-0.8px] sm:tracking-[-0.96px] leading-[1.2] whitespace-nowrap sm:whitespace-normal">
                    {card.heading}
                  </h3>
                  <div className="text-[14px] sm:text-[16px] lg:text-[17px] font-body text-[#282F34]/70 leading-[1.5] tracking-[-0.22px]">
                    {card.subtext}
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
