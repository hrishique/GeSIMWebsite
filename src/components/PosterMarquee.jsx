import React from 'react';

export default function PosterMarquee() {
  return (
    <>
      {/* Mobile view: single clean image asset matching Figma */}
      <section className="lg:hidden w-full py-10 px-2 bg-white flex justify-center items-center">
        <img
          src="/assets/mobile/benefits/BenefitsMarquee.png"
          alt="GeSIM Features"
          loading="lazy" className="w-full max-w-[370px] h-auto object-contain"
        />
      </section>

      {/* Desktop view: single Figma-exported poster image (screen 6). */}
      <section className="hidden lg:flex w-screen h-screen flex-shrink-0 justify-center items-center bg-white overflow-hidden select-none">
        <img
          src="/assets/ScreenCIP.png"
          alt="GeSIM — Connect, Invest, Spend"
          className="w-full h-full object-contain"
        />
      </section>
    </>
  );
}
