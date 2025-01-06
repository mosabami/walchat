import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <ProductGrid />
      <Chatbot />
    </div>
  );
}

export default App;