import { Rating } from '../Rating'
import { Tag } from '../Tag'
import { Article } from './styles'

export function Card({ title, description, rating, tags, onClick }) {
  return (
    <Article onClick={onClick}>
      <div>
        <h2>{title}</h2>
        <Rating rate={rating} />
        <p>{description}</p>
      </div>
      <ul>
        {tags.map((tag) => {
          return <Tag key={tag.id}>{tag.name}</Tag>
        })}
      </ul>
    </Article>
  )
}
