import React from 'react';
import { motion } from 'framer-motion';

export default function DownloadCTA() {
  return (
    <section className="w-full py-16 lg:py-24 bg-white select-none">
      <div className="max-width-container">

        {/* Mobile CTA card (vertical, phone at top).
            NO fixed aspect-ratio → card height is driven by content, so it grows if the
            heading or badges wrap to more lines. Phone lives in a proportional pt- area at
            the top; text/badges flow naturally beneath — no absolute overlap possible. */}
        <div className="lg:hidden pt-8">
          <div className="relative w-full max-w-[354px] mx-auto rounded-[18px] overflow-hidden shadow-lg">
            {/* Background gradient — stretches to whatever card height ends up being */}
            <img src="/assets/App Links/AppLinksBG.webp" alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0" />
            {/* Phone — proportional width and vertical position (top offset is % of card WIDTH
                via padding trick since parent has no fixed height). */}
            <img
              src="/assets/App Links/AppLinksMobileImg.webp"
              alt="GeSIM Mobile Interface"
              className="absolute left-1/2 -translate-x-1/2 top-0 w-[88%] h-auto object-contain z-10 pointer-events-none"
              style={{ filter: 'drop-shadow(0 6px 10px rgba(15, 23, 42, 0.14)) drop-shadow(0 24px 48px rgba(15, 23, 42, 0.18))' }}
            />
            {/* Content — pt-[85%] reserves vertical space equal to 85% of card width (≈ the phone's
                visible height). Everything below flows in normal document order so there's zero
                overlap even if the heading wraps to more lines on narrow viewports. */}
            <div className="relative z-20 flex flex-col items-center pt-[85%] pb-6 px-4">
              <h2 className="text-[clamp(20px,6.5vw,32px)] font-heading font-semibold text-white text-center tracking-[-0.96px] leading-[1.1] px-2 mb-5 max-w-[286px]">
                Your private network starts here...
              </h2>
              {/* Badges — App Store + Google Play on row 1, Seeker on row 2. */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a href="#" onClick={(e) => e.preventDefault()} className="transition-transform active:scale-95 cursor-pointer" aria-label="Download on the App Store">
                  <img src="/assets/App Links/badge-appstore.png" alt="Download on the App Store" className="h-[42px] w-auto object-contain" />
                </a>
                <a href="#" onClick={(e) => e.preventDefault()} className="transition-transform active:scale-95 cursor-pointer" aria-label="Get it on Google Play">
                  <img src="/assets/App Links/badge-playstore.png" alt="Get it on Google Play" className="h-[42px] w-auto object-contain" />
                </a>
                <a href="#" onClick={(e) => e.preventDefault()} className="basis-full flex justify-center transition-transform active:scale-95 cursor-pointer" aria-label="Download Seeker Solana Mobile App">
                  <img src="/assets/App Links/badge-seeker.png" alt="Seeker Solana Mobile" className="h-[42px] w-auto object-contain" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Fixed Height Rounded Panel */}
        <div className="hidden lg:flex relative w-full h-[490px] rounded-[36px] overflow-hidden items-center shadow-lg">

          {/* Background Blue Gradient Image */}
          <img
            src="/assets/App Links/AppLinksBG.webp"
            alt=""
            className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
          />

          {/* Left Half: Whole Phone Mockup Visible Vertically inside Panel (margin top & bottom) */}
          <div className="w-[42%] hidden md:flex items-start justify-start h-full pl-4 lg:pl-8 pointer-events-none z-10">
            <motion.img
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              src="/assets/App Links/AppLinksMobileImg.webp"
              alt="GeSIM Mobile Interface"
              className="h-[370px] sm:h-[400px] lg:h-[420px] w-auto max-w-none object-contain -translate-x-6 lg:-translate-x-8 pointer-events-none"
              style={{ filter: 'drop-shadow(0 20px 24px rgba(15, 23, 42, 0.28))' }}
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
                onClick={(e) => e.preventDefault()}
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
                onClick={(e) => e.preventDefault()}
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
                onClick={(e) => e.preventDefault()}
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
