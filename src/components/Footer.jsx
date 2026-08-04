import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer({ openDownloadModal }) {
  return (
    <footer id="footer-section" className="w-full bg-white pt-12 pb-16 select-none">
      <div className="max-width-container space-y-8">

        {/* Main Blue Panel Card matching Figma Node 764:179487 3 ki jagah E karna h bs*/}
        <div className="relative w-full min-h-[520px] sm:min-h-[600px] lg:min-h-[720px] bg-[#00AEFF] rounded-[28px] lg:rounded-[36px] overflow-hidden p-6 pt-8 pb-16 sm:p-12 sm:pb-24 lg:p-16 text-white shadow-lg">

          {/* Background bar pattern (Desktop vs Mobile) */}
          <img
            src="/assets/mobile/footer/FooterBg.svg"
            alt=""
            className="lg:hidden absolute bottom-0 left-0 w-full h-[35%] object-cover object-bottom opacity-40 pointer-events-none z-0"
          />
          <img
            src="/assets/footer/FooterBg.svg"
            alt=""
            className="hidden lg:block absolute bottom-0 left-0 w-full h-[70%] opacity-30 pointer-events-none z-0 object-cover"
          />
          {/* "GeSIM" wordmark bars, layered above the background pattern */}
          <img
            src="/assets/footer/GeSIM.svg"
            alt=""
            className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[103%] h-auto max-w-none pointer-events-none z-[1]"
          />

          <div className="relative z-10 grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">

            {/* Left Column: Tagline + Store Badges + Social Icons */}
            <div className="lg:col-span-8 space-y-6 sm:space-y-8">

              {/* Tagline */}
              <h2 className="text-[36px] sm:text-[50px] lg:text-[60px] font-heading font-extrabold text-white tracking-[-1px] sm:tracking-[-1.5px] lg:tracking-[-1.8px] leading-[1.05] max-w-[520px]">
                Freedom, in every connection
              </h2>

              {/* 3 Store Badges Row — Single Row on Mobile */}
              <div className="flex flex-row flex-nowrap items-center gap-2 sm:gap-4 pt-1 sm:pt-2">
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); openDownloadModal?.(); }}
                  className="transition-transform hover:scale-105 active:scale-95 flex-shrink-0 cursor-pointer"
                  aria-label="Download Seeker Solana Mobile App"
                >
                  <img
                    src="/assets/App Links/badge-seeker.png"
                    alt="Seeker Solana Mobile"
                    className="h-[34px] xs:h-[38px] sm:h-[50px] w-auto object-contain"
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
                    className="h-[34px] xs:h-[38px] sm:h-[50px] w-auto object-contain"
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
                    className="h-[34px] xs:h-[38px] sm:h-[50px] w-auto object-contain"
                  />
                </a>
              </div>

            </div>

            {/* Right Column: Navigation Links (QUICK LINKS & SOCIALS) */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-8 pt-2 font-body">

              {/* QUICK LINKS */}
              <div className="space-y-4">
                <h3 className="text-[12px] font-bold text-[#66E1FF] tracking-[1.5px] uppercase font-sans">
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
                <h3 className="text-[12px] font-bold text-[#66E1FF] tracking-[1.5px] uppercase font-sans">
                  SOCIALS
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a href="https://t.me/gesimxyz" target="_blank" rel="noopener noreferrer" className="text-[15px] sm:text-[16px] font-medium text-white/90 hover:text-white transition-colors cursor-pointer">
                      Telegram
                    </a>
                  </li>
                  <li>
                    <a href="https://x.com/gesimxyz" target="_blank" rel="noopener noreferrer" className="text-[15px] sm:text-[16px] font-medium text-white/90 hover:text-white transition-colors cursor-pointer">
                      X / Twitter
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/gesim/" target="_blank" rel="noopener noreferrer" className="text-[15px] sm:text-[16px] font-medium text-white/90 hover:text-white transition-colors cursor-pointer">
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom Legal & Copyright Row (Outside Blue Panel - Legal Links First on Mobile) */}
        <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 text-[13px] sm:text-[14px] text-slate-500 font-body px-2">

          {/* Copyright & Disclaimer */}
          <div className="flex items-center gap-2 font-body">
            <span>©2026 GeSIM</span>
            <span>•</span>
            <span>Not available where restricted by law</span>
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-6">
            <Link to="/license" className="hover:text-slate-800 transition-colors cursor-pointer">
              License
            </Link>
            <Link to="/terms" className="hover:text-slate-800 transition-colors cursor-pointer">
              Terms & Conditions
            </Link>
            <Link to="/trust" className="hover:text-slate-800 transition-colors cursor-pointer">
              Privacy Policy
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}
