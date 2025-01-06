import React from 'react';
import { Search, ShoppingCart, Menu, MapPin, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-[#0071DC] text-white">
      <div className="container mx-auto px-4">
        {/* Top header */}
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center space-x-4">
            <Menu className="h-6 w-6" />
            <img src="/walmart-logo.png" alt="Walmart" className="h-12" />
          </div>
          
          <div className="flex-1 max-w-2xl mx-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search everything at Walmart online and in store"
                className="w-full py-2 px-4 rounded-full text-black"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-500" />
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <MapPin className="h-5 w-5" />
              <span className="ml-1">Select Store</span>
            </div>
            <div className="flex items-center">
              <User className="h-5 w-5" />
              <span className="ml-1">Sign In</span>
            </div>
            <div className="flex items-center">
              <ShoppingCart className="h-6 w-6" />
              <span className="ml-1">$0.00</span>
            </div>
          </div>
        </div>

        {/* Bottom header */}
        <nav className="py-2">
          <ul className="flex space-x-6">
            <li>Deals</li>
            <li>Grocery</li>
            <li>Electronics</li>
            <li>Home</li>
            <li>Fashion</li>
            <li>Auto</li>
            <li>Pharmacy</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}