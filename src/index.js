import {useState, useEffect} from 'react'

const useMediaQuery = query => {
  const [match, setMatch] = useState(false)

  useEffect(() => {
    const updateMatch = () =>
      setMatch(window.matchMedia(query).matches)

    updateMatch()
    const matcher = window.matchMedia(query)
      .addEventListener("change", updateMatch)
    return () => {
      matcher.removeEventListener("change", updateMatch)
    }
  }, [query])

  return match
}

export default useMediaQuery
