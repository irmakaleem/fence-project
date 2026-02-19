import React from "react";

const ThirdSection: React.FC = () => {
  return (
    <section className="bg-[#2b1711] text-white py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Top hero card */}
        <div className="rounded-[20px] overflow-hidden relative mx-auto w-full max-w-5xl">
          <div
            className="relative h-[260px] md:h-[360px] lg:h-[420px]"
            style={{
              backgroundImage: "url('/assets/builtforbusiness.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className=" inset-0 bg-black/45" />
          </div>

          <div className="relative px-6 py-6 md:px-12 md:py-12 -mt-32 md:-mt-40 lg:-mt-48 z-10 max-w-xl">
            <h3 className="text-[20px] md:text-2xl font-semibold text-white">
              Built for Business. Built for Security
            </h3>
            <p className="mt-3 text-sm md:text-base text-white/80 max-w-lg">
              Heavy-duty chain link and security-grade barriers serving the
              Durham, North Carolina business community.
            </p>
          </div>
        </div>

        {/* Two feature cards */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-10 max-w-5xl mx-auto w-full">
          <div
            className="relative rounded-[20px] overflow-hidden shadow-lg flex-1 h-64 md:h-72 bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/poolsafety.png')" }}
          >
            <div className="absolute inset-0 bg-black/40" />

            <h3 className="absolute bottom-6 left-6 text-white text-xl md:text-2xl font-semibold">
              Pool Safety
            </h3>
          </div>

          <div
            className="relative rounded-[20px] overflow-hidden shadow-lg flex-1 h-64 md:h-72 bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/petenclosures.png')" }}
          >
            <div className="absolute inset-0 bg-black/40" />

            <h3 className="absolute bottom-6 left-6 text-white text-xl md:text-2xl font-semibold">
              Pet Enclosures
            </h3>
          </div>
        </div>

        {/* CTA card with people image */}
        <div className="mx-auto w-full max-w-5xl relative rounded-[28px] overflow-hidden shadow-lg bg-gradient-to-r from-[#f6b354] to-[#ef9a46]">
          <div className="relative z-10 px-6 py-8 md:py-12 lg:py-16 flex flex-col md:flex-row items-center gap-6 md:gap-12">
            <div className="md:flex-1 text-black max-w-lg text-left">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight">
                Ready to start your project?
              </h2>

              <div className="mt-6 flex gap-4">
                <button className="bg-black text-white px-4 py-2 rounded-md text-sm font-semibold">
                  View Our Work
                </button>
                <button className="bg-white text-black px-4 py-2 rounded-md text-sm font-medium">
                  Text Us for an Estimate
                </button>
              </div>
            </div>

            <div className="md:w-1/3 w-2/3">
              <img
                src="/assets/readytostart.png"
                alt="ready to start"
                className="w-full h-auto object-cover -mb-2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
