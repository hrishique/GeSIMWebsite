import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

export default function FAQ({ openContactModal }) {
  // First item open by default per Figma design
  const [openIndex, setOpenIndex] = useState(0);

  const faqItems = [
    {
      question: 'Why do I need to install an app?',
      answer: 'eSIM provisioning requires a mobile OS. The app is your control centre for connectivity - plans, VPN, virtual number, everything in one place'
    },
    {
      question: 'Do you need my ID or passport?',
      answer: 'Answer coming soon.'
    },
    {
      question: "Can my regular carrier see I'm using GeSIM?",
      answer: 'Answer coming soon.'
    },
    {
      question: 'Where is GeSIM available?',
      answer: 'Answer coming soon.'
    },
    {
      question: 'How do I pay?',
      answer: 'Answer coming soon.'
    },
    {
      question: 'Is my data safe?',
      answer: 'Answer coming soon.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="w-full bg-white border-t border-slate-100 py-16 lg:py-24 select-none">
      <div className="max-width-container">
        
        {/* 2-Column Grid Layout (items-start so accordion aligns with top of heading) */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Heading + "Still have questions?" Card */}
          <div className="lg:col-span-4 w-full space-y-8 lg:space-y-12">
            
            {/* Section Heading */}
            <h2 className="text-[38px] sm:text-[48px] lg:text-[60px] font-extrabold text-[#282F34] tracking-[-1.8px] leading-[1.05] font-heading">
              Frequently asked<br className="hidden sm:inline" /> questions
            </h2>

            {/* "Still have questions?" Card */}
            <div className="w-full bg-white border border-[#F1F1F1] rounded-[18px] p-6 lg:p-7 flex flex-col justify-between relative overflow-hidden shadow-sm">
              {/* Soft landscape background photo filling lower/bg portion */}
              <img 
                src="/assets/FAQ/FAQBG.png" 
                alt="" 
                className="absolute inset-0 w-full h-full object-cover opacity-50 pointer-events-none z-0" 
              />

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
                  onClick={() => openContactModal?.()}
                  className="bg-[#282F34] text-white px-6 py-3 rounded-full text-[14px] font-medium tracking-[0.14px] hover:bg-black transition-colors shadow-sm cursor-pointer"
                >
                  Connect with us
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Accordion Questions List (starts at TOP) */}
          <div className="lg:col-span-8 w-full border-b border-[#F1F1F1]">
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

        </div>

      </div>
    </section>
  );
}
