import { Marker as MarkerStyle } from './styles'

export function Marker({ children, isTransparent }) {
  return <MarkerStyle $isTransparent={isTransparent}>{children}</MarkerStyle>
}

export function MarkerIcon({ icon: Icon }) {
  return <Icon />
}
