'use client';
import React from 'react';
import { Card, CardHeader,CardBody, Button, Chip } from '@heroui/react';
import Link from 'next/link';
import Image from 'next/image';

const ShowCars = ({ car }) => {
  // console.log(car);   
  return (
    <div className="flex justify-center items-center">
      {' '}
      <Card
        // isHoverable
        className="w-full max-w-[400px] bg-[#0b1325] border border-gray-800/60 text-white rounded-2xl overflow-hidden shadow-xl group transition-all duration-300 hover:border-gray-700 p-0 shadow-[0_0_14px_5px_rgba(0,0,0,0.4)] hover:shadow-[0_0_20px_10px_rgba(0,0,0,0.6)]"
      >
        {/* Card Header / Image Section */}
        <CardHeader className="p-0 relative h-[240px] w-full overflow-hidden">
          <Image
            src={car.image}
            alt={car.name}
            height={300}
            width={400}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />

          {/* Floating Category Tag */}
          <div className="absolute top-4 left-4 z-10">
            <Chip
              variant="flat"
              className="bg-[#1f293d]/80 text-gray-200 border border-gray-700 backdrop-blur-md px-3 font-medium text-xs py-1"
            >
              {car.type}
            </Chip>
          </div>

          {/* Floating Status Tag (Conditional) */}
          {car.available === true ? (
            <div className="absolute top-4 right-4 z-10">
              <Chip
                variant="flat"
                className="bg-[#10b981]/20 text-[#10b981] border border-[#10b981]/30 backdrop-blur-md px-3 font-semibold text-xs py-1"
              >
                Available
              </Chip>
            </div>
          ) : (
            <div className="absolute top-4 right-4 z-10">
              <Chip
                variant="flat"
                className="bg-amber-500/20 text-amber-400 border border-amber-500/30 backdrop-blur-md px-3 font-semibold text-xs py-1"
              >
                Rented
              </Chip>
            </div>
          )}
        </CardHeader>

        {/* Card Body & Info Section */}
        <div className="p-6 flex flex-col justify-between">
          <div>
            {/* Car Name */}
            <h3 className="text-xl font-bold tracking-tight text-white mb-4 line-clamp-1">
              {car.name}
            </h3>

            {/* Quick Specifications Row */}
            <div className="flex items-center space-x-6 text-gray-400 text-sm mb-6">
              {/* Seats Icon */}
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-[#10b981]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span>{car.seats} Seats</span>
              </div>

              {/* Location Icon */}
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-[#10b981]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="line-clamp-1">{car.location}</span>
              </div>
            </div>
          </div>

          {/* Separator Line */}
          <div className="w-full h-[1px] bg-gray-800/80 mb-6" />

          {/* Bottom Panel: Price and Action Button */}
          <div className="flex items-center justify-between w-full">
            {/* Daily Rate Panel */}
            <div className="flex flex-col">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                DAILY RATE
              </span>
              <div className="flex items-baseline mt-1">
                <span className="text-2xl font-black text-[#10b981]">
                  ${car.price}
                </span>
                <span className="text-gray-400 text-xs font-medium ml-1">
                  /day
                </span>
              </div>
            </div>

            {/* Details Action Button */}
            <Link href={`/explore/${car._id}`}>
              <Button
                radius="lg"
                className="bg-[#10b981] hover:bg-[#0f9f6e] text-white font-bold px-5 py-2.5 flex items-center gap-2 shadow-[0_4px_14px_0_rgba(16,185,129,0.3)] transition-all duration-300 hover:shadow-[0_6px_20px_0_rgba(16,185,129,0.4)]"
              >
                Details
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ShowCars;
