import React from 'react';
import { Heart, ZoomIn } from 'lucide-react';

type ProductCardProps = {
  name: string;
  price: number;
  rating: number;
  image: string;
};

export default function ProductCard({ name, price, rating, image }: ProductCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden bg-white mb-4">
      <div className="relative">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        <button className="absolute top-2 right-2 p-1 rounded-full bg-white">
          <Heart className="h-5 w-5" />
        </button>
        <button className="absolute bottom-2 right-2 p-1 rounded-full bg-white">
          <ZoomIn className="h-5 w-5" />
        </button>
      </div>
      <div className="p-3">
        <h3 className="font-medium text-sm mb-1">{name}</h3>
        <div className="flex items-center justify-between mb-2">
          <span className="text-[#2A8703] font-bold">${price}</span>
          <div className="flex items-center">
            <span className="text-sm">{rating}</span>
            <span className="text-yellow-400 ml-1">★</span>
          </div>
        </div>
        <button className="w-full bg-[#0071DC] text-white py-2 rounded-full text-sm">
          Add to list
        </button>
        <button className="w-full mt-2 border border-[#0071DC] text-[#0071DC] py-2 rounded-full text-sm">
          Ask about item
        </button>
      </div>
    </div>
  );
}