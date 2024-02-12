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
