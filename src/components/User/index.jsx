import { useNavigate } from 'react-router-dom'
import avatarPlaceHolder from '../../assets/avatar_placeholder.svg'
import { useAuth } from '../../hooks/useAuth'
import { api } from '../../services/api'
import { User as UserStyle } from './styles'

export function User() {
  const navigate = useNavigate()
  const { signOut, user } = useAuth()

  async function handleClick() {
    await signOut()
    navigate('/')
  }
  return (
    <UserStyle to="/profile">
      <div>
        <span>{user.name}</span>
        <button onClick={handleClick}>sair</button>
      </div>
      <button>
        <img
          src={
            user.avatar
              ? `${api.defaults.baseURL}/files/${user.avatar}`
              : avatarPlaceHolder
          }
          alt={user.name}
        />
      </button>
    </UserStyle>
  )
}
