import React from 'react';
import { getallcardata } from '../lib/FetchData';
import ShowCars from '../components/ShowCars';

const page =async () => {
  const allcardata = await getallcardata()
  // console.log(data);
  
  return (
    <div className="max-w-6xl mx-auto">
      <div className="w-full  px-4 py-4 text-left select-none">
        <div className="max-w-7xl mx-auto space-y-3">
          {/* Main Left-Aligned Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Explore Our Cars
          </h2>

          {/* Subtitle Paragraph */}
          <p className="text-sm md:text-base font-semibold text-slate-400 font-light leading-relaxed max-w-3xl">
            Browse, search, and discover your next premium driving experience. <br />
            Use search filters to match your preferences.
          </p>
        </div>
      </div>
      <p className="text-white font-semibold py-1">
        {allcardata.length} cars available
      </p>
      <div className="grid grid-cols-3 gap-6">
        {allcardata.map(car => {
          return (
            <div key={car._id}>
              <ShowCars car={car} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;