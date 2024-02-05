import { Input } from '../Input'
import { User } from '../User'
import { Header as HeaderStyle } from './styles'

export function Header() {
  return (
    <HeaderStyle>
      <span>RocketMovies</span>
      <Input placeholder="Pesquisar pelo título" id="search" type="text" />
      <User />
    </HeaderStyle>
  )
}
