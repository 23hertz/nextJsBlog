"use client";
import Header from "./Header";
import Aside from "./Aside";
import Topics from "./Topics";

import Nav from "./Nav";
import { useState } from "react";
const Wrapper = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <div className="h-auto sticky top-0 z-30">
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <div className="flex min-h-screen">
        {/* <div
          className={`fixed lg:static top-0 left-0 h-full bg-white shadow-lg z-20 transform transition-transform duration-300 
          ${menuOpen ? "translate-x-0 w-[60%] mt-[110px]" : "-translate-x-full"} 
          lg:translate-x-0 lg:w-[15%] lg:mt-0`}
        >
          <Nav menuOpen={menuOpen} />
        </div> */}

        <div
          className={`fixed lg:static top-[72px] lg:top-0 left-0 h-full bg-white shadow-lg z-20 transform transition-transform duration-300
    ${menuOpen ? "translate-x-0 w-[60%]" : "-translate-x-full"} 
    lg:translate-x-0 lg:w-[15%]`}
        >
          <Nav menuOpen={menuOpen} />
        </div>

        <div className="flex-1 lg:w-[65%]">
          <Topics searchQuery={searchQuery} />
        </div>
        <div className="hidden lg:block lg:w-[30%]">
          <Aside />
        </div>
      </div>

      {/* <Main searchQuery={searchQuery} /> */}
    </div>
  );
};

export default Wrapper;
