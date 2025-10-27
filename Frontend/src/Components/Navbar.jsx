import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

function Navebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="h-20 w-full bg-black flex items-center justify-between px-4">
        {/* logo */}
        <div className="flex items-center">
          <span className="text-white text-2xl font-extrabold">Mess</span>
          <span className="text-2xl font-extrabold text-red-600">Mate</span>
        </div>

        {/* desktop tabs */}
        <div className="hidden md:flex text-white">
          <ul className="flex justify-evenly items-center gap-6">
            <li className="relative text-l font-thin text-white after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-700 hover:after:w-full">
              <Link to="/">Home</Link>
            </li>
            <li className="relative text-l font-thin text-white after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-700 hover:after:w-full">
              <Link to="/feature">Features</Link>
            </li>
            <li className="relative text-l font-thin text-white after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-700 hover:after:w-full">
              <Link to="/plan">Plan</Link>
            </li>
            <li className="relative text-l font-thin text-white after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-700 hover:after:w-full">
              <Link to="/login">Signup/Profile</Link>
            </li>
          </ul>
        </div>

        {/* hamburger button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black text-white px-4 py-4">
          <ul className="flex flex-col gap-4">
            <li>
              <Link to="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/feature" onClick={() => setIsOpen(false)}>
                Features
              </Link>
            </li>
            <li>
              <Link to="/plan" onClick={() => setIsOpen(false)}>
                Plan
              </Link>
            </li>
            <li>
              <Link to="/login" onClick={() => setIsOpen(false)}>
                Signup/Profile
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navebar;
