import { Marker as MarkerStyle } from './styles'

export function Marker({
  placeholder,
  children,
  onChange,
  isTransparent,
  ...props
}) {
  return (
    <MarkerStyle htmlFor={props.id} $isTransparent={isTransparent}>
      <span>{placeholder}</span>
      <input {...props} placeholder={placeholder} onChange={onChange} />
      {children}
    </MarkerStyle>
  )
}

export function MarkerIcon({ icon: Icon, onClick }) {
  return <Icon onClick={onClick} />
}
