const CTASectionMobile: React.FC = () => {
  return (
    <section className="px-4 mt-16">
      <div className="rounded-[30px] bg-gradient-to-b from-[#f3a73f] to-[#e67e3d] px-6 pt-12 pb-0 flex flex-col items-center text-center overflow-hidden">
        {/* Heading */}
        <h2 className="text-[50px] font-semibold text-black leading-tight">
          Ready to <br />
          start your <br />
          project?
        </h2>

        {/* Buttons */}
        <div className="mt-6 flex gap-4 w-full max-w-xs">
          <button className="bg-gradient-to-r from-[#3A2C1D] to-[#7B551F] text-white py-3 rounded-md text-[12px] px-3 font-semibold">
            View Our Work
          </button>

          <button className="border border-black py-3 px-3 rounded-md text-[12px] text-black font-medium">
            Text Us for an Estimate
          </button>
        </div>

        {/* Image */}
        <div className="mt-8">
          <img
            src="/assets/readytostart.png"
            alt="Ready to start"
            className="w-full max-w-[280px] mx-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default CTASectionMobile;
