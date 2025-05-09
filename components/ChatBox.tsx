'use client'
import { useState } from 'react'

export default function ChatBox({ personality }: { personality: string }) {
  const [messages, setMessages] = useState([{ role: 'system', content: `You are a ${personality} assistant.` }])
  const [input, setInput] = useState('')

  const sendMessage = async () => {
    const newMessages = [...messages, { role: 'user', content: input }]
    setMessages(newMessages)
    setInput('')
    const res = await fetch('/api/chat', {
      method: 'POST',
      body: JSON.stringify({ messages: newMessages, personality }),
    })
    const data = await res.json()
    setMessages([...newMessages, { role: 'assistant', content: data.reply }])
  }

  return (
    <div>
      <div className="space-y-2">
        {messages.map((msg, i) => (
          <div key={i} className={`p-2 rounded ${msg.role === 'assistant' ? 'bg-blue-100' : 'bg-green-100'}`}>
            <strong>{msg.role}</strong>: {msg.content}
          </div>
        ))}
      </div>
      <div className="mt-4 flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border p-2 flex-1 rounded"
          placeholder="Say something..."
        />
        <button onClick={sendMessage} className="bg-blue-500 text-white px-4 rounded">
          Send
        </button>
      </div>
    </div>
  )
}
