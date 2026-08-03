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

        {/* Monthly Newsletter Box (Figma node 792:13322) */}
        <div className="relative mt-16 overflow-hidden rounded-[18px] border border-[#f1f1f1] bg-white">

          {/* Landscape background — faded, whitened toward the top */}
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <img
              src="/assets/blog/newsletter_bg.jpg"
              alt=""
              className="h-full w-full object-cover opacity-40"
            />
            <div className="absolute inset-x-0 top-0 h-3/4 bg-gradient-to-b from-white/85 to-transparent" />
          </div>

          {/* Envelope illustration, bleeding off the left edge (desktop only) */}
          <img
            src="/assets/blog/newsletter_envelope.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute top-4 left-[-40px] hidden w-[340px] rotate-[20.72deg] md:block lg:left-[-48px] lg:w-[430px]"
          />

          {/* Content — right half */}
          <div className="relative flex flex-col gap-4 px-6 py-10 sm:px-10 md:min-h-[320px] md:justify-center md:py-12 md:pl-[47%] md:pr-10">
            <h3 className="text-3xl font-extrabold text-[#282f34] md:text-[42px] md:leading-[1.15]">
              Privacy, delivered monthly.
            </h3>
            <p className="max-w-[460px] text-base leading-relaxed text-[#282f34]/60 md:text-[20px] md:leading-7">
              One email each month with product updates, new insights, and what's next for the private internet.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-wrap items-center gap-3 pt-2">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="whats you email id?"
                className="h-10 w-full max-w-[372px] rounded-[12px] border border-[#f1f1f1] bg-white px-[13px] text-sm text-[#282f34] placeholder:text-[#282f34]/40 focus:border-[#282f34]/30 focus:outline-none"
              />
              <button
                type="submit"
                className="h-10 min-w-[110px] rounded-full border border-white/20 bg-[#282f34] px-6 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-[1px] hover:bg-[#3a4147]"
              >
                {subscribed ? 'Subscribed ✓' : 'Proceed'}
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
