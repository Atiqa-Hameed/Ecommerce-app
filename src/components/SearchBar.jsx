import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { LuX } from "react-icons/lu";

const SearchBar = ({ showSearch, setShowSearch }) => {
  const [search, setSearch] = useState("");

  return showSearch ? (
    <div className="border-t border-b bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10 pr-4 py-2 w-full rounded-full focus:outline-none"

          type="text"
          placeholder="Search"
        />
        <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-600" />

      </div>
      <LuX
        onClick={() => setShowSearch(false)}
        className="inline w-6 cursor-pointer"
      />
    </div>
  ) : null;
};

export default SearchBar;

