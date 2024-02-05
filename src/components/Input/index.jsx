import { Label } from './styles'

export function Input({ placeholder, id, type, children }) {
  return (
    <Label htmlFor={id}>
      <span>{placeholder}</span>
      {children}
      <input type={type} id={id} placeholder={placeholder} />
    </Label>
  )
}

export function InputIcon({ icon: Icon }) {
  return <Icon />
}
