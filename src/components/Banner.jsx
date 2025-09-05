import React from "react";
import bgImage from "../assets/banner-headphone.png"; 
import '../App.css'

export default function Banner() {
  return (
    <section
      className="w-full h-[500px] md:h-[600px] bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container mx-auto h-full flex items-center px-8">
        {/* Left Content */}
        <div className="max-w-lg space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Final Offer
          </h2>
          <p className="text-lg text-gray-700">
            Up to <span className="text-3xl font-bold text-black">50%</span> sale for all furniture items!
          </p>
          <button className="px-6 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}

