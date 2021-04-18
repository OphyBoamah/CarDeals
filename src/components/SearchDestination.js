import React from "react";

function SearchDestination(props) {
  return (
    <div className="search">
      <div className="search--country search-background">
        <span>Leaving from</span>
        <input type="text" placeholder="search your destination" />
      </div>
      <div className="search--pickup-date search-background">
        <span>Pick-up date</span>
        <input type="date" />
      </div>
      <div className="search--dropoff-date search-background">
        <span>Drop-off date</span>
        <input type="date" />
      </div>
      <div className="search--pickup-time search-background">
        <span>Pick-up time</span>
        <input type="time" />
      </div>
      <div className="search--dropoff-time search-background">
        <span>Drop-off time</span>
        <input type="time" />
      </div>
      <div className="search--button">
        <button type="submit">Search</button>
      </div>
    </div>
  );
}

export default SearchDestination;
