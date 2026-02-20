import React from "react";

const ProfessionalRemoval: React.FC = () => {
  return (
    <section className="bg-[#F8F1D9] py-24 ">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-26">
        {/* LEFT SIDE */}
        <div className="relative left-[-318px]">
          <img
            src="/assets/professionalremoversection.svg"
            alt="Fence"
            className="w-[900px] max-w-none  object-cover"
          />
        </div>

        {/* RIGHT SIDE */}
        <div>
          <h1 className="text-[60px] text-black/80 font-bold mt-8 leading-tight">
            Professional Removal & Site Care.
          </h1>

          <p className="mt-6 text-gray-700 text-[20px] max-w-lg">
            Replacing an old fence requires more than heavy lifting. From
            hauling away your weathered panels to protecting your lawn's root
            system during installation, we treat your property like our own.
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
      </div>
    </section>
  );
};

export default ProfessionalRemoval;
