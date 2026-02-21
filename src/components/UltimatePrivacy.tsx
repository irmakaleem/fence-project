import React from "react";

const UltimatePrivacy = () => {
  const cards = [
    {
      id: 1,
      title: "Pressure–Treated Posts",
      description:
        "We use heavy-duty, ground-contact rated posts to prevent rot and ensure structural integrity for decades.",
      bg: "bg-[#D7922C]",
      size: "small",
    },
    {
      id: 2,
      title: "Galvanized Fasteners.",
      description:
        "No rust streaks. We use professional-grade galvanized nails and hardware to maintain the wood’s beauty.",
      bg: "bg-gradient-to-b from-[#3E2A15] to-[#7A5520]",
      size: "large",
    },
    {
      id: 3,
      title: "Custom Gates.",
      description:
        "Engineered with anti-sag technology. Our wood gates open as smoothly on year five as they do on day one.",
      bg: "bg-[#D7922C]",
      size: "small",
    },
  ];
  return (
    <section className=" w-full bg-[#F8F1D9] pb-24 relative">
      {/* Top Wooden Background */}
      <div
        className="w-full lg:h-[420px] xl:h-[520px]  flex justify-start items-start pt-24 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/assets/wooden.png')" }}
      >
        <div className="max-w-[80%] xl:max-w-[72%] 2xl:max-w-[68%] mx-auto w-full text-white/90">
          <h2 className="text-[40px] xl:text-[60px] font-semibold leading-tight">
            Ultimate <br /> Privacy
          </h2>
          <p className="mt-4 max-w-sm text-white/90 text-[18px]">
            Overlapping boards that eliminate gaps entirely. Perfect for keeping
            pets in and prying eyes out.
          </p>
        </div>
      </div>

      {/* Middle Content */}
      <div className="max-w-auto xl:max-w-[86%] 2xl:max-w-[76%] w-full mx-auto px-6 relative -mt-20">
        <div className="grid gap-12  grid-cols-12 items-center">
          {/* Image */}
          <div className="rounded-[105px] overflow-hidden shadow-lg h-[500px] 2xl:h-[700px]  col-span-7">
            <img
              src="/assets/ContemporaryLines.png"
              alt="Fence"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Text */}
          <div className="col-span-5">
            <h3 className="text-[60px] xl:text-[50px] max-w-2 mt-20 leading-tight w-full font-semibold text-black/90">
              Contemporary Lines
            </h3>
            <p className="mt-2 2xl:text-[23px] xl:text-[20px] text-black/90 max-w-md">
              Sleek, horizontal planks that provide a modern, high-end look for
              new-age residential architecture.
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="w-full flex justify-center mt-20 2xl:max-w-[76%] mx-auto">
          <div className="flex items-end gap-8">
            {cards.map((card, index) => {
              const isLarge = card.size === "large";

              return (
                <div
                  key={card.id}
                  className={`
            ${card.bg}
            text-white
            ${isLarge ? "w-[340px] h-[340px] 2xl:w-[450px] 2xl:h-[450px] p-10 rounded-[40px]" : "w-[280px] h-[300px] 2xl:w-[380px] 2xl:h-[400px] p-8 rounded-[32px]"}
            flex flex-col justify-start
          `}
                >
                  <h4
                    className={`${
                      isLarge
                        ? "text-[28px] 2xl:text-[40px]"
                        : "text-[26px] 2xl:text-[36px]"
                    } font-semibold leading-snug ${index === 0 ? "max-w-[250px]" : "max-w-[100px]"}`}
                  >
                    {card.title}
                  </h4>

                  <p
                    className={`${
                      isLarge
                        ? "mt-6 text-[22px] 2xl:text-[28px]"
                        : "mt-4 text-[20px] 2xl:text-[25px]"
                    } text-white/90 leading-relaxed`}
                  >
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimatePrivacy;
