import react from "react";

const ReadyToStartHome2: React.FC = () => {
  return (
    <div className="w-full bg-[#F8F1D9] py-10 xl:py-24 px-4 md:px-10  ">
      <div className=" max-w-[80%] xl:max-w-[78%] 2xl:max-w-[68%] mx-auto relative z-[2] ">
        <div className="relative  rounded-[40px] bg-gradient-to-r from-[#3A2C1D] to-[#7B551F] px-8  md:px-16  flex flex-col md:flex-row items-center justify-between min-h-[400px] xl:min-h-[553px]  2xl:min-h-[653px] ">
          {/* Left Content */}
          <div className="max-w-lg text-left text-white/80">
            <h2 className="text-3xl md:text-4xl xl:text-[60px] 2xl:text-[70px] font-semibold leading-tight">
              Ready to <br />
              start your <br />
              project?
            </h2>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className=" text-white px-4 py-2 xl:px-6 xl:py-3 rounded-md text-[13px] xl:text-[18px] 2xl:text-[18px] font-semibold hover:bg-gray-800 transition bg-[#D79327]">
                View Our Work
              </button>

              <button className="border text-white border-white px-4 py-2 xl:px-6 xl:py-3  rounded-md text-[13px] xl:text-[18px] 2xl:text-[18px] font-medium hover:bg-black hover:text-white transition">
                Text Us for an Estimate
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="absolute top-[-28%] right-[-12%] lg:top-[-28%] lg:right-[-15%] lg:h-[800px] lg:w-[550px] xl:h-[800px] xl:w-[720px] 2xl:h-[923px] 2xl:w-[982px] ">
            <img
              src="/assets/grassman.png"
              alt="Ready to start"
              className="w-full  "
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ReadyToStartHome2;
