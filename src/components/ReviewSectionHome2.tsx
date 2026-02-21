import React from "react";

interface Review {
  name: string;
  title: string;
  text: string;
  image: string;
}

const ReviewSectionHome2: React.FC = () => {
  const reviews: Review[] = [
    {
      name: "Isabella Turner",
      title: "Project Manager",
      text: "The best service I’ve received in a long time! The team was incredibly responsive, and their expertise was evident in the final product. There was a small miscommunication initially, but they quickly resolved it. I would definitely work with them again.",
      image: "/assets/user profile-x1.png",
    },
    {
      name: "Henry Foster",
      title: "Business Manager",
      text: "The marketing campaign they created for us has exceeded our expectations. Highly professional team with excellent attention to detail.",
      image: "/assets/user profile-x1-2.png",
    },
    {
      name: "Michael Brown",
      title: "Property Owner",
      text: "The marketing campaign they created for us was outstanding, and we saw significant engagement. However, I wish they had provided more frequent updates during the process. Overall, great work and highly recommended!",

      image: "/assets/user profile-x1-3.png",
    },
  ];

  return (
    <section
      className=" relative bg-[#F8F1D9] py-24 xl:py-36 px-6 lg:px-12 
    "
    >
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
          <div className="rounded-[20px] p-6 flex flex-col justify-between h-[620px] xl:min-h-[500px] border border-gray-500 shadow-md">
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
            {/* google */}
            <div className="flex justify-items-start">
              <img
                className=" h-6 mb-4"
                src="/assets/flat-color-icons-google-x1.svg"
                alt="google"
              />
            </div>
            {/* Review Text */}
            <p className="text-gray-700 text-sm md:text-[20px] mb-6 flex-grow">
              {reviews[0].text}
            </p>

            {/* User Info */}
            <div className="flex-col items-start gap-5 flex">
              <div className="flex flex-col items-start gap-2">
                <p className="font-semibold text-gray-900 text-[20px]">
                  {reviews[0].name}
                </p>
                <p className="text-gray-600 text-[15px]">{reviews[0].title}</p>
              </div>
              <img
                src={reviews[0].image}
                alt={reviews[0].name}
                className="w-12 h-12 rounded-full object-cover "
              />
            </div>
          </div>

          {/* Center Featured Card */}
          <div className="relative h-[620px] xl:min-h-[500px] border border-gray-500 rounded-[20px] overflow-hidden shadow-gray-800 md:col-span-1">
            <img
              src="/assets/shot-of-a-young-businessman-working-on-a-computer-in-an-office 1-x1-1.png"
              alt="Featured Professional"
              className="w-full min-h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 " />
            <div className="absolute inset-0 p-6 flex flex-col justify-end text-white z-10">
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
              <div className="flex justify-between items-center">
                {/* User Info */}
                <div className="flex items-start gap-3 ">
                  <img
                    src={reviews[1].image}
                    alt={reviews[1].name}
                    className="w-12 h-12 rounded-full object-cover "
                  />
                  <div className="flex flex-col items-start ">
                    <p className="font-semibold text-white text-[20px]">
                      {reviews[1].name}
                    </p>
                    <p className="text-white text-[15px]">{reviews[0].title}</p>
                  </div>
                </div>
                {/* google */}
                <div className="flex justify-end">
                  <img
                    className=" h-6 mb-4"
                    src="/assets/flat-color-icons-google-x1.svg"
                    alt="google"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Review Card */}
          <div className=" rounded-[20px] border border-gray-500  p-6 flex flex-col justify-between h-[620px] xl:min-h-[500px]  shadow-md">
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
            {/* google */}
            <div className="flex justify-items-start">
              <img
                className=" h-6 mb-4"
                src="/assets/flat-color-icons-google-x1.svg"
                alt="google"
              />
            </div>
            {/* Review Text */}
            <p className="text-gray-700 text-sm md:text-[20px] mb-6 flex-grow">
              {reviews[2].text}
            </p>

            {/* User Info */}
            <div className="flex-col items-start gap-5 flex">
              <div className="flex flex-col items-start gap-2">
                <p className="font-semibold text-gray-900 text-[20px]">
                  {reviews[2].name}
                </p>
                <p className="text-gray-600 text-[15px]">{reviews[2].title}</p>
              </div>
              <img
                src={reviews[2].image}
                alt={reviews[2].name}
                className="w-12 h-12 rounded-full object-cover "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSectionHome2;
