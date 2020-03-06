import {useState, useEffect} from 'react'

const useMediaQuery = query => {
  const [match, setMatch] = useState(false)

  useEffect(() => {
    const updateMatch = event => setMatch(event.matches)

    const matcher = window.matchMedia(query)
      .addEventListener("change", updateMatch)
    
    updateMatch(matcher)

    return () => {
      matcher.removeEventListener("change", updateMatch)
    }
  }, [query])

  return match
}

export default useMediaQuery
