import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DownloadModal from './components/DownloadModal';
import ContactModal from './components/ContactModal';

import HomePage from './pages/HomePage';
import EarlyAccessPage from './pages/EarlyAccessPage';
import BlogPage from './pages/BlogPage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import DocsPage from './pages/DocsPage';
import LegalPage from './pages/LegalPage';
import AboutPage from './pages/AboutPage';

export default function App() {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const openDownloadModal = () => setDownloadModalOpen(true);
  const openContactModal = () => setContactModalOpen(true);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-sky-500 selection:text-white">
      <ScrollToTop />
      
      {/* Top Glass Navbar */}
      <Navbar 
        openDownloadModal={openDownloadModal}
        openContactModal={openContactModal}
      />

      {/* Main Content */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage openDownloadModal={openDownloadModal} openContactModal={openContactModal} />} />
          <Route path="/get-access" element={<EarlyAccessPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:articleId" element={<ArticleDetailPage />} />
          <Route path="/terms" element={<LegalPage type="terms" />} />
          <Route path="/trust" element={<LegalPage type="privacy" />} />
          <Route path="/license" element={<LegalPage type="license" />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer 
        openContactModal={openContactModal}
        openDownloadModal={openDownloadModal}
      />

      {/* Modals */}
      <DownloadModal 
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
      />

      <ContactModal 
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />

    </div>
  );
}
