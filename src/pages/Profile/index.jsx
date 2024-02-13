import { useState } from 'react'
import {
  LuArrowBigLeft,
  LuCamera,
  LuLock,
  LuMail,
  LuUser,
} from 'react-icons/lu'
import avatarPlaceHolder from '../../assets/avatar_placeholder.svg'
import { Button, ButtonIcon } from '../../components/Button'
import { File, FileIcon } from '../../components/File'
import { Input, InputIcon } from '../../components/Input'
import { useAuth } from '../../hooks/useAuth'
import { api } from '../../services/api'
import { Container, Main } from './styles'

export function Profile() {
  const { user, updateProfile } = useAuth()
  const [userData, setUserData] = useState({
    name: user.name,
    email: user.email,
    password: '',
    current_password: '',
  })
  const [avatar, setAvatar] = useState(
    user.avatar
      ? `${api.defaults.baseURL}/files/${user.avatar}`
      : avatarPlaceHolder,
  )
  const [avatarFile, setAvatarFile] = useState(null)

  const handleChange = (e) => {
    const { id, value } = e.target
    setUserData((prev) => ({ ...prev, [id]: value }))
  }

  const handleClick = () => {
    updateProfile({ user: userData, avatarFile })
    setUserData((prev) => ({ ...prev, password: '', current_password: '' }))
  }

  const handleAvatarChange = (e) => {
    const [file] = e.target.files
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

  return (
    <Main>
      <Container>
        <Button isTransparent onClick={() => history.back()}>
          <ButtonIcon icon={LuArrowBigLeft} />
          Voltar
        </Button>
      </Container>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <img src={avatar} alt="foto" />
          <File id="avatar" onChange={handleAvatarChange}>
            <FileIcon icon={LuCamera} />
          </File>
        </div>
        <fieldset>
          <Input
            placeholder="Nome"
            id="name"
            type="text"
            value={userData.name}
            onChange={handleChange}
          >
            <InputIcon icon={LuLock} />
          </Input>
          <Input
            placeholder="Email"
            id="email"
            type="email"
            value={userData.email}
            onChange={handleChange}
          >
            <InputIcon icon={LuLock} />
          </Input>
        </fieldset>
        <fieldset>
          <Input
            placeholder="Senha Atual"
            id="current_password"
            type="password"
            value={userData.current_password}
            onChange={handleChange}
          >
            <InputIcon icon={LuUser} />
          </Input>
          <Input
            placeholder="Nova senha"
            id="password"
            type="password"
            value={userData.password}
            onChange={handleChange}
          >
            <InputIcon icon={LuMail} />
          </Input>
        </fieldset>
        <Button onClick={handleClick}>Salvar</Button>
      </form>
    </Main>
  )
}
