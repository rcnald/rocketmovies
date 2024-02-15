import { Navigate, Route, Routes } from 'react-router-dom'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { Sign, SignIn, SignUp } from '../pages/Sign'

export function AuthRoutes() {
  const [data] = useLocalStorage('@rocketmovies:data', {})
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Sign>
            <SignIn />
          </Sign>
        }
      />
      <Route
        path="/register"
        element={
          <Sign>
            <SignUp />
          </Sign>
        }
      />
      {data.user ? <Route path="*" element={<Navigate to="/" />} /> : null}
    </Routes>
  )
}
