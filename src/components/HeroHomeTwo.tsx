import react from "react";

const HeroHomeTwo: React.FC = () => {
  return (
    <section className="bg-[#E7DFC9] pt-96">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12">
        {/* LEFT SIDE */}
        <div>
          <span className="bg-[#D79327] text-black px-8 py-2 font-semibold rounded-full text-[16px]">
            Natural Aesthetics & Privacy
          </span>

          <h1 className="text-[60px] text-black/80 font-bold mt-8 leading-tight">
            The Timeless Appeal of Custom Woodwork.
          </h1>

          <p className="mt-6 text-gray-700 text-[20px] max-w-lg">
            There is no substitute for the warmth and versatility of real wood.
            Our wood fencing solutions are custom-built on-site, ensuring a
            perfect fit for the unique contours of your land while providing the
            ultimate sanctuary for your family.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-[#D79327] text-[16px] font-semibold text-black px-6 py-3 rounded-md">
              View Our Work
            </button>
            <button className="border text-[16px] font-semibold border-gray-700 text-black px-6 py-3 rounded-md">
              Text Us for an Estimate
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative">
          <img
            src="/assets/heroHome2.svg"
            alt="Fence"
            className="w-[1024px] h-full object-cover relative z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroHomeTwo;
