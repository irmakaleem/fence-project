import React from "react";

const ThirdSection: React.FC = () => {
  return (
    <section className="bg-[#2b1711] text-white py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 justify-center">
        {/* Top hero card */}
        {/* Top hero card */}
        <div className="relative mx-auto w-full max-w-5xl rounded-[20px] overflow-hidden shadow-lg">
          <div
            className="relative h-[260px] md:h-[360px] lg:h-[420px] bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/builtforbusiness.png')" }}
          >
            <div className="absolute inset-0 bg-black/45" />

            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 max-w-xl text-white">
              <h3 className="text-[20px] md:text-2xl font-semibold">
                Built for Business. Built for Security
              </h3>

              <p className="mt-3 text-sm md:text-base text-white/80">
                Heavy-duty chain link and security-grade barriers serving the
                Durham, North Carolina business community.
              </p>
            </div>
          </div>
        </div>

        {/* Two feature cards */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-10 max-w-5xl mx-auto w-full  h-[32rem] md:h-auto">
          <div
            className="relative rounded-[20px] shadow-lg flex-1 h-64 md:h-72 bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/poolsafety.png')" }}
          >
            <div className="absolute inset-0 bg-black/40" />

            <h3 className="absolute bottom-6 left-6 text-white text-xl md:text-2xl font-semibold">
              Pool Safety
            </h3>
          </div>

          <div
            className="relative rounded-[20px]  shadow-lg flex-1 h-64 md:h-72 bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/petenclosures.png')" }}
          >
            <div className="absolute inset-0 bg-black/40" />

            <h3 className="absolute bottom-6 left-6 text-white text-xl md:text-2xl font-semibold">
              Pet Enclosures
            </h3>
          </div>
        </div>

        {/* CTA SECTION */}
        <CTASection />
      </div>
    </section>
  );
};

const CTASection: React.FC = () => {
  return (
    <div className=" mt-[140px] mb-[-240px] max-w-[1339px] relative z-[2] ">
      <div className="relative  rounded-[40px] bg-gradient-to-r from-[#f3a73f] to-[#e67e3d] px-8  md:px-16  flex flex-col md:flex-row items-center justify-between min-h-[653px] ">
        {/* Left Content */}
        <div className="max-w-lg text-left text-black">
          <h2 className="text-3xl md:text-4xl lg:text-[70px] font-semibold leading-tight">
            Ready to <br />
            start your <br />
            project?
          </h2>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="bg-black text-white px-6 py-3 rounded-md text-[18px] font-semibold hover:bg-gray-800 transition bg-gradient-to-r from-[#3A2C1D] to-[#7B551F]">
              View Our Work
            </button>

            <button className="border border-black px-6 py-3 rounded-md text-[18px] font-medium hover:bg-black hover:text-white transition">
              Text Us for an Estimate
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="absolute top-[-41%] right-0 h-[923px] w-[834px]">
          <img
            src="/assets/readytostart.png"
            alt="Ready to start"
            className="w-full  object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
