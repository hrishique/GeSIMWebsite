import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

export default function FAQSection({ openContactModal }) {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Why do I need to install an app?',
      a: 'eSIM provisioning requires a mobile OS. The app is your control centre for connectivity - plans, VPN, virtual number, everything in one place'
    },
    {
      q: 'Do you need my ID or passport?',
      a: 'No paperwork or government ID required. GeSIM operates on Web3 cryptographic wallet sign-in. You receive anonymous roaming profiles without identity checks.'
    },
    {
      q: 'Can my regular carrier see I am using GeSIM?',
      a: 'Your home carrier only sees standard encrypted roaming traffic data. They cannot inspect your browsing destinations or track your GeSIM usage.'
    },
    {
      q: 'Where is GeSIM available?',
      a: 'GeSIM profiles work seamlessly across 190+ countries and territories worldwide with automatic local roaming switching.'
    },
    {
      q: 'How do I pay?',
      a: 'You can fund your GeSIM balance using USDC, USDT, Ethereum, Bitcoin, or Web3 wallet transfers directly within the app.'
    },
    {
      q: 'Is the app live?',
      a: 'Yes, GeSIM v0.6 is live on iOS App Store, Android Play Store, and direct APK download.'
    },
    {
      q: 'Is my data safe?',
      a: 'Yes. We strictly maintain zero-log infrastructure. We store no activity histories, no personal identity records, and no metadata tracking logs.'
    }
  ];

  return (
    <section id="faq-section" className="py-24 bg-white border-t border-slate-100">
      <div className="max-width-container">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Headline & Help Card */}
          <div className="md:col-span-5 space-y-12 text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Frequently asked <br />
              questions
            </h2>

            {/* Landscape Help Card */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 relative overflow-hidden space-y-4">
              <div 
                className="absolute inset-0 opacity-10 bg-cover bg-center pointer-events-none"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80')` }}
              />
              <div className="relative z-10 space-y-3">
                <h3 className="text-xl font-bold text-slate-900">Still have questions?</h3>
                <p className="text-slate-500 text-xs leading-relaxed max-w-xs">
                  Couldn't find what you're looking for? Our team is here to help with anything about GeSIM.
                </p>
                <button onClick={openContactModal} className="dark-pill-button text-xs py-2.5 px-6">
                  Connect with us
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Accordion Rows */}
          <div className="md:col-span-7 space-y-0 text-left border-t border-slate-200">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="border-b border-slate-200 py-6 transition-colors">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between text-left font-bold text-lg text-slate-900 bg-transparent border-none cursor-pointer gap-4"
                  >
                    <span>{faq.q}</span>
                    <span className="text-slate-400">
                      {isOpen ? <X className="w-5 h-5 text-slate-900" /> : <Plus className="w-5 h-5 text-slate-400" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="mt-3 text-slate-500 text-sm leading-relaxed animate-in fade-in">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
