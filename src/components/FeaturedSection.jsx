import React from "react";
import bgImage from "../assets/clock.png"; // Replace with your local image

function FeaturedSection() {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-6">
        <div
          className="relative w-full h-[370px] rounded-lg bg-cover bg-center flex items-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          {/* Text + Button */}
          <div className="absolute right-10 max-w-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Phone of the year
            </h2>
            <p className="text-gray-600 mb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry orem Ipsum.
            </p>
            <button className="bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedSection;
