import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Navbar({ openDownloadModal, openContactModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { id: 'blog', label: 'Blog' },
    { id: 'docs', label: 'Docs' },
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
      scrollToSection('footer-section');
    } else if (item.id === 'docs') {
      window.open('https://gesim.gitbook.io/gesim', '_blank', 'noopener,noreferrer');
    } else {
      navigate('/' + item.id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 px-6 py-4">
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
                className={`text-sm font-medium transition-colors border-none bg-transparent cursor-pointer ${
                  window.location.pathname === '/' + item.id && item.id !== 'faq' && item.id !== 'contact'
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

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 pt-3 border-t border-slate-100 flex flex-col gap-2 px-2 pb-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item)}
              className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-left font-medium text-slate-800 hover:bg-slate-50 border-none bg-transparent"
            >
              <span>{item.label}</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>
          ))}
          <button
            onClick={() => { setMobileMenuOpen(false); navigate('/get-access'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="dark-pill-button justify-center mt-2"
          >
            Get Access
          </button>
        </div>
      )}
    </header>
  );
}
