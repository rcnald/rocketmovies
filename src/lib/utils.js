export const getFilledStars = (count) => {
  return Array.from({ length: 5 }, (_, i) => !(i + 1 > count))
}
