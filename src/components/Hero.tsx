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
    <section className="relative min-h-[140vh] overflow-hidden text-white font-[Inter] bg-cover bg-center bg-no-repeat">
      {/* Stars background */}
      <div className="absolute inset-0 bg-[url('/assets/hero1.png')] bg-cover bg-no-repeat bg-center"></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Tree image */}
      <div
        className="absolute bottom-0 left-0 w-full h-[70%] bg-no-repeat bg-cover"
        style={{
          backgroundImage: "url('/assets/hero2.png')",
          backgroundPosition: "center 50%",
        }}
      ></div>

      {/* hero content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 pt-40">
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
      <div></div>
    </section>
  );
};

export default React.memo(Hero);
