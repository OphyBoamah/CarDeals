import React from "react";

function Sidebar(props) {
  return (
    <aside>
      <h5>Filter by</h5>

      <div className="aside-first">
        <p className="mini-headings">Car type</p>
        <div className="aside-checkboxes">
          <label htmlFor="">
            <input type="checkbox" className="checkbox" />
            Mini 5
          </label>
          <label htmlFor="">
            <input type="checkbox" className="checkbox" />
            Standard 5
          </label>
          <label htmlFor="">
            <input type="checkbox" className="checkbox" />
            Compact 5
          </label>
          <label htmlFor="">
            <input type="checkbox" className="checkbox" />
            Economy 5
          </label>
          <label htmlFor="">
            <input type="checkbox" className="checkbox" />
            Van 5
          </label>
          <label htmlFor="">
            <input type="checkbox" className="checkbox" />
            Pickup 5
          </label>
          <label htmlFor="">
            <input type="checkbox" className="checkbox" />
            Other 5
          </label>
        </div>
      </div>

      <div className="aside-second">
        <p className="mini-headings">Capacity</p>

        <div>
          <label htmlFor="">
            <input type="checkbox" />
            2-5 Passengers 28
          </label>
          <label htmlFor="">
            <input type="checkbox" />6 or more Passengers 12
          </label>
        </div>
      </div>

      <div>
        <p className="mini-headings">Daily price</p>

        <div>
          <label htmlFor="">
            <input type="range" />
          </label>
          <p>max. $180.00</p>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
