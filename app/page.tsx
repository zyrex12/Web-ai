'use client'

import ChatBox from '../components/ChatBox'
import PersonalitySelector from '../components/PersonalitySelector'
import { useState } from 'react'

export default function Home() {
  const [personality, setPersonality] = useState('friendly')
  return (
    <main className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">AI Chatbot</h1>
      <PersonalitySelector onChange={setPersonality} />
      <ChatBox personality={personality} />
    </main>
  )
}
