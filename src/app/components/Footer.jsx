'use client';
import Link from 'next/link';
import { FaCar, FaFacebook } from 'react-icons/fa';
import { FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa6';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#0b1325] text-gray-400 font-sans border-t border-gray-400">
      {/* Top Section: Links & Main Info */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        {/* Brand Description Column */}
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-2 text-white font-bold text-2xl tracking-wide">
            {/* Car Icon SVG */}
            <FaCar className="text-[#10b981]"></FaCar>
            <span>
              Drive<span className="text-[#10b981]">Speak</span>
            </span>
          </div>
          <p className="text-sm leading-relaxed max-w-sm">
            DriveSpeak offers luxury, electric, and sports vehicles. Explore
            premium mobility, custom features, and 24/7 client care across major
            locations.
          </p>

          {/* Social Icons */}
          <div className="flex items-center space-x-3 pt-2">
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#162238] hover:bg-gray-700 transition-colors text-gray-300"
            >
              {/* Facebook */}
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <FaFacebook className='text-2xl'></FaFacebook>
              </svg>
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#162238] hover:bg-gray-700 transition-colors text-gray-300"
            >
              {/* X Branding Logo */}
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <FaTwitter className='text-2xl'></FaTwitter>
              </svg>
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#162238] hover:bg-gray-700 transition-colors text-gray-300"
            >
              {/* Instagram */}
              <FaInstagram className='text-2xl'></FaInstagram>
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#162238] hover:bg-gray-700 transition-colors text-gray-300"
            >
              {/* LinkedIn */}
              <FaLinkedinIn className='text-2xl'></FaLinkedinIn>
            </a>
          </div>
        </div>

        {/* Fleet & Explore Column */}
        <div className="flex flex-col space-y-3">
          <h3 className="text-white font-bold tracking-wider text-sm uppercase">
            Fleet & Explore
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/cars" className="hover:text-white transition-colors">
                Browse All Vehicles
              </Link>
            </li>
            <li>
              <Link
                href="/cars?type=SUV"
                className="hover:text-white transition-colors"
              >
                Premium SUVs
              </Link>
            </li>
            <li>
              <Link
                href="/cars?type=Luxury"
                className="hover:text-white transition-colors"
              >
                Exotic & Luxury
              </Link>
            </li>
            <li>
              <Link
                href="/cars?type=Sedan"
                className="hover:text-white transition-colors"
              >
                Sports Sedans
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources Column */}
        <div className="flex flex-col space-y-3">
          <h3 className="text-white font-bold tracking-wider text-sm uppercase">
            Resources
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                Home Platform
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Driver Portal
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Partner Program
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Client Reviews
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-white font-bold tracking-wider text-sm uppercase">
            Contact Info
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start space-x-3">
              {/* Location Marker */}
              <svg
                className="w-5 h-5 text-[#10b981] shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
              <span>Gazipur , Dhaka , Bangladesh</span>
            </li>
            <li className="flex items-center space-x-3">
              {/* Phone Icon */}
              <svg
                className="w-5 h-5 text-[#10b981] shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                ></path>
              </svg>
              <span>+880 1712 345678</span>
            </li>
            <li className="flex items-center space-x-3">
              {/* Mail Icon */}
              <svg
                className="w-5 h-5 text-[#10b981] shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
              <a
                href="mailto:support@drivefleet.com"
                className="hover:text-white transition-colors"
              >
                mahidehasansiyam123@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section: Copyright & Legal */}
      <div className="bg-[#0b1325] py-6 border-t border-gray-400">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            &copy; {currentYear} DriveFleet Car Rentals Inc. All rights
            reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span className="text-gray-700">•</span>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
