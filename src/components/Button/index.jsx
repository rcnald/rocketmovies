import { Button as ButtonStyle } from './styles'

export function Button({ children, isTransparent }) {
  return <ButtonStyle $isTransparent={isTransparent}>{children}</ButtonStyle>
}

export function ButtonIcon({ icon: Icon }) {
  return <Icon />
}
