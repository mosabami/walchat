import React from 'react';

const products = [
  {
    id: 1,
    name: "4K Smart TV",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&q=80&w=300&h=300"
  },
  {
    id: 2,
    name: "Wireless Headphones",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=300&h=300"
  },
  {
    id: 3,
    name: "Coffee Maker",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&q=80&w=300&h=300"
  },
  {
    id: 4,
    name: "Running Shoes",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=300&h=300"
  }
];

export default function ProductGrid() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
              <p className="text-[#2A8703] font-bold">${product.price}</p>
              <button className="mt-3 w-full bg-[#0071DC] text-white py-2 rounded hover:bg-blue-700">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}