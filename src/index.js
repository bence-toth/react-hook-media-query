import {useState, useEffect} from 'react'

const useMediaQuery = query => {
  const [match, setMatch] = useState(false)

  useEffect(() => {
    const updateMatch = event => setMatch(event.matches)

    const matcher = window.matchMedia(query)

    const modern = 'addEventListener' in matcher;
    if (modern) {
      matcher.addEventListener("change", updateMatch)
    } else {
      matcher.addListener(updateMatch);
    }
    
    updateMatch(matcher)

    return () => {
      if (modern) {
        matcher.removeEventListener("change", updateMatch)
      } else {
        matcher.removeListener(updateMatch)
      }
    }
  }, [query])

  return match
}

export default useMediaQuery
