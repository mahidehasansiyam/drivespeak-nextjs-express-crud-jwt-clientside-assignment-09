'use client';
import { useState } from 'react';
import { FaAngleDown, FaCar } from 'react-icons/fa';
import Link from 'next/link';
import { Avatar, Button } from '@heroui/react';
import { TfiKey } from 'react-icons/tfi';
import { usePathname } from 'next/navigation';
import { authClient } from '@/lib/auth-client';
import ProfileDropdown from '../ProfileDropdown/page';




const Navbar = () => {
  const {data: session,} = authClient.useSession();
  // console.log('session:', session);
  // const session = true;

  const pathname = usePathname();
  const isActive = path =>
    pathname === path
      ? 'text-[#10b981] border-b-2 border-[#10b981] font-semibold'
      : ' hover:text-[#10b981] transition-colors';

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-[#101626]/70 border-b border-gray-400/20 sticky top-0 z-40 backdrop-blur-sm">
      {' '}
      <nav className="max-w-6xl mx-auto  w-full  text-[#9ca3af] ">
        <header className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <Button
              className="md:hidden bg-[#1b2438]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="sr-only">Menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </Button>

            {/* large mode logo */}
            <Link href="/" className=" ">
              <div className="flex items-center space-x-2 text-white font-bold text-2xl tracking-wide">
                {/* Car Icon SVG */}
                <FaCar className="text-[#10b981]"></FaCar>
                <span className="hidden md:block">
                  Drive<span className="text-[#10b981]">Speak</span>
                </span>
              </div>
            </Link>
          </div>
          <ul className="hidden items-center gap-4 md:flex font-semibold">
            <li>
              <Link href="/" className={isActive('/')}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/explore" className={isActive('/explore')}>
                Explore Cars
              </Link>
            </li>
            {session && (
              <div className="flex items-center gap-4">
                <li>
                  <Link href="/add-car" className={isActive('/add-car')}>
                    Add Car
                  </Link>
                </li>
                <li>
                  <Link
                    href="/my-bookings"
                    className={isActive('/my-bookings')}
                  >
                    My Bookings
                  </Link>
                </li>
                <li>
                  <Link
                    href="/my-added-cars"
                    className={isActive('/my-added-cars')}
                  >
                    My Added Cars
                  </Link>
                </li>
              </div>
            )}
          </ul>

          {session ? (
            <div className=" bg-[#1b2438] py-2 px-3 rounded-xl border border-gray-700 flex gap-1 md:gap-4 items-center">
              <Avatar>
                <Avatar.Image alt="John Doe" src={session?.user.image} />
                <Avatar.Fallback>
                  {session?.user.name.charAt(0)}
                </Avatar.Fallback>
              </Avatar>
              <div className="text-white font-bold hidden sm:block">
                {session?.user.name}
              </div>
              <FaAngleDown />
              <ProfileDropdown></ProfileDropdown>
            </div>
          ) : (
            <div className="flex gap-4">
              <Link href="/login">
                <button className=" flex items-center gap-2 btn btn-sm md:btn-md bg-[#10b981] text-white hover:bg-[#10b981]/80 py-2 px-4  rounded-2xl font-bold shadow-[0_0_30px_rgba(52,211,153,0.4)] hover:shadow-[0_0_40px_rgba(52,211,153,0.7)] transition duration-300 shadow-emerald-400/50 ">
                  <TfiKey />
                  Login
                </button>
              </Link>
            </div>
          )}
        </header>
        {isMenuOpen && (
          <div className="flex justify-between items-center border-t border-separator md:hidden p-4">
            <ul className="flex flex-col gap-2 p-4">
              <li>
                <Link href="/" className="block py-2">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/explore" className="block py-2">
                  Explore Cars
                </Link>
              </li>
              {session && (
                <div className="flex  flex-col gap-4">
                  <li>
                    <Link href="/add-car" className="block py-2">
                      Add Car
                    </Link>
                  </li>
                  <li>
                    <Link href="/my-bookings" className="block py-2">
                      My Bookings
                    </Link>
                  </li>
                  <li>
                    <Link href="/my-added-cars" className="block py-2">
                      My Added Cars
                    </Link>
                  </li>
                </div>
              )}
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
