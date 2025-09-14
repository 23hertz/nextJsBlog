"use client";

import Search from "./Search";
import Hamburger from "./Hambuger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faKeyboard } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";

type HeaderProps = {
  searchQuery?: string;
  setSearchQuery?: (value: string) => void;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
};

const handleHamburgerClick = () => {
  console.log("Hamburger clicked!"); // replace with toggle menu logic
};

const Header = ({
  searchQuery = "",
  setSearchQuery,
  menuOpen,
  setMenuOpen,
}: HeaderProps) => {
  return (
    <div className="py-2 bg-white shadow">
      <div className="px-4 mx-auto flex justify-between items-center">
        {/* Hamburger Icon */}
        <div className="HAMBURGER-ICON space-y-1">
          <Hamburger onClick={() => setMenuOpen(!menuOpen)} />
        </div>

        {/* Logo */}
        <h1 className="text-2xl ml-4 font-bold">B-LOG</h1>

        {/* Show Search only if setSearchQuery is provided */}
        {setSearchQuery && (
          <div className="flex flex-1 justify-start">
            <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          </div>
        )}

        {/* User info */}
        <div className="flex gap-2 font-bold text-gray-500 items-center">
          <Link href="/Create" className="flex flex-row gap-2">
            <h3 className="text-base">Create</h3>
            <FontAwesomeIcon icon={faKeyboard} className="font-xl mr-3 mt-1" />
          </Link>

          <Link href="/counter">
            <img
              src="/images/bell.png"
              alt="User avatar"
              className="w-5 h-5 rounded-full object-cover"
            />
          </Link>

          <Image
            src="/images/john.jpg"
            alt="User avatar"
            width={24}
            height={24}
            className="rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;

