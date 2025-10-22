import React from "react";

function Navebar() {
  return (
    <>
      <div className="h-20 rounded-l bg-black flex items-center justify-between">
        {/* logo */}
        <div>
          <img className="h-20 w-30" src="/logo.jfif" alt="" />
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
