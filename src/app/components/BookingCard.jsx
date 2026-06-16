'use client';

import {
  Image as ImageIcon,
  X,
  Calendar,
} from 'lucide-react';

import { Button, Modal} from '@heroui/react';
import { useState } from 'react';
import { authClient } from '@/lib/auth-client';
import { redirect } from 'next/navigation';
import { toast } from 'react-toastify';

export function BookingCard({ car }) {
  const { data: session, } = authClient.useSession();
  const userEmail = session?.user?.email;
  // console.log(userEmail);

  const [duration, setDuration] = useState(1);
  const [driverService, setDriverService] = useState('none'); // 'none' | 'professional'
  const [specialNotes, setSpecialNotes] = useState('');

  const dailyRate = car.price || 120;
  const driverCostPerDay = driverService === 'professional' ? 25 : 0;
  const baseRent = dailyRate * duration;
  const driverTotal = driverCostPerDay * duration;
  const estTotalPrice = baseRent + driverTotal;

  const onSubmit = async e => {
    e.preventDefault();
    const bookingData = {
      userEmail: session?.user?.email || '',
      carName: car.name,
      duration,
      driverService,
      specialNotes,
      totalPrice: estTotalPrice,
      available: car.available,
      bookingCount: car.bookingCount,
      description: car.description,
      features: car.features,
      id: car.id,
      image: car.image,
      location: car.location,
      ownerEmail: car.ownerEmail,
      price: car.price,
      seats: car.seats,
      type: car.type,
    };
    // console.log('Booking Confirmed:', bookingData);

    // get token from better auth in client component *****************
    const { data: tokenData } = await authClient.token();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/allbookings`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${tokenData?.token}`,
        },
        body: JSON.stringify(bookingData),
      },
    );
    // console.log('res', res);
    if (res.ok) {
      toast.success('You have successfully added one car');
    }
    redirect('/explore');
  };;;
  return (
    <Modal>
      <Button className="bg-[#10B981] hover:bg-[#0fA774] text-[#0A0E1A] font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-[0_4px_20px_rgba(16,185,129,0.25)] hover:shadow-[0_4px_25px_rgba(16,185,129,0.4)] transition-all active:scale-[0.98]">
        Book Now
      </Button>

      <Modal.Backdrop className="bg-black/70 backdrop-blur-md">
        <Modal.Container className="w-full max-w-lg" placement="center">
          <Modal.Dialog className="bg-[#0f131f] text-white border border-slate-800/80 rounded-3xl overflow-hidden shadow-2xl">
            {/* Header */}
            <Modal.Header className="relative px-6 pt-6 pb-4 flex flex-col items-start border-none">
              <Modal.Heading className="text-2xl font-bold tracking-tight text-white">
                Confirm Booking
              </Modal.Heading>
              <p className="text-sm font-semibold text-[#10B981] mt-0.5">
                {car.name}
              </p>
              <Modal.CloseTrigger className="absolute right-6 top-6 text-slate-400 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </Modal.CloseTrigger>
            </Modal.Header>

            {/* Body */}
            <Modal.Body className="px-6 pb-6">
              <form onSubmit={onSubmit} className="space-y-6">
                {/* Field 1: Rental Duration */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-slate-400 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Rental Duration (Days)
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={duration}
                    onChange={e =>
                      setDuration(Math.max(1, parseInt(e.target.value) || 1))
                    }
                    className="w-full bg-[#161b2a] border border-slate-800 rounded-xl py-3.5 px-4 text-sm font-medium text-white placeholder-slate-600 focus:outline-none focus:border-[#10B981]/50 transition-colors"
                  />
                </div>

                {/* Field 2: Driver Services */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-slate-400">
                    Driver Services (+$25/day)
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    {/* No Driver Option */}
                    <Button
                      type="button"
                      onClick={() => setDriverService('none')}
                      className={`flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-sm font-semibold border transition-all ${
                        driverService === 'none'
                          ? 'border-[#10B981] bg-[#112423] text-white'
                          : 'border-slate-800 bg-[#161b2a]/40 text-slate-400 hover:bg-[#161b2a]'
                      }`}
                    >
                      <span
                        className={`w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center ${driverService === 'none' ? 'border-[#10B981]' : 'border-slate-500'}`}
                      >
                        {driverService === 'none' && (
                          <span className="w-1.5 h-1.5 bg-[#10B981] rounded-full" />
                        )}
                      </span>
                      No Driver Needed
                    </Button>

                    {/* Professional Driver Option */}
                    <Button
                      type="button"
                      onClick={() => setDriverService('professional')}
                      className={`flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-sm font-semibold border transition-all ${
                        driverService === 'professional'
                          ? 'border-[#10B981] bg-[#112423] text-white'
                          : 'border-slate-800 bg-[#161b2a]/40 text-slate-400 hover:bg-[#161b2a]'
                      }`}
                    >
                      <span
                        className={`w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center ${driverService === 'professional' ? 'border-[#10B981]' : 'border-slate-500'}`}
                      >
                        {driverService === 'professional' && (
                          <span className="w-1.5 h-1.5 bg-[#10B981] rounded-full" />
                        )}
                      </span>
                      Professional Driver
                    </Button>
                  </div>
                </div>

                {/* Field 3: Special Notes / Requests */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-slate-400">
                    Special Notes / Requests
                  </label>
                  <textarea
                    rows="3"
                    value={specialNotes}
                    onChange={e => setSpecialNotes(e.target.value)}
                    placeholder="E.g., Child seat requirements, preferred pickup time..."
                    className="w-full bg-[#161b2a] border border-slate-800 rounded-xl py-3.5 px-4 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-[#10B981]/50 transition-colors resize-none leading-relaxed"
                  />
                </div>

                {/* Price Details Block */}
                <div className="bg-[#121824] border border-slate-800/80 rounded-2xl p-5 space-y-4">
                  <h4 className="text-sm font-bold text-white">
                    Price Details
                  </h4>

                  <div className="space-y-2.5 text-xs font-medium text-slate-400">
                    <div className="flex justify-between">
                      <span>Daily Rate</span>
                      <span>${dailyRate} / day</span>
                    </div>
                    <div className="flex justify-between">
                      <span>
                        Base Rent ({duration} {duration === 1 ? 'day' : 'days'})
                      </span>
                      <span className="text-slate-200">${baseRent}</span>
                    </div>
                    {driverCostPerDay > 0 && (
                      <div className="flex justify-between">
                        <span>
                          Driver Service ({duration}{' '}
                          {duration === 1 ? 'day' : 'days'})
                        </span>
                        <span className="text-slate-200">${driverTotal}</span>
                      </div>
                    )}
                  </div>

                  <hr className="border-slate-800" />

                  <div className="flex justify-between items-center pt-1">
                    <span className="text-sm font-bold text-white">
                      Est. Total Price
                    </span>
                    <span className="text-xl font-bold text-[#10B981]">
                      ${estTotalPrice}
                    </span>
                  </div>
                </div>

                {/* Actions / Footer */}
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <Button
                    slot="close"
                    className="bg-[#1e2538] hover:bg-[#252e46] text-slate-200 font-semibold py-3.5 rounded-xl transition-colors"
                  >
                    Cancel
                  </Button>

                  <Button
                    type="submit"
                    slot="close"
                    className="bg-[#10B981] hover:bg-[#0fa472] text-white font-semibold py-3.5 rounded-xl transition-colors shadow-lg shadow-[#10B981]/10"
                  >
                    Book Now
                  </Button>
                </div>
              </form>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
