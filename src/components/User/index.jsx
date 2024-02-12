import { useAuth } from '../../hooks/useAuth'
import { User as UserStyle } from './styles'

export function User() {
  const { signOut } = useAuth()
  return (
    <UserStyle>
      <div>
        <span>Ronaldo Junior</span>
        <button onClick={signOut}>sair</button>
      </div>
      <button>
        <img src="https://github.com/rcnald.png" alt="foto" />
      </button>
    </UserStyle>
  )
}
