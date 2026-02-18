import React, { useState, useCallback, useEffect } from "react";

const Hero: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bgIndex, setBgIndex] = useState(0);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setBgIndex((i) => (i + 1) % 2), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white font-[Inter]">
      {/* navigation */}
      <nav className="absolute top-8 left-0 w-full z-30">
        <div className="max-w-7xl mx-auto px-6 flex justify-end mb-4">
          <a
            href="#"
            className="hidden lg:inline-block bg-yellow-600 text-white text-sm font-semibold px-6 py-2 rounded-md hover:bg-yellow-400 transition"
          >
            Get a Free Estimate
          </a>
        </div>

        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* logo (hidden on mobile) */}
          <div className="flex-1 hidden lg:flex">
            <img src="/logo.png" alt="Fence Hero Logo" className="h-24 w-24" />
          </div>

          {/* desktop links */}
          <ul className="hidden lg:flex items-center gap-6 text-sm font-medium">
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

      {/* mobile overlay */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 bg-black/95 z-40 bg-gradient-to-b from-black via-yellow-600 to-black p-6 transform transition-transform duration-300 lg:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full px-6 py-8 relative">
          {/* close button */}
          <button
            id="close-menu"
            onClick={closeMenu}
            className="self-end text-white mb-10"
            aria-label="Close menu"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* logo mobile */}
          <div className="flex justify-center mb-10">
            <img src="/logo.png" alt="Fence Hero Logo" className="h-24 w-24" />
          </div>

          {/* mobile links */}
          <ul className="flex flex-col gap-6 text-center text-lg font-medium bg-black p-6 rounded-lg">
            {[
              "Home",
              "Our Solutions",
              "Commercial & Security",
              "Service Areas",
              "Contact",
            ].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="px-6 py-2 rounded-full hover:bg-yellow-600 hover:text-black transition"
                  onClick={closeMenu}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* mobile cta */}
          <a
            href="#"
            className="mt-10 bg-yellow-600 text-black text-sm font-semibold px-8 py-3 rounded-md hover:bg-yellow-400 transition mx-auto"
            onClick={closeMenu}
          >
            Get a Free Estimate
          </a>

          {/* social icons */}
          <div className="flex justify-center gap-6 mt-8">
            {/* facebook */}
            <a
              href="#"
              className="w-12 h-12 border border-white rounded-full flex items-center justify-center hover:bg-yellow-500 hover:border-yellow-500 hover:text-black transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 12a10 10 0 10-11.5 9.9v-7H7v-3h3.5V9.5c0-3.5 2-5.5 5.2-5.5 1.5 0 3 .3 3 .3v3.3h-1.7c-1.7 0-2.3 1-2.3 2.2V12H18l-.5 3h-3v7A10 10 0 0022 12z" />
              </svg>
            </a>
            {/* instagram */}
            <a
              href="#"
              className="w-12 h-12 border border-white rounded-full flex items-center justify-center hover:bg-yellow-500 hover:border-yellow-500 hover:text-black transition"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* hero content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="max-w-4xl text-center pt-20">
          <span className="inline-block bg-yellow-600 text-white text-xs font-semibold px-5 py-2 rounded-full mb-8 tracking-wide">
            Precision Craftsmanship &amp; Durability
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Defining Your Space with
            <span className="block text-yellow-600 mt-2">
              Premier Fencing <span className="text-white">in</span>
            </span>
            <span className="block mt-2">Durham, North Carolina.</span>
          </h1>

          <p className="mt-8 text-white text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
            From residential privacy fences to heavy-duty commercial security,
            we combine five years of expert experience with top-tier materials.
            We are dedicated to protecting what matters most to your property in
            the Durham area and beyond.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center">
            <a
              href="#"
              className="bg-yellow-600 text-white px-8 py-3 rounded-md text-sm font-semibold hover:bg-yellow-400 transition"
            >
              View Our Work
            </a>
            <a
              href="#"
              className="border border-white px-8 py-3 rounded-md text-sm font-semibold hover:bg-white hover:text-black transition"
            >
              Text Us for an Estimate
            </a>
          </div>
        </div>

        {/* floating social icons */}
        <div className="hidden md:flex flex-col gap-6 absolute right-10 top-1/2 -translate-y-1/2 z-20">
          <a
            href="#"
            className="w-12 h-12 border border-white rounded-full flex items-center justify-center hover:bg-yellow-500 hover:border-yellow-500 hover:text-black transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22 12a10 10 0 10-11.5 9.9v-7H7v-3h3.5V9.5c0-3.5 2-5.5 5.2-5.5 1.5 0 3 .3 3 .3v3.3h-1.7c-1.7 0-2.3 1-2.3 2.2V12H18l-.5 3h-3v7A10 10 0 0022 12z" />
            </svg>
          </a>
          <a
            href="#"
            className="w-12 h-12 border border-white rounded-full flex items-center justify-center hover:bg-yellow-500 hover:border-yellow-500 hover:text-black transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Hero);
