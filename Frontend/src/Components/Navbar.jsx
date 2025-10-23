import React from "react";

function Navebar() {
  return (
    <>
      <div className="h-20 rounded-l bg-black flex items-center justify-between">
        {/* logo */}
        <div className = "flex items-center">
          <img className="h-20 w-30" src="/logo.jfif" alt="" />
          <span className="text-white text-2xl font-extrabold">Mess</span>
          <span className="text-2xl font-extrabold text-red-500 ">Mate</span>
        </div>

         {/* tabs */}
         <div className="text-white w-120">
            <ul className="flex justify-evenly items-center text">
            <li>Home</li>
            <li>Fetures</li>
            <li>Plan</li>
            <li>Signup/Profile</li>
            </ul>
         </div>
 
      </div>
    </>
  );
}

export default Navebar;
