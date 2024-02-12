import { useEffect, useState } from 'react'

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(key) ?? JSON.stringify(defaultValue)),
  )

  const removeValue = () => {
    localStorage.removeItem(key)
    setValue(defaultValue)
  }

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))

    return () => {
      localStorage.removeItem(key)
    }
  }, [value, key])

  return [value, setValue, removeValue]
}
