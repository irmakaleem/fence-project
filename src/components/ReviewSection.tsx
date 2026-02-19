import React from "react";

interface Review {
  name: string;
  title: string;
  text: string;
  image: string;
}

const ReviewSection: React.FC = () => {
  const reviews: Review[] = [
    {
      name: "Isabella Turner",
      title: "Project Manager",
      text: "The best service I’ve received in a long time! The team was incredibly responsive, and their expertise was evident in the final product. There was a small miscommunication initially, but they quickly resolved it. I would definitely work with them again.",
      image: "/assets/user profile-x1.png",
    },
    {
      name: "Sarah Johnson",
      title: "Business Manager",
      text: "The marketing campaign they created for us has exceeded our expectations. Highly professional team with excellent attention to detail.",
      image: "/assets/user profile-x1-2.png",
    },
    {
      name: "Michael Brown",
      title: "Property Owner",
      text: "Outstanding service from start to finish. They completed the project ahead of schedule and the quality is exceptional. Highly recommend!",
      image: "/assets/user profile-x1-3.png",
    },
  ];

  return (
    <section className="bg-[#EFE4CE] py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our Happy Customers Say
          </h2>

          {/* Rating */}
          <div className="flex items-center justify-center gap-4">
            <img
              src="/assets/rating-x1.svg"
              alt="5 star rating"
              className="h-6 md:h-7"
            />
            <span className="text-gray-700 text-sm md:text-base font-medium">
              5.0 rating of 20 reviews
            </span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center">
          {/* Left Review Card */}
          <div className="bg-white rounded-[20px] p-6 flex flex-col justify-between h-full shadow-md">
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>

            {/* Review Text */}
            <p className="text-gray-700 text-sm md:text-base mb-6 flex-grow">
              {reviews[0].text}
            </p>

            {/* User Info */}
            <div className="flex items-center gap-3">
              <img
                src={reviews[0].image}
                alt={reviews[0].name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-gray-900 text-sm">
                  {reviews[0].name}
                </p>
                <p className="text-gray-600 text-xs">{reviews[0].title}</p>
              </div>
            </div>
          </div>

          {/* Center Featured Card */}
          <div className="relative rounded-[20px] overflow-hidden h-80 md:h-96 shadow-lg md:col-span-1">
            <img
              src="/assets/shot-of-a-young-businessman-working-on-a-computer-in-an-office 1-x1-1.png"
              alt="Featured Professional"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          {/* Right Review Card */}
          <div className="bg-white rounded-[20px] p-6 flex flex-col justify-between h-full shadow-md">
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>

            {/* Review Text */}
            <p className="text-gray-700 text-sm md:text-base mb-6 flex-grow">
              {reviews[2].text}
            </p>

            {/* User Info */}
            <div className="flex items-center gap-3">
              <img
                src={reviews[2].image}
                alt={reviews[2].name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-gray-900 text-sm">
                  {reviews[2].name}
                </p>
                <p className="text-gray-600 text-xs">{reviews[2].title}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
