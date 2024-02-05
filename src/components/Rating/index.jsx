import { FaRegStar, FaStar } from 'react-icons/fa'
import { getFilledStars } from '../../lib/utils'
import { Rating as RatingStyle } from './styles'

export function Rating({ rate }) {
  const filledStars = getFilledStars(rate)
  return (
    <RatingStyle>
      {filledStars.map((isFilled, i) =>
        isFilled ? <FaStar key={i} /> : <FaRegStar key={i} />,
      )}
    </RatingStyle>
  )
}
