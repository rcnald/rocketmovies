import { Button as ButtonStyle } from './styles'

export function Button({ children, isTransparent, onClick }) {
  return (
    <ButtonStyle onClick={onClick} $isTransparent={isTransparent}>
      {children}
    </ButtonStyle>
  )
}

export function ButtonIcon({ icon: Icon }) {
  return <Icon />
}
