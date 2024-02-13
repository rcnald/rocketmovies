import { Label } from './styles'

export function Textarea({ placeholder, onChange, id, children }) {
  return (
    <Label htmlFor={id}>
      <span>{placeholder}</span>
      {children}
      <textarea id={id} placeholder={placeholder} onChange={onChange} />
    </Label>
  )
}

export function TextareaIcon({ icon: Icon }) {
  return <Icon />
}
