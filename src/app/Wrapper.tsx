"use client";
import Header from "./Header";
import Main from "./Main";
import { useState } from "react";
const Wrapper = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="h-auto">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Main searchQuery={searchQuery} />
    </div>
  );
};

export default Wrapper;
