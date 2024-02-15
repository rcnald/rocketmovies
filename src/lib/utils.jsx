import { format } from 'date-fns'

export const getFilledStars = (count) => {
  return Array.from({ length: 5 }, (_, i) => !(i + 1 > count))
}

export const mountProviders = (providers) => {
  return ({ children }) =>
    providers.reduceRight((accumulatorProviders, currentProvider) => {
      const [Provider, props = {}] = currentProvider
      return <Provider {...props}>{accumulatorProviders}</Provider>
    }, children)
}

export const formatDate = (rawDate = null) => {
  const date = new Date(rawDate)
  return format(date, "dd/MM/yy 'às' HH:mm")
}
