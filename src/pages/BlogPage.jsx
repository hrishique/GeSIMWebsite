import React, { useState } from 'react';

export default function BlogPage() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const articles = [
    {
      id: 'biggest-lie-crypto-privacy',
      category: 'Privacy',
      date: '22 Oct 2025',
      title: 'The Biggest Lie In Crypto Privacy',
      excerpt: 'Why most "privacy" in crypto is an illusion — and what it actually takes to move money without leaving a trail.',
      url: 'https://x.com/gesimxyz/status/2066525060115108044',
      image: '/assets/ArticleImage.jpeg'
    }
  ];

  const handleSubscribe = async (e) => {
    e.preventDefault();
    const email = newsletterEmail.trim();
    if (!email || submitting) return;
    setSubmitting(true);
    setErrorMsg('');
    try {
      const res = await fetch('https://formsubmit.co/ajax/charchit@gesim.xyz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          email,
          _cc: 'contact@gesim.xyz',
          _subject: 'New GeSIM newsletter signup',
          _template: 'table',
          _captcha: 'false',
          source: 'gesim.xyz /blog newsletter card',
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    } catch {
      setErrorMsg('Something went wrong — try again in a moment.');
    } finally {
      setSubmitting(false);
    }
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

        {/* Article Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((art) => (
            <a
              key={art.id}
              href={art.url}
              target="_blank"
              rel="noopener noreferrer"
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
            </a>
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

          {/* Envelope illustration — bottom-left on mobile, left edge on desktop */}
          <img
            src="/assets/envelope.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute z-0 bottom-[-10px] left-[-16px] w-[210px] sm:w-[240px] md:top-auto md:bottom-0 md:left-[-28px] md:w-[320px] lg:left-[-36px] lg:w-[380px]"
          />

          {/* Content — right half */}
          <div className="relative z-10 flex flex-col gap-4 px-6 pt-10 pb-36 sm:px-10 md:min-h-[320px] md:justify-center md:py-12 md:pl-[47%] md:pr-10">
            <h3 className="whitespace-nowrap text-[clamp(18px,6vw,30px)] font-extrabold text-[#282f34] md:text-[42px] md:leading-[1.15]">
              Privacy, delivered monthly.
            </h3>
            <p className="max-w-[460px] text-base leading-relaxed text-[#282f34]/60 md:text-[20px] md:leading-7">
              One email each month with product updates, new insights, and what's next for the private internet.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-wrap items-center justify-end gap-3 pt-2 md:justify-start">
              <input
                type="email"
                required
                disabled={submitting}
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="whats you email id?"
                className="h-10 w-full max-w-[372px] rounded-[12px] border border-[#f1f1f1] bg-white px-[13px] text-sm text-[#282f34] placeholder:text-[#282f34]/40 focus:border-[#282f34]/30 focus:outline-none disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={submitting}
                className="h-10 min-w-[110px] rounded-full border border-white/20 bg-[#282f34] px-6 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-[1px] hover:bg-[#3a4147] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {subscribed ? 'Subscribed ✓' : submitting ? 'Sending…' : 'Proceed'}
              </button>
            </form>
            {errorMsg && (
              <p className="text-sm text-red-500 pt-1" role="alert">{errorMsg}</p>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
