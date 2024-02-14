import { useEffect, useState } from 'react'
import { LuPlus } from 'react-icons/lu'
import { Link } from 'react-router-dom'
import { api } from '../../services/api'
import { Button, ButtonIcon } from '../Button'
import { Card } from '../Card'
import { Container, Movies as MoviesStyle } from './styles'

export function Movies({ search }) {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    const controller = new AbortController()

    const handleFetch = async () => {
      try {
        const { data } = await api.get(`/notes?title=${search}`, {
          signal: controller.signal,
        })
        setNotes(data)
      } catch (error) {
        // alert(error)
      }
    }

    handleFetch()

    return () => {
      controller.abort()
    }
  }, [search])

  return (
    <MoviesStyle>
      <Container>
        <div>
          <h1>Meus filmes</h1>
          <Link to="/add">
            <Button>
              <ButtonIcon icon={LuPlus} />
              Adicionar filme
            </Button>
          </Link>
        </div>

        <div>
          {notes.map((note) => {
            return (
              <Card
                title={note.title}
                description={note.description}
                rating={note.rating}
                tags={note.tags}
                key={note.id}
              />
            )
          })}
        </div>
      </Container>
    </MoviesStyle>
  )
}
