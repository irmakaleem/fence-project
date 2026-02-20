import React from "react";

const Footer = () => {
  return (
    <footer
      className="relative min-h-[2000px] text-white bg-cover bg-no-repeat "
      style={{
        backgroundImage: "url('/footerbg.svg')",
        backgroundColor: "#EFE4CE",
      }}
    >
      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 pt-96 pb-36">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* LEFT SIDE */}
          <div>
            <span className="inline-flex items-center gap-2 bg-[#D79327] text-white text-[15px] font-semibold px-6 py-3 rounded-full mb-6">
              <img
                src="/assets/location.svg"
                alt="location icon"
                className="w-8 h-8"
              />
              Serving Raleigh, Clayton, Cary, and surrounding areas
            </span>

            <h2 className="text-3xl md:text-[70px] font-semibold  leading-tight">
              Defining Your Space with{" "}
              <span className="text-[#D79327]">Premier Fencing Solutions.</span>
            </h2>

            <p className="mt-4 text-gray-300 text-[20px] max-w-lg">
              From residential privacy to heavy-duty commercial security, we
              combine five years of craftsmanship with top-tier materials to
              protect what matters most to you.
            </p>

            <div className="mt-6 flex gap-4 flex-wrap">
              <button className="bg-[#D79327] text-white px-8 py-3 rounded-lg font-semibold text-[16px]">
                View Our Work
              </button>
              <button className="border border-white px-8 py-3 rounded-lg text-[16px]">
                Text Us for an Estimate
              </button>
            </div>

            <ul className="mt-10 space-y-8 text-[22px] font-medium text-white ">
              <li className="flex items-start gap-3 ">
                <img
                  src="/assets/phone.svg"
                  alt="phone icon"
                  className="w-8 h-8 "
                />
                <span>(919) 985-4362 (Text Messages Only)</span>
              </li>

              <li className="flex items-start gap-3 ">
                <img
                  src="/assets/clock.svg"
                  alt="clock icon"
                  className="w-8 h-8 "
                />
                <span>Monday – Saturday: 8:00 AM – 5:00 PM</span>
              </li>

              <li className="flex items-start gap-3 ">
                <img
                  src="/assets/check.svg"
                  alt="check icon"
                  className="w-8 h-8 "
                />
                <span>Free Estimates Available</span>
              </li>
            </ul>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] rounded-[28px] p-10 shadow-xl min-h-[800px] flex flex-col justify-between">
            {/* Heading */}
            <div>
              <h3 className="text-center text-2xl md:text-3xl font-semibold mb-10">
                <span className="block text-white">
                  Get Your <span className="text-[#D79327]">Free</span>
                </span>

                <span className="block bg-gradient-to-r from-[#D79327] to-[#ffc24f] bg-clip-text text-transparent">
                  Estimate Today!
                </span>
              </h3>

              {/* Form */}
              <form className="space-y-8">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-transparent border-b border-white/80 pb-10 outline-none placeholder:text-gray-200"
                />

                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full bg-transparent border-b border-white/80 pb-10 outline-none placeholder:text-gray-200"
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-transparent border-b border-white/80 pb-10 outline-none placeholder:text-gray-200"
                />

                <textarea
                  placeholder="Message"
                  rows={3}
                  className="w-full bg-transparent outline-none placeholder:text-gray-200 resize-none"
                />

                {/* Extra Divider Line Above Button */}
                <div className="border-t-2 border-white/80 mt-20">
                  <button
                    type="submit"
                    className="w-full mt-20 bg-gradient-to-r from-[#f6b354] to-[#e27a2d] text-black py-3 rounded-xl font-semibold shadow-md hover:opacity-90 transition"
                  >
                    Request Free Estimate
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="px-6 pb-6 ">
        <div
          className="max-w-7xl mx-auto
      rounded-xl
      bg-white/5
      backdrop-blur-md
      border border-white/10
      text-gray-300 text-sm
      flex flex-col md:flex-row
      items-center justify-between
      gap-4 px-8 py-5
      shadow-[0_0_60px_rgba(255,255,255,0.05)]"
        >
          {/* Left */}
          <div className="text-center md:text-left">
            Privacy Policy | Your Privacy Choices
          </div>

          {/* Center */}
          <div className="text-center">
            © 2025 FENCE F&A MM LLC. All rights Reserved.
          </div>

          {/* Right */}
          <div className="text-center md:text-right">
            Web Design &nbsp; | &nbsp; By Latin Branding
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
