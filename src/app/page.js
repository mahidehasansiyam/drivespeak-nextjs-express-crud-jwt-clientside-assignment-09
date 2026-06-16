import Link from 'next/link'
import FeatureSection from './components/FeatureSection'
import Hero from './components/Hero'
import ShowCars from './components/ShowCars'
import StateSectoin from './components/StateSectoin'
import { getfewcardata } from '../lib/FetchData'
import { ArrowRight } from 'lucide-react'

export default async function Home() {
	const fewcarData = await getfewcardata()
	// console.log(fewcarData);

	return (
    <div className="max-w-6xl mx-auto">
      <Hero />

      <div>
        <div className="w-full  px-4 py-12 text-center select-none">
          <div className="max-w-3xl mx-auto space-y-4">
            {/* Uppercase Accent Subtitle */}
            <span className="text-[10px] md:text-xs font-extrabold uppercase tracking-[0.2em] text-[#10B981]">
              FEATURED CATALOG
            </span>

            {/* Main Section Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Vehicles Ready For Departure
            </h2>

            {/* Centered Descriptive Text */}
            <p className="text-sm md:text-base text-slate-400 font-light leading-relaxed max-w-2xl mx-auto">
              Browse our handpicked sports models, premium SUVs, and luxury
              electric sedans currently available now.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center mx-auto">
          {fewcarData.map(car => {
            return (
              <div key={car._id}>
                <ShowCars car={car} />
              </div>
            );
          })}
        </div>
        {/* button */}
        <div className="flex justify-center items-center py-10">
          <Link
            href="/explore"
            className="inline-flex items-center justify-center gap-2 bg-[#10B981] hover:bg-[#0fA774] text-[#070B13] font-bold text-sm md:text-base px-7 py-4 rounded-xl transition-all shadow-[0_4px_25px_rgba(16,185,129,0.3)] hover:shadow-[0_4px_30px_rgba(16,185,129,0.55)] active:scale-[0.98]"
          >
            Explore Cars
            <ArrowRight className="w-4 h-4 md:w-5 h-5 stroke-[2.5]" />
          </Link>
        </div>
      </div>

      <StateSectoin />
      <FeatureSection />
    </div>
  );
}
