"use client";

import Search from "./Search";
import Hamburger from "./Hamburger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKeyboard } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";

type HeaderProps = {
  searchQuery?: string;
  setSearchQuery?: (value: string) => void;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
};

const Header = ({
  searchQuery = "",
  setSearchQuery,
  menuOpen,
  setMenuOpen,
}: HeaderProps) => {
  return (
    <div className="py-2 bg-white shadow w-full">
      <div className="px-4 mx-auto flex justify-between items-center w-full">
        {/* ✅ Group Hamburger + Logo together */}
        <div className="flex items-center gap-2">
          <Hamburger onClick={() => setMenuOpen(!menuOpen)} />
          <h1 className="text-base sm:text-xl lg:text-2xl font-bold">B-LOG</h1>
        </div>

        {/* Show Search only if setSearchQuery is provided */}
        {setSearchQuery && (
          <div className="hidden sm:flex flex-1 justify-start ml-4">
            <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          </div>
        )}

        {/* User info */}
        <div className="flex gap-6 font-bold text-gray-500 items-center">
          <Link href="/Create" className="flex flex-row gap-2">
            <h3 className="text-base">Create</h3>
            <FontAwesomeIcon icon={faKeyboard} className="font-xl mr-2 mt-1" />
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
