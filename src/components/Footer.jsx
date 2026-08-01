import React from 'react';
import { SiTelegram, SiX } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';

export default function Footer({ openDownloadModal }) {
  return (
    <footer className="w-full bg-white pt-12 pb-16 select-none">
      <div className="max-width-container space-y-8">

        {/* Main Blue Panel Card matching Figma Node 764:179487 3 ki jagah E karna h bs*/}
        <div className="relative w-full min-h-[420px] sm:min-h-[480px] lg:min-h-[560px] bg-[#00AEFF] rounded-[28px] lg:rounded-[36px] overflow-hidden p-8 sm:p-12 lg:p-16 text-white shadow-lg">

          {/* Background bar pattern */}
          <img
            src="/assets/footer/FooterBg.svg"
            alt=""
            className="absolute inset-0 w-full h-full opacity-20 pointer-events-none z-0 object-cover"
          />
          {/* "GeSIM" wordmark bars, layered above the background pattern */}
          <img
            src="/assets/footer/GeSIM.svg"
            alt=""
            className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[103%] h-auto max-w-none pointer-events-none z-[1]"
          />

          <div className="relative z-10 grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">

            {/* Left Column: Tagline + Store Badges + Social Icons */}
            <div className="lg:col-span-8 space-y-8">

              {/* Tagline */}
              <h2 className="text-[38px] sm:text-[50px] lg:text-[60px] font-heading font-extrabold text-white tracking-[-1.8px] leading-[1.05] max-w-[520px]">
                Freedom, in every connection
              </h2>

              {/* 3 Store Badges Row */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); openDownloadModal?.(); }}
                  className="transition-transform hover:scale-105 active:scale-95 flex-shrink-0 cursor-pointer"
                  aria-label="Download Seeker Solana Mobile App"
                >
                  <img
                    src="/assets/App Links/badge-seeker.png"
                    alt="Seeker Solana Mobile"
                    className="h-[44px] sm:h-[50px] w-auto object-contain"
                  />
                </a>

                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); openDownloadModal?.(); }}
                  className="transition-transform hover:scale-105 active:scale-95 flex-shrink-0 cursor-pointer"
                  aria-label="Download on the App Store"
                >
                  <img
                    src="/assets/App Links/badge-appstore.png"
                    alt="Download on the App Store"
                    className="h-[44px] sm:h-[50px] w-auto object-contain"
                  />
                </a>

                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); openDownloadModal?.(); }}
                  className="transition-transform hover:scale-105 active:scale-95 flex-shrink-0 cursor-pointer"
                  aria-label="Get it on Google Play"
                >
                  <img
                    src="/assets/App Links/badge-playstore.png"
                    alt="Get it on Google Play"
                    className="h-[44px] sm:h-[50px] w-auto object-contain"
                  />
                </a>
              </div>

              {/* Social Icons Row */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Telegram"
                >
                  <SiTelegram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="X / Twitter"
                >
                  <SiX className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
              </div>

            </div>

            {/* Right Column: Navigation Links (QUICK LINKS & SOCIALS) */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-8 pt-2">

              {/* QUICK LINKS */}
              <div className="space-y-4">
                <h3 className="text-[12px] font-semibold text-white/70 tracking-[1.5px] uppercase font-mono">
                  QUICK LINKS
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" onClick={(e) => e.preventDefault()} className="text-[15px] sm:text-[16px] font-medium text-white/90 hover:text-white transition-colors cursor-pointer">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={(e) => e.preventDefault()} className="text-[15px] sm:text-[16px] font-medium text-white/90 hover:text-white transition-colors cursor-pointer">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={(e) => e.preventDefault()} className="text-[15px] sm:text-[16px] font-medium text-white/90 hover:text-white transition-colors cursor-pointer">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              {/* SOCIALS */}
              <div className="space-y-4">
                <h3 className="text-[12px] font-semibold text-white/70 tracking-[1.5px] uppercase font-mono">
                  SOCIALS
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" onClick={(e) => e.preventDefault()} className="text-[15px] sm:text-[16px] font-medium text-white/90 hover:text-white transition-colors cursor-pointer">
                      Telegram
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={(e) => e.preventDefault()} className="text-[15px] sm:text-[16px] font-medium text-white/90 hover:text-white transition-colors cursor-pointer">
                      X / Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={(e) => e.preventDefault()} className="text-[15px] sm:text-[16px] font-medium text-white/90 hover:text-white transition-colors cursor-pointer">
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom Legal & Copyright Row (Outside Blue Panel) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] sm:text-[14px] text-slate-500 font-body px-2">

          {/* Copyright & Disclaimer */}
          <div className="flex items-center gap-2">
            <span className="font-medium text-slate-700">©2026 GeSIM</span>
            <span>•</span>
            <span>Not available where restricted by law</span>
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-6">
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-slate-800 transition-colors cursor-pointer">
              License
            </a>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-slate-800 transition-colors cursor-pointer">
              Terms & Conditions
            </a>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-slate-800 transition-colors cursor-pointer">
              Privacy Policy
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}
