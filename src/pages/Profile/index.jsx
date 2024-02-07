import {
  LuArrowBigLeft,
  LuCamera,
  LuLock,
  LuMail,
  LuUser,
} from 'react-icons/lu'
import { Button, ButtonIcon } from '../../components/Button'
import { Input, InputIcon } from '../../components/Input'
import { Container, Main } from './styles'

export function Profile() {
  return (
    <Main>
      <Container>
        <Button isTransparent>
          <ButtonIcon icon={LuArrowBigLeft} />
          Voltar
        </Button>
      </Container>
      <form action="">
        <div>
          <img src="https://github.com/rcnald.png" alt="foto" />
          <Button>
            <ButtonIcon icon={LuCamera} />
          </Button>
        </div>
        <fieldset>
          <Input
            placeholder="Nome"
            id="name"
            type="text"
            value="Ronaldo Junior"
          >
            <InputIcon icon={LuLock} />
          </Input>
          <Input
            placeholder="Email"
            id="email"
            type="email"
            value="ronaldomjunior05@gmail.com"
          >
            <InputIcon icon={LuLock} />
          </Input>
        </fieldset>
        <fieldset>
          <Input
            placeholder="Senha Atual"
            id="current_password"
            type="password"
          >
            <InputIcon icon={LuUser} />
          </Input>
          <Input placeholder="Nova senha" id="password" type="password">
            <InputIcon icon={LuMail} />
          </Input>
        </fieldset>
        <Button>Salvar</Button>
      </form>
    </Main>
  )
}
