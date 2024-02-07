import { LuPlus } from 'react-icons/lu'
import { Button, ButtonIcon } from '../Button'
import { Card } from '../Card'
import { Container, Movies as MoviesStyle } from './styles'

export function Movies() {
  return (
    <MoviesStyle>
      <Container>
        <div>
          <h1>Meus filmes</h1>
          <Button>
            <ButtonIcon icon={LuPlus} />
            Adicionar filme
          </Button>
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
