import React from 'react';

const StateSectoin = () => {
  return (
    <div>
      <div className="w-full  px-4 py-8 ">
        <div className="max-w-7xl mx-auto hover:border-gray-700 p-0 shadow-[0_0_14px_5px_rgba(0,0,0,0.4)] hover:shadow-[0_0_20px_10px_rgba(0,0,0,0.6)] rounded-3xl border border-gray-800/60 bg-[#0b1325] text-white">
          <div className="bg-[#0E131F]/50 border border-slate-800/40 rounded-3xl p-8 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 relative items-center ">
            {/* Stat 1 */}
            <div className="flex flex-col items-center justify-center text-center relative w-full">
              <span className="text-4xl md:text-5xl font-black text-[#10B981] tracking-tight mb-2.5">
                50+
              </span>
              <span className="text-xs md:text-sm font-bold text-slate-400 tracking-widest uppercase">
                PREMIUM MODELS
              </span>
              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-slate-800/60" />
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center justify-center text-center relative w-full">
              <span className="text-4xl md:text-5xl font-black text-[#10B981] tracking-tight mb-2.5">
                12k+
              </span>
              <span className="text-xs md:text-sm font-bold text-slate-400 tracking-widest uppercase">
                ACTIVE RENTERS
              </span>
              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-slate-800/60" />
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center justify-center text-center relative w-full">
              <span className="text-4xl md:text-5xl font-black text-[#10B981] tracking-tight mb-2.5">
                99.8%
              </span>
              <span className="text-xs md:text-sm font-bold text-slate-400 tracking-widest uppercase">
                CLIENT SATISFACTION
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StateSectoin;