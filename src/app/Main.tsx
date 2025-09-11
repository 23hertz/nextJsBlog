"use client";
import Topics from "./Topics";
import Nav from "./Nav";
import Aside from "./Aside";
import { useState } from "react";

type MainProps = {
  searchQuery: string;
};

const Main = ({ searchQuery }: MainProps) => {
  // const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="mx-auto">
      <div className="flex min-h-screen">
        <div className="w-[15%]">
          <Nav />
        </div>
        <div className="w-[65%]">
          {/* <Topics /> */}
          {/* 🔍 Search Bar */}
          <div className="mb-6">
            {/* <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} /> */}
          </div>

          {/* 📝 Topics List (filtered) */}
          <Topics searchQuery={searchQuery} />
        </div>
        <div className="w-[20%]">
          <Aside />
        </div>
      </div>
    </div>
  );
};

export default Main;
