
import { auth } from '@/lib/auth';
import { authClient } from '@/lib/auth-client';
import { Button } from '@heroui/react';
import { headers } from 'next/headers';
import Image from 'next/image';
import { UpdateModal } from '../components/UpdateCar';
import { DeleteCar } from '../components/DeleteCar';

const MyAddedCars = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const userEmail = session?.user?.email;
  // console.log(userEmail);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/allcars/${userEmail}`,
    {
      cache: 'no-store',
    },
  );
  const cars = await res.json();
  // console.log(cars);
  
  return (
    <div className="text-white">
      <h2>You's Added Cars : {cars.length}</h2>
      {cars.map(car => (
        <div
          key={car._id}
          className=" flex justify-between items-center p-4 rounded-lg bg-[#1b2438] mb-4 max-w-5xl mx-auto"
        >
          <div className="flex justify-center items-center gap-3">
            <Image className='rounded-2xl' src={car.image} alt={car.name} width={100} height={100} />
            <div>
              <h3>{car.name}</h3>
              <p>{car.description}</p>
            </div>
          </div>
          {" "}
          <div className="flex justify-center items-center gap-3">
            <UpdateModal car={car} />
            <DeleteCar car={car} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyAddedCars;
