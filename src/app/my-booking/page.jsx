

import React from 'react';
import { Wallet, Calendar, ShieldCheck, Trash2 } from 'lucide-react';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { CancelBooking } from '../components/CancelBookings';

const MyBookings = async () => {
 

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const userEmail = session?.user?.email;
  // console.log(userEmail);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/allbookings/${userEmail}`,
    {
      cache: 'no-store',
    },
  );
  const bookings = await res.json();
  // console.log(bookings);

   const totalInvested = bookings.reduce(
     (acc, curr) => acc + curr.price,
     0,
   );
   const activeCount = bookings.length;

  

  return (
    <div className="min-h-screen bg-[#070b13] text-white p-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header Block */}
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight">
            My Active Bookings
          </h1>
          <p className="text-sm text-slate-400 mt-2 font-medium tracking-wide max-w-xl leading-relaxed">
            Review your rental schedule, calculate total expenditure, and
            request adjustments or cancel bookings.
          </p>
        </div>

        {/* Overview Overview Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#0e1322] border border-slate-800/40 p-6 rounded-2xl shadow-xl">
          {/* Card 1: Total Invested */}
          <div className="flex items-center gap-4">
            <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl">
              <Wallet className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Total Invested
              </p>
              <p className="text-2xl font-extrabold mt-0.5">${totalInvested}</p>
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
              <p className="text-2xl font-extrabold mt-0.5">
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
              <p className="text-2xl font-extrabold mt-0.5 text-slate-100">
                Fully Insured
              </p>
            </div>
          </div>
        </div>

        {/* Data Table Panel */}
        <div className="bg-[#0e1322] border border-slate-800/40 rounded-2xl overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
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
                    key={booking.id}
                    className="hover:bg-[#131b2f]/40 transition-colors group"
                  >
                    {/* Vehicle Details */}
                    <td className="py-5 px-6 flex items-center gap-4">
                      <img
                        src={booking.image}
                        alt={booking.name}
                        className="w-20 h-12 object-cover rounded-xl border border-slate-800 shadow-md bg-slate-900"
                      />
                      <div>
                        <h3 className="text-sm font-bold text-white tracking-wide">
                          {booking.name}
                        </h3>
                        <p className="text-xs font-semibold text-slate-500 mt-0.5">
                          ${booking.price} / day
                        </p>
                      </div>
                    </td>

                    {/* Booking Date */}
                    <td className="py-5 px-4 text-center">
                      <span className="text-sm font-semibold text-[#10B981] border-b border-dashed border-[#10B981]/40 pb-0.5">
                        {booking.bookingDate}
                      </span>
                    </td>

                    {/* Driver Service */}
                    <td className="py-5 px-4 text-center">
                      <span className="text-xs font-bold bg-[#171f33] text-slate-400 px-3 py-1.5 rounded-lg border border-slate-800/60">
                        {booking.driverService}
                      </span>
                    </td>

                    {/* Total Rent */}
                    <td className="py-5 px-4 text-center">
                      <span className="text-sm font-extrabold text-[#10B981]">
                        ${booking.totalRent}
                      </span>
                    </td>

                    {/* Status Badge */}
                    <td className="py-5 px-4 text-center">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#0d231f] text-[#10B981] border border-[#10B981]/20 px-3 py-1.5 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                        {booking.available?"Confirmed":"Delay"}
                      </span>
                    </td>

                    {/* Action Buttons */}
                    <td className="py-5 px-6 text-right">
                    <CancelBooking booking={booking}></CancelBooking>
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
