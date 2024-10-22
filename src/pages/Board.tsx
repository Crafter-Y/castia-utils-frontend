import React, { useEffect } from 'react'
import { useLocalStorage } from '@uidotdev/usehooks'
import { useNavigate } from 'react-router-dom'

export default function Board() {
  const navigate = useNavigate()
  const [token] = useLocalStorage('token', null)

  useEffect(() => {
    if (token == null) {
      navigate('/login', { replace: true })
    }
  }, [token, navigate])

  return <div>Board</div>
}
