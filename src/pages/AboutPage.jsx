import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TELEGRAM_URL = 'https://t.me/gesimxyz';

const principles = [
  "Privacy is the default, not a premium. We don't charge extra for respecting you.",
  'Plain terms, not buried ones. Our policies say what they mean.',
  'We publish what breaks. Honest field reporting is part of the product.',
  "Coverage gaps are bugs. We close them — we don't hide them.",
];

export default function AboutPage() {
  return (
    <div className="bg-white font-sans text-left">
      <div className="max-width-container pt-6 pb-16 md:pt-8 md:pb-24">

        {/* Back button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors mb-8 md:mb-10"
        >
          <ArrowLeft className="w-4 h-4" strokeWidth={2.2} />
          BACK
        </Link>

        {/* Top block — Hero + What we're building + Why it matters.
            All share the same centered 760px column so the text spine
            aligns with the 6-card grid and the $GSIM block below. */}
        <div className="mx-auto max-w-[760px]">

          {/* Hero */}
          <section className="space-y-4 md:space-y-6">
            <h1 className="text-[32px] sm:text-[40px] md:text-[52px] font-semibold text-[#282F34] tracking-[-1px] sm:tracking-[-1.2px] md:tracking-[-1.56px] leading-[1.23] font-heading">
              Mobile data that doesn't know your name.
            </h1>
            <p className="text-[16px] md:text-[18px] text-slate-500 leading-[1.55]">
              Your carrier knows your name, your address, your location, and every number you've ever called.
              That's not a side effect — it's the business model. We think it's worth ending, at the infrastructure level.
            </p>
          </section>

          {/* What we're building */}
          <section className="mt-16 md:mt-24 space-y-3 md:space-y-4">
            <h2 className="text-[28px] md:text-[36px] font-semibold text-[#282F34] tracking-[-0.8px] md:tracking-[-1.08px] leading-[1.78] font-heading">
              What we're building
            </h2>
            <p className="text-[15px] md:text-[17px] text-slate-500 leading-[1.6]">
              GeSIM is a digital eSIM that gives you mobile data in 180+ countries — without handing identity
              documents to a local carrier, linking a bank account, or signing a contract. Connectivity in 60
              seconds. A built-in VPN that encrypts your traffic at the network layer. A US virtual number for
              SMS verification. No carrier account. No contract. No paperwork.
            </p>

            {/* 6-fact grid — each image IS the card (label/value/icon baked in).
                2 cols mobile, 3 cols desktop. */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 pt-4">
              <img src="/assets/About/AboutSKR.png" alt="Status: Live on Solana dApp Store" className="w-full h-auto rounded-2xl" />
              <img src="/assets/About/AboutSTInd.png" alt="Grantee: Superteam India" className="w-full h-auto rounded-2xl" />
              <img src="/assets/About/AboutNetwork.png" alt="Network: 180+ countries via global telecom partners" className="w-full h-auto rounded-2xl" />
              <img src="/assets/About/AboutUmbra.png" alt="Payment: Private payments via Umbra" className="w-full h-auto rounded-2xl" />
              <img src="/assets/About/AboutVerification.png" alt="Identity verification: Lightweight — wallet address is sufficient" className="w-full h-auto rounded-2xl" />
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-transform hover:-translate-y-[2px]"
                aria-label="Contact: Join the community on Telegram"
              >
                <img src="/assets/About/AboutContact.png" alt="Contact: Join the community" className="w-full h-auto rounded-2xl" />
              </a>
            </div>
          </section>

          {/* Why it matters */}
          <section className="mt-16 md:mt-24 space-y-3 md:space-y-4">
            <h2 className="text-[28px] md:text-[36px] font-semibold text-[#282F34] tracking-[-0.8px] md:tracking-[-1.08px] leading-[1.78] font-heading">
              Why it matters
            </h2>
            <p className="text-[15px] md:text-[17px] text-slate-500 leading-[1.6]">
              In most places, your carrier's records are one legal request away from anyone who asks for them.
              Carry a phone, and you generate a permanent log tied to your real identity — where you went, who
              you talked to, when. You never agreed to that. You just bought a SIM. GeSIM is for the people who
              refuse that trade: travelers, journalists, remote workers, privacy advocates, and digital nomads
              who want connectivity that doesn't surveil them by default.
            </p>
          </section>

        </div>

        {/* Where we are — blue banner card */}
        <section className="mt-16 md:mt-24">
          <div className="relative w-full overflow-hidden rounded-[28px] md:rounded-[36px] shadow-lg min-h-[420px] lg:min-h-[480px]">
            <img
              src="/assets/App Links/AppLinksBG.webp"
              alt=""
              className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
            />
            {/* Phone visual — top edge flush with the card's top edge, bleeding slightly past the left (desktop only) */}
            <img
              src="/assets/App Links/AppLinksMobileImg.webp"
              alt="GeSIM mobile app"
              className="hidden lg:block absolute top-0 -left-6 h-[440px] lg:h-[480px] w-auto object-contain object-top pointer-events-none z-[1]"
              style={{ filter: 'drop-shadow(0 20px 24px rgba(15, 23, 42, 0.28))' }}
            />
            <div className="relative z-10 grid lg:grid-cols-2 items-center gap-8 p-6 sm:p-10 lg:p-14">
              {/* Spacer column reserving the phone visual's width (desktop only) */}
              <div className="hidden lg:block" aria-hidden="true" />
              {/* Text + CTAs */}
              <div className="space-y-2 md:space-y-3">
                <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-heading font-semibold text-white tracking-[-1px] leading-[1.1] max-w-[500px]">
                  Where we are
                </h2>
                <p className="text-[15px] md:text-[16px] text-white/90 leading-[1.55] max-w-[520px]">
                  GeSIM is live on the Solana dApp Store and is a Superteam India grantee. We've provisioned
                  658+ users across 180+ countries — 240+ of them paying — with zero paid acquisition. We've
                  been building since 2025.
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-4 md:pt-6">
                  <a href="#" onClick={(e) => e.preventDefault()} className="transition-transform active:scale-95 cursor-pointer">
                    <img src="/assets/App Links/badge-seeker.png" alt="Seeker Solana Mobile" className="h-[42px] sm:h-[48px] w-auto object-contain" />
                  </a>
                  <a href="#" onClick={(e) => e.preventDefault()} className="transition-transform active:scale-95 cursor-pointer">
                    <img src="/assets/App Links/badge-appstore.png" alt="Download on the App Store" className="h-[42px] sm:h-[48px] w-auto object-contain" />
                  </a>
                  <a href="#" onClick={(e) => e.preventDefault()} className="transition-transform active:scale-95 cursor-pointer">
                    <img src="/assets/App Links/badge-playstore.png" alt="Get it on Google Play" className="h-[42px] sm:h-[48px] w-auto object-contain" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* $GSIM */}
        {/* $GSIM + Principles — block is horizontally centered on the page,
            text inside remains left-aligned (matches Figma). */}
        <div className="mt-16 md:mt-24 mx-auto max-w-[760px]">
          <section className="space-y-3 md:space-y-4">
            <h2 className="text-[26px] md:text-[34px] font-extrabold text-[#282F34] tracking-[-0.8px] font-heading">
              $GSIM
            </h2>
            <p className="text-[15px] md:text-[17px] text-slate-500 leading-[1.55]">
              $GSIM is the network's ownership coin. Hold it, alongside an active data plan, to unlock the VPN
              and a US virtual number — no subscription, yours for as long as you hold. Owned and controlled
              on-chain by holders, so the network answers to its owners, not a company.
            </p>
          </section>

          <section className="mt-8 md:mt-10">
            <ul className="divide-y divide-[#F1F1F1] border-y border-[#F1F1F1]">
              {principles.map((line) => (
                <li key={line} className="py-5 md:py-6 text-[15px] md:text-[17px] font-bold text-[#282F34] leading-[1.55]">
                  {line}
                </li>
              ))}
            </ul>
          </section>
        </div>

      </div>
    </div>
  );
}
