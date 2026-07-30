import React from 'react';

export default function LegalPage({ type }) {
  const titles = {
    terms: 'Terms & Conditions',
    privacy: 'Privacy Policy',
    license: 'Software & Protocol License'
  };

  return (
    <div className="py-16 bg-white text-left">
      <div className="max-width-container max-w-4xl mx-auto space-y-8">
        
        <div className="space-y-3 border-b border-slate-100 pb-6">
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            {titles[type] || 'Legal Notice'}
          </h1>
          <p className="text-slate-500 text-xs font-mono">
            Last Updated: July 2026 • GeSIM Global Communications Protocol
          </p>
        </div>

        <div className="rounded-3xl bg-slate-50 border border-slate-200 p-8 md:p-12 space-y-6 text-slate-700 text-base leading-relaxed">
          {type === 'privacy' && (
            <>
              <h2 className="text-xl font-bold text-slate-900">1. Zero Log Architecture</h2>
              <p>
                GeSIM operates under strict Zero Identity and Zero Log principles. We do not store, log, or track user browsing activities, destination IP addresses, payload contents, or personal identity metrics.
              </p>

              <h2 className="text-xl font-bold text-slate-900 mt-6">2. Cryptographic Authentication</h2>
              <p>
                Account creation and authentication are derived exclusively from Web3 public keys or ephemeral device keys. No passport, government ID, or credit card billing name is stored on our servers.
              </p>

              <h2 className="text-xl font-bold text-slate-900 mt-6">3. Cellular Roaming Metadata</h2>
              <p>
                Cellular roaming profiles are provisioned through bulk B2B enterprise roaming agreements. Host cellular network operators receive only anonymous roaming session identifiers required to maintain physical tower connectivity.
              </p>
            </>
          )}

          {type === 'terms' && (
            <>
              <h2 className="text-xl font-bold text-slate-900">1. Acceptable Use</h2>
              <p>
                GeSIM services provide privacy-enhanced global mobile connectivity and financial tools. Users agree to utilize the services in compliance with international telecommunication standards.
              </p>

              <h2 className="text-xl font-bold text-slate-900 mt-6">2. Service Availability & Roaming Speed</h2>
              <p>
                Mobile data speeds (5G, 4G LTE) depend on local roaming partner cell tower coverage and regional network infrastructure.
              </p>
            </>
          )}

          {type === 'license' && (
            <>
              <h2 className="text-xl font-bold text-slate-900">Open Protocol License</h2>
              <p>
                The GeSIM client software and smart contract interfaces are licensed under open source protocol terms. Permission is granted to build decentralized interfaces interacting with the GeSIM smart contract contracts.
              </p>
            </>
          )}
        </div>

      </div>
    </div>
  );
}
