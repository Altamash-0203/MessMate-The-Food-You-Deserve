import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

function Navebar() {
  return (
    <>
      <div className="h-20  w-auto bg-black flex items-center justify-between">
        {/* logo */}
        <div className="flex items-center ml-2">
          <span className="text-white text-2xl font-extrabold">Mess</span>
          <span className="text-2xl font-extrabold text-red-600 ">Mate</span>
        </div>

        {/* tabs */}
        <div className="text-white w-120 mr-0">
          <ul className="flex justify-evenly items-center text">
            <li
              className="relative text-l font-thin text-white after:absolute after:left-0 after:bottom-0 
  after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-700 
  hover:after:w-full "
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className="relative text-l font-thin text-white after:absolute after:left-0 after:bottom-0 
  after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-700 
  hover:after:w-full"
            >
              <Link to="/feature">Features</Link>
            </li>
            <li
              className="relative text-l font-thin text-white after:absolute after:left-0 after:bottom-0 
  after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-700 
  hover:after:w-full"
            >
              <Link to="/plan">Plan</Link>
            </li>
            <li
              className="relative text-l font-thin text-white after:absolute after:left-0 after:bottom-0 
  after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-700 
  hover:after:w-full"
            >
              <Link to="/login">Signup/Profile</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navebar;
