import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';

export default function TechEcommerceFooter() {
  return (
    <footer className="bg-[#642771] mt-8 text-white pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-white">
          
          {/* Logo + About */}
          <div>
            <h1 className="text-white text-2xl font-bold">CrypTech</h1>
            <p className="mt-3 text-sm">
              Your trusted source for the latest gadgets, smart devices, and more. Quality products at unbeatable prices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-white font-semibold mb-4">Shop</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Smartphones</a></li>
              <li><a href="#" className="hover:text-white">Laptops</a></li>
              <li><a href="#" className="hover:text-white">Accessories</a></li>
              <li><a href="#" className="hover:text-white">Gaming</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h2 className="text-white font-semibold mb-4">Support</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">FAQs</a></li>
              <li><a href="#" className="hover:text-white">Shipping Info</a></li>
              <li><a href="#" className="hover:text-white">Return Policy</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h2 className="text-white font-semibold mb-4">Join Our Newsletter</h2>
            <p className="text-sm mb-3">Get the latest tech updates & offers.</p>
             
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center py-6">
          <p className="text-sm text-white mb-4 sm:mb-0">
            © {new Date().getFullYear()} CrypTech. All rights reserved.
          </p>
          <div className="flex space-x-4 text-lg text-white">
            <a href="#" className="hover:text-white"><FaFacebookF /></a>
            <a href="#" className="hover:text-white"><FaTwitter /></a>
            <a href="#" className="hover:text-white"><FaInstagram /></a>
            <a href="#" className="hover:text-white"><FaYoutube /></a>
            <a href="#" className="hover:text-white"><FaLinkedin /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
