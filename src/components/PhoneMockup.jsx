import React, { useState } from 'react';
import { Bell, ChevronRight, Pause } from 'lucide-react';

export default function PhoneMockup({ mode = 'home' }) {
  return (
    <div className="w-[320px] sm:w-[350px] h-[680px] sm:h-[720px] rounded-[50px] border-[10px] border-[#18181B] bg-white shadow-2xl relative overflow-hidden flex flex-col justify-between select-none font-sans mx-auto border-box">
      
      {/* iPhone Dynamic Island Notch */}
      <div className="w-[110px] h-[26px] bg-[#18181B] rounded-b-2xl absolute top-0 left-1/2 -translate-x-1/2 z-30 flex items-center justify-end px-3">
        <div className="w-2.5 h-2.5 rounded-full bg-blue-950 border border-slate-700" />
      </div>

      {/* Screen Content Render from Figma REST API */}
      <div className="w-full h-full relative overflow-hidden bg-slate-50 flex items-center justify-center">
        <img 
          src="/assets/hero_phone_screen.png" 
          alt="GeSIM iPhone App Display" 
          className="w-full h-full object-cover"
        />
      </div>

    </div>
  );
}
