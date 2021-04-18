import "./App.css";
import { FiUsers, GiGasPump, IoSpeedometerOutline } from "react-icons/all";
import Nav from "./components/Nav";
import SearchDestination from "./components/SearchDestination";
import Sidebar from "./container/Sidebar";
import CarCard from "./components/CarCard";

const cars = [
  {
    name: "Tesla Model S",
    type: "Standard",
    persons: 5,
    fuel: "Electric",
    meter: "Unlimited mileage",
    price: 126,
    img: "img-1.png",
    deal: "Special deal",
  },
  {
    name: "Tesla Model Y",
    type: "Compact",
    persons: 5,
    fuel: "Electric",
    meter: "Unlimited mileage",
    price: 136,
    img: "img-2.png",
  },
  {
    name: "Tesla Model X",
    type: "Mini",
    persons: 5,
    fuel: "Electric",
    meter: "Unlimited mileage",
    price: 120,
    img: "img-3.png",
  },
  {
    name: "Tesla Model 3",
    type: "Standard",
    persons: 5,
    fuel: "Electric",
    meter: "Unlimited mileage",
    price: 140,
    img: "img-4.png",
  },
  {
    name: "Tesla Model S",
    type: "Compact",
    persons: 5,
    fuel: "Electric",
    meter: "Unlimited mileage",
    price: 132,
    img: "img-5.png",
    deal: "Special deal",
  },
  {
    name: "Tesla Model X",
    type: "Standard",
    persons: 5,
    fuel: "Electric",
    meter: "Unlimited mileage",
    price: 130,
    img: "img-6.png",
  },
];

function App() {
  return (
    <div>
      <Nav />
      <SearchDestination />

      <div className="container">
        <Sidebar />
        <main>
          <div className="filter">
            <div className="result">
              <p>16 results</p>
            </div>

            <div className="sort">
              <p>Sort by</p>
              <select name="" id="">
                <option value="">Best match</option>
              </select>
            </div>
          </div>

          <div className="card-list">
            {/*{cars.map(()=> )}*/}
            {cars.map((car) => (
              <CarCard
                key={id}
                name={car.name}
                type={car.type}
                persons={car.persons}
                fuel={car.fuel}
                meter={car.meter}
                price={car.price}
                img={car.img}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
