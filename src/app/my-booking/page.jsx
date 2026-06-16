import React from 'react';
import { Wallet, Calendar, ShieldCheck } from 'lucide-react';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { CancelBooking } from '../components/CancelBookings';

const MyBookings = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const userEmail = session?.user?.email;

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/allbookings/${userEmail}`,
    {
      cache: 'no-store',
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );
  const bookings = await res.json();

  const totalInvested = bookings.reduce(
    (acc, curr) => acc + curr.totalPrice,
    0,
  );
  const activeCount = bookings.length;

  return (
    // Changed: Reduced default padding from p-8 to p-4, scale back to p-8 on md views
    <div className="bg-[#070b13] text-white p-4 md:p-8 font-sans min-h-screen">
      <div className="max-w-7xl mx-auto space-y-6 md:space-y-8">
        {/* Header Block */}
        <div>
          {/* Changed: Flexible font sizes from text-2xl on mobile up to text-4xl on desktop */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
            My Active Bookings
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 font-medium tracking-wide max-w-xl leading-relaxed">
            Review your rental schedule, calculate total expenditure, and
            request adjustments or cancel bookings.
          </p>
        </div>

        {/* Overview Cards Row */}
        {/* Changed: Ensured card dividers render conditionally based on mobile rows vs horizontal desktop lines */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#0e1322] border border-slate-800/40 p-5 md:p-6 rounded-2xl shadow-xl">
          {/* Card 1: Total Invested */}
          <div className="flex items-center gap-4">
            <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl">
              <Wallet className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Total Invested
              </p>
              <p className="text-xl md:text-2xl font-extrabold mt-0.5">
                ${totalInvested}
              </p>
            </div>
          </div>

          {/* Card 2: Active Bookings */}
          <div className="flex items-center gap-4 border-t md:border-t-0 md:border-x border-slate-800/60 pt-4 md:pt-0 md:px-6">
            <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Active Bookings
              </p>
              <p className="text-xl md:text-2xl font-extrabold mt-0.5">
                {activeCount} {activeCount === 1 ? 'Ride' : 'Rides'}
              </p>
            </div>
          </div>

          {/* Card 3: Driver Services */}
          <div className="flex items-center gap-4 border-t md:border-t-0 pt-4 md:pt-0 md:pl-2">
            <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Verified Driver Services
              </p>
              <p className="text-xl md:text-2xl font-extrabold mt-0.5 text-slate-100">
                Fully Insured
              </p>
            </div>
          </div>
        </div>

        {/* Data Layout Panel */}
        <div className="bg-[#0e1322] border border-slate-800/40 rounded-2xl overflow-hidden shadow-xl">
          {/* MOBILE VIEW: Grid layout rendered ONLY on small screens (hidden on md and up) */}
          <div className="block md:hidden divide-y divide-slate-800/60">
            {bookings.map(booking => (
              <div
                key={booking._id}
                className="p-5 space-y-4 hover:bg-[#131b2f]/20 transition-colors"
              >
                {/* Vehicle Header info row */}
                <div className="flex items-start gap-3.5">
                  <img
                    src={booking.image}
                    alt={booking.carName}
                    className="w-20 h-12 object-cover rounded-xl border border-slate-800 shadow-md bg-slate-900"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold text-white tracking-wide truncate">
                      {booking.carName}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 mt-0.5">
                      ${booking.price} / day
                    </p>
                  </div>
                  {/* Floating Top Status Badge */}
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold bg-[#0d231f] text-[#10B981] border border-[#10B981]/20 px-2.5 py-1 rounded-full shrink-0">
                    <span className="w-1 h-1 rounded-full bg-[#10B981]" />
                    {booking.available ? 'Confirmed' : 'Delay'}
                  </span>
                </div>

                {/* Meta details split section layout */}
                <div className="grid grid-cols-2 gap-y-3 gap-x-2 pt-1 text-xs">
                  <div>
                    <span className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                      Pick-up Date
                    </span>
                    <span className="font-semibold text-[#10B981] inline-block mt-0.5 border-b border-dashed border-[#10B981]/40">
                      {booking.bookingDate}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                      Driver Service
                    </span>
                    <span className="inline-block mt-1 font-bold bg-[#171f33] text-slate-400 px-2 py-1 rounded border border-slate-800/60 text-[11px]">
                      {booking.driverService}
                    </span>
                  </div>
                </div>

                {/* Lower Action & Pricing strip alignment */}
                <div className="flex justify-between items-center pt-3 border-t border-slate-800/40">
                  <div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                      Total Paid
                    </span>
                    <span className="text-base font-extrabold text-[#10B981]">
                      ${booking.totalPrice}
                    </span>
                  </div>
                  <div>
                    <CancelBooking booking={booking} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* DESKTOP VIEW: Legacy table rendered ONLY on large screens (hidden on default/mobile viewports) */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800/60 text-xs font-bold text-slate-400 uppercase tracking-wider">
                  <th className="py-5 px-6">Vehicle</th>
                  <th className="py-5 px-4 text-center">Booking Date</th>
                  <th className="py-5 px-4 text-center">Driver Service</th>
                  <th className="py-5 px-4 text-center">Total Rent</th>
                  <th className="py-5 px-4 text-center">Status</th>
                  <th className="py-5 px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/40">
                {bookings.map(booking => (
                  <tr
                    key={booking._id}
                    className="hover:bg-[#131b2f]/40 transition-colors group"
                  >
                    <td className="py-5 px-6 flex items-center gap-4">
                      <img
                        src={booking.image}
                        alt={booking.carName}
                        className="w-20 h-12 object-cover rounded-xl border border-slate-800 shadow-md bg-slate-900"
                      />
                      <div>
                        <h3 className="text-sm font-bold text-white tracking-wide">
                          {booking.carName}
                        </h3>
                        <p className="text-xs font-semibold text-slate-500 mt-0.5">
                          ${booking.price} / day
                        </p>
                      </div>
                    </td>

                    <td className="py-5 px-4 text-center">
                      <span className="text-sm font-semibold text-[#10B981] border-b border-dashed border-[#10B981]/40 pb-0.5">
                        {booking.bookingDate}
                      </span>
                    </td>

                    <td className="py-5 px-4 text-center">
                      <span className="text-xs font-bold bg-[#171f33] text-slate-400 px-3 py-1.5 rounded-lg border border-slate-800/60">
                        {booking.driverService}
                      </span>
                    </td>

                    <td className="py-5 px-4 text-center">
                      <span className="text-sm font-extrabold text-[#10B981]">
                        ${booking.totalPrice}
                      </span>
                    </td>

                    <td className="py-5 px-4 text-center">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#0d231f] text-[#10B981] border border-[#10B981]/20 px-3 py-1.5 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                        {booking.available ? 'Confirmed' : 'Delay'}
                      </span>
                    </td>

                    <td className="py-5 px-6 text-right">
                      <CancelBooking booking={booking} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
