import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

function Navebar() {
  return (
    <>
      <div className="h-20  w-auto rounded-l bg-black flex items-center justify-between">
        {/* logo */}
        <div className="flex items-center ml-5">
          <span className="text-white text-2xl font-extrabold">Mess</span>
          <span className="text-2xl font-extrabold text-red-600 ">Mate</span>
        </div>

        {/* tabs */}
        <div className="text-white w-120 mr-5">
          <ul className="flex justify-evenly items-center text">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/features">Features</Link>
            </li>
            <li>
              <Link to="/plan">Plan</Link>
            </li>
            <li>
              <Link to="/login">Signup/Profile</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navebar;
