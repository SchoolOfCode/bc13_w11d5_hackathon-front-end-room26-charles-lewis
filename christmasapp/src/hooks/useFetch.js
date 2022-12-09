import {useState, useEffect} from 'react'
const url = 'localhost:3001'

export function useFetch() {
    const [people, setPeople] = useState()

    useEffect(() => {
        async function getResults() {
    
          const response = await fetch(`http://${url}/api`, {
            headers: { Accept: 'application/json' },
          })
          const data = await response.json()
    
          setPeople(data)
        }
      getResults()    
      }, [])

      return [people]
}