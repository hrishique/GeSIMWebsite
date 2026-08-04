import React from 'react';
import { Gem, Plane, ShieldCheck, CreditCard, TrendingUp } from 'lucide-react';

export default function BenefitsMarquee() {
  // width: 'lg' for cards with inline logos / longer subtext, 'md' for the rest.
  // Same visual rhythm (icon → 1-line title → 2-line description) — only breadth varies.
  const cards = [
    {
      id: 'subscriptions',
      icon: Gem,
      heading: 'Unlock cheaper subscriptions',
      width: 'lg',
      subtext: (
        <span>
          Save up to 90% on{' '}
          <img src="/assets/Page9/Page9NLogo.png" alt="Netflix" className="inline-block h-[18px] w-[18px] align-text-bottom mx-0.5 object-contain" />{' '}
          Netflix,{' '}
          <img src="/assets/Page9/Page9YLogo.png" alt="YouTube" className="inline-block h-[18px] w-[18px] align-text-bottom mx-0.5 object-contain" />{' '}
          YouTube Premium,{' '}
          <img src="/assets/Page9/Page9CLogo.png" alt="Canva" className="inline-block h-[18px] w-[18px] align-text-bottom mx-0.5 object-contain" />{' '}
          Canva,{' '}
          <img src="/assets/Page9/Page9XLoge.png" alt="X" className="inline-block h-[18px] w-[18px] align-text-bottom mx-0.5 object-contain" />{' '}
          X Premium and more with regional pricing.
        </span>
      )
    },
    {
      id: 'travel',
      icon: Plane,
      heading: 'Book cheaper flights & hotels',
      width: 'md',
      subtext: 'Compare prices across countries and pay local rates before you book.'
    },
    {
      id: 'privacy',
      icon: ShieldCheck,
      heading: 'Browse privately',
      width: 'md',
      subtext: 'Protect your browsing from ISP tracking and insecure public Wi-Fi.'
    },
    {
      id: 'spend',
      icon: CreditCard,
      heading: 'Spend globally',
      width: 'md',
      subtext: 'Add your virtual card to Apple Wallet or Google Wallet and pay almost anywhere.'
    },
    {
      id: 'invest',
      icon: TrendingUp,
      heading: 'Invest in SpaceX & global markets',
      width: 'lg',
      subtext: (
        <span>
          Access tokenized stocks like SpaceX, Tesla and hundreds of global equities.{' '}
          <img src="/assets/Page9/Page9LogoGroup.png" alt="SpaceX, Nvidia, Tesla, Apple" className="inline-block h-[20px] object-contain align-text-bottom ml-0.5" />
        </span>
      )
    }
  ];

  const widthClass = {
    md: 'w-[320px] sm:w-[400px] lg:w-[440px]',
    lg: 'w-[340px] sm:w-[480px] lg:w-[540px]',
  };

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
                className={`${widthClass[card.width]} bg-white border border-[#F1F1F1] rounded-[20px] px-6 py-5 sm:px-7 sm:py-6 flex flex-col gap-3 sm:gap-4 flex-shrink-0 transition-transform duration-300 hover:scale-[1.02] cursor-pointer shadow-sm`}
              >
                {/* Icon */}
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-[#282F34] flex items-center justify-center">
                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
                </div>

                {/* Heading — always 1 line */}
                <h3 className="text-[20px] sm:text-[24px] lg:text-[26px] font-heading font-semibold text-[#282F34] tracking-[-0.8px] leading-[1.2] whitespace-nowrap overflow-hidden text-ellipsis">
                  {card.heading}
                </h3>

                {/* Description — always exactly 2 lines (clamped at 2, height reserved for 2) */}
                <div className="text-[14px] sm:text-[15px] lg:text-[16px] font-body text-[#282F34]/70 leading-[1.5] tracking-[-0.22px] line-clamp-2 min-h-[3em]">
                  {card.subtext}
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
