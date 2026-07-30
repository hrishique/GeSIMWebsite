import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar({ activePage, setActivePage, openDownloadModal, openContactModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'blog', label: 'Blog' },
    { id: 'docs', label: 'Docs' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact', action: openContactModal }
  ];

  const handleNavClick = (item) => {
    if (item.action) {
      item.action();
    } else if (item.id === 'faq') {
      if (activePage !== 'home') {
        setActivePage('home');
        setTimeout(() => {
          document.getElementById('faq-section')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        document.getElementById('faq-section')?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setActivePage(item.id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 px-6 py-4">
      <div className="max-width-container flex items-center justify-between">
        
        {/* GeSIM Logo Image */}
        <button 
          onClick={() => { setActivePage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
          className="flex items-center gap-2 bg-transparent border-none cursor-pointer group"
        >
          <img 
            src="/assets/GeSIMLog.png" 
            alt="GeSIM Logo" 
            className="h-8 md:h-9 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-9">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item)}
              className={`text-sm font-medium transition-colors border-none bg-transparent cursor-pointer ${
                activePage === item.id && !item.action
                  ? 'text-slate-900 font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <button 
            onClick={openDownloadModal}
            className="dark-pill-button text-sm px-6 py-2.5"
          >
            Download
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-slate-100 text-slate-800 border-none cursor-pointer"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            onClick={() => { setMobileMenuOpen(false); openDownloadModal(); }}
            className="dark-pill-button justify-center mt-2"
          >
            Download
          </button>
        </div>
      )}
    </header>
  );
}
