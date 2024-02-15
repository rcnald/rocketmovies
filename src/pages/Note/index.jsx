import { useEffect, useState } from 'react'
import { LuArrowBigLeft, LuClock } from 'react-icons/lu'
import { useNavigate, useParams } from 'react-router-dom'
import avatarPlaceHolder from '../../assets/avatar_placeholder.svg'
import { Button, ButtonIcon } from '../../components/Button'
import { Header } from '../../components/Header'

import { Rating } from '../../components/Rating'
import { Tag } from '../../components/Tag'
import { useAuth } from '../../hooks/useAuth'
import { formatDate } from '../../lib/utils'
import { api } from '../../services/api'
import { Container, Section } from './styles'

export function Note() {
  const params = useParams()
  const navigate = useNavigate()
  const { user } = useAuth()
  const [note, setNote] = useState({
    title: '',
    description: '',
    rating: null,
    updated_at: null,
    tags: [],
  })
  useEffect(() => {
    const controller = new AbortController()

    const handleFetch = async () => {
      try {
        const { id } = params

        const { data } = await api.get(`/notes/${id}`, {
          signal: controller.signal,
        })
        setNote(data)
      } catch (error) {}
    }

    handleFetch()

    return () => {
      controller.abort()
    }
  }, [params])
  return (
    <>
      <Header />
      <Container>
        <Button onClick={() => navigate(history.back())} isTransparent>
          <ButtonIcon icon={LuArrowBigLeft} />
          Voltar
        </Button>
        <Section>
          <div>
            <h1>{note.title}</h1>
            <Rating rate={note.rating} />
          </div>
          <div>
            <span>
              <img
                src={
                  user.avatar
                    ? `${api.defaults.baseURL}/files/${user.avatar}`
                    : avatarPlaceHolder
                }
                alt="foto"
              />
              Por {user.name}
            </span>
            <span>
              <LuClock />
              {formatDate(note.updated_at)}
            </span>
          </div>
          <ul>
            {note.tags.map((tag) => {
              return <Tag key={tag.id}>{tag.name}</Tag>
            })}
          </ul>
          <p>{note.description}</p>
        </Section>
      </Container>
    </>
  )
}
