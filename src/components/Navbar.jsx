import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Navbar({ openDownloadModal, openContactModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Lock body scroll while the full-screen mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = prev; };
    }
  }, [mobileMenuOpen]);

  const navItems = [
    { id: 'blog', label: 'Blog' },
    // { id: 'docs', label: 'Docs' }, // Hidden until docs are updated — re-enable by uncommenting.
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (sectionId) => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (item) => {
    if (item.id === 'faq') {
      scrollToSection('faq-section');
    } else if (item.id === 'contact') {
      window.open('https://t.me/gesimxyz', '_blank', 'noopener,noreferrer');
    } else if (item.id === 'docs') {
      window.open('https://gesim.gitbook.io/gesim', '_blank', 'noopener,noreferrer');
    } else {
      navigate('/' + item.id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md px-6 py-4">
      <div className="max-width-container flex items-center justify-between">

        {/* GeSIM Logo Image & Text */}
        <button
          onClick={() => { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center gap-2.5 bg-transparent border-none cursor-pointer group"
        >
          <img
            src="/assets/GeSIMLog.webp"
            alt="GeSIM Logo"
            className="h-8 md:h-9 w-auto object-contain transition-transform group-hover:scale-105"
          />
          <span className="text-[20px] md:text-[22px] font-heading font-extrabold text-[#282F34] tracking-[-0.5px]">
            GeSIM
          </span>
        </button>

        {/* Desktop Navigation & Download Button (grouped to be adjacent on the right side) */}
        <div className="hidden md:flex items-center gap-9">
          <nav className="flex items-center gap-9">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className={`text-sm font-medium transition-colors border-none bg-transparent cursor-pointer ${window.location.pathname === '/' + item.id && item.id !== 'faq' && item.id !== 'contact'
                  ? 'text-slate-900 font-bold'
                  : 'text-slate-600 hover:text-slate-900'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => { navigate('/get-access'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="dark-pill-button text-sm px-6 py-2.5"
          >
            Get Access
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden w-11 h-11 rounded-[16px] bg-[#F4F6F8] hover:bg-[#EAEFF3] flex items-center justify-center border-none cursor-pointer transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5 text-[#282F34]" />
          ) : (
            <img
              src="/assets/mobile/Hamburger_Menu/Hamburger.svg"
              alt="Menu"
              className="w-5 h-auto object-contain"
            />
          )}
        </button>
      </div>

    </header>

    {/* Mobile Full-Screen Menu Overlay — sibling of <header> so backdrop-filter
        in the header doesn't trap `fixed inset-0` into the header's box. */}
    {mobileMenuOpen && (
      <div
        className="md:hidden fixed inset-0 z-[60] flex flex-col"
        style={{ backgroundColor: '#ffffff' }}
      >
        {/* Top row: logo + close X */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
          <button
            onClick={() => { setMobileMenuOpen(false); navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-2.5 bg-transparent border-none cursor-pointer"
          >
            <img src="/assets/GeSIMLog.webp" alt="GeSIM Logo" className="h-8 w-auto object-contain" />
            <span className="text-[20px] font-heading font-extrabold text-[#282F34] tracking-[-0.5px]">GeSIM</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="w-11 h-11 flex items-center justify-center bg-transparent border-none cursor-pointer"
            aria-label="Close Menu"
          >
            <X className="w-6 h-6 text-[#282F34]" strokeWidth={2.2} />
          </button>
        </div>

        {/* Centered stack of big nav links */}
        <div className="flex-1 flex flex-col items-center justify-center gap-8 px-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item)}
              className="text-[44px] font-heading font-semibold text-[#282F34] tracking-[-1.2px] leading-none bg-transparent border-none cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Bottom full-width Get Access button → /get-access */}
        <div className="px-6 pb-8 pt-4">
          <button
            onClick={() => { setMobileMenuOpen(false); navigate('/get-access'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="dark-pill-button w-full justify-center py-4 text-base"
          >
            Get Access
          </button>
        </div>
      </div>
    )}
    </>
  );
}
