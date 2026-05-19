"use client"
import {
  PlusCircle,
  Car,
  DollarSign,
  Users,
  Image as ImageIcon,
  MapPin,
  Info,
} from 'lucide-react';

const page = () => {
  return (
    <div>
      <section className="w-full min-h-screen bg-[#070B13] text-slate-100 py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="max-w-3xl w-full space-y-8">
          {/* Section Header */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              List a Vehicle
            </h1>
            <p className="text-sm md:text-base text-slate-400 font-light leading-relaxed">
              Enter your vehicle details below to publish it to the active
              rental marketplace. Keep rates competitive for more bookings.
            </p>
          </div>

          {/* Card Container */}
          <div className="bg-[#0E131F]/50 border border-slate-800/50 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md">
            {/* Form Header Badge */}
            <div className="flex items-center gap-2.5 mb-8 text-white">
              <PlusCircle className="w-5 h-5 text-[#10B981]" />
              <h2 className="text-lg font-bold tracking-wide">
                Vehicle Details Form
              </h2>
            </div>

            {/* Form Content */}
            <form className="space-y-6" onSubmit={e => e.preventDefault()}>
              {/* Grid Row 1: Model Name & Category */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-8 flex flex-col gap-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Car Model / Name
                  </label>
                  <div className="relative">
                    <Car className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input
                      type="text"
                      placeholder="E.g., Tesla Model S Plaid"
                      className="w-full bg-[#111726]/80 border border-slate-800/80 rounded-xl py-3.5 pl-11 pr-4 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-[#10B981]/50 transition-colors"
                    />
                  </div>
                </div>

                <div className="md:col-span-4 flex flex-col gap-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Car Category
                  </label>
                  <select className="w-full bg-[#111726]/80 border border-slate-800/80 rounded-xl py-3.5 px-4 text-sm text-slate-300 focus:outline-none focus:border-[#10B981]/50 transition-colors appearance-none cursor-pointer bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2394a3b8%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:1.25rem] bg-[right_1rem_center] bg-no-repeat">
                    <option value="SUV">SUV</option>
                    <option value="Luxury">Luxury</option>
                    <option value="Sports">Sports</option>
                    <option value="Electric">Electric</option>
                  </select>
                </div>
              </div>

              {/* Grid Row 2: Daily Price & Seat Capacity */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Daily Price ($ USD)
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input
                      type="number"
                      placeholder="Rate per day"
                      className="w-full bg-[#111726]/80 border border-slate-800/80 rounded-xl py-3.5 pl-11 pr-4 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-[#10B981]/50 transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Seat Capacity
                  </label>
                  <div className="relative">
                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input
                      type="number"
                      placeholder="Number of seats"
                      className="w-full bg-[#111726]/80 border border-slate-800/80 rounded-xl py-3.5 pl-11 pr-4 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-[#10B981]/50 transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Field 3: Image URL */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Image URL
                </label>
                <div className="relative">
                  <ImageIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input
                    type="url"
                    placeholder="https://images.unsplash.com/photo-..."
                    className="w-full bg-[#111726]/80 border border-slate-800/80 rounded-xl py-3.5 pl-11 pr-4 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-[#10B981]/50 transition-colors"
                  />
                </div>
              </div>

              {/* Field 4: Pickup Location */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Pickup Location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input
                    type="text"
                    placeholder="E.g. Beverly Hills, CA"
                    className="w-full bg-[#111726]/80 border border-slate-800/80 rounded-xl py-3.5 pl-11 pr-4 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-[#10B981]/50 transition-colors"
                  />
                </div>
              </div>

              {/* Field 5: Vehicle Description */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Vehicle Description
                </label>
                <textarea
                  rows="4"
                  placeholder="Give a detailed description of features, performance specs, handling, interior details..."
                  className="w-full bg-[#111726]/80 border border-slate-800/80 rounded-xl py-3.5 px-4 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-[#10B981]/50 transition-colors resize-none leading-relaxed"
                />
              </div>

              {/* Info Notice Card */}
              <div className="bg-[#121E24]/60 border border-emerald-500/10 rounded-xl p-4 flex gap-3 items-start">
                <Info className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                <p className="text-xs text-slate-400 leading-normal">
                  By listing your car, you agree to our driver safety, insurance
                  criteria, and location pick-up requirements.
                </p>
              </div>

              {/* Submit CTA Button */}
              <button
                type="submit"
                className="w-full bg-[#10B981] hover:bg-[#0fA774] text-[#070B13] font-bold text-base py-4 rounded-xl transition-all shadow-[0_4px_25px_rgba(16,185,129,0.25)] hover:shadow-[0_4px_30px_rgba(16,185,129,0.45)] active:scale-[0.99] mt-2 text-center"
              >
                Publish Vehicle Listing
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
