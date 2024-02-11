import { Label } from './styles'

export function Input({ placeholder, children, onChange, ...props }) {
  return (
    <Label htmlFor={props.id}>
      <span>{placeholder}</span>
      {children}
      <input {...props} placeholder={placeholder} onChange={onChange} />
    </Label>
  )
}

export function InputIcon({ icon: Icon }) {
  return <Icon />
}
