import { Input } from '../Input'
import { User } from '../User'
import { Container, Header as HeaderStyle } from './styles'

export function Header({ onChange }) {
  return (
    <HeaderStyle>
      <Container>
        <span>RocketMovies</span>
        <Input
          placeholder="Pesquisar pelo título"
          id="search"
          type="text"
          onChange={onChange}
        />
        <User />
      </Container>
    </HeaderStyle>
  )
}
