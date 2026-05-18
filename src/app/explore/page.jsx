import React from 'react';
import { getallcardata } from '../lib/FetchData';
import ShowCars from '../components/ShowCars';

const page =async () => {
  const allcardata = await getallcardata()
  // console.log(data);
  return (
    <div className="max-w-6xl mx-auto">
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