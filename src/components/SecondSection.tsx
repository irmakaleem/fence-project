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
        <div className="flex flex-col lg:flex-row gap-9 justify-center items-stretch absolute top-[136vh] left-1/2 transform -translate-x-1/2 w-full px-6 lg:px-12">
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
                  className="w-full lg:w-[390px] h-[575px] rounded-[50px] p-[40px] shadow-lg flex flex-col justify-end hover:shadow-xl transition-shadow duration-300"
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
    </section>
  );
};

export default SecondSection;
