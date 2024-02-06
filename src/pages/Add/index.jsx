import { Button, ButtonIcon } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Marker, MarkerIcon } from '../../components/Marker'
import { Textarea } from '../../components/Textarea'

import { LuArrowBigLeft, LuPlus, LuX } from 'react-icons/lu'

export function Add() {
  return (
    <>
      <Header />
      <Button style={'width:fit-content;'} isTransparent>
        <ButtonIcon icon={LuArrowBigLeft} />
        Voltar
      </Button>
      <section>
        <h1>Novo filme</h1>
        <div>
          <Input placeholder="Titulo" id="title" type="text" />
          <Input placeholder="Sua Nota (de 0 a 5)" id="rating" type="number" />
          <Textarea placeholder="Observações" id="obs" />
        </div>
        <Marker>
          React
          <MarkerIcon icon={LuX} />
        </Marker>
        <Marker isTransparent>
          Novo marcador
          <MarkerIcon icon={LuPlus} />
        </Marker>
        <Button isTransparent>Excluir filme</Button>
        <Button>Salvar alterações</Button>
      </section>
    </>
  )
}

export const composeProviders = (providers) => {
  return ({ children }) =>
    providers.reduceRight(
      (child, [Provider, props = {}]) => (
        <Provider {...props}>{child} </Provider>
      ),
      children,
    )
}
