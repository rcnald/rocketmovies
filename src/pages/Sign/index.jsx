import { useState } from 'react'
import { LuArrowBigLeft, LuLock, LuMail, LuUser } from 'react-icons/lu'
import { Link, useNavigate } from 'react-router-dom'
import { Button, ButtonIcon } from '../../components/Button'
import { Input, InputIcon } from '../../components/Input'
import { api } from '../../services/api'
import { Container, Form, Image } from './styles'

export function Sign({ children }) {
  return (
    <Container>
      <Form onSubmit={(e) => e.preventDefault()}>
        <span>
          <h1>RocketMovies</h1>
          <span>Aplicação para acompanhar tudo que assistir.</span>
        </span>
        {children}
      </Form>
      <Image />
    </Container>
  )
}

export function SignIn() {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    const { type, value } = e.target
    setUserData((prev) => ({ ...prev, [type]: value }))
  }

  const handleClick = () => {
    if (!userData.email || !userData.password) {
      return alert('campos não podem estar vazios!')
    }
  }

  return (
    <>
      <h2>Faça seu login</h2>

      <div>
        <Input
          placeholder="E-mail"
          id="email"
          type="email"
          value={userData.email}
          onChange={handleChange}
        >
          <InputIcon icon={LuMail} />
        </Input>
        <Input
          placeholder="Senha"
          id="senha"
          type="password"
          value={userData.password}
          onChange={handleChange}
        >
          <InputIcon icon={LuLock} />
        </Input>
        <div>
          <Button onClick={handleClick}>Entrar</Button>
          <Link to={'/register'}>
            <Button isTransparent>Criar conta</Button>
          </Link>
        </div>
      </div>
    </>
  )
}

export function SignUp() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setUserData((prev) => ({ ...prev, [name]: value }))
  }

  const handleClick = () => {
    if (!userData.email || !userData.email || !userData.password) {
      return alert('campos não podem estar vazios!')
    }

    api
      .post('/users', {
        name: userData.name,
        email: userData.email,
        password: userData.password,
      })
      .then(() => {
        alert('deu certo mane')
        navigate('/')
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert('não foi possivel cadastrar')
        }
      })
  }
  return (
    <>
      <h2>Crie sua conta</h2>

      <div>
        <Input
          placeholder="Nome"
          id="nome"
          type="text"
          name="name"
          value={userData.name}
          onChange={handleChange}
        >
          <InputIcon icon={LuUser} />
        </Input>
        <Input
          placeholder="E-mail"
          id="email"
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
        >
          <InputIcon icon={LuMail} />
        </Input>
        <Input
          placeholder="Senha"
          id="senha"
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
        >
          <InputIcon icon={LuLock} />
        </Input>
        <div>
          <Button onClick={handleClick}>Cadastrar</Button>
          <Link to={'/'}>
            <Button isTransparent>
              <ButtonIcon icon={LuArrowBigLeft} />
              Voltar para o login
            </Button>
          </Link>
        </div>
      </div>
    </>
  )
}
