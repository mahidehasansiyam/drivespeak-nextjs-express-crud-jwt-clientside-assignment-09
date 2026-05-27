import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

const MyBookings = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const userEmail = session?.user?.email;
  console.log(userEmail);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/allbookings/${userEmail}`,
    {
      cache: 'no-store',
    },
  );
  const bookings = await res.json();
  console.log(bookings);
  

  return <div>Bookings : {bookings.length}</div>;
};

export default MyBookings;
