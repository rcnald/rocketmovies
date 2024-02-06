import { Label } from './styles'

export function Input({ placeholder, id, children, ...props }) {
  return (
    <Label htmlFor={id}>
      <span>{placeholder}</span>
      {children}
      <input {...props} id={id} placeholder={placeholder} />
    </Label>
  )
}

export function InputIcon({ icon: Icon }) {
  return <Icon />
}
