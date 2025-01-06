import React from 'react';

type QuantitySelectorProps = {
  onSelect: (quantity: number) => void;
};

export default function QuantitySelector({ onSelect }: QuantitySelectorProps) {
  return (
    <div className="flex gap-2 mb-4">
      {[1, 2, 3].map((num) => (
        <button
          key={num}
          onClick={() => onSelect(num)}
          className="w-10 h-10 rounded-full border-2 border-[#0071DC] text-[#0071DC] flex items-center justify-center"
        >
          {num}
        </button>
      ))}
    </div>
  );
}