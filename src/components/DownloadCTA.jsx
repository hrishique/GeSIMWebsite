import React from 'react';
import { motion } from 'framer-motion';

export default function DownloadCTA({ openDownloadModal }) {
  return (
    <section className="w-full py-16 lg:py-24 bg-white flex justify-center items-center select-none">
      <div className="max-width-container">
        
        {/* Fixed Height Rounded Panel */}
        <div className="relative w-full h-[440px] sm:h-[470px] lg:h-[490px] rounded-[28px] lg:rounded-[36px] overflow-hidden flex items-center shadow-lg">
          
          {/* Background Blue Gradient Image */}
          <img 
            src="/assets/App Links/AppLinksBG.png" 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0" 
          />

          {/* Left Half: Whole Phone Mockup Visible Vertically inside Panel (margin top & bottom) */}
          <div className="w-[42%] hidden md:flex items-center justify-start h-full pl-4 lg:pl-8 pointer-events-none z-10">
            <motion.img 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              src="/assets/App Links/AppLinksMobileImg.png" 
              alt="GeSIM Mobile Interface" 
              className="h-[370px] sm:h-[400px] lg:h-[420px] w-auto max-w-none object-contain -translate-x-6 lg:-translate-x-8 pointer-events-none drop-shadow-2xl" 
            />
          </div>

          {/* Right Half: Heading & 3 Store Badges Row */}
          <div className="relative z-20 ml-auto w-full md:w-[58%] p-8 sm:p-10 lg:p-12 flex flex-col justify-center space-y-6 lg:space-y-8">
            
            {/* 2-Line Heading */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[32px] sm:text-[44px] lg:text-[50px] font-heading font-semibold text-white tracking-[-1.8px] leading-[1.08] max-w-[560px]"
            >
              Your private network starts here...
            </motion.h2>

            {/* Store Badges Row - Strictly Single Row (flex-nowrap) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-row flex-nowrap items-center gap-3 lg:gap-4 pt-2"
            >
              {/* Seeker / Solana Mobile Badge */}
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); openDownloadModal?.(); }}
                className="transition-transform hover:scale-105 active:scale-95 flex-shrink-0 cursor-pointer"
                aria-label="Download Seeker Solana Mobile App"
              >
                <img 
                  src="/assets/App Links/badge-seeker.png" 
                  alt="Seeker Solana Mobile" 
                  className="h-[48px] sm:h-[54px] lg:h-[58px] w-auto object-contain" 
                />
              </a>

              {/* App Store Badge */}
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); openDownloadModal?.(); }}
                className="transition-transform hover:scale-105 active:scale-95 flex-shrink-0 cursor-pointer"
                aria-label="Download on the App Store"
              >
                <img 
                  src="/assets/App Links/badge-appstore.png" 
                  alt="Download on the App Store" 
                  className="h-[48px] sm:h-[54px] lg:h-[58px] w-auto object-contain" 
                />
              </a>

              {/* Google Play Store Badge */}
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); openDownloadModal?.(); }}
                className="transition-transform hover:scale-105 active:scale-95 flex-shrink-0 cursor-pointer"
                aria-label="Get it on Google Play"
              >
                <img 
                  src="/assets/App Links/badge-playstore.png" 
                  alt="Get it on Google Play" 
                  className="h-[48px] sm:h-[54px] lg:h-[58px] w-auto object-contain" 
                />
              </a>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
