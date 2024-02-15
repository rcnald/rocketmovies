import { Navigate, Route, Routes } from 'react-router-dom'

import { Add } from '../pages/Add'
import { Home } from '../pages/Home'
import { Note } from '../pages/Note'
import { Profile } from '../pages/Profile'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/profile" element={<Profile />} />
      <Route path="/note/:id" element={<Note />} />
      <Route path="/add" element={<Add />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
