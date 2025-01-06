import React from 'react';

export default function Hero() {
  return (
    <div className="relative h-[400px] bg-cover bg-center" 
         style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=2000&h=600")' }}>
      <div className="absolute inset-0 bg-black bg-opacity-30">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Spring Savings</h1>
            <p className="text-2xl mb-6">Up to 50% off on seasonal items</p>
            <button className="bg-[#0071DC] text-white px-8 py-3 rounded-full hover:bg-blue-700">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}