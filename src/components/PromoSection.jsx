import React from "react";
import '../App.css'
import phones from "../assets/phones.jpg";
import electronics from "../assets/electronics.jpg";
import furniture from "../assets/furniture.jpg";

export default function PromoSection() {
  return (
    <section className="container mx-auto px-8 py-12">
      <div className="grid md:grid-cols-2 gap-6">
        
        {/* Phones Sale (big left) */}
        <div
          className="h-[780px] bg-cover bg-center flex items-end p-8"
          style={{ backgroundImage: `url(${phones})` }}
        >
          <div className="bg-trans p-4 rounded">
            <h2 className="text-2xl font-bold">Phones Sale</h2>
            <p className="text-gray-600">
              Up to <span className="font-bold text-lg">30%</span> sale for all phones!
            </p>
            <button className="mt-4 bg-black text-white px-6 py-2 rounded shadow">
              Shop Now
            </button>
          </div>
        </div>

        {/* Right side (2 stacked) */}
        <div className="flex flex-col gap-6">
          
          {/* Electronics Sale */}
          <div
            className="h-[370px] bg-cover bg-center flex items-end p-8"
            style={{ backgroundImage: `url(${electronics})` }}
          >
            <div className="bg-trans p-4 rounded">
              <h2 className="text-xl font-bold">Electronics Sale</h2>
              <p className="text-gray-600">
                Up to <span className="font-bold text-lg">70%</span> sale for all electronics!
              </p>
              <button className="mt-3 bg-black text-white px-4 py-2 rounded shadow">
                Shop Now
              </button>
            </div>
          </div>

          {/* Furniture Offer */}
          <div
            className="h-[370px] bg-cover bg-center flex items-end p-8"
            style={{backgroundImage: `url(${furniture})`  }}
          >
            <div className="bg-trans p-4 rounded">
              <h2 className="text-xl font-bold">Furniture Offer</h2>
              <p className="text-gray-600">
                Up to <span className="font-bold text-lg">50%</span> sale for all furniture items!
              </p>
              <button className="mt-3 bg-black text-white px-4 py-2 rounded shadow">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
