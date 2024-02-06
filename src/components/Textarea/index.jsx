import { Label } from './styles'

export function Textarea({ placeholder, id, children }) {
  return (
    <Label htmlFor={id}>
      <span>{placeholder}</span>
      {children}
      <textarea id={id} placeholder={placeholder} />
    </Label>
  )
}

export function TextareaIcon({ icon: Icon }) {
  return <Icon />
}
