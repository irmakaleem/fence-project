import React from "react";

interface CardData {
  title: string;
  description: string;
}

const cardData: CardData[] = [
  {
    title: "Natural Wood Craftsmanship",
    description:
      "Timeless cedar and pressure-treated pine options for a classic, warm aesthetic.",
  },
  {
    title: "Modern Vinyl Solutions",
    description:
      "Low-maintenance, weather-resistant fencing that stays pristine for decades.",
  },
  {
    title: "Decorative & Security Aluminum",
    description:
      "Elegant silhouettes that offer high visibility without compromising on strength.",
  },
];

const SecondSection: React.FC = () => {
  return (
    <section
      className="bg-[#F8F1D9] py-16 px-6 lg:px-12 min-h-[140vh] bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: "url('/assets/texturebg.png')",
        backgroundPosition: "center 27%",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Cards Container */}
        <div className="flex flex-col lg:flex-row gap-9 justify-center items-stretch relative top-[-90px] left-1/2 transform -translate-x-1/2 w-full px-6 lg:px-12">
          {(() => {
            const images = [
              "/assets/card1.png",
              "/assets/card2.png",
              "/assets/card3.png",
            ];

            return cardData.map((card, index) => {
              const img = images[index] ?? images[0];
              return (
                <div
                  key={index}
                  className="w-full lg:w-[385px] h-[570px] rounded-[50px] p-[40px] shadow-lg flex flex-col justify-end hover:shadow-xl transition-shadow duration-300"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.36), rgba(0,0,0,0.36)), url(${img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    boxShadow: "6px 12px 11.6px 0px rgba(0, 0, 0, 0.23)",
                  }}
                >
                  {/* Title */}
                  <div className="mb-6">
                    <h3 className="text-white text-[25px] font-semibold leading-tight">
                      {card.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <div>
                    <p className="text-white text-[20px] leading-tight font-normal">
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            });
          })()}
        </div>
      </div>

      {/* comprehensive care card section */}

      <div className=" ">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left text block */}
            <div className="pt-6 lg:pt-12">
              <div className="inline-block bg-[#DFA249] text-white text-xs px-3 py-1 rounded-full font-medium">
                Beyond Installation
              </div>

              <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                Comprehensive
                <br />
                Care for Your
                <br />
                Perimeter.
              </h2>

              <p className="mt-6 max-w-xl text-gray-700">
                We provide end-to-end services that protect and prolong the life
                of your fencing — from site prep to removal and restoration.
              </p>

              <div className="mt-6 flex gap-4">
                <button className="bg-[#D88E2A] text-white px-4 py-2 rounded-md font-medium shadow-sm">
                  View Our Work
                </button>
                <button className="border border-gray-300 text-gray-800 px-4 py-2 rounded-md font-medium bg-white">
                  Text Us for an Estimate
                </button>
              </div>
            </div>

            {/* Right 2x2 card grid */}
            <div className="pt-6 lg:pt-0">
              <div className="grid grid-cols-2 gap-8">
                {/* Card 1 */}
                <div
                  className="rounded-[32px] border border-gray-400 
  bg-[#F4F1E9] 
  w-[300px] h-[380px] 
  p-8 
  flex flex-col"
                >
                  <img
                    src="/assets/SitePreparation.png"
                    alt="Site Preparation"
                    className="w-20 h-20 object-contain mb-8"
                  />

                  <h3 className="text-[20px] font-semibold text-gray-800 leading-tight">
                    Site Preparation
                  </h3>

                  <p className="mt-4 text-[15px] text-gray-600 leading-relaxed">
                    We protect your grass and soil during every phase.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="rounded-2xl border border-gray-300 p-5 bg-white shadow-sm h-full flex flex-col">
                  <div className="flex items-start gap-3">
                    <img
                      src="/assets/ConcreteReinforcement.png"
                      alt="Concrete Reinforcement"
                      onError={(e: any) =>
                        (e.currentTarget.src = "/assets/card2.png")
                      }
                      className="w-14 h-14 object-contain"
                    />
                    <div>
                      <h3 className="text-sm font-semibold text-gray-800">
                        Concrete Reinforcement
                      </h3>
                      <p className="mt-2 text-xs text-gray-600">
                        Stable, concrete-based foundations for every post.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="rounded-2xl border border-gray-300 p-5 bg-white shadow-sm h-full flex flex-col">
                  <div className="flex items-start gap-3">
                    <img
                      src="/assets/RestorationRepair.png"
                      alt="Restoration & Repair"
                      onError={(e: any) =>
                        (e.currentTarget.src = "/assets/card3.png")
                      }
                      className="w-14 h-14 object-contain"
                    />
                    <div>
                      <h3 className="text-sm font-semibold text-gray-800">
                        Restoration & Repair
                      </h3>
                      <p className="mt-2 text-xs text-gray-600">
                        Section replacement and gate adjustments to extend fence
                        life.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="rounded-2xl border border-gray-300 p-5 bg-white shadow-sm h-full flex flex-col">
                  <div className="flex items-start gap-3">
                    <img
                      src="/assets/HaulAwayService.png"
                      alt="Haul-Away Service"
                      onError={(e: any) =>
                        (e.currentTarget.src = "/assets/hero2.png")
                      }
                      className="w-14 h-14 object-contain"
                    />
                    <div>
                      <h3 className="text-sm font-semibold text-gray-800">
                        Haul-Away Service
                      </h3>
                      <p className="mt-2 text-xs text-gray-600">
                        We remove your old fence so you don't have to.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
