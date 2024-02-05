import { Button } from '../../components/Button'
import { Input, InputIcon } from '../../components/Input'
import { Container, Form, Image } from './styles'

import { LuLock, LuMail } from 'react-icons/lu'

export function Sign() {
  return (
    <Container>
      <Form action="">
        <span>
          <h1>RocketMovies</h1>
          <span>Aplicação para acompanhar tudo que assistir.</span>
        </span>

        <h2>Faça seu login</h2>

        <div>
          <Input placeholder="E-mail" id="email" type="email">
            <InputIcon icon={LuMail} />
          </Input>
          <Input placeholder="Senha" id="senha" type="password">
            <InputIcon icon={LuLock} />
          </Input>
          <div>
            <Button>Entrar</Button>
            <Button isTransparent>Criar conta</Button>
          </div>
        </div>
      </Form>
      <Image />
    </Container>
  )
}
