import React, { useState } from 'react';
import { Search, Copy, Check, ChevronRight, BookOpen, Terminal, ShieldCheck, Cpu, Code2 } from 'lucide-react';

export default function DocsPage({ openDownloadModal }) {
  const [activeTopic, setActiveTopic] = useState('getting-started');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedIndex, setCopiedIndex] = useState(null);

  const topics = [
    { id: 'getting-started', title: 'Getting Started', category: 'Overview', icon: BookOpen },
    { id: 'esim-api', title: 'eSIM Provisioning API', category: 'Developers', icon: Terminal },
    { id: 'vpn-protocol', title: 'WireGuard VPN Protocol', category: 'Network', icon: ShieldCheck },
    { id: 'virtual-numbers', title: 'Virtual Number Routing', category: 'Telecom', icon: Cpu },
    { id: 'usdc-contracts', title: 'USDC Smart Contracts', category: 'Web3', icon: Code2 }
  ];

  const handleCopyCode = (code, index) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="py-12 bg-white text-left font-sans min-h-screen">
      <div className="max-width-container">
        
        {/* Top Header */}
        <div className="border-b border-slate-100 pb-8 mb-8 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-bold text-sky-500 uppercase">Documentation</span>
              <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-1">
                GeSIM Developer Docs
              </h1>
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search docs & APIs..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-sky-500"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-start">
          
          {/* Left Sidebar */}
          <div className="md:col-span-3 space-y-2 sticky top-24">
            <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block px-3">
              Navigation
            </span>
            {topics.map((t) => {
              const IconComp = t.icon;
              return (
                <button
                  key={t.id}
                  onClick={() => setActiveTopic(t.id)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                    activeTopic === t.id
                      ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                      : 'bg-transparent text-slate-600 border-transparent hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <IconComp className="w-4 h-4" />
                    <span>{t.title}</span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 opacity-50" />
                </button>
              );
            })}

            <div className="pt-6">
              <div className="p-4 rounded-2xl bg-sky-50 border border-sky-100 space-y-2">
                <span className="text-xs font-bold text-slate-900 block">Need custom enterprise API limits?</span>
                <p className="text-[11px] text-slate-500">Contact our engineering team for dedicated MVNO bandwidth.</p>
                <button onClick={openDownloadModal} className="dark-pill-button text-[11px] py-2 px-4 mt-1">
                  Contact Support
                </button>
              </div>
            </div>
          </div>

          {/* Right Topic Content */}
          <div className="md:col-span-9 space-y-8 bg-slate-50/60 p-6 md:p-10 rounded-3xl border border-slate-200/80">
            
            {activeTopic === 'getting-started' && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-2xl font-extrabold text-slate-900">Getting Started with GeSIM</h2>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    GeSIM provides a privacy-first mobile roaming layer that allows developers and privacy-conscious users to provision mobile data profiles anonymously via USDC.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-3">
                  <h3 className="text-base font-bold text-slate-900">Core Concepts</h3>
                  <ul className="space-y-2 text-xs text-slate-600 list-disc pl-5">
                    <li><strong>No KYC Required:</strong> Profile activation occurs at the MVNO layer without consumer identity verification.</li>
                    <li><strong>Pseudonymous Payments:</strong> Pay using USDC or crypto wallets directly on Solana and Ethereum.</li>
                    <li><strong>Global Roaming:</strong> Instant connectivity in 190+ countries with automatic LPA retries.</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="text-base font-bold text-slate-900">Quick Start Terminal Command</h3>
                  <div className="relative rounded-2xl bg-slate-900 p-4 text-emerald-400 font-mono text-xs overflow-x-auto">
                    <button 
                      onClick={() => handleCopyCode('curl -X POST https://api.gesim.xyz/v1/esim/provision -H "Authorization: Bearer gs_test_123"', 1)}
                      className="absolute top-3 right-3 p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white border-none cursor-pointer"
                    >
                      {copiedIndex === 1 ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                    <code>curl -X POST https://api.gesim.xyz/v1/esim/provision -H "Authorization: Bearer gs_test_123"</code>
                  </div>
                </div>
              </div>
            )}

            {activeTopic === 'esim-api' && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-2xl font-extrabold text-slate-900">eSIM Provisioning API Reference</h2>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Use our REST API to request eSIM profiles programmatically for your application users.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-base font-bold text-slate-900">POST /v1/esim/provision</h3>
                  <div className="relative rounded-2xl bg-slate-900 p-4 text-white font-mono text-xs overflow-x-auto">
                    <button 
                      onClick={() => handleCopyCode(`{\n  "region": "US",\n  "data_gb": 20,\n  "tx_hash": "0x8f...3a9"\n}`, 2)}
                      className="absolute top-3 right-3 p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white border-none cursor-pointer"
                    >
                      {copiedIndex === 2 ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                    <pre className="text-emerald-400">{`{\n  "region": "US",\n  "data_gb": 20,\n  "tx_hash": "0x8f...3a9"\n}`}</pre>
                  </div>
                </div>
              </div>
            )}

            {activeTopic === 'vpn-protocol' && (
              <div className="space-y-4">
                <h2 className="text-2xl font-extrabold text-slate-900">WireGuard VPN Protocol Integration</h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  GeSIM's built-in VPN operates over the modern WireGuard protocol, offering low latency and zero log persistence across global nodes in Frankfurt, Tokyo, and Singapore.
                </p>
              </div>
            )}

            {activeTopic === 'virtual-numbers' && (
              <div className="space-y-4">
                <h2 className="text-2xl font-extrabold text-slate-900">Virtual Number OTP Routing</h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Virtual phone numbers receive SMS verification codes directly in app memory without routing through SMS aggregators that log identity headers.
                </p>
              </div>
            )}

            {activeTopic === 'usdc-contracts' && (
              <div className="space-y-4">
                <h2 className="text-2xl font-extrabold text-slate-900">USDC Smart Contract Specifications</h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Smart contracts deployed on Solana and Ethereum verify USDC payments on-chain and auto-generate anonymous LPA activation profiles within 40 seconds.
                </p>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}
