import React from "react";
import { AiOutlineGlobal, BsStarFill, BsStarHalf } from "react-icons/all";

function Nav(props) {
  return (
    <nav className="main-nav">
      <div className="ratings">
        <div className="ratings--star">
          <BsStarFill color="#ffc600" />
          <BsStarFill color="#ffc600" />
          <BsStarFill color="#ffc600" />
          <BsStarFill color="#ffc600" />
          <BsStarHalf color="#ffc600" />
        </div>
        <div className="ratings--rate">
          <p>4.6 of 5</p>
        </div>
        <div className="ratings--review">
          <p>based on 2500+ reviews</p>
        </div>
      </div>
      <div className="actions">
        <div className="actions--country">
          <AiOutlineGlobal color="#747c84" />
          <p>United States</p>
        </div>
        <div className="actions--register">
          <p>Register</p>
        </div>
        <div className="actions--login">
          <p>Login</p>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
