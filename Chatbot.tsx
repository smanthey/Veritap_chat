'use client'

import { useState } from 'react'
import { useChat } from 'ai/react'

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat',
  })

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
      >
        Chat with us
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md flex flex-col h-[80vh]">
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="text-xl font-bold">Veritap Assistant</h2>
              <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700">
                Close
              </button>
            </div>
            <div className="flex-1 overflow-auto p-4 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`${message.role === 'user' ? 'text-right' : 'text-left'}`}>
                  <span className={`inline-block p-2 rounded-lg ${message.role === 'user' ? 'bg-blue-100' : 'bg-gray-100'}`}>
                    {typeof message.content === 'string' ? message.content : JSON.stringify(message.content)}
                  </span>
                </div>
              ))}
            </div>
            <form onSubmit={handleSubmit} className="border-t p-4 flex">
              <input
                value={input}
                onChange={handleInputChange}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 transition-colors">
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}