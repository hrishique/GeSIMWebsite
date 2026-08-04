import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

export default function FAQ() {
  // First item open by default per Figma design
  const [openIndex, setOpenIndex] = useState(0);

  const faqItems = [
    {
      question: 'Why do I need to install an app?',
      answer: 'eSIMs need a mobile OS to provision. The app handles everything — plans, VPN, your virtual number — all in one place. No browser version can do that.'
    },
    {
      question: 'Do you need my ID or passport?',
      answer: "No. No KYC, no passport scans, no ID for eSIM, VPN, or virtual numbers. If you use investing or the spend card, we'll ask for minimal verification — just what regulations require, nothing more."
    },
    {
      question: "Can my regular carrier see I'm using GeSIM?",
      answer: "They can see a second eSIM profile is installed. That's it. Your traffic, browsing, and usage on the GeSIM line are invisible to them. Turn on VPN and your ISP can't see anything either."
    },
    {
      question: 'Where is GeSIM available?',
      answer: 'eSIM data in 190+ countries. Virtual numbers in 15+ countries. The spend card and investing work globally, with a few local exceptions. Check the app for the live list.'
    },
    {
      question: 'How do I pay?',
      answer: 'USDC, Apple Pay is coming. No hidden fees — what you see is what you pay.'
    },
    {
      question: 'Is my data safe?',
      answer: "AES-256 encryption, built-in VPN, no logs — we don't store, sell, or share your browsing history or connection data. We built GeSIM so we can't see what you're doing even if we wanted to."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq-section" className="w-full bg-white py-16 lg:py-24 select-none">
      <div className="max-width-container">

        {/* 2-Column Grid Layout (items-stretch so left and right columns have the same height on desktop) */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 lg:items-stretch items-start">

          {/* Left Column: Heading + "Still have questions?" Card */}
          <div className="lg:col-span-4 w-full flex flex-col justify-between lg:h-full gap-8 lg:gap-12">

            {/* Section Heading */}
            <h2 className="text-[38px] sm:text-[48px] lg:text-[56px] font-extrabold text-[#282F34] tracking-[-1.8px] leading-[1.05] font-heading">
              <span className="sm:whitespace-nowrap">Frequently asked</span><br />questions
            </h2>

            {/* "Still have questions?" Card (Desktop Only) */}
            <div
              className="hidden lg:flex w-full bg-white border border-[#F1F1F1] rounded-[18px] p-6 lg:p-7 flex-col justify-between relative overflow-hidden shadow-sm"
              style={{
                backgroundImage: "linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url('/assets/FAQ/FAQBG.webp')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <div className="relative z-10 space-y-2 mb-6">
                <h3 className="text-[22px] font-heading font-medium text-[#282F34] tracking-[0.44px]">
                  Still have questions?
                </h3>
                <p className="text-[15px] font-body text-[#282F34]/60 leading-[1.4] tracking-[0.32px]">
                  Couldn't find what you're looking for? Our team is here to help with anything about GeSIM.
                </p>
              </div>

              <div className="relative z-10">
                <button
                  onClick={() => window.open('https://t.me/gesimxyz', '_blank', 'noopener,noreferrer')}
                  className="bg-[#282F34] text-white px-6 py-3 rounded-full text-[14px] font-medium tracking-[0.14px] hover:bg-black transition-colors shadow-sm cursor-pointer"
                >
                  Connect with us
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Accordion Questions List (starts at TOP) */}
          <div className="lg:col-span-8 w-full">
            <div className="border-b border-[#F1F1F1] w-full">
              {faqItems.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={index} className="border-t border-[#F1F1F1] py-4 lg:py-5">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full flex items-center justify-between gap-4 text-left group cursor-pointer py-1"
                      aria-expanded={isOpen}
                    >
                      <span className="text-[19px] sm:text-[22px] font-heading font-medium text-[#282F34] tracking-[0.44px] leading-[1.36]">
                        {item.question}
                      </span>
                      <motion.div
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="text-slate-400 flex-shrink-0"
                      >
                        <Plus className="w-5 h-5 stroke-[2.2]" />
                      </motion.div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="pt-1.5 pb-1 text-[15px] sm:text-[17px] font-body text-[#282F34]/50 leading-[1.45] tracking-[-0.18px] max-w-[640px]">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Mobile-Only "Still have questions?" Card (placed after FAQs on mobile) */}
            <div
              className="block lg:hidden w-full bg-white border border-[#F1F1F1] rounded-[18px] p-6 mt-8 flex flex-col justify-between relative overflow-hidden shadow-sm"
              style={{
                backgroundImage: "linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url('/assets/FAQ/FAQBG.webp')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <div className="relative z-10 space-y-2 mb-6">
                <h3 className="text-[22px] font-heading font-medium text-[#282F34] tracking-[0.44px]">
                  Still have questions?
                </h3>
                <p className="text-[15px] font-body text-[#282F34]/60 leading-[1.4] tracking-[0.32px]">
                  Couldn't find what you're looking for? Our team is here to help with anything about GeSIM.
                </p>
              </div>

              <div className="relative z-10">
                <button
                  onClick={() => window.open('https://t.me/gesimxyz', '_blank', 'noopener,noreferrer')}
                  className="bg-[#282F34] text-white px-6 py-3 rounded-full text-[14px] font-medium tracking-[0.14px] hover:bg-black transition-colors shadow-sm cursor-pointer"
                >
                  Connect with us
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
