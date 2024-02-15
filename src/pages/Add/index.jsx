import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, ButtonIcon } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Marker, MarkerIcon } from '../../components/Marker'
import { Textarea } from '../../components/Textarea'
import { api } from '../../services/api'
import { Container } from './styles'

import { LuArrowBigLeft, LuPlus, LuX } from 'react-icons/lu'

export function Add() {
  const [noteData, setNoteData] = useState({
    title: '',
    description: '',
    rating: '',
    tags: [],
  })
  const [newTag, setNewTag] = useState('')
  const navigate = useNavigate()

  const handleMarkerClick = () => {
    if (newTag) {
      setNoteData((prev) => ({
        ...prev,
        tags: [...prev.tags, newTag],
      }))
      setNewTag('')
    }
  }

  const handleRemoveTag = (index) => {
    setNoteData((prev) => ({
      ...prev,
      tags: prev.tags.filter((_, prevIndex) => prevIndex !== index),
    }))
  }

  const handleChange = (e) => {
    const { id, value } = e.target
    setNoteData((prev) => ({ ...prev, [id]: value }))
  }

  const handleClick = async () => {
    try {
      if (!noteData.title || !noteData.description || !noteData.tags[0]) {
        return alert('titulo , descrição ou marcadores vazios!')
      }
      await api.post('/notes', noteData)
      alert('nota criada com sucesso!')
      setNoteData({})
      navigate('/')
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <>
      <Header />
      <Container>
        <Button onClick={() => navigate(history.back())} isTransparent>
          <ButtonIcon icon={LuArrowBigLeft} />
          Voltar
        </Button>
        <section>
          <h1>Novo filme</h1>
          <div>
            <Input
              placeholder="Titulo"
              id="title"
              type="text"
              value={noteData.title}
              onChange={handleChange}
            />
            <Input
              placeholder="Sua Nota (de 0 a 5)"
              id="rating"
              type="number"
              value={noteData.rating}
              onChange={handleChange}
            />
            <Textarea
              placeholder="Observações"
              id="description"
              value={noteData.description}
              onChange={handleChange}
            />
          </div>
          <h2>Marcadores</h2>
          <div>
            {noteData.tags.map((tag, i) => (
              <Marker key={i}>
                {tag}
                <MarkerIcon icon={LuX} onClick={() => handleRemoveTag(i)} />
              </Marker>
            ))}
            <Marker
              isTransparent
              placeholder="Novo Marcador"
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
            >
              <MarkerIcon icon={LuPlus} onClick={handleMarkerClick} />
            </Marker>
          </div>
          <div>
            <Button isTransparent>Excluir filme</Button>
            <Button onClick={handleClick}>Salvar alterações</Button>
          </div>
        </section>
      </Container>
    </>
  )
}
