'use client';

import { useEffect, useState } from 'react';
import {
  Search,
} from 'lucide-react';
import ShowCars from './ShowCars';

export default function SearchAndFilter() {
  // State for original API results
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  // States for query fields
  const [search, setSearch] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedSeats, setSelectedSeats] = useState('All');

  // Categories based on your business logic
  const carTypes = ['All', 'SUV', 'Luxury', 'Sedan', 'Electric', 'Sports'];
  const seatOptions = ['All', '2', '4', '5', '7'];

  // Fetch data dynamically on parameters adjustment
  useEffect(() => {
    const fetchFilteredCars = async () => {
      setLoading(true);
      try {
        const queryParams = new URLSearchParams({
          search,
          type: selectedType,
          seats: selectedSeats,
        });

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/api/cars?${queryParams.toString()}`,
        );
        const json = await res.json();
        if (json.success) {
          setCars(json.data);
        }
      } catch (err) {
        console.error('Error querying car listings:', err);
      } finally {
        setLoading(false);
      }
    };

    // Debounce search queries to prevent heavy server thrashing
    const delayDebounceFn = setTimeout(() => {
      fetchFilteredCars();
    }, 400);

    return () => clearTimeout(delayDebounceFn);
  }, [search, selectedType, selectedSeats]);
  // console.log(cars);
  return (
    <div className="  text-white ">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* --- Search & Filters Control Board --- */}
        <div className="bg-[#0e1322] border border-slate-800/60 p-6 rounded-2xl shadow-xl space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Main Title Search Bar */}
            <div className="md:col-span-6 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
              <input
                type="text"
                placeholder="Search car by name (e.g. Audi, Mustang)..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full bg-[#161b2a] border border-slate-800 rounded-xl py-3.5 pl-12 pr-4 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#10B981]/50 transition-colors"
              />
            </div>

            {/* Category Dropdown */}
            <div className="md:col-span-3">
              <select
                value={selectedType}
                onChange={e => setSelectedType(e.target.value)}
                className="w-full bg-[#161b2a] border border-slate-800 rounded-xl py-3.5 px-4 text-sm text-slate-300 focus:outline-none focus:border-[#10B981]/50 transition-colors"
              >
                {carTypes.map(t => (
                  <option key={t} value={t} className="bg-[#0e1322]">
                    {t === 'All' ? 'All Categories' : t}
                  </option>
                ))}
              </select>
            </div>

            {/* Seating Capacity Selector */}
            <div className="md:col-span-3">
              <select
                value={selectedSeats}
                onChange={e => setSelectedSeats(e.target.value)}
                className="w-full bg-[#161b2a] border border-slate-800 rounded-xl py-3.5 px-4 text-sm text-slate-300 focus:outline-none focus:border-[#10B981]/50 transition-colors"
              >
                {seatOptions.map(s => (
                  <option key={s} value={s} className="bg-[#0e1322]">
                    {s === 'All' ? 'Any Capacity' : `${s} Seats`}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {loading && (
            <p className="text-white font-semibold py-1 flex items-center justify-center ">
              Loading cars...
            </p>
          ) }

          {cars.length === 0 && !loading ? (
            <p className="text-white font-semibold py-1 flex items-center justify-center">
              No cars match your criteria. Try adjusting your search or filters.
            </p>
          ) : ( !loading &&
            <p className="text-white font-semibold py-1">
              {cars.length} cars available
            </p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center mx-auto pb-12">
            {cars.map(car => {
              return (
                <div key={car._id}>
                  <ShowCars car={car} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
