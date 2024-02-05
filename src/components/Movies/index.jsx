import { LuPlus } from 'react-icons/lu'
import { Button, ButtonIcon } from '../Button'
import { Card } from '../Card'
import { Movies as MoviesStyle } from './styles'

export function Movies() {
  return (
    <MoviesStyle>
      <div>
        <h1>Meus filmes</h1>
        <Button>
          <ButtonIcon icon={LuPlus} />
          Adicionar filme
        </Button>
      </div>
      <div>
        <Card />
      </div>
    </MoviesStyle>
  )
}
