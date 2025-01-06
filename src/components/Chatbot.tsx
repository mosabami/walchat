import React, { useState } from 'react';
import { MessageCircle, X, ShoppingCart } from 'lucide-react';
import ChatMessage from './Chatbot/ChatMessage';
import ProductCard from './Chatbot/ProductCard';
import QuantitySelector from './Chatbot/QuantitySelector';
import ChatInput from './Chatbot/ChatInput';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { content: "Hi! How can I help you today?", isUser: false }
  ]);
  const [showProduct, setShowProduct] = useState(false);

  const handleQuantitySelect = (quantity: number) => {
    setMessages(prev => [...prev, { content: quantity.toString(), isUser: true }]);
    
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { content: "Item added to your list! What else are you searching for today?", isUser: false }
      ]);
      
      setTimeout(() => {
        setMessages(prev => [
          ...prev,
          { content: "Type '/' followed by the item name you are searching for to get started", isUser: false }
        ]);
      }, 500);
    }, 500);
  };

  const handleSend = (message: string) => {
    setMessages(prev => [...prev, { content: message, isUser: true }]);
    
    // Handle numeric input
    const numericInput = parseInt(message);
    if (!isNaN(numericInput) && numericInput >= 1 && numericInput <= 3) {
      handleQuantitySelect(numericInput);
      return;
    }

    // Handle chicken search
    if (message.toLowerCase().includes('chicken')) {
      setTimeout(() => {
        setMessages(prev => [...prev, {
          content: 'Here\'s our Best seller and Popular pick for "rotisserie chicken":',
          isUser: false
        }]);
        setShowProduct(true);
      }, 500);
    }
  };

  const renderMessages = () => {
    const elements = [];
    let productShown = false;

    for (let i = 0; i < messages.length; i++) {
      const msg = messages[i];
      
      // Show product card after the chicken search response
      if (!productShown && 
          showProduct && 
          msg.content.includes('rotisserie chicken')) {
        elements.push(
          <React.Fragment key={`product-${i}`}>
            <ChatMessage {...msg} />
            <ProductCard
              name="Freshness Guaranteed Traditional Rotisserie, Whole, 36 oz, 19g of Protein per 3oz serving (Hot)"
              price={5.97}
              rating={3.97}
              image="https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&q=80&w=300&h=300"
            />
            <ChatMessage
              content="How many do you want to add to your list?"
              isUser={false}
            />
            <QuantitySelector onSelect={handleQuantitySelect} />
          </React.Fragment>
        );
        productShown = true;
      } else {
        elements.push(<ChatMessage key={i} {...msg} />);
      }
    }

    return elements;
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-xl w-96 h-[600px] flex flex-col">
          <div className="bg-[#0071DC] text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button className="bg-[#FFC220] text-black px-4 py-2 rounded-full font-medium">
                Checkout
              </button>
              <button className="text-white px-4 py-2 rounded-full font-medium">
                Chat
              </button>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <ShoppingCart className="h-5 w-5" />
                <span className="ml-1">$0.00</span>
              </div>
              <button onClick={() => setIsOpen(false)}>
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {renderMessages()}
          </div>

          <ChatInput onSend={handleSend} />
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#0071DC] text-white p-3 rounded-full shadow-lg hover:bg-blue-700"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}