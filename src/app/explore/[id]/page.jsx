
import { getallcardata } from '@/app/lib/FetchData';
import Image from 'next/image';
import {
  MapPin,
  Users,
  Car,
  Calendar,
  CheckCircle2,
  ShieldAlert,
} from 'lucide-react';

const page = async ({ params }) => {
  const allcardata = await getallcardata()
  const { id } = await params;
  const car = allcardata.find(car => car._id === id);
 console.log(car);
  // console.log(id);
  return (
    <div>
      <div className="min-h-screen bg-[#0B0F17] text-slate-100 flex items-center justify-center p-4 md:p-8">
        <div className="max-w-6xl w-full bg-[#0E131F]/40 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-slate-800/50 shadow-2xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* LEFT COLUMN: Image & Quick Specs */}
          <div className="space-y-6">
            {/* Main Vehicle Image Frame */}
            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-slate-800 shadow-inner group">
              <Image
                src={car.image}
                alt={car.name}
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Status Tag */}
              {car.available && (
                <span className="absolute top-4 left-4 bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/30 text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 backdrop-blur-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse"></span>
                  Available Now
                </span>
              )}
            </div>

            {/* Premium Specifications Grid */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4 tracking-wide">
                Premium Specifications
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {car.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 bg-[#131A2A] border border-slate-800/60 px-4 py-3.5 rounded-xl text-sm font-medium text-slate-300 hover:border-emerald-500/30 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#10B981] shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Info & Actions */}
          <div className="flex flex-col justify-between space-y-6">
            {/* Header Metadata */}
            <div className="space-y-2">
              <span className="text-xs uppercase font-extrabold tracking-widest text-[#10B981]">
                {car.type}
              </span>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                {car.name}
              </h1>
              <div className="flex items-center gap-1.5 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 text-[#10B981]" />
                {car.location}
              </div>
            </div>

            {/* Key Quick Stats Cards */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-[#131A2A] border border-slate-850 p-3 rounded-xl flex flex-col items-center sm:items-start sm:flex-row gap-2 sm:gap-3">
                <div className="p-2 bg-slate-800/50 rounded-lg text-slate-400">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-lg font-bold text-white leading-none">
                    {car.seats}
                  </p>
                  <p className="text-xs text-slate-400 mt-1">Seats</p>
                </div>
              </div>

              <div className="bg-[#131A2A] border border-slate-850 p-3 rounded-xl flex flex-col items-center sm:items-start sm:flex-row gap-2 sm:gap-3">
                <div className="p-2 bg-slate-800/50 rounded-lg text-slate-400">
                  <Car className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-base font-bold text-white leading-none truncate max-w-[60px] sm:max-w-none">
                    {car.type}
                  </p>
                  <p className="text-xs text-slate-400 mt-1">Category</p>
                </div>
              </div>

              <div className="bg-[#131A2A] border border-slate-850 p-3 rounded-xl flex flex-col items-center sm:items-start sm:flex-row gap-2 sm:gap-3">
                <div className="p-2 bg-slate-800/50 rounded-lg text-slate-400">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-lg font-bold text-white leading-none">
                    {car.bookingCount}
                  </p>
                  <p className="text-xs text-slate-400 mt-1">Rentals</p>
                </div>
              </div>
            </div>

            {/* Overview / Description */}
            <div className="space-y-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                Overview
              </h3>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed font-light">
                {car.description}
              </p>
            </div>

            {/* Requirements Info Bar */}
            <div className="bg-[#131A2A] border border-slate-800/80 rounded-xl p-4 flex gap-3 items-start">
              <ShieldAlert className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-white">
                  Driver Requirements
                </h4>
                <p className="text-xs text-slate-400 leading-normal">
                  Must possess a valid driving license, be at least 21 years of
                  age, and hold a security deposit.
                </p>
              </div>
            </div>

            {/* Booking & Pricing Actions Block */}
            <div className="border border-[#10B981]/20 bg-[#10B981]/5 rounded-2xl p-4 sm:p-5 flex items-center justify-between gap-4 mt-auto">
              <div>
                <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
                  Daily Rate
                </p>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="text-2xl sm:text-3xl font-black text-[#10B981]">
                    ${car.price}
                  </span>
                  <span className="text-xs sm:text-sm text-slate-400 font-medium">
                    / day
                  </span>
                </div>
              </div>

              <button className="bg-[#10B981] hover:bg-[#0fA774] text-[#0A0E1A] font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-[0_4px_20px_rgba(16,185,129,0.25)] hover:shadow-[0_4px_25px_rgba(16,185,129,0.4)] transition-all active:scale-[0.98]">
                Book Rental Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;