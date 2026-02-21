import React from "react";

const ThirdSection: React.FC = () => {
  const innerWIdth = window.innerWidth;
  const mobileBreakpoint = 768; // Tailwind's md breakpoint
  const isMobile = innerWIdth < mobileBreakpoint;

  return (
    <section className="relative bg-[#2b1711] text-white pt-8 pb-16 px-6 lg:px-12">
      <img
        className="absolute top-[-35px] inset-0 w-full z-[1]"
        src="/assets/wood.png"
        alt="brown wood"
      />
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-10 justify-center">
        {/* Top hero card */}
        {/* Top hero card */}
        <div className="relative mx-auto w-full max-w-[1375px] rounded-[20px] overflow-hidden shadow-lg">
          <div
            className="relative h-[260px] md:h-[609px] px-[27px] py-[33px]  bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/builtforbusiness.png')" }}
          >
            <div className="absolute z-[1] inset-0 bg-gradient-to-b from-transparent to-black/70" />

            <div className="relative flex flex-col h-full justify-end items-start z-10 w-full text-white/80">
              <h3 className="text-[20px] md:text-[55px] font-semibold">
                Built for Business. Built for Security
              </h3>

              <p className="mt-3 text-sm md:text-[30px] w-[900px] text-white/80">
                Heavy-duty chain link and security-grade barriers serving the
                Durham, North Carolina business community.
              </p>
            </div>
          </div>
        </div>

        {/* Two feature cards */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-10 max-w-[1375px] w-full h-auto md:h-auto">
          <div
            className="
      relative rounded-[20px] shadow-lg flex-1
      w-full sm:w-full md:w-[48%] lg:w-[720px]
      min-h-[250px] sm:min-h-[320px] md:h-[450px] lg:h-[550px]
      px-5 sm:px-6 md:px-[27px]
      py-6 sm:py-8 md:py-[33px]
      bg-cover bg-center
    "
            style={{ backgroundImage: "url('/assets/poolsafety.png')" }}
          >
            <div className="absolute z-[1] inset-0 rounded-[20px] bg-black/40" />

            <h3 className="relative flex flex-col h-full justify-end items-start z-10 w-full text-white/80 sm:text-xl md:text-4xl lg:text-[55px] font-semibold">
              Pool Safety
            </h3>
          </div>

          <div
            className="
      relative rounded-[20px] shadow-lg flex-1
      w-full sm:w-full md:w-[48%] lg:w-[720px]
     min-h-[250px] sm:min-h-[320px] md:h-[450px] lg:h-[550px]
      px-5 sm:px-6 md:px-[27px]
      py-6 sm:py-8 md:py-[33px]
      bg-cover bg-center
    "
            style={{ backgroundImage: "url('/assets/petenclosures.png')" }}
          >
            <div className="absolute z-[1] inset-0 rounded-[20px] bg-black/40" />

            <h3 className="relative flex flex-col h-full justify-end items-start z-10 w-full text-white/80 sm:text-xl md:text-4xl lg:text-[55px] font-semibold">
              Pet Enclosures
            </h3>
          </div>
        </div>
        {/* CTA SECTION */}
        {isMobile ? <CTASectionMobile /> : <CTASection />}
      </div>
    </section>
  );
};

const CTASection: React.FC = () => {
  return (
    <div className=" mt-[140px] mb-[-235px] max-w-[1339px] relative z-[2] ">
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
        <div className="absolute top-[-41%]  right-0 xl:h-[923px] xl:w-[834px]">
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

const CTASectionMobile: React.FC = () => {
  return (
    <div
      id="cta-mobile"
      className=" mt-[140px] mb-[-235px] max-w-[1339px] relative z-[2] "
    >
      <div className="relative  rounded-[40px] bg-gradient-to-r from-[#f3a73f] to-[#e67e3d] flex flex-col pt-20 items-center justify-between   ">
        {/* Left Content */}
        <div className="max-w-lg px-8 text-center text-black">
          <h2 className="text-[50px] font-semibold leading-tight">
            Ready to start your project?
          </h2>

          <div className="mt-8 flex justify-between gap-2">
            <button className="bg-black text-white px-4 py-3 rounded-md text-[10px] font-semibold hover:bg-gray-800 transition bg-gradient-to-r from-[#3A2C1D] to-[#7B551F]">
              View Our Work
            </button>

            <button className="border border-black px-4 py-3 rounded-md text-[10px] font-medium hover:bg-black hover:text-white transition">
              Text Us for an Estimate
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className=" h-[334px] w-[334px]">
          <img
            src="/assets/readytostart.png"
            alt="Ready to start"
            className="  absolute inset-0 bottom-0 w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
