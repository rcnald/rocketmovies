import { createContext, useEffect } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage.jsx'
import { api } from '../services/api'

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
  const [data, setData, removeData] = useLocalStorage('@rocketmovies:data', {})

  async function signIn({ email, password }) {
    try {
      const response = await api.post('/session', { email, password })

      const {
        user: { password: _, ...restUser },
        token,
      } = response.data

      setData({ user: restUser, token })
    } catch (error) {
      alert(
        error.response
          ? `${error.response.data.message}`
          : `não foi possível  entrar`,
      )
    }
  }

  async function updateProfile({ user, avatarFile }) {
    try {
      if (avatarFile) {
        const fileForm = new FormData()
        fileForm.append('avatar', avatarFile)

        const response = await api.patch('/users/avatar', fileForm)
        user.avatar = response.data.avatar
        console.log(user.avatar)
      }

      const response = await api.put('/users', user)

      alert(response.data.message)

      const { name, email, avatar } = user

      setData((prev) => ({
        ...prev,
        user: {
          ...prev.user,
          name,
          email,
          avatar,
        },
      }))
    } catch (error) {
      alert(
        error.response
          ? `${error.response.data.message}`
          : `não foi possível  entrar`,
      )
    }
  }

  function signOut() {
    removeData()
  }

  useEffect(() => {
    api.defaults.headers.common.Authorization = `Bearer ${data?.token}`
  }, [data])

  return (
    <AuthContext.Provider
      value={{ signIn, signOut, updateProfile, user: data?.user }}
    >
      {children}
    </AuthContext.Provider>
  )
}
