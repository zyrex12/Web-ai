export default function PersonalitySelector({ onChange }: { onChange: (v: string) => void }) {
  return (
    <select onChange={(e) => onChange(e.target.value)} className="mb-4 p-2 border rounded">
      <option value="friendly">Friendly</option>
      <option value="professional">Professional</option>
      <option value="sarcastic">Sarcastic</option>
    </select>
  )
}
