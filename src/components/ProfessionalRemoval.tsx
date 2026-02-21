import React from "react";

const ProfessionalRemoval: React.FC = () => {
  return (
    <section className="bg-[#F8F1D9] pt-24 relative pb-36 2xl:pb-[420px]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-26">
        {/* LEFT SIDE */}
        <div className="flex">
          <div className="absolute top-0  w-[550px] xl:w-[650px] 2xl:w-[900px] left-0 ">
            <img
              src="/assets/professionalremoversection.svg"
              alt="Fence"
              className=" w-full max-w-none  object-cover"
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <h1 className="text-[50px] xl:text-[60px] 2xl:text-[70px] text-black/80 font-bold mt-8 leading-tight">
            Professional Removal & Site Care.
          </h1>

          <p className="mt-6 text-gray-700 lg:text-[18px] xl:text-[20px] 2xl:text-[22px] max-w-lg">
            Replacing an old fence requires more than heavy lifting. From
            hauling away your weathered panels to protecting your lawn's root
            system during installation, we treat your property like our own.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-[#D79327] text-[14px] xl:text-[16px] 2xl:text-[16px] font-semibold text-black px-6 py-3 rounded-md">
              View Our Work
            </button>
            <button className="border text-[16px] font-semibold border-gray-700 text-black px-6 py-3 rounded-md">
              Text Us for an Estimate
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalRemoval;
