'use client';

import {
  PlusCircle,
  Car,
  DollarSign,
  Users,
  Image as ImageIcon,
  MapPin,
  Info,
} from 'lucide-react';

import { Button, Input, Label, Modal, Surface, TextField } from '@heroui/react';
import { Edit } from 'lucide-react';

export function UpdateModal({ car }) {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(
      new FormData(e.currentTarget).entries(),
    );
    
     try {
       const res = await fetch(
         `${process.env.NEXT_PUBLIC_SERVER_URL}/allcars/${car.userEmail}/${car._id}`,
         {
           method: 'PATCH',
           headers: {
             'Content-Type': 'application/json',
           },
           body: JSON.stringify(formData),
         },
       );

       const data = await res.json();
          console.log(data);
       if (data.modifiedCount > 0) {
         alert('Car updated successfully');
         window.location.reload();
       }
     } catch (error) {
       console.log(error);
       alert('Something went wrong');
     }
  }
  return (
    <Modal>
      <Button className="bg-[#090d16] text-white p-3 rounded-2xl">Edit</Button>

      <Modal.Backdrop className="bg-black/60 backdrop-blur-sm">
        <Modal.Container className="w-5xl" placement="auto">
          <Modal.Dialog className=" bg-[#090d16] text-white border border-gray-700">
            <Modal.CloseTrigger />

            <Modal.Header className="text-white">
              <Modal.Icon className="bg-red-500/20 text-red-400">
                <Edit />
              </Modal.Icon>

              <Modal.Heading className="text-white">
                Update Information
              </Modal.Heading>

              <p className="mt-1.5 text-sm leading-5 text-gray-400">
                Fill out the form below and we'll get back to you.
              </p>
            </Modal.Header>

            <Modal.Body className="p-6">
              {/* SECTION BG + TEXT COLOR */}
              <Surface
                variant="default"
                className="bg-[#111827] text-white p-5 rounded-2xl border border-gray-700"
              >
                <form className="space-y-6" onSubmit={onSubmit}>
                  {/* Grid Row 1: Model Name & Category */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    <div className="md:col-span-8 flex flex-col gap-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Car Model / Name
                      </label>
                      <div className="relative">
                        <Car className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                        <input
                          name="name"
                          type="text"
                          defaultValue={car.name}
                          placeholder="E.g., Tesla Model S Plaid"
                          className="w-full bg-[#111726]/80 border border-slate-800/80 rounded-xl py-3.5 pl-11 pr-4 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-[#10B981]/50 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="md:col-span-4 flex flex-col gap-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Car Category
                      </label>
                      <input
                        name="type"
                        type="text"
                        defaultValue={car.type}
                        placeholder="(e.g., Sports, SUV, Electric)"
                        className="w-full bg-[#111726]/80 border border-slate-800/80 rounded-xl py-3.5 pl-4 pr-4 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-[#10B981]/50 transition-colors"
                      />
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
                          name="price"
                          type="number"
                          defaultValue={car.price}
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
                          name="seats"
                          type="number"
                          defaultValue={car.seats}
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
                        name="image"
                        type="url"
                        defaultValue={car.image}
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
                        name="location"
                        type="text"
                        defaultValue={car.location}
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
                      name="description"
                      rows="4"
                      placeholder="Give a detailed description of features, performance specs, handling, interior details..."
                      defaultValue={car.description}
                      className="w-full bg-[#111726]/80 border border-slate-800/80 rounded-xl py-3.5 px-4 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-[#10B981]/50 transition-colors resize-none leading-relaxed"
                    />
                  </div>

                  {/* Info Notice Card */}
                  <div className="bg-[#121E24]/60 border border-emerald-500/10 rounded-xl p-4 flex gap-3 items-start">
                    <Info className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <p className="text-xs text-slate-400 leading-normal">
                      By editing your car, you will update your previous listing.
                    </p>
                  </div>

                  {/* Submit CTA Button */}
                  <Modal.Footer>
                    <Button
                      slot="close"
                      variant="secondary"
                      className="bg-gray-700 text-white"
                    >
                      Cancel
                    </Button>

                    <Button type="submit" slot="close"  className="bg-blue-600 text-white">
                      Update Car
                    </Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
