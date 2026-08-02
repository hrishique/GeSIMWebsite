import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function HeroSection({ openDownloadModal }) {
  const targetRef = useRef(null);

  // Track scroll progress through the 220vh hero section (0 to 1)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Background 1 (Clouds): MUST fade to 0 completely by 15% scroll and unrender (ZERO clouds on Page 2)
  const bgLandscapeOpacity = useTransform(scrollYProgress, [0, 0.15], [0.9, 0]);
  const bgLandscapeDisplay = useTransform(scrollYProgress, (v) => v > 0.18 ? 'none' : 'block');

  // Background 2 (Dotted World Map): Fades in on Page 2 over 100% PURE WHITE background (Screenshot 1)
  const bgMapOpacity = useTransform(scrollYProgress, [0.15, 0.35, 1], [0, 1, 1]);

  // Page 1 Headline & Subheadline: Fade out quickly AND completely remove via display:none
  const text1Opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const text1Display = useTransform(scrollYProgress, (v) => v > 0.18 ? 'none' : 'block');

  // Page 2 Headline & Badges: Fades in cleanly on Page 2
  const text2Opacity = useTransform(scrollYProgress, [0.35, 0.55, 1], [0, 1, 1]);
  const text2Y = useTransform(scrollYProgress, [0.35, 0.55], [30, 0]);
  const text2Display = useTransform(scrollYProgress, (v) => v < 0.2 ? 'none' : 'block');

  // Hero Phone Scroll Animation Tuning:
  // - "26%": Original committed Page 1 resting position (anchored at bottom-0, 0% text overlap)
  // - "-58%": Page 2 top position (slides UPWARDS right under the navbar, closing the top gap on Page 2)
  const phoneContainerY = useTransform(scrollYProgress, [0, 0.45, 1], ["26%", "-58%", "-58%"]);

  // Phone stays 100% visible throughout the scroll sequence (does NOT disappear)
  const phoneOpacity = 1;

  // Mobile inner screen scroll translation (Your Investments content translation: -14%)
  const phoneInnerY = useTransform(scrollYProgress, [0, 0.45, 0.85], ["0%", "0%", "-14%"]);

  return (
    <section ref={targetRef} className="relative h-[220vh] bg-white text-center font-sans">

      {/* Sticky Full-Viewport Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between items-center relative bg-white">

        {/* Background 1: Painterly Cloud Landscape (Hero 1 ONLY - 0% on Page 2) */}
        <motion.div
          className="absolute inset-0 w-full h-full bg-cover bg-bottom bg-no-repeat pointer-events-none z-0"
          style={{ backgroundImage: "url('/assets/hero_bg_landscape.png')", opacity: bgLandscapeOpacity, display: bgLandscapeDisplay }}
        />

        {/* Responsive Top Linear Gradient matching Figma */}
        <motion.div
          style={{
            opacity: bgLandscapeOpacity,
            display: bgLandscapeDisplay,
            background: 'linear-gradient(180deg, #FFF 46.9%, rgba(255, 255, 255, 0.00) 100%)'
          }}
          className="absolute top-0 inset-x-0 w-full h-[300px] sm:h-[1000px] lg:h-[1080px] pointer-events-none z-[1]"
        />

        {/* Background 2: Clean Dotted World Map Vector on 100% PURE WHITE (Screenshot 1) */}
        <motion.div
          style={{ opacity: bgMapOpacity }}
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat pointer-events-none z-0 opacity-80"
          style={{ backgroundImage: "url('/assets/clean_dotted_world_map.png')", opacity: bgMapOpacity }}
        />

        {/* Top Text Region (Page 1 Title & Subheadline - Positioned Cleanly at Top) */}
        <div className="relative z-10 w-full max-w-[1380px] px-4 sm:px-6 pt-10 md:pt-14 flex items-center justify-center">
          <motion.div
            style={{ opacity: text1Opacity, display: text1Display }}
            className="space-y-4 pointer-events-none flex flex-col items-center"
          >
            <h1 className="text-[38px] sm:text-[52px] lg:text-[54px] xl:text-[60px] font-extrabold text-[#282f34] tracking-[-1.8px] leading-[1.08] font-heading lg:whitespace-nowrap max-w-full">
              Live anywhere. Explain yourself to no one.
            </h1>
            <p className="text-[18px] sm:text-[24px] lg:text-[26px] text-[#282f34]/70 max-w-[860px] mx-auto font-normal leading-[1.3] tracking-[-0.8px] font-body">
              Data in 190+ countries, numbers that don't lead back to you, and money that moves without trail. One app. No paperwork.
            </p>
          </motion.div>
        </div>

        {/* Bottom Text Region (Page 2 Title & Chips - Exact Match to Screenshot 1) */}
        <div className="absolute bottom-10 sm:bottom-14 z-10 w-full max-w-[1100px] px-6 flex items-center justify-center pointer-events-none">
          <motion.div
            style={{ opacity: text2Opacity, y: text2Y, display: text2Display }}
            className="space-y-4 pointer-events-auto"
          >
            <h2 className="text-[36px] sm:text-[48px] lg:text-[54px] font-extrabold text-[#282f34] tracking-[-1.5px] leading-[1.1] font-heading">
              Built for the way world connects today
            </h2>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3.5 sm:gap-8 pt-1">
              <span className="flex items-center gap-2.5 text-[#282f34] font-semibold text-base sm:text-lg">
                <img src="/assets/Home/HomePrivateIcon.svg" alt="Stay Private" className="w-6 h-6 object-contain" />
                <span>Stay Private</span>
              </span>
              <span className="flex items-center gap-2.5 text-[#282f34] font-semibold text-base sm:text-lg">
                <img src="/assets/Home/HomeInvestIcon.svg" alt="Invest Globally" className="w-6 h-6 object-contain" />
                <span>Invest Globally</span>
              </span>
              <span className="flex items-center gap-2.5 text-[#282f34] font-semibold text-base sm:text-lg">
                <img src="/assets/Home/HomeSpendIcon.svg" alt="Spend Anywhere" className="w-6 h-6 object-contain" />
                <span>Spend Anywhere</span>
              </span>
            </div>
          </motion.div>
        </div>

        {/* Single Live Mobile Phone Container: Reduced desktop size by ~18% (390px) so top of phone does not overlap text above */}
        <motion.div
          style={{ y: phoneContainerY, opacity: phoneOpacity }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 w-[72vw] max-w-[300px] sm:max-w-[360px] md:max-w-[390px] sm:w-[390px]"
        >
          <div className="w-full aspect-[420/840] relative overflow-hidden flex flex-col select-none rounded-[36px] sm:rounded-[50px]">
            <div className="w-full h-full relative overflow-hidden rounded-[36px] sm:rounded-[50px] bg-transparent">
              <motion.img
                style={{ y: phoneInnerY }}
                src="/assets/hero_phone_screen.png"
                alt="GeSIM iPhone App Display"
                className="w-full h-auto object-cover relative z-10 rounded-[36px] sm:rounded-[50px]"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
