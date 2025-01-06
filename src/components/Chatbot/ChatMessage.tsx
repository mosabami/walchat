import React from 'react';

type ChatMessageProps = {
  content: string;
  isUser?: boolean;
};

export default function ChatMessage({ content, isUser = false }: ChatMessageProps) {
  return (
    <div className={`mb-3 ${isUser ? 'ml-auto' : 'mr-auto'}`}>
      <div className={`rounded-lg p-3 max-w-[80%] ${
        isUser ? 'bg-blue-100 ml-auto' : 'bg-gray-100'
      }`}>
        {content}
      </div>
    </div>
  );
}