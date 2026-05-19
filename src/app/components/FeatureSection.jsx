import { Compass, ShieldCheck, Zap } from 'lucide-react';
const FeatureSection = () => {
  return (
    <div>
      <section className="w-full  text-slate-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[10px] md:text-xs font-extrabold uppercase tracking-widest text-[#10B981]">
              WHY CHOOSE DRIVESPEAK
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Precision Driving, Premium Comfort
            </h2>
            <p className="text-sm md:text-base text-slate-400 font-light leading-relaxed">
              We integrate first-rate client requirements, seamless digital
              panels, and modern safety guidelines.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Feature Card 1 */}
            <div className="bg-[#0E131F]/50 border border-slate-800/40 rounded-3xl p-8 flex flex-col items-start transition-all group hover:border-gray-700  shadow-[0_0_14px_5px_rgba(0,0,0,0.4)] hover:shadow-[0_0_20px_10px_rgba(0,0,0,0.6)]">
              <div className="p-3 bg-[#121E24] border border-emerald-500/10 text-[#10B981] rounded-xl mb-6 group-hover:scale-105 group-hover:text-[#66f705] transition-transform">
                <Compass className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3 tracking-wide">
                Flexible Location Drop-offs
              </h3>
              <p className="text-sm text-slate-400 font-light leading-relaxed">
                Rent vehicles across key locations. Select custom drop-offs or
                verified pick-up coordinators effortlessly.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="bg-[#0E131F]/50 border border-slate-800/40 rounded-3xl p-8 flex flex-col items-start  transition-all group hover:border-gray-700  shadow-[0_0_14px_5px_rgba(0,0,0,0.4)] hover:shadow-[0_0_20px_10px_rgba(0,0,0,0.6)]">
              <div className="p-3 bg-[#121E24] border border-emerald-500/10 text-[#10B981] rounded-xl mb-6 group-hover:scale-105 group-hover:text-[#66f705] transition-transform">
                <ShieldCheck className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3 tracking-wide">
                Premium Comprehensive Cover
              </h3>
              <p className="text-sm text-slate-400 font-light leading-relaxed">
                Drive with full peace of mind. Every listing contains built-in
                standard protection plans and verified driver audits.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="bg-[#0E131F]/50 border border-slate-800/40 rounded-3xl p-8 flex flex-col items-start  transition-all group hover:border-gray-700  shadow-[0_0_14px_5px_rgba(0,0,0,0.4)] hover:shadow-[0_0_20px_10px_rgba(0,0,0,0.6)]">
              <div className="p-3 bg-[#121E24] border border-emerald-500/10 text-[#10B981] rounded-xl mb-6 group-hover:scale-105 group-hover:text-[#66f705] transition-transform">
                <Zap className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3 tracking-wide">
                Instant Scheduling Portals
              </h3>
              <p className="text-sm text-slate-400 font-light leading-relaxed">
                No paperwork, no overhead. Rent, track schedules, and manage
                listed fleets on one single-page glassmorphic dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeatureSection;
