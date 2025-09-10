"use client";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type SearchProps = {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
};

const Search = ({ searchQuery, setSearchQuery }: SearchProps) => {
  return (
    <div className="relative w-[30rem] max-w-full">
      <form
        className="relative bg-gray  mt-6 ml-20"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="block w-64 pl-10 h-10 mb-6 border border-none bg-gray-100 rounded-4xl shadow-inner text-gray-800 pr-10 hover:border:transparent focus:ring-0 focus:border-none"
          placeholder="Search"
        />
        <FontAwesomeIcon
          icon={faSearch}
          className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
        />
      </form>
    </div>
  );
};

export default Search;
