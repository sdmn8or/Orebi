import React from "react";
import { FaTruck, FaUndo } from "react-icons/fa";
import '../App.css'

export default function Features() {
  return (
    <section className="w-full border-t border-gray-200">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-8 py-6 space-y-4 md:space-y-0">
        
        {/* Warranty */}
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold">2</span>
          <p className="text-gray-600">Two years warranty</p>
        </div>

        {/* Free Shipping */}
        <div className="flex items-center space-x-2">
          <FaTruck className="text-lg" />
          <p className="text-gray-600">Free shipping</p>
        </div>

        {/* Return Policy */}
        <div className="flex items-center space-x-2">
          <FaUndo className="text-lg" />
          <p className="text-gray-600">Return policy in 30 days</p>
        </div>
      </div>
    </section>
  );
}
