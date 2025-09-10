// "use client";
// import Search from "./Search";
// import Topics from "./Topics";
// import { useState } from "react";

// type HeaderProps = {
//   searchQuery?: string;
//   setSearchQuery?: (value: string) => void;
// };

// const Header = ({ searchQuery="", setSearchQuery }: HeaderProps) => {

//   return (
//     <div className="py-4 bg-white shadow">
//       <div className="px-4 mx-auto flex justify-between items-center">
//         <div className="HAMBURGER-ICON space-y-1">
//           <span className="block h-0.5 w-4 animate-pulse bg-gray-600"></span>
//           <span className="block h-0.5 w-4 animate-pulse bg-gray-600"></span>
//           <span className="block h-0.5 w-4 animate-pulse bg-gray-600"></span>
//         </div>
//         {/* Logo */}
//         <h1 className="{geistLora} text-4xl ml-4 ">B-LOG</h1>

//         <div className="flex flex-1 justify-start">
//           <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
//         </div>

//         {/* User info */}
//         <div className="flex gap-2 font-bold text-gray-500 items-center">
//           <h2>Welcome Luis</h2>
//           <img
//             src="./images/john.jpg"
//             alt="User avatar"
//             className="w-10 h-10 rounded-full object-cover"
//           />
//         </div>
//       </div>
//       {/* <Topics searchQuery={searchQuery} /> */}
//     </div>
//   );
// };

// export default Header;


"use client";

import Search from "./Search";

type HeaderProps = {
  searchQuery?: string;
  setSearchQuery?: (value: string) => void;
};

const Header = ({ searchQuery = "", setSearchQuery }: HeaderProps) => {
  return (
    <div className="py-4 bg-white shadow">
      <div className="px-4 mx-auto flex justify-between items-center">
        {/* Hamburger Icon */}
        <div className="HAMBURGER-ICON space-y-1">
          <span className="block h-0.5 w-4 animate-pulse bg-gray-600"></span>
          <span className="block h-0.5 w-4 animate-pulse bg-gray-600"></span>
          <span className="block h-0.5 w-4 animate-pulse bg-gray-600"></span>
        </div>

        {/* Logo */}
        <h1 className="text-4xl ml-4 font-bold">B-LOG</h1>

        {/* Show Search only if setSearchQuery is provided */}
        {setSearchQuery && (
          <div className="flex flex-1 justify-start">
            <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          </div>
        )}

        {/* User info */}
        <div className="flex gap-2 font-bold text-gray-500 items-center">
          <h2>Welcome Luis</h2>
          <img
            src="/images/john.jpg"
            alt="User avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
