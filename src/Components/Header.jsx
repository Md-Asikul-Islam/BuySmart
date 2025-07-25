import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context";

const Header = () => {
  const { searchTerm, handleChange } = useContext(CartContext);
  return (
    <header className="border-b border-gray-200 py-4 px-4 md:px-8 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-800">
          LWS.SHOP
        </Link>

        {/* Menu Links */}
        <nav className="hidden md:flex space-x-6 font-medium text-gray-700">
          <Link to="#" className="hover:text-black transition">
            Shop
          </Link>
          <Link to="#" className="hover:text-black transition">
            On Sale
          </Link>
          <Link to="#" className="hover:text-black transition">
            New Arrivals
          </Link>
          <Link to="#" className="hover:text-black transition">
            Brands
          </Link>
        </nav>

        {/* Search & Icons */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={handleChange}
              className="bg-gray-100 rounded-full py-2 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
            />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-400 absolute right-3 top-2.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          {/* Cart Icon */}
          <Link to="#" className="text-gray-600 hover:text-black">
            {/* Cart SVG */}
          </Link>

          {/* Profile Icon */}
          <Link to="#" className="text-gray-600 hover:text-black">
            {/* Profile SVG */}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
