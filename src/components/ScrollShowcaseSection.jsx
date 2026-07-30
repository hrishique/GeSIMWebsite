import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Tag } from 'lucide-react';

export default function ScrollShowcaseSection({ openDownloadModal }) {
  return (
    <div className="w-full bg-white font-sans text-left overflow-x-hidden">
      
      {/* ========================================================================= */}
      {/* SCREEN 3: CONNECT Showcase Section (Figma Node 764:175237) */}
      {/* Full-Viewport Height & Fully Percentage-Based Responsive Layout */}
      {/* ========================================================================= */}
      <section className="w-full min-h-screen py-12 border-t border-slate-100 bg-white">
        <div className="max-width-container grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Sky-Blue Card (#00A3FF) with 2-Beat Animated Device Mockup (Node 764:175237 / 764:178706) */}
          <div className="lg:col-span-6 flex justify-center w-full">
            {/* Beat 1: Sky-Blue Card settles in first */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-full h-[68vh] max-h-[680px] min-h-[460px] rounded-[36px] bg-[#00A3FF] p-0 flex justify-center items-end shadow-lg relative overflow-hidden"
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
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
                src="/assets/connect_phone_only.png" 
                alt="Connect Without Borders Mobile App Display" 
                className="h-[113%] max-w-none object-contain relative z-10 mb-[6vh]"
              />
            </motion.div>
          </div>

          {/* Right Column: Vertical Stack (Icon Tile -> Heading -> Subtext) matching Node 764:175237 */}
          <div className="lg:col-span-6 space-y-6 p-[2%]">
            
            {/* Icon Tile (48x48px dark container #18181B with signal bar icon) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="w-12 h-12 rounded-2xl bg-[#18181B] text-white shadow-sm flex items-center justify-center"
            >
              <BarChart3 className="w-6 h-6 stroke-[2.5]" />
            </motion.div>

            {/* Heading */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-[38px] sm:text-[48px] lg:text-[54px] font-extrabold text-[#09090B] tracking-[-1.5px] leading-[1.08] font-heading"
            >
              Connect without borders
            </motion.h2>

            {/* Subtext */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="text-[18px] sm:text-[20px] text-[#71717A] font-normal leading-[1.45] max-w-[520px] font-body"
            >
              Everything you need to stay connected globally, from instant everyday eSIM to private VPN and virtual numbers.
            </motion.p>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SCREEN 4: INVEST Showcase Section (Figma Node 764:178717) */}
      {/* ========================================================================= */}
      <section className="w-full min-h-screen py-12 border-t border-slate-100 bg-white">
        <div className="max-width-container grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Light Green Container Card */}
          <div className="lg:col-span-6 flex justify-center w-full">
            <div className="w-full h-[68vh] max-h-[680px] min-h-[460px] rounded-[2.5rem] bg-[#E6F9F0] p-0 flex justify-center items-center shadow-md relative overflow-hidden border border-emerald-100/60">
              <motion.img 
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                src="/assets/invest_graphic.png" 
                alt="Grow Wealth Keep Privacy Investments" 
                className="w-full h-full object-cover rounded-[2.5rem]"
              />
            </div>
          </div>

          {/* Right Column: Title & Subheadline */}
          <div className="lg:col-span-6 space-y-[2.5vh] p-[2%]">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-[1.2vw] flex-wrap"
            >
              <div className="p-[1rem] rounded-[1.2rem] bg-[#18181B] text-white shadow-sm flex items-center justify-center">
                <TrendingUp className="w-[1.8rem] h-[1.8rem] stroke-[2.5]" />
              </div>
              <h2 className="text-[clamp(32px,3.8vw,56px)] font-extrabold text-[#09090B] tracking-[-1.5px] leading-[1.08] font-heading">
                Grow wealth, Keep privacy
              </h2>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[clamp(16px,1.5vw,22px)] text-[#71717A] font-normal leading-[1.45] max-w-[92%] font-body"
            >
              Invest in stocks, cryptocurrencies, commodities, and stable assets through a privacy-first experience designed for modern finance.
            </motion.p>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SCREEN 5: SPEND Showcase Section (Figma Node 764:178780) */}
      {/* ========================================================================= */}
      <section className="w-full min-h-screen py-12 border-t border-slate-100 bg-white">
        <div className="max-width-container grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Deep Purple/Indigo Container Card */}
          <div className="lg:col-span-6 flex justify-center w-full">
            <div className="w-full h-[68vh] max-h-[680px] min-h-[460px] rounded-[2.5rem] bg-slate-900 p-0 flex justify-center items-center shadow-md relative overflow-hidden">
              <motion.img 
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                src="/assets/spend_graphic.png" 
                alt="Spend Like a Local Visa Card" 
                className="w-full h-full object-cover rounded-[2.5rem]"
              />
            </div>
          </div>

          {/* Right Column: Title & Subheadline */}
          <div className="lg:col-span-6 space-y-[2.5vh] p-[2%]">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-[1.2vw] flex-wrap"
            >
              <div className="p-[1rem] rounded-[1.2rem] bg-[#18181B] text-white shadow-sm flex items-center justify-center">
                <Tag className="w-[1.8rem] h-[1.8rem] stroke-[2.5]" />
              </div>
              <h2 className="text-[clamp(32px,3.8vw,56px)] font-extrabold text-[#09090B] tracking-[-1.5px] leading-[1.08] font-heading">
                Spend like a local. Anywhere.
              </h2>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[clamp(16px,1.5vw,22px)] text-[#71717A] font-normal leading-[1.45] max-w-[92%] font-body"
            >
              Pay globally with your GeSIM Card, whether you're buying coffee around the corner or booking flights across continents.
            </motion.p>
          </div>

        </div>
      </section>

    </div>
  );
}
