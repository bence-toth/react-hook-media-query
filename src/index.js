import {useState, useEffect} from 'react'

const useMediaQuery = query => {
  const [match, setMatch] = useState(false)

  useEffect(() => {
    const updateMatch = () => setMatch(window.matchMedia(query).matches)

    updateMatch()
    window.matchMedia(query).addEventListener("change", updateMatch)
    return () => {
      window.matchMedia(query).removeEventListener("change", updateMatch)
    }
  }, [])

  return match
}

export default useMediaQuery
