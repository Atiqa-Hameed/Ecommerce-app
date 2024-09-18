import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { CiSearch, CiUser, CiMenuBurger } from 'react-icons/ci';
import { BsHandbag } from 'react-icons/bs';
import { IoIosArrowBack } from 'react-icons/io';
import { useState } from 'react';

const UserDropdown = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  return (
    <div className="relative">
      <Link to="/login">
        <CiUser
          className="w-6 h-6 cursor-pointer"
          onClick={() => setDropdownVisible(prev => !prev)}
          aria-haspopup="true"
          aria-expanded={dropdownVisible}
        />
      </Link>
      {dropdownVisible && (
        <div
          className="absolute right-0 mt-2 w-36 py-2 bg-slate-100 border border-gray-200 rounded shadow-lg z-30"
          role="menu"
          aria-orientation="vertical"
        >
          <Link
            to="/profile"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            role="menuitem"
            onClick={() => setDropdownVisible(false)}
          >
            My Profile
          </Link>
          <Link
            to="/orders"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            role="menuitem"
            onClick={() => setDropdownVisible(false)}
          >
            Orders
          </Link>
          <button
            className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100 text-left"
            role="menuitem"
            onClick={() => {
              setDropdownVisible(false);
              // Add logout logic here if needed
            }}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

const Navbar = ({ setShowSearch }) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <div className="relative flex items-center justify-between font-medium px-4 py-4 bg-white shadow-md">
      <Link to="/">
        <span className="text-blue-900 text-3xl py-7 px-5 font-bold">𝓣𝓻𝓮𝓷𝓭𝓲𝓯𝔂</span>
      </Link>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1" activeClassName="text-blue-500">HOME</NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1" activeClassName="text-blue-500">COLLECTION</NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1" activeClassName="text-blue-500">ABOUT</NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1" activeClassName="text-blue-500">CONTACT</NavLink>
      </ul>
      <div className="flex items-center gap-6">
        <CiSearch onClick={() => setShowSearch(true)} className="w-6 h-6 cursor-pointer" aria-label="Search" />
        <UserDropdown />
        <Link to="/cart" className="relative">
          <BsHandbag className="w-6 h-6 cursor-pointer" aria-label="Cart" />
          {cartQuantity > 0 && (
            <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
              {cartQuantity}
            </p>
          )}
        </Link>
        <CiMenuBurger onClick={() => setSidebarVisible(true)} className="w-6 h-6 cursor-pointer sm:hidden" aria-label="Menu" />
      </div>
      <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transition-transform transform ${sidebarVisible ? 'translate-x-0' : 'translate-x-full'} z-40`}>
        <div className="flex flex-col text-gray-600">
          <div onClick={() => setSidebarVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
            <IoIosArrowBack />
            <p>Back</p>
          </div>
          <NavLink onClick={() => setSidebarVisible(false)} className="py-2 pl-6 border-b" to="/">Home</NavLink>
          <NavLink onClick={() => setSidebarVisible(false)} className="py-2 pl-6 border-b" to="/collection">COLLECTION</NavLink>
          <NavLink onClick={() => setSidebarVisible(false)} className="py-2 pl-6 border-b" to="/about">ABOUT</NavLink>
          <NavLink onClick={() => setSidebarVisible(false)} className="py-2 pl-6 border-b" to="/contact">CONTACT</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;





