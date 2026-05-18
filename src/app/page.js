
import ShowCars from "./components/ShowCars";
import { cardata, getfewcardata } from "./lib/FetchData";

export default async function Home() {

  const fewcarData = await getfewcardata();
  // console.log(carData);

  return (
    <div className='max-w-6xl mx-auto'>
      <div className="grid grid-cols-3 gap-6">
        {fewcarData.map(car => {
          return (
            <div key={car._id}>
              <ShowCars car={car} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
