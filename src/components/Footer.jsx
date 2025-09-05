import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-50">
      <div className="container mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-5 gap-8 text-sm text-gray-500">
        {/* Menu */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-4">MENU</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-black">Home</a></li>
            <li><a href="#" className="hover:text-black">Shop</a></li>
            <li><a href="#" className="hover:text-black">About</a></li>
            <li><a href="#" className="hover:text-black">Contact</a></li>
            <li><a href="#" className="hover:text-black">Journal</a></li>
          </ul>
          <div className="flex space-x-4 mt-6 text-gray-600">
            <a href="#"><FaFacebookF className="hover:text-black" /></a>
            <a href="#"><FaLinkedinIn className="hover:text-black" /></a>
            <a href="#"><FaInstagram className="hover:text-black" /></a>
          </div>
        </div>

        {/* Shop */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-4">SHOP</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-black">Category 1</a></li>
            <li><a href="#" className="hover:text-black">Category 2</a></li>
            <li><a href="#" className="hover:text-black">Category 3</a></li>
            <li><a href="#" className="hover:text-black">Category 4</a></li>
            <li><a href="#" className="hover:text-black">Category 5</a></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-4">HELP</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-black">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-black">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-black">Special E-shop</a></li>
            <li><a href="#" className="hover:text-black">Shipping</a></li>
            <li><a href="#" className="hover:text-black">Secure Payments</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-4">Contact</h4>
          <p className="mb-2">(052) 611-5711</p>
          <p className="mb-2 font-medium text-gray-700">company@domain.com</p>
          <p>575 Crescent Ave. <br /> Quakertown, PA 18951</p>
        </div>

        {/* Logo & Copy */}
        <div className="flex flex-col justify-between">
          <h2 className="text-2xl font-bold text-gray-800">OREBI</h2>
          <p className="text-xs mt-8 md:mt-0 text-gray-500">
            2020 OREBI Minimal eCommerce Template by Adveits
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
