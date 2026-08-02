import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function BlogPage() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const categories = ['All', 'Privacy', 'Product', 'Engineering', 'Field notes', 'Cards'];

  const articles = [
    {
      id: 'phone-number-weakest-link',
      category: 'Privacy',
      date: '22 Oct 2025',
      title: 'Why your phone number is the weakest link in your privacy stack',
      excerpt: 'Phone numbers are a modern ID card. Here\'s how that happened — and what a virtual number actually solves.',
      featured: false,
      bgGradient: 'from-sky-300 to-teal-300',
      icon: '🛡️',
      image: '/assets/blog/phone-number-weakest-link.svg'
    }
  ];

  const filteredArticles = selectedCategory === 'All'
    ? articles
    : articles.filter(a => a.category.toLowerCase() === selectedCategory.toLowerCase());

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 3000);
    setNewsletterEmail('');
  };

  return (
    <div className="py-16 bg-white text-left font-sans">
      <div className="max-width-container space-y-12">
        
        {/* Page Title & Subtitle */}
        <div className="space-y-3 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            The GeSIM Journal
          </h1>
          <p className="text-slate-500 text-base md:text-lg leading-relaxed">
            Insights on privacy, global connectivity, and digital freedom. Product updates, technical deep dives, and ideas shaping a more private internet.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-100 pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all border cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-sky-500 text-white border-sky-500'
                  : 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3x2 Article Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((art) => (
            <div
              key={art.id}
              onClick={() => { navigate('/blog/' + art.id); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="group cursor-pointer space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {art.image ? (
                  <div className="w-full h-48 rounded-2xl relative overflow-hidden group-hover:shadow-md transition-shadow">
                    {art.featured && (
                      <span className="absolute top-3 left-3 z-10 px-2.5 py-0.5 rounded-full bg-red-500 text-white font-bold text-[9px] uppercase tracking-wider">
                        Featured
                      </span>
                    )}
                    <img
                      src={art.image}
                      alt={art.title}
                      className="w-full h-48 object-cover rounded-2xl transform group-hover:scale-105 transition-transform"
                    />
                  </div>
                ) : (
                  <div className={`w-full h-48 rounded-2xl bg-gradient-to-tr ${art.bgGradient} p-6 flex items-center justify-center relative overflow-hidden group-hover:shadow-md transition-shadow`}>
                    {art.featured && (
                      <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-red-500 text-white font-bold text-[9px] uppercase tracking-wider">
                        Featured
                      </span>
                    )}
                    <span className="text-5xl transform group-hover:scale-110 transition-transform">
                      {art.icon}
                    </span>
                  </div>
                )}

                <div className="space-y-2">
                  <div className="text-xs font-mono text-slate-400">
                    <span className="text-sky-500 font-bold">{art.category}</span> • <span>{art.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-500 transition-colors leading-snug">
                    {art.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">
                    {art.excerpt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Monthly Newsletter Box (Frame 151) */}
        <div className="p-8 md:p-12 rounded-3xl bg-slate-50 border border-slate-200/80 relative overflow-hidden mt-16">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-5 flex justify-center">
              <div className="w-56 h-36 rounded-2xl bg-amber-50 border border-amber-200 p-4 flex flex-col justify-center text-center space-y-2 shadow-xs font-mono text-xs">
                <span className="text-amber-800 font-bold">from: gesim.xyz</span>
                <span className="text-slate-400">● Private Envelope</span>
              </div>
            </div>

            <div className="md:col-span-7 space-y-4">
              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                Privacy, delivered monthly.
              </h3>
              <p className="text-slate-500 text-sm">
                One email each month with product updates, new insights, and what's next for the private internet.
              </p>

              <form onSubmit={handleSubscribe} className="flex flex-wrap items-center gap-3 pt-2">
                <input 
                  type="email" 
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="whats you email id?"
                  className="flex-1 min-w-[240px] px-4 py-3 rounded-full bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-sky-500"
                />
                <button type="submit" className="dark-pill-button text-xs py-3 px-8">
                  {subscribed ? 'Subscribed ✓' : 'Proceed'}
                </button>
              </form>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
