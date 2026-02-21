import react from "react";

const HeroHomeTwo: React.FC = () => {
  return (
    <section className="bg-[#F8F1D9] pt-52 xl:pt-80  2xl:pt-[450px] relative overflow-visible xl:mb-[-360px] 2xl:mb-0 2xl:min-h-[1250px] ">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12  overflow-visible pt-[100px]">
        {/* LEFT SIDE */}
        <div className="mb-[200px] xl:mb-[500px] 2xl:mb-0 ">
          <span className=" bg-[#D79327] text-black px-8 py-2 font-semibold rounded-full text-[16px]">
            Natural Aesthetics & Privacy
          </span>

          <h1 className="lg:text-[50px] xl:text-[60px] 2xl:text-[65px] text-black/80 font-bold mt-8 leading-tight">
            The Timeless Appeal of Custom Woodwork.
          </h1>

          <p className="mt-6 text-gray-700 lg:text-[17px] text-[20px] max-w-lg">
            There is no substitute for the warmth and versatility of real wood.
            Our wood fencing solutions are custom-built on-site, ensuring a
            perfect fit for the unique contours of your land while providing the
            ultimate sanctuary for your family.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-[#D79327] text-[14px] xl:text-[16px] 2xl:text-[16px] font-semibold text-black  px-6 py-3 rounded-md">
              View Our Work
            </button>
            <button className="border text-[14px] xl:text-[16px] 2xl:text-[16px] font-semibold border-gray-700 text-black px-6 py-3 rounded-md">
              Text Us for an Estimate
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="absolute z-10 top-[23%] xl:top-[20%] 2xl:top-[26%] right-0 w-[500px] h-[1050px] xl:w-[720px] xl:h-[914px] 2xl:w-[914px] 2xl:h-[1024px] flex justify-end">
          <img
            src="/assets/heroHome2.svg"
            alt="Fence"
            className="w-full h-full  "
          />
        </div>
      </div>
    </section>
  );
};

export default HeroHomeTwo;
