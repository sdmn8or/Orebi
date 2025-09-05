import { FaUser, FaShoppingCart, FaSearch, FaBars } from "react-icons/fa";
import { useState } from "react";
import "../App.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full shadow-sm">
      <div className="container mx-auto">
        {/* Top Navbar */}
        <div className="flex items-center justify-between px-8 py-4 bg-white">
          {/* Logo */}
          <h1 className="text-2xl font-bold tracking-wide">OREBI</h1>

          {/* Nav Links */}
          <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
            {["Home", "Shop", "About", "Contacts", "Journal"].map((item) => (
              <li
                key={item}
                className="hover:text-black cursor-pointer border-b-2 border-transparent hover:border-black transition"
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            <FaBars />
          </button>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-6 text-gray-700 text-lg">
            <FaUser className="cursor-pointer hover:text-black" aria-label="Account" />
            <FaShoppingCart classNam-e="cursor-pointer hover:text-black" arialabel="Cart" />
          </div>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-white px-8 py-4 space-y-4 shadow">
            {["Home", "Shop", "About", "Contacts", "Journal"].map((item) => (
              <div
                key={item}
                className="text-gray-700 font-medium cursor-pointer hover:text-black"
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Navbar (full-width gray background) */}
      <div className="bg-gray-50">
        <div className="container mx-auto flex items-center justify-between px-8 py-3">
          {/* Shop by Category */}
          <button className="flex items-center space-x-2 text-gray-700 cursor-pointer">
            <FaBars />
            <span>Shop by Category</span>
          </button>

          {/* Search Bar */}
<div className="relative w-1/2">
  <input
    type="text"
    placeholder="Search Products"
    className="w-full py-2 pl-3 pr-10 border border-gray-300 rounded-md outline-none bg-white"
  />
  <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer" />
</div>


          {/* Placeholder for Right Empty Space */}
          <div className="hidden md:block w-24"></div>
        </div>
      </div>
    </nav>
  );
}
