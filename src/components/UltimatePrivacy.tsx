import React from "react";

const UltimatePrivacy = () => {
  return (
    <section className=" w-full bg-[#F8F1D9] pb-24 relative">
      {/* Top Wooden Background */}
      <div
        className="w-full h-[420px]  bg-cover bg-center relative"
        style={{ backgroundImage: "url('/assets/wooden.png')" }}
      >
        <div className="max-w-[1200px] mx-auto px-6 pt-16 text-white/90">
          <h2 className="text-4xl md:text-[60px] font-semibold leading-tight">
            Ultimate <br /> Privacy
          </h2>
          <p className="mt-4 max-w-sm text-white/90 text-[18px]">
            Overlapping boards that eliminate gaps entirely. Perfect for keeping
            pets in and prying eyes out.
          </p>
        </div>
      </div>

      {/* Middle Content */}
      <div className="max-w-[1200px] mx-auto px-6 relative -mt-20">
        <div className="grid gap-12  grid-cols-12 items-center">
          {/* Image */}
          <div className="rounded-[105px] overflow-hidden shadow-lg h-[500px] col-span-7">
            <img
              src="/assets/ContemporaryLines.png"
              alt="Fence"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Text */}
          <div className="col-span-5">
            <h3 className="text-[60px] font-semibold text-black/90">
              Contemporary <br /> Lines
            </h3>
            <p className="mt-2text-[20px] text-black/90 max-w-md">
              Sleek, horizontal planks that provide a modern, high-end look for
              new-age residential architecture.
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="w-full flex justify-center mt-20">
          <div className="flex items-end gap-8">
            {/* Left Card */}
            <div className="bg-[#D7922C] text-white w-[280px] h-[300px] p-8 rounded-[32px] flex flex-col justify-start">
              <h4 className="text-[26px] font-semibold leading-snug">
                Pressure–Treated <br /> Posts
              </h4>
              <p className="mt-4 text-[16px] text-white/90 leading-relaxed">
                We use heavy-duty, ground-contact rated posts to prevent rot and
                ensure structural integrity for decades.
              </p>
            </div>

            {/* Middle Card (Bigger Properly) */}
            <div className="bg-gradient-to-b from-[#3E2A15] to-[#7A5520] text-white w-[340px] h-[340px] p-10 rounded-[40px] shadow-xl flex flex-col justify-start">
              <h4 className="text-[28px] font-semibold leading-snug">
                Galvanized <br /> Fasteners.
              </h4>
              <p className="mt-6 text-[18px] text-white/90 leading-relaxed">
                No rust streaks. We use professional-grade galvanized nails and
                hardware to maintain the wood’s beauty.
              </p>
            </div>

            {/* Right Card */}
            <div className="bg-[#D7922C] text-white w-[280px] h-[300px] p-8 rounded-[32px] flex flex-col justify-start">
              <h4 className="text-[26px] font-semibold leading-snug">
                Custom <br /> Gates.
              </h4>
              <p className="mt-4 text-[16px] text-white/90 leading-relaxed">
                Engineered with anti-sag technology. Our wood gates open as
                smoothly on year five as they do on day one.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimatePrivacy;
