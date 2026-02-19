import React from "react";

const ThirdSection: React.FC = () => {
  return (
    <section className="bg-[#2b1711] text-white py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Top hero card */}
        <div
          className="rounded-[20px] overflow-hidden relative mx-auto w-full max-w-5xl h-[260px] md:h-[360px] lg:h-[420px]"
          style={{
            backgroundImage: "url('/assets/builtforbusiness.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/45" />

          <div className="absolute left-6 top-6 md:left-12 md:top-12 max-w-xl">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-stretch max-w-5xl mx-auto">
          <div
            className="rounded-[20px] overflow-hidden relative h-56 md:h-64 shadow-lg"
            style={{
              backgroundImage: "url('/assets/poolsafety.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/35" />
            <div className="absolute left-4 bottom-4 text-white font-semibold text-lg md:text-xl">
              Pool Safety
            </div>
          </div>

          <div
            className="rounded-[20px] overflow-hidden relative h-56 md:h-64 shadow-lg"
            style={{
              backgroundImage: "url('/assets/petenclosures.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/35" />
            <div className="absolute left-4 bottom-4 text-white font-semibold text-lg md:text-xl">
              Pet Enclosures
            </div>
          </div>
        </div>

        {/* CTA card with people image */}
        <div
          className="mx-auto w-full max-w-5xl relative rounded-[28px] overflow-hidden shadow-lg"
          style={{ minHeight: "220px" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#f6b354] to-[#ef9a46]" />

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
