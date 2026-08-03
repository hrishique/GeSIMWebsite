import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Tag } from 'lucide-react';

export default function ScrollShowcaseSection({ openDownloadModal }) {
  return (
    <>

      {/* ========================================================================= */}
      {/* SCREEN 3: CONNECT Showcase Section (Figma Node 764:175237) */}
      {/* Full-Viewport Height & Fully Percentage-Based Responsive Layout */}
      {/* ========================================================================= */}
      <section className="w-full lg:w-screen lg:h-screen flex-shrink-0 flex items-center justify-center py-10 lg:py-16 border-t border-slate-100 bg-white overflow-y-auto">
        <div className="max-width-container grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column: Sky-Blue Card (#00A3FF) with 2-Beat Animated Device Mockup (Node 764:175237 / 764:178706) */}
          <div className="lg:col-span-6 flex justify-center w-full">
            <img
              src="/assets/mobile/showcase/ConnectCard.webp"
              alt="Connect without borders"
              className="lg:hidden w-full max-w-[354px] aspect-[354/468] object-contain"
            />
            {/* Beat 1: Sky-Blue Card settles in first */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="hidden lg:flex w-full h-[68vh] max-h-[640px] min-h-[460px] rounded-[36px] bg-[#00A3FF] p-0 justify-center items-end shadow-lg relative overflow-hidden"
            >
              {/* Background Halftone Pattern (Figma node 764:175239) */}
              <div
                className="absolute inset-0 w-full h-full bg-cover bg-center pointer-events-none"
                style={{ backgroundImage: "url('/assets/BgConnectMobile.svg')" }}
              />

              {/* Beat 2: Portrait Phone device mockup drops from TOP EDGE downward into resting position */}
              <motion.img
                initial={{ opacity: 0, y: -70 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
                src="/assets/connect_phone_only.webp"
                alt="Connect Without Borders Mobile App Display"
                className="h-[113%] max-w-none object-contain relative z-10 mb-[6vh]"
              />
            </motion.div>
          </div>

          {/* Right Column: Vertical Stack (Icon Tile -> Heading -> Subtext) matching Node 764:175237 */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6 p-[2%]">

            {/* Row / Stack: Dark Icon Tile + Heading (stacked on mobile, inline on desktop) */}
            <div className="flex flex-col items-start gap-3 lg:flex-row lg:items-center lg:gap-5">
              <motion.img
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                src="/assets/ConnectIcon.svg"
                alt="Connect Icon"
                className="w-10 h-10 shrink-0 object-contain"
              />

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="text-[28px] sm:text-[36px] lg:text-[34px] xl:text-[40px] lg:whitespace-nowrap font-extrabold text-[#09090B] tracking-[-1.5px] leading-[1.08] font-heading"
              >
                Connect without borders
              </motion.h2>
            </div>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="text-[18px] sm:text-[20px] text-[#71717A] font-normal leading-[1.45] max-w-[520px] lg:max-w-[620px] font-body"
            >
              Everything you need to stay connected globally, from instant everyday eSIM to private VPN and virtual numbers.
            </motion.p>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SCREEN 4: INVEST Showcase Section (Figma Node 764:178717) */}
      {/* ========================================================================= */}
      <section className="w-full lg:w-screen lg:h-screen flex-shrink-0 flex items-center justify-center py-10 lg:py-16 border-t border-slate-100 bg-white overflow-y-auto">
        <div className="max-width-container grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column: Invest layered card (Figma node 764:178718) */}
          <div className="lg:col-span-6 flex justify-center w-full">
            <img
              src="/assets/mobile/showcase/InvestCard.webp"
              alt="Grow wealth, keep privacy"
              className="lg:hidden w-full max-w-[354px] aspect-[354/468] object-contain"
            />
            <div className="hidden lg:block w-full max-w-[540px] aspect-[580/656] rounded-[36px] p-0 relative overflow-hidden shadow-lg border border-emerald-100/60 bg-gradient-to-b from-white to-slate-100">

              {/* Layer 1: vertical grid lines (fades in last, with chart) */}
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 0.55, ease: "easeOut" }}
                src="/assets/invest/InvestGrid.svg"
                alt=""
                className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
              />

              {/* Layer 2: green area chart (fades in last, with grid) */}
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 0.55, ease: "easeOut" }}
                src="/assets/invest/InvestChart.svg"
                alt=""
                className="absolute left-[0%] bottom-0 w-[155%] h-auto object-contain object-bottom pointer-events-none z-10"
              />

              {/* Layer 3: phone — rises bottom->top, FIRST. Bleeds off bottom, top contained */}
              <motion.img
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                src="/assets/invest/InvestPhone.webp"
                alt="GeSIM Money app invest screen"
                className="absolute left-1/2 -translate-x-1/2 top-[8.8%] w-[62%] h-auto max-w-none object-contain z-20 drop-shadow-xl"
              />

              {/* Layer 4: green up-arrow — rises bottom->top, slight delay after phone */}
              <motion.img
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 1.0, delay: 0.3, ease: "easeOut" }}
                src="/assets/invest/InvestArrowUp.svg"
                alt=""
                className="absolute left-[14.5%] top-[42.7%] w-[11.4%] z-30 pointer-events-none"
              />

              {/* Layer 5: red down-arrow — drops top->down, after up-arrow */}
              <motion.img
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 1.0, delay: 0.6, ease: "easeOut" }}
                src="/assets/invest/InvestArrowDown.svg"
                alt=""
                className="absolute left-[74%] top-[72%] w-[11.4%] z-30 pointer-events-none"
              />

            </div>
          </div>

          {/* Right Column: Title & Subheadline */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6 p-[2%]">

            {/* Row / Stack: Dark Icon Tile + Heading (stacked on mobile, inline on desktop) */}
            <div className="flex flex-col items-start gap-3 lg:flex-row lg:items-center lg:gap-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="w-10 h-10 shrink-0 rounded-xl bg-[#18181B] text-white shadow-sm flex items-center justify-center"
              >
                <TrendingUp className="w-5 h-5 stroke-[2.5]" />
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="text-[28px] sm:text-[36px] lg:text-[34px] xl:text-[40px] lg:whitespace-nowrap font-extrabold text-[#09090B] tracking-[-1.5px] leading-[1.08] font-heading"
              >
                Grow wealth, Keep privacy
              </motion.h2>
            </div>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="text-[18px] sm:text-[20px] text-[#71717A] font-normal leading-[1.45] max-w-[520px] lg:max-w-[620px] font-body"
            >
              Invest in stocks, cryptocurrencies, commodities, and stable assets through a privacy-first experience designed for modern finance.
            </motion.p>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SCREEN 5: SPEND Showcase Section (Figma Node 764:178780) */}
      {/* ========================================================================= */}
      <section className="w-full lg:w-screen lg:h-screen flex-shrink-0 flex items-center justify-center py-10 lg:py-16 border-t border-slate-100 bg-white overflow-y-auto">
        <div className="max-width-container grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column: Spend layered card (Figma node 764:178780) */}
          <div className="lg:col-span-6 flex justify-center w-full">
            <img
              src="/assets/mobile/showcase/SpendCard.webp"
              alt="Spend like a local, anywhere"
              className="lg:hidden w-full max-w-[354px] aspect-[354/468] object-contain"
            />
            <div className="hidden lg:block w-full max-w-[540px] aspect-[580/656] rounded-[36px] bg-[#111111] border border-white/10 p-0 relative overflow-hidden shadow-lg">

              {/* Gradient glow near top */}
              <div
                className="absolute left-1/2 -translate-x-1/2 top-[-21%] w-[170%] h-[48%] blur-[48px] opacity-50 pointer-events-none z-0"
                style={{ background: 'linear-gradient(86deg, rgb(189,118,250) 10%, rgb(8,249,226) 130%)' }}
              />

              {/* Layer 1: phone — drops top->bottom, FIRST. Bleeds off top, dimmed per Figma */}
              <motion.img
                initial={{ opacity: 0, y: -60 }}
                whileInView={{ opacity: 0.56, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                src="/assets/spend/SpendScreenPhone.webp"
                alt="GeSIM Money app spend screen"
                className="absolute left-[15.9%] top-[-26.2%] w-[60.9%] h-[110.7%] object-contain z-[1] pointer-events-none"
              />

              {/* Layer 2: VISA card — drops top->bottom, slight delay after phone. Sits within bounds */}
              <motion.img
                initial={{ opacity: 0, y: -60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8, delay: 0.28, ease: "easeOut" }}
                src="/assets/spend/SpendScreenCard.webp"
                alt="GeSIM Visa Card"
                className="absolute left-[28%] top-[11.6%] w-[61%] h-[89%] object-contain z-[2] drop-shadow-2xl pointer-events-none"
              />

            </div>
          </div>

          {/* Right Column: Title & Subheadline */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6 p-[2%]">

            {/* Row / Stack: Dark Icon Tile + Heading (stacked on mobile, inline on desktop) */}
            <div className="flex flex-col items-start gap-3 lg:flex-row lg:items-center lg:gap-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="w-10 h-10 shrink-0 rounded-xl bg-[#18181B] text-white shadow-sm flex items-center justify-center"
              >
                <Tag className="w-5 h-5 stroke-[2.5]" />
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="text-[28px] sm:text-[36px] lg:text-[34px] xl:text-[40px] lg:whitespace-nowrap font-extrabold text-[#09090B] tracking-[-1.5px] leading-[1.08] font-heading"
              >
                Spend like a local. Anywhere.
              </motion.h2>
            </div>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="text-[18px] sm:text-[20px] text-[#71717A] font-normal leading-[1.45] max-w-[520px] lg:max-w-[620px] font-body"
            >
              Pay globally with your GeSIM Card, whether you're buying coffee around the corner or booking flights across continents.
            </motion.p>

          </div>

        </div>
      </section>

    </>
  );
}
