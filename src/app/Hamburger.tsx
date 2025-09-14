import { useState, useEffect } from "react";

type HamburgerProps = {
  onClick: () => void;
};

const Hamburger = ({ onClick }: HamburgerProps) => {
  return (
    <button className="space-y-1 cursor-pointer" onClick={onClick}>
      <span className="block h-0.5 w-4 animate-pulse bg-gray-600"></span>
      <span className="block h-0.5 w-4 animate-pulse bg-gray-600"></span>
      <span className="block h-0.5 w-4 animate-pulse bg-gray-600"></span>
    </button>
  );
};
export default Hamburger;
