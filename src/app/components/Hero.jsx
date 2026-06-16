import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';
import 'animate.css';

const Hero =  () => {
  
  return (
    <section className="animate__animated animate__slideInDown relative min-h-[85vh] lg:min-h-screen bg-[#070B13] overflow-hidden flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
      {/* Background radial glows matching the reference */}
      <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        {/* LEFT COLUMN: Text Content */}
        <div className="lg:col-span-6 space-y-6 md:space-y-8 text-left max-w-2xl mx-auto lg:mx-0">
          {/* Subtle Accent Tag */}
          <div className="inline-flex items-center gap-2 bg-[#121E24] border border-emerald-500/20 px-3.5 py-1.5 rounded-full">
            <Star className="w-3.5 h-3.5 text-[#10B981] fill-[#10B981]" />
            <span className="text-[10px] md:text-xs font-extrabold uppercase tracking-widest text-[#10B981]">
              Discover the Ultimate Selection
            </span>
          </div>

          {/* Main Typography Header */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.1] md:leading-[1.15]">
            Drive Luxury.
            <br />
            Experience
            <br />
            <span className="text-white">Performance.</span>
          </h1>

          {/* Subtitle Paragraph */}
          <p className="text-sm md:text-base text-slate-400 font-light leading-relaxed max-w-xl">
            Rent sports cars, electric models, and high-end SUVs. Seamless
            scheduling, verified driver options, and premium client support.
          </p>

          {/* Call to Actions (CTA) Buttons Group */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <Link
              href="/explore"
              className="inline-flex items-center justify-center gap-2 bg-[#10B981] hover:bg-[#0fA774] text-[#070B13] font-bold text-sm md:text-base px-7 py-4 rounded-xl transition-all shadow-[0_4px_25px_rgba(16,185,129,0.3)] hover:shadow-[0_4px_30px_rgba(16,185,129,0.55)] active:scale-[0.98]"
            >
              Explore Cars
              <ArrowRight className="w-4 h-4 md:w-5 h-5 stroke-[2.5]" />
            </Link>

            <Link
              href="/register"
              className="inline-flex items-center justify-center bg-[#192132] hover:bg-[#202A3F] border border-slate-800/80 text-slate-200 font-semibold text-sm md:text-base px-7 py-4 rounded-xl transition-all active:scale-[0.98]"
            >
              Register Account
            </Link>
          </div>
        </div>

        {/* RIGHT COLUMN: Showcase Showcase Car Frame */}
        <div className="lg:col-span-6 w-full flex justify-center lg:justify-end">
          <div className="relative w-full aspect-[4/3] max-w-[540px] rounded-3xl overflow-hidden border border-slate-800/80 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group">
            <Image
              src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80" // Swapped with clean luxury car image path
              alt="Featured Fleet Vehicle"
              fill
              priority
              className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
            />
            {/* Soft overlay gradient to depth blending */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
