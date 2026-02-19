import React from "react";

const Footer = () => {
  return (
    <footer
      className="relative text-white bg-black h-[70%] bg-cover bg-no-repeat bg-bottom "
      style={{
        backgroundImage: "url('/assets/footerTree.png')",
        backgroundPosition: "center 50%",
      }}
    >
      {/* WOOD STRIP */}
      <div
        className="w-full h-[90px] bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/wood.png')" }}
      />

      {/* LOGO OVERLAP */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[20px] z-10">
        <img
          src="/assets/logo.png"
          alt="Fence Logo"
          className="w-[120px] md:w-[160px]"
        />
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-24">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* LEFT SIDE */}
          <div>
            <span className="inline-block bg-[#f6b354] text-black text-xs px-4 py-2 rounded-full mb-6">
              Serving Raleigh, Clayton, Cary, and surrounding areas
            </span>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Defining Your Space with{" "}
              <span className="text-[#f6b354]">Premier Fencing Solutions.</span>
            </h2>

            <p className="mt-4 text-gray-300 max-w-lg">
              From residential privacy to heavy-duty commercial security, we
              combine five years of craftsmanship with top-tier materials to
              protect what matters most to you.
            </p>

            <div className="mt-6 flex gap-4 flex-wrap">
              <button className="bg-[#f6b354] text-black px-5 py-2 rounded-md font-semibold text-sm">
                View Our Work
              </button>
              <button className="border border-white px-5 py-2 rounded-md text-sm">
                Text Us for an Estimate
              </button>
            </div>

            <div className="mt-6 space-y-2 text-sm text-gray-300">
              <p>(919) 985-4362 (Text Messages Only)</p>
              <p>Monday – Saturday, 8:00 AM – 5:00 PM</p>
              <p>Free Estimates Available</p>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-[#111] rounded-2xl p-8 shadow-lg">
            <h3 className="text-center text-lg font-semibold mb-6">
              Get Your{" "}
              <span className="text-[#f6b354]">Free Estimate Today!</span>
            </h3>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-transparent border-b border-gray-600 py-2 outline-none"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full bg-transparent border-b border-gray-600 py-2 outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent border-b border-gray-600 py-2 outline-none"
              />
              <textarea
                placeholder="Message"
                className="w-full bg-transparent border-b border-gray-600 py-2 outline-none"
              />

              <button
                type="submit"
                className="w-full bg-[#f6b354] text-black py-3 rounded-md font-semibold mt-4"
              >
                Request Free Estimate
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-gray-800 text-center text-xs py-4 text-gray-400">
        © 2025 Fence & Deck Co. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
