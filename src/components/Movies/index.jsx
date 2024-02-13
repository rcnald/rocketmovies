import { LuPlus } from 'react-icons/lu'
import { Link } from 'react-router-dom'
import { Button, ButtonIcon } from '../Button'
import { Card } from '../Card'
import { Container, Movies as MoviesStyle } from './styles'

export function Movies() {
  return (
    <MoviesStyle>
      <Container>
        <div>
          <h1>Meus filmes</h1>
          <Link to="/add">
            <Button>
              <ButtonIcon icon={LuPlus} />
              Adicionar filme
            </Button>
          </Link>
        </div>
        <div>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </Container>
    </MoviesStyle>
  )
}
