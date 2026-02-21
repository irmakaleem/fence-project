import React from "react";

const HeroHomeTwo: React.FC = () => {
  return (
    <section className="bg-[#F8F1D9] relative">
      <div className="max-w-7xl mx-auto px-6 pt-96 pb-40 2xl:pb-50 2xl:pt-[500px]">
        <div className="grid lg:grid-cols-2 items-center gap-12">
          {/* LEFT SIDE */}
          <div className="max-w-xl">
            <span className="inline-block bg-[#D79327] text-black px-6 py-2 font-semibold rounded-full text-sm lg:text-base">
              Natural Aesthetics & Privacy
            </span>

            <h1 className="mt-6 text-4xl lg:text-5xl xl:text-6xl font-bold text-black/80 leading-tight">
              The Timeless Appeal of Custom Woodwork.
            </h1>

            <p className="mt-6 text-gray-700 text-base lg:text-lg">
              There is no substitute for the warmth and versatility of real
              wood. Our wood fencing solutions are custom-built on-site,
              ensuring a perfect fit for the unique contours of your land while
              providing the ultimate sanctuary for your family.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="bg-[#D79327] text-black font-semibold px-6 py-3 rounded-md text-sm lg:text-base">
                View Our Work
              </button>

              <button className="border border-gray-700 text-black font-semibold px-6 py-3 rounded-md text-sm lg:text-base">
                Text Us for an Estimate
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          {/* RIGHT SIDE */}
          <div className="absolute top-[68%] 2xl:top-[68%] right-0 lg:right-[-20%] xl:right-[-10%] 2xl:right-0 -translate-y-1/2 z-10 ">
            <div className="w-[720px] xl:w-[770px] 2xl:w-[850px] h-[1200px] xl:h-[1300px] 2xl:h-[1400px]">
              <img
                src="/assets/heroHome2.svg"
                alt="Fence"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHomeTwo;
