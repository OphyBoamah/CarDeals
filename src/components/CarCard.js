import React from "react";
import { FiUsers, GiGasPump, IoSpeedometerOutline } from "react-icons/all";

// const cars = [
//   {
//     name: "Tesla Model S",
//     type: "Standard",
//     persons: 5,
//     fuel: "Electric",
//     meter: "Unlimited mileage",
//     price: 126,
//     img: "img-1.png",
//     deal: "Special deal",
//   },
//   {
//     name: "Tesla Model Y",
//     type: "Compact",
//     persons: 5,
//     fuel: "Electric",
//     meter: "Unlimited mileage",
//     price: 136,
//     img: "img-2.png",
//   },
//   {
//     name: "Tesla Model X",
//     type: "Mini",
//     persons: 5,
//     fuel: "Electric",
//     meter: "Unlimited mileage",
//     price: 120,
//     img: "img-3.png",
//   },
//   {
//     name: "Tesla Model 3",
//     type: "Standard",
//     persons: 5,
//     fuel: "Electric",
//     meter: "Unlimited mileage",
//     price: 140,
//     img: "img-4.png",
//   },
//   {
//     name: "Tesla Model S",
//     type: "Compact",
//     persons: 5,
//     fuel: "Electric",
//     meter: "Unlimited mileage",
//     price: 132,
//     img: "img-5.png",
//     deal: "Special deal",
//   },
//   {
//     name: "Tesla Model X",
//     type: "Standard",
//     persons: 5,
//     fuel: "Electric",
//     meter: "Unlimited mileage",
//     price: 130,
//     img: "img-6.png",
//   },
// ];

function CarCard({ name, type, persons, fuel, meter, price, img }) {
  return (
    <div className="card">
      <div className="card--image">
        <img
          src={require(`../assets/images/${img}`).default}
          alt="Tesla model 3"
        />
      </div>
      <div className="card--body">
        <div className="title-wrapper">
          <div className="body-title">
            <h4>{type}</h4>
            <p>{name}</p>
          </div>
          <div className="body-tag">Special Deal</div>
        </div>

        <div className="features">
          <h6>Features</h6>

          <div className="features-wrapper">
            <div className="features-items features-users">
              <FiUsers color="#747c84" />
              <p>{persons}</p>
            </div>
            <div className="features-items features-pump">
              <GiGasPump color="#747c84" />
              <p>{fuel}</p>
            </div>
          </div>
          <div className="features-items features-miles">
            <IoSpeedometerOutline color="#747c84" />
            <p>{meter}</p>
          </div>
        </div>
      </div>

      <div className="card--footer">
        <div className="footer-price">
          <h3>$ {price}</h3>
          <p>per day</p>
        </div>
        <div className="footer-button">
          <button>Reserve deal</button>
        </div>
      </div>
    </div>
  );
}

export default CarCard;
