import React, { useState } from 'react';
import { Smartphone, RefreshCw, MessageSquare, Copy, Check, Bell } from 'lucide-react';

export default function VirtualNumberSimulator() {
  const [selectedCountry, setSelectedCountry] = useState({ name: 'United States', code: '+1', flag: '🇺🇸', number: '+1 203 123 3131' });
  const [copied, setCopied] = useState(false);

  const [messages, setMessages] = useState([
    { id: 1, sender: 'Netflix', code: '441920', time: 'Just now', desc: 'Your verification code is 441920' },
    { id: 2, sender: 'Claude AI', code: '987123', time: '2m ago', desc: '987123 is your security code' },
    { id: 3, sender: 'Uber', code: '330192', time: '14m ago', desc: 'Use 330192 to confirm your phone login' }
  ]);

  const numbers = [
    { name: 'United States', code: '+1', flag: '🇺🇸', number: '+1 203 123 3131' },
    { name: 'United Arab Emirates', code: '+971', flag: '🇦🇪', number: '+971 56 555 8466' },
    { name: 'United Kingdom', code: '+44', flag: '🇬🇧', number: '+44 79 111 23456' },
    { name: 'Singapore', code: '+65', flag: '🇸🇬', number: '+65 91 234 567' }
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(selectedCountry.number.replace(/\s/g, ''));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSimulateNewSMS = () => {
    const apps = ['Telegram', 'OpenAI', 'WhatsApp', 'Google', 'Binance'];
    const randomApp = apps[Math.floor(Math.random() * apps.length)];
    const randomCode = Math.floor(100000 + Math.random() * 900000).toString();

    const newMsg = {
      id: Date.now(),
      sender: randomApp,
      code: randomCode,
      time: 'Just now',
      desc: `Your ${randomApp} verification code is ${randomCode}`
    };

    setMessages([newMsg, ...messages]);
  };

  return (
    <div className="p-6 md:p-8 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-6 text-left max-w-md w-full font-sans">
      
      {/* Top Bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-sky-100 text-sky-600">
            <Smartphone className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-extrabold text-slate-900 text-base">Virtual Number</h4>
            <span className="text-[10px] text-slate-500 font-mono">Private OTP Receiver</span>
          </div>
        </div>

        <button 
          onClick={handleSimulateNewSMS}
          className="px-3 py-1.5 rounded-full bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-2xs"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Simulate SMS</span>
        </button>
      </div>

      {/* Number Display Card */}
      <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{selectedCountry.flag}</span>
          <div>
            <div className="font-extrabold text-slate-900 text-sm">{selectedCountry.number}</div>
            <div className="text-[10px] text-emerald-600 font-bold">Active • SMS & Calling Enabled</div>
          </div>
        </div>

        <button 
          onClick={handleCopy}
          className="p-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 border-none cursor-pointer"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>

      {/* Country Switcher Tabs */}
      <div className="grid grid-cols-2 gap-2">
        {numbers.map((n) => (
          <button
            key={n.code}
            onClick={() => setSelectedCountry(n)}
            className={`p-2 rounded-xl border text-xs font-bold flex items-center gap-2 cursor-pointer transition-all ${
              selectedCountry.code === n.code
                ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
            }`}
          >
            <span>{n.flag}</span>
            <span className="truncate">{n.name}</span>
          </button>
        ))}
      </div>

      {/* Live OTP Message Feed */}
      <div className="space-y-2 pt-2 border-t border-slate-200/80">
        <div className="flex items-center justify-between text-xs font-bold text-slate-700">
          <span className="flex items-center gap-1.5">
            <MessageSquare className="w-4 h-4 text-sky-500" />
            <span>Incoming OTP Feed</span>
          </span>
          <span className="text-[10px] text-slate-400 font-mono">{messages.length} messages</span>
        </div>

        <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
          {messages.map((m) => (
            <div key={m.id} className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs space-y-1 animate-in fade-in">
              <div className="flex items-center justify-between text-[11px]">
                <span className="font-extrabold text-slate-900">{m.sender}</span>
                <span className="text-[9px] text-slate-400 font-mono">{m.time}</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="px-2 py-0.5 rounded bg-sky-50 text-sky-600 font-mono font-extrabold text-xs">
                  {m.code}
                </span>
                <span className="text-[10px] text-slate-500 truncate">{m.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
