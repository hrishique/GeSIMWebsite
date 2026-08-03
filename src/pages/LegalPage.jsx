import React from 'react';
import { legalContent } from '../data/legalContent';

export default function LegalPage({ type }) {
  const page = legalContent[type];
  if (!page) return null;
  return (
    <div className="py-10 lg:py-14 bg-white text-left">
      <div className="max-width-container max-w-4xl mx-auto space-y-8">

        {/* Page Header */}
        <div className="space-y-4 border-b border-slate-100 pb-6">
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight font-heading">{page.title}</h1>
          {page.intro && (
            <p className="text-base md:text-lg text-slate-500 leading-relaxed max-w-2xl font-body">{page.intro}</p>
          )}
          {page.lastUpdated && (
            <p className="text-xs font-body font-bold uppercase tracking-wider text-sky-500">{page.lastUpdated}</p>
          )}
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {page.sections.map((s, idx) => (
            <div key={s.n || s.heading || idx} className="space-y-2">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900">{page.unnumbered ? s.heading : `${s.n}. ${s.heading}`}</h2>
              <p className="text-slate-700 text-base leading-relaxed break-words">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
