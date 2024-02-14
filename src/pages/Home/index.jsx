import { useState } from 'react'
import { Header } from '../../components/Header'
import { Movies } from '../../components/Movies'

export function Home() {
  const [search, setSearch] = useState('')
  return (
    <>
      <Header onChange={(e) => setSearch(e.target.value)} />
      <Movies search={search} />
    </>
  )
}
