import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import ModalProfile from '../components/ModalProfile';

export default async function ProfilePage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user || null;

  // Fallback state if no user is found to prevent crashes
  if (!user) {
    return (
      <div className="min-h-screen bg-[#070b13] text-gray-400 flex items-center justify-center">
        <p>Please log in to view your profile.</p>
      </div>
    );
  }

  return (
    <div className=" bg-[#070b13] flex flex-col items-center justify-center p-6 text-white">
      {/* Profile Container Box */}
      <div className="min-w-xs bg-[#0d1527] border border-gray-800/60 rounded-3xl overflow-hidden shadow-2xl">
        {/* Cover / Header Area */}
        <div className="h-36 bg-gradient-to-r from-[#0d1527] to-[#16223f] relative border-b border-gray-800/40">
          {/* Subtle branding accent lines or background glow could go here */}
        </div>

        {/* Profile Info Section */}
        <div className="px-8 pb-8 relative">
          <div className="flex flex-col items-center -mt-16">
            {/* Avatar with matching theme borders */}
            <img
              src={user.image || '/fallback-avatar.png'}
              alt={user.name || 'User'}
              className="w-32 h-32 rounded-full border-4 border-[#0d1527] ring-2 ring-[#00b472] shadow-xl object-cover bg-[#070b13]"
            />

            {/* Display Name */}
            <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-white">
              {user.name}
            </h1>

            {/* Email Address */}
            <p className="mt-1 text-sm text-gray-400 font-medium">
              {user.email}
            </p>
          </div>

          <hr className="my-8 border-gray-800/60" />

          {/* Action Buttons styled like your UI */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Edit Profile (Using the Active/Green accent from your layout) */}

            <ModalProfile />
          </div>
        </div>
      </div>
    </div>
  );
}
