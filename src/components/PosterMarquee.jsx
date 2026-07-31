import React from 'react';
import { motion } from 'framer-motion';
import { Globe, CircleDollarSign, CreditCard } from 'lucide-react';

export default function PosterMarquee() {
  // Row 1: Colored Pair = Blue Globe + Blue CONNECT (Positioned Left-of-Center)
  const row1Items = [
    { type: 'pill', text: 'INVEST', variant: 'muted' },
    { type: 'icon', icon: CircleDollarSign, variant: 'muted' },
    { type: 'pill', text: 'SPEND', variant: 'muted' },
    { type: 'icon', icon: CreditCard, variant: 'muted' },
    { type: 'icon', icon: Globe, variant: 'blue' },
    { type: 'pill', text: 'CONNECT', variant: 'blue' },
    { type: 'icon', icon: CircleDollarSign, variant: 'muted' },
    { type: 'pill', text: 'INVEST', variant: 'muted' },
    { type: 'icon', icon: CreditCard, variant: 'muted' },
    { type: 'pill', text: 'SPEND', variant: 'muted' },
  ];

  // Row 2: Colored Pair = Orange Dollar + Orange INVEST (Positioned Center)
  const row2Items = [
    { type: 'pill', text: 'SPEND', variant: 'muted' },
    { type: 'icon', icon: CreditCard, variant: 'muted' },
    { type: 'pill', text: 'CONNECT', variant: 'muted' },
    { type: 'icon', icon: Globe, variant: 'muted' },
    { type: 'icon', icon: CircleDollarSign, variant: 'orange' },
    { type: 'pill', text: 'INVEST', variant: 'orange' },
    { type: 'icon', icon: CreditCard, variant: 'muted' },
    { type: 'pill', text: 'SPEND', variant: 'muted' },
    { type: 'icon', icon: Globe, variant: 'muted' },
    { type: 'pill', text: 'CONNECT', variant: 'muted' },
  ];

  // Row 3: Colored Pair = Purple Card + Purple SPEND (Positioned Right-of-Center)
  const row3Items = [
    { type: 'icon', icon: CircleDollarSign, variant: 'muted' },
    { type: 'pill', text: 'INVEST', variant: 'muted' },
    { type: 'icon', icon: Globe, variant: 'muted' },
    { type: 'pill', text: 'CONNECT', variant: 'muted' },
    { type: 'icon', icon: CreditCard, variant: 'purple' },
    { type: 'pill', text: 'SPEND', variant: 'purple' },
    { type: 'icon', icon: Globe, variant: 'muted' },
    { type: 'pill', text: 'CONNECT', variant: 'muted' },
    { type: 'icon', icon: CircleDollarSign, variant: 'muted' },
    { type: 'pill', text: 'INVEST', variant: 'muted' },
  ];

  // Render Pill Badge component matching Figma visual tokens
  const renderPill = (text, variant, index) => {
    let styleClasses = 'bg-white border-slate-300 text-slate-400/90';
    if (variant === 'blue') {
      styleClasses = 'bg-white border-[#00A3FF] text-[#00A3FF]';
    } else if (variant === 'orange') {
      styleClasses = 'bg-white border-[#FFA000] text-[#FFA000]';
    } else if (variant === 'purple') {
      styleClasses = 'bg-white border-[#BD76FA] text-[#BD76FA]';
    }

    return (
      <div 
        key={`pill-${text}-${index}`}
        className={`px-10 lg:px-16 py-4 lg:py-7 rounded-full border-[6px] lg:border-[10px] flex items-center justify-center flex-shrink-0 transition-transform ${styleClasses}`}
      >
        <span className="text-[clamp(48px,6vw,104px)] font-heading font-extrabold uppercase tracking-[-2px] leading-none select-none">
          {text}
        </span>
      </div>
    );
  };

  // Render Icon Tile component matching Figma visual tokens
  const renderIconTile = (IconComponent, variant, index) => {
    let tileClasses = 'bg-slate-200 text-slate-500';
    if (variant === 'blue') {
      tileClasses = 'bg-[#00A3FF] text-white';
    } else if (variant === 'orange') {
      tileClasses = 'bg-[#FFA000] text-white';
    } else if (variant === 'purple') {
      tileClasses = 'bg-[#BD76FA] text-white';
    }

    return (
      <div 
        key={`icon-${index}`}
        className={`w-[88px] h-[88px] lg:w-[128px] lg:h-[128px] rounded-full flex items-center justify-center flex-shrink-0 transition-transform ${tileClasses}`}
      >
        <IconComponent className="w-10 h-10 lg:w-16 lg:h-16 stroke-[2.5]" />
      </div>
    );
  };

  return (
    <section className="w-screen h-screen flex-shrink-0 flex flex-col justify-center py-16 lg:py-24 bg-white overflow-hidden select-none">
      <div className="w-full flex flex-col gap-6 lg:gap-10 justify-center">
        
        {/* Row 1 (Blue CONNECT Pair positioned left-of-center ~38%) */}
        <div className="w-full overflow-hidden flex justify-center">
          <motion.div 
            className="flex items-center gap-6 lg:gap-8 whitespace-nowrap -translate-x-[12%] lg:-translate-x-[14%]"
          >
            {row1Items.map((item, idx) => 
              item.type === 'pill' 
                ? renderPill(item.text, item.variant, idx)
                : renderIconTile(item.icon, item.variant, idx)
            )}
          </motion.div>
        </div>

        {/* Row 2 (Orange INVEST Pair positioned dead center ~50%) */}
        <div className="w-full overflow-hidden flex justify-center">
          <motion.div 
            className="flex items-center gap-6 lg:gap-8 whitespace-nowrap translate-x-[0%]"
          >
            {row2Items.map((item, idx) => 
              item.type === 'pill' 
                ? renderPill(item.text, item.variant, idx)
                : renderIconTile(item.icon, item.variant, idx)
            )}
          </motion.div>
        </div>

        {/* Row 3 (Purple SPEND Pair positioned right-of-center ~62%) */}
        <div className="w-full overflow-hidden flex justify-center">
          <motion.div 
            className="flex items-center gap-6 lg:gap-8 whitespace-nowrap translate-x-[12%] lg:translate-x-[14%]"
          >
            {row3Items.map((item, idx) => 
              item.type === 'pill' 
                ? renderPill(item.text, item.variant, idx)
                : renderIconTile(item.icon, item.variant, idx)
            )}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
