import { NextResponse } from 'next/server'
import { getOpenAIResponse } from '../../../lib/openai'

export async function POST(req: Request) {
  const { messages, personality } = await req.json()
  const reply = await getOpenAIResponse(messages, personality)
  return NextResponse.json({ reply })
}
