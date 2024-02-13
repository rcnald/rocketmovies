import { Label } from './styles'

export function File({ placeholder, children, onChange, ...props }) {
  return (
    <Label htmlFor={props.id}>
      <span>{placeholder}</span>
      {children}
      <input type="file" {...props} onChange={onChange} />
    </Label>
  )
}

export function FileIcon({ icon: Icon }) {
  return <Icon />
}
