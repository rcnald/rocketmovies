import { Route, Routes } from 'react-router-dom'

import { Sign, SignIn, SignUp } from '../pages/Sign'

export function AuthRoutes() {
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
    </Routes>
  )
}
