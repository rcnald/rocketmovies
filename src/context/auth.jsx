import { createContext, useEffect } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage.jsx'
import { api } from '../services/api'

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
  const [data, setData, removeData] = useLocalStorage('@rocketmovies:data', {})

  async function signIn({ email, password }) {
    try {
      const response = await api.post('./session', { email, password })

      const { user, token } = response.data

      setData({ user, token })
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
    api.defaults.headers.authorization = `Bearer ${data?.token}`
  }, [data])

  return (
    <AuthContext.Provider value={{ signIn, signOut, user: data?.user }}>
      {children}
    </AuthContext.Provider>
  )
}
