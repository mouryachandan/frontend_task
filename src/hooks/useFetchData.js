import { useEffect, useState } from 'react'

export function useFetchData(endpoint) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false

    async function fetchData() {
      setLoading(true)
      setError(null)

      try {
        const response = await fetch('/data.json')

        if (!response.ok) {
          throw new Error('Failed to load content. Please try again later.')
        }

        const json = await response.json()

        if (!cancelled) {
          setData(json[endpoint] ?? json)
          setLoading(false)
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message || 'Something went wrong.')
          setLoading(false)
        }
      }
    }

    fetchData()

    return () => {
      cancelled = true
    }
  }, [endpoint])

  return { data, loading, error }
}
