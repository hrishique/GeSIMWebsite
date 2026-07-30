import React, { useState } from 'react';
import { ArrowLeft, Share2, Check } from 'lucide-react';

export default function ArticleDetailPage({ articleId, onBack }) {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="py-12 bg-white text-left font-sans">
      <div className="max-width-container max-w-4xl mx-auto space-y-8">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between text-xs font-mono text-slate-500 border-b border-slate-100 pb-4">
          <button 
            onClick={onBack}
            className="flex items-center gap-1.5 font-bold text-slate-900 bg-transparent border-none cursor-pointer hover:text-sky-500"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>

          <div className="flex items-center gap-3 font-semibold uppercase">
            <span className="text-sky-500 font-bold">Privacy</span>
            <span>•</span>
            <span>12 Nov 2025</span>
            <span>•</span>
            <span>8min read</span>
          </div>

          <button 
            onClick={handleShare}
            className="flex items-center gap-1 font-bold text-slate-900 bg-transparent border-none cursor-pointer hover:text-sky-500"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
            <span>{copied ? 'Copied' : 'Share'}</span>
          </button>
        </div>

        {/* Title & Subtitle */}
        <div className="space-y-4 text-center max-w-3xl mx-auto pt-4">
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            How we provision an eSIM in 60 seconds
          </h1>
          <p className="text-slate-500 text-base md:text-lg leading-relaxed">
            Traditional SIM activation involves a retail store, a government ID, a form, a wait, and a plastic card in the mail. We wanted to do it differently. Here's what actually happens when you activate a GeSIM plan.
          </p>
        </div>

        {/* Header Visual */}
        <div className="w-full h-80 rounded-3xl bg-gradient-to-tr from-sky-400 via-cyan-400 to-blue-500 p-8 flex items-center justify-center shadow-lg relative overflow-hidden my-8">
          <div className="w-48 h-64 rounded-2xl bg-white p-4 shadow-2xl border-4 border-slate-900 flex flex-col justify-between transform rotate-6">
            <div className="w-8 h-6 rounded bg-amber-400 border border-slate-900" />
            <div className="text-center font-bold text-xs text-slate-900 font-mono">
              GeSIM eSIM
            </div>
          </div>
        </div>

        {/* Article Body Content */}
        <div className="space-y-10 text-slate-700 text-base md:text-lg leading-relaxed max-w-3xl mx-auto pt-4">
          
          <div className="space-y-3">
            <h2 className="text-2xl font-extrabold text-slate-900">The handshake</h2>
            <p className="text-slate-600 text-sm md:text-base">
              When you tap "Get Plan" and confirm the USDC payment, three things happen simultaneously:
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-slate-600 text-sm md:text-base">
              <li><strong>Payment confirmation</strong> - your wallet signs the transaction. The GeSIM smart contract verifies it.</li>
              <li><strong>Plan record created</strong> - an anonymous plan record is written: data allocation, region, expiry. No name, no ID, no billing address.</li>
              <li><strong>eSIM profile generated</strong> - our MVNO layer requests an eSIM profile from the carrier using a temporary reference ID. The carrier sees a business-to-business activation request, not a consumer KYC event.</li>
            </ol>
            <p className="text-slate-500 text-xs font-mono pt-1">
              The profile hits your device within forty seconds on average.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-extrabold text-slate-900">Why no KYC is technically possible</h2>
            <p className="text-slate-600 text-sm md:text-base">
              Consumer SIM activations require identity because regulators mandate it for retail distribution. Business MVNO agreements operate under different rules — the MVNO (GeSIM) is the regulated entity, and it activates profiles on behalf of end users through a B2B carrier API.
            </p>
            <p className="text-slate-600 text-sm md:text-base">
              This isn't a loophole. It's the same model every prepaid MVNO uses. The difference is that we've built the anonymous payment layer on top - so the MVNO has no identity to collect in the first place.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-extrabold text-slate-900">What the carrier knows</h2>
            <p className="text-slate-600 text-sm md:text-base">
              The carrier sees a profile activation from GeSIM's MVNO account. They know a plan was activated. They don't know by whom, because we don't know by whom. Your USDC transaction is on-chain and pseudonymous. GeSIM never takes custody of your identity.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-extrabold text-slate-900">The fallback path</h2>
            <p className="text-slate-600 text-sm md:text-base">
              Occasionally, profile delivery takes longer — typically due to carrier-side congestion on the LPA (Local Profile Assistant) layer. When this happens, the app retries automatically. If delivery exceeds five minutes, the app shows a manual install code as a fallback.
            </p>
            <p className="text-slate-500 text-xs font-mono">
              This has happened to fewer than 0.3% of activations in our current cohort.
            </p>
          </div>

        </div>

        {/* Bottom Banner (Frame 152) */}
        <div className="mt-16 p-8 rounded-3xl bg-slate-50 border border-slate-200/80 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xl font-bold text-slate-900">
            Private mobile data for on-chain lives.
          </div>
          <button 
            onClick={() => window.open('https://t.me', '_blank')}
            className="dark-pill-button text-xs py-3 px-6"
          >
            Join Community of 350+ users
          </button>
        </div>

      </div>
    </div>
  );
}
