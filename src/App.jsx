import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DownloadModal from './components/DownloadModal';
import ContactModal from './components/ContactModal';

import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import DocsPage from './pages/DocsPage';
import LegalPage from './pages/LegalPage';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedArticleId, setSelectedArticleId] = useState(null);
  
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const openDownloadModal = () => setDownloadModalOpen(true);
  const openContactModal = () => setContactModalOpen(true);

  const handleSelectArticle = (articleId) => {
    setSelectedArticleId(articleId);
    setActivePage('article');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToBlog = () => {
    setActivePage('blog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-sky-500 selection:text-white">
      
      {/* Top Glass Navbar */}
      <Navbar 
        activePage={activePage}
        setActivePage={setActivePage}
        openDownloadModal={openDownloadModal}
        openContactModal={openContactModal}
      />

      {/* Main Content */}
      <main className="flex-1">
        {activePage === 'home' && (
          <HomePage 
            openDownloadModal={openDownloadModal} 
            openContactModal={openContactModal} 
          />
        )}

        {activePage === 'blog' && (
          <BlogPage onSelectArticle={handleSelectArticle} />
        )}

        {activePage === 'article' && (
          <ArticleDetailPage 
            articleId={selectedArticleId} 
            onBack={handleBackToBlog} 
          />
        )}

        {activePage === 'docs' && (
          <DocsPage openDownloadModal={openDownloadModal} />
        )}

        {['terms', 'privacy', 'license'].includes(activePage) && (
          <LegalPage type={activePage} />
        )}
      </main>

      {/* Footer */}
      <Footer 
        setActivePage={setActivePage}
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
