import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { LuX } from "react-icons/lu";

const SearchBar = ({ showSearch, setShowSearch }) => {
  const [search, setSearch] = useState("");

  return showSearch ? (
    <div className="relative bg-gray-50 py-4 px-3 flex items-center justify-center">
      <div className="relative flex items-center border border-gray-300 rounded-full w-3/4 sm:w-1/2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10 pr-12 py-2 w-full rounded-full border-none focus:outline-none"
          type="text"
          placeholder="Search"
        />
        <CiSearch className="absolute left-3 text-gray-600 w-5 h-5" />
        {search && (
          <LuX
            onClick={() => setSearch("")}
            className="absolute right-12 text-gray-600 w-5 h-5 cursor-pointer"
          />
        )}
      </div>
      <button
        onClick={() => setShowSearch(false)}
        className="absolute right-12 top-1/2 transform -translate-y-1/2 text-gray-600 w-6 h-6 cursor-pointer"
      >
        <LuX className="w-full h-full" />
      </button>
    </div>
  ) : null;
};

export default SearchBar;


