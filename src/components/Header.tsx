import React from "react";

interface HeaderProps {
  toggleMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleMenu }) => {
  return (
    <nav className="absolute top-8 left-0 w-full z-30 ">
      <div className="max-w-7xl mx-auto px-6 flex justify-end md:mb-[-25px] 2xl:mb-[-70px]">
        <a
          href="#"
          className="hidden lg:inline-block bg-yellow-600 text-white text-sm font-semibold px-6 py-2 rounded-md hover:bg-yellow-400 transition"
        >
          Get a Free Estimate
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-8">
        {/* logo (hidden on mobile) */}
        <div className="flex-1 hidden lg:flex">
          <img
            src="/logo.png"
            alt="Fence Hero Logo"
            className="  xl:h-[230px] xl:w-[250px] 2xl:h-[327px] 2xl:w-[350px] object-cover "
          />
        </div>

        {/* desktop links */}
        <ul className="hidden lg:flex items-center gap-6 text-sm font-medium bg-black px-6 py-2 rounded-full">
          <li>
            <a
              href="#"
              className="px-4 py-2 rounded-full hover:bg-yellow-600 hover:text-black transition"
            >
              Home
            </a>
          </li>
          <li className="relative group">
            <button className="flex items-center gap-1 px-4 py-2 rounded-full hover:bg-yellow-600 hover:text-black transition">
              Our Solutions
              <svg
                className="w-3 h-3 mt-1 text-white group-hover:text-black"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 111.08 1.04l-4.25 4.65a.75.75 0 01-1.08 0l-4.25-4.65a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* dropdown menu */}
            <ul className="absolute top-full left-0 mt-2 bg-black rounded-lg shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 w-48">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-yellow-600 hover:text-black transition rounded-t-lg"
                >
                  Option 1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-yellow-600 hover:text-black transition"
                >
                  Option 2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-yellow-600 hover:text-black transition rounded-b-lg"
                >
                  Option 3
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="#"
              className="px-4 py-2 rounded-full hover:bg-yellow-600 hover:text-black transition"
            >
              Commercial &amp; Security
            </a>
          </li>
          <li>
            <a
              href="#"
              className="px-4 py-2 rounded-full hover:bg-yellow-600 hover:text-black transition"
            >
              Service Areas
            </a>
          </li>
          <li>
            <a
              href="#"
              className="px-4 py-2 rounded-full hover:bg-yellow-600 hover:text-black transition"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* hamburger for mobile */}
        <button
          id="hamburger"
          onClick={toggleMenu}
          className="lg:hidden text-white focus:outline-none"
          aria-label="Open menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 8h16M4 16h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default React.memo(Header);
