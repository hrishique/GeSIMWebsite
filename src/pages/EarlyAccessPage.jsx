import React from 'react';
import { BadgePercent, Sparkles, Users, LifeBuoy } from 'lucide-react';

const REQUEST_TESTFLIGHT_URL = 'https://t.me/Charchit_web3';
const TELEGRAM_URL = 'https://t.me/gesimxyz';

export default function EarlyAccessPage() {
  const perks = [
    { icon: BadgePercent, text: '50% OFF on all data plan' },
    { icon: Sparkles, text: 'Early access to new features' },
    { icon: Users, text: 'Direct access to our team' },
    { icon: LifeBuoy, text: 'Priority support' },
  ];

  return (
    <div className="py-16 md:py-20 bg-white font-sans text-left">
      <div className="max-width-container flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-14">

        {/* Left: blueprint card — exact Figma composition (node 914:248578) */}
        <div className="w-full shrink-0 lg:w-[42%] lg:max-w-[440px]">
          <div className="relative aspect-[434/454] w-full overflow-hidden rounded-[18px] border border-[#f1f1f1] bg-gradient-to-b from-[#1bb3f3] to-[#1468db]">
            {/* Cutting-mat texture (20% opacity), sized/placed exactly as in Figma */}
            <img
              src="/assets/ea-texture.jpg"
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute max-w-none object-cover opacity-20"
              style={{ left: '-65.44%', top: '-60.35%', width: '230.88%', height: '220.70%' }}
            />
            {/* Blueprint line-work (SVG), exact crop from Figma */}
            <img
              src="/assets/ea-blueprint.svg"
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute max-w-none"
              style={{ left: '-46.77%', top: '-53.30%', width: '193.55%', height: '206.61%' }}
            />
            {/* Logo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img src="/assets/GetAccess.png" alt="GeSIM" className="w-[20%] h-auto object-contain" />
            </div>
          </div>
        </div>

        {/* Right: content */}
        <div className="flex-1 space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-[42px] font-extrabold text-slate-900 tracking-tight leading-tight font-heading">
              Get early access to GeSIM
            </h1>
            <p className="text-slate-500 text-base md:text-lg">
              Experience the future before everyone else.
            </p>
          </div>

          {/* Steps */}
          <div className="grid gap-5 sm:grid-cols-2">
            {/* Step 1 */}
            <div className="flex flex-col rounded-2xl border border-[#f1f1f1] bg-white p-6">
              <h3 className="text-base font-semibold text-slate-900">
                <span className="font-bold">Step 1:</span> Request TestFlight
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
                TestFlight is Apple's official app for testing apps before they're released on the App Store. Install TestFlight first, then you'll be able to install the GeSIM beta with a private invitation.
              </p>
              <a
                href={REQUEST_TESTFLIGHT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="dark-pill-button mt-5 self-start text-xs py-2.5 px-5"
              >
                Request TestFlight
              </a>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col rounded-2xl border border-[#f1f1f1] bg-white p-6">
              <h3 className="text-base font-semibold text-slate-900">
                <span className="font-bold">Step 2:</span> Claim your invite
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
                Join GeSIM community to receive your private TestFlight invitation. We'll also share updates, new features, and support there.
              </p>
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="dark-pill-button mt-5 self-start text-xs py-2.5 px-5"
              >
                Join GeSIM telegram
              </a>
            </div>
          </div>

          {/* Beta perks */}
          <div className="space-y-4">
            <p className="leading-relaxed text-slate-600">
              Join our private beta and be among the first to use GeSIM
              <br />
              As an early tester, you'll receive:
            </p>
            <ul className="space-y-3">
              {perks.map((perk) => {
                const Icon = perk.icon;
                return (
                  <li key={perk.text} className="flex items-center gap-3 text-slate-700">
                    <Icon className="h-5 w-5 shrink-0 text-slate-400" strokeWidth={2} />
                    <span className="text-sm md:text-base">{perk.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
