import { useState } from 'react'

export default function PersonalitySelector({ onChange }: { onChange: (v: string) => void }) {
  const [custom, setCustom] = useState('')

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustom(e.target.value)
    onChange(e.target.value)
  }

  return (
    <div className="mb-4">
      <select
        onChange={(e) => {
          const value = e.target.value
          onChange(value)
          if (value !== 'custom') setCustom('')
        }}
        className="p-2 border rounded w-full mb-2"
      >
        <option value="friendly">Friendly</option>
        <option value="professional">Professional</option>
        <option value="sarcastic">Sarcastic</option>
        <option value="custom">Custom...</option>
      </select>

      {custom === 'custom' ? (
        <input
          type="text"
          placeholder="Describe custom personality"
          value={custom}
          onChange={handleCustomChange}
          className="p-2 border rounded w-full"
        />
      ) : null}
    </div>
  )
}
