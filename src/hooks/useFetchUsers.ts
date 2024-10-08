import { useState, useEffect } from 'react'
import { fetchUsers } from '../api/userApi'

export const useFetchUsers = () => {
  const [data, setData] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const users = await fetchUsers()
        setData(users)
        setLoading(false)
      } catch (err) {
        setError(`Error fetching user data: ${err}`)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { data, loading, error }
}
