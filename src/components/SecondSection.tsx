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
    <section className="bg-white py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Cards Container */}
        <div className="flex flex-col lg:flex-row gap-9 justify-center items-stretch">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="w-full lg:w-[412px] h-[609px] rounded-[50px] p-[33px] shadow-lg flex flex-col justify-end hover:shadow-xl transition-shadow duration-300"
              style={{
                backgroundColor: "rgb(255, 69, 69)",
                boxShadow: "6px 12px 11.6px 0px rgba(0, 0, 0, 0.23)",
              }}
            >
              {/* Title */}
              <div className="mb-6">
                <h3 className="text-white text-[35px] font-semibold leading-tight">
                  {card.title}
                </h3>
              </div>

              {/* Description */}
              <div>
                <p className="text-white text-[30px] leading-tight font-normal">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
