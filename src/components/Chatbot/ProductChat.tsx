import React, { useState } from 'react';
import { Send } from 'lucide-react';
import ChatMessage from './ChatMessage';

type ProductChatProps = {
  productName: string;
};

export default function ProductChat({ productName }: ProductChatProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ content: string; isUser: boolean }>>([]);
  const [input, setInput] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { content: input, isUser: true }]);

    // Simulate bot response
    setTimeout(() => {
      let response = '';
      
      if (messages.length === 0) {
        response = `Thank you for asking about ${productName}. How can I help you with this product?`;
      } else if (input.toLowerCase().includes('rating') || input.toLowerCase().includes('review')) {
        response = 'This product has 600 reviews with 72 reviews from the last month';
      } else {
        response = 'I apologize, but I don\'t have that specific information. Is there anything else you\'d like to know about the ratings or reviews?';
      }

      setMessages(prev => [...prev, {
        content: response,
        isUser: false
      }]);
    }, 500);

    setInput('');
  };

  return (
    <div className="mt-2">
      {isOpen ? (
        <div className="border rounded-lg">
          <div className="h-32 overflow-y-auto p-2 bg-gray-50">
            {messages.map((msg, index) => (
              <ChatMessage key={index} {...msg} />
            ))}
          </div>
          <form onSubmit={handleSend} className="border-t p-2">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about this product..."
                className="w-full px-3 py-1 pr-8 text-sm border rounded-full focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#0071DC]"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="w-full mt-2 border border-[#0071DC] text-[#0071DC] py-2 rounded-full text-sm"
        >
          Ask about product
        </button>
      )}
    </div>
  );
}