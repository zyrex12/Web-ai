import OpenAI from 'openai'

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! })

export async function getOpenAIResponse(messages: any[], personality: string) {
  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages,
  })
  return response.choices[0].message.content
}
